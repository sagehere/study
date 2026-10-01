#!/usr/bin/env python3
import argparse, json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RENDERERS = set(json.loads((ROOT/'references'/'renderer-registry.json').read_text())['renderers'])
ALLOWED_EFFECTS = {'emit','markObjective','markMisconception','resolveMisconception','scheduleReview','assignVariant','clearVariant','setFlag'}
EXEC_KEYS = {'script','code','expression','function'}
EXEC_RE = re.compile(r'\b(?:eval|new Function|javascript:)\b', re.I)
TEMPLATE_RE = re.compile(r'\{\{\s*([^}]+?)\s*\}\}')
FLOW_RE = re.compile(r'^[a-z0-9]+(?:[._-][a-z0-9]+)*$')
SEMVER_RE = re.compile(r'^\d+\.\d+\.\d+$')
OBJ_RE = re.compile(r'^O-[A-Z0-9-]+$')
MIS_RE = re.compile(r'^M-[A-Z0-9-]+$')

class Validator:
    def __init__(self): self.errors=[]
    def err(self, path, msg): self.errors.append(f'{path}: {msg}')
    def scan_exec(self, v, path='$'):
        if isinstance(v,str) and EXEC_RE.search(v): self.err(path,'executable text forbidden')
        elif isinstance(v,list):
            for i,x in enumerate(v): self.scan_exec(x,f'{path}[{i}]')
        elif isinstance(v,dict):
            for k,x in v.items():
                if k in EXEC_KEYS: self.err(path,f'executable key forbidden {k}')
                self.scan_exec(x,f'{path}.{k}')
    def validate(self,pkg,name='package'):
        self.errors=[]
        if not isinstance(pkg,dict): self.err(name,'must be object'); return self.errors
        required=['packageVersion','schemaVersion','flowId','flowVersion','courseId','unitId','nodeId','initialStep','steps']
        for k in required:
            if k not in pkg: self.err(name,f'missing required {k}')
        if pkg.get('packageVersion')!='0.1.0': self.err(name,'packageVersion must be 0.1.0')
        if pkg.get('schemaVersion')!='0.2': self.err(name,f'unsupported schemaVersion {pkg.get("schemaVersion")}')
        if pkg.get('flowId') and not FLOW_RE.match(pkg['flowId']): self.err(name,'invalid flowId')
        if pkg.get('flowVersion') and not SEMVER_RE.match(pkg['flowVersion']): self.err(name,'invalid flowVersion')
        if pkg.get('unitId') and pkg.get('nodeId') and pkg.get('flowId') != f'{pkg["unitId"]}.{pkg["nodeId"]}.v2': self.err(name,'flowId must equal unitId.nodeId.v2')
        objectives=set((pkg.get('objectives') or {}).values()); misconceptions=set((pkg.get('misconceptions') or {}).values())
        for x in objectives:
            if not OBJ_RE.match(x): self.err(name,f'invalid objective ID {x}')
        for x in misconceptions:
            if not MIS_RE.match(x): self.err(name,f'invalid misconception ID {x}')
        steps=pkg.get('steps') or {}
        if not isinstance(steps,dict) or not steps: self.err(name,'steps must be non-empty object'); return self.errors
        if pkg.get('initialStep') not in steps: self.err(name,'initialStep missing in steps')
        seen=set()
        def walk(sid):
            if sid in seen or sid not in steps: return
            seen.add(sid)
            for tr in steps[sid].get('transitions',[]):
                if isinstance(tr,dict) and tr.get('to'): walk(tr['to'])
        walk(pkg.get('initialStep'))
        for sid,step in steps.items():
            p=f'{name}.{sid}'
            if sid not in seen: self.err(p,'unreachable step')
            if sid!='complete' and not step.get('transitions'): self.err(p,'non-terminal dead end')
            if step.get('objectiveId') not in objectives: self.err(p,f'unknown objective {step.get("objectiveId")}')
            hints=step.get('hints')
            if hints is not None and (not isinstance(hints,list) or len(hints)!=5 or any(not isinstance(x,str) for x in hints)): self.err(p,'hints must contain exactly 5 strings (H0-H4)')
            view=step.get('view')
            if not isinstance(view,dict): self.err(p,'view must be object'); continue
            if not isinstance(view.get('title'),str): self.err(p,'view.title required')
            if ('prompt' in view) == ('promptTemplate' in view): self.err(p,'view must contain exactly one of prompt or promptTemplate')
            choices=view.get('choices',[])
            vals=[]
            if not isinstance(choices,list): self.err(p,'choices must be array'); choices=[]
            for i,c in enumerate(choices):
                if not isinstance(c,list) or len(c)!=2 or not all(isinstance(x,str) for x in c): self.err(f'{p}.choices[{i}]','choice must be [value,label] strings')
                else: vals.append(c[0])
            if len(vals)!=len(set(vals)): self.err(p,'duplicate choice value')
            if 'renderer' in view and view['renderer'] not in RENDERERS: self.err(p,f'renderer not registered {view["renderer"]}')
            for v in view.get('visuals',[]) or []:
                if not isinstance(v,dict) or v.get('renderer') not in RENDERERS: self.err(p,f'visual renderer not registered {v.get("renderer") if isinstance(v,dict) else v}')
            variants=step.get('variants',[]) or []
            vfields=set(); vids=set()
            for v in variants:
                if not isinstance(v,dict) or 'id' not in v or 'answer' not in v: self.err(p,'variant requires id and answer'); continue
                if v['id'] in vids: self.err(p,f'duplicate variant {v["id"]}')
                vids.add(v['id']); vfields.update(v.keys())
            for tm in TEMPLATE_RE.finditer(json.dumps(view,ensure_ascii=False)):
                expr=tm.group(1).strip()
                if not (re.match(r'^variant\.[A-Za-z0-9_.-]+$',expr) or re.match(r'^course\.[A-Za-z0-9_.-]+$',expr)):
                    self.err(p,f'forbidden template expression {{{{{expr}}}}}')
                elif expr.startswith('variant.') and expr.split('.',1)[1].split('.')[0] not in vfields:
                    self.err(p,f'unknown variant field {expr.split(".",1)[1].split(".")[0]}')
                elif expr.startswith('course.'):
                    field=expr.split('.',1)[1].split('.')[0]
                    if field not in (pkg.get('meta') or {}): self.err(p,f'unknown course meta field {field}')
            for tr in step.get('transitions',[]) or []:
                if not isinstance(tr,dict): self.err(p,'transition must be object'); continue
                when=tr.get('when'); target=tr.get('to')
                if target not in steps: self.err(p,f'unknown target {target}')
                if when not in {'*','variantAnswer'} and when not in set(vals): self.err(p,f"transition '{when}' not in choices")
                if when=='variantAnswer' and not variants: self.err(p,'variantAnswer without variants')
                for fx in tr.get('effects',[]) or []:
                    if not isinstance(fx,dict): self.err(p,'effect must be object'); continue
                    typ=fx.get('type')
                    if typ not in ALLOWED_EFFECTS: self.err(p,f'unsupported effect {typ}')
                    if fx.get('id') and fx['id'] not in misconceptions: self.err(p,f'unknown misconception {fx["id"]}')
                    if fx.get('objectiveId') and fx['objectiveId'] not in objectives: self.err(p,f'unknown effect objective {fx["objectiveId"]}')
                    if typ=='emit' and not fx.get('event'): self.err(p,'emit missing event')
                    if typ=='markObjective' and not fx.get('stage'): self.err(p,'markObjective missing stage')
                    if typ=='setFlag' and not fx.get('key'): self.err(p,'setFlag missing key')
        self.scan_exec(pkg,name)
        if pkg.get('meta',{}).get('authoringStatus')=='ready':
            blob=json.dumps(pkg,ensure_ascii=False)
            if 'TODO' in blob: self.err(name,'ready package still contains TODO placeholders')
        return self.errors

def validate_files(paths):
    all_errors=[]; unit_obj={}; unit_mis={}; flows=set()
    for path in paths:
        p=Path(path)
        try: pkg=json.loads(p.read_text())
        except Exception as e: all_errors.append(f'{p}: invalid JSON: {e}'); continue
        errs=Validator().validate(pkg,p.name); all_errors.extend(errs)
        fid=pkg.get('flowId')
        if fid in flows: all_errors.append(f'{p.name}: duplicate flowId {fid}')
        flows.add(fid)
        unit_key=f"{pkg.get('courseId')}:{pkg.get('unitId')}"
        for oid in (pkg.get('objectives') or {}).values():
            if oid in unit_obj and unit_obj[oid]!=unit_key: all_errors.append(f'{p.name}: objective ID reused across units {oid}')
            unit_obj[oid]=unit_key
        for mid in (pkg.get('misconceptions') or {}).values():
            if mid in unit_mis and unit_mis[mid]!=unit_key: all_errors.append(f'{p.name}: misconception ID reused across units {mid}')
            unit_mis[mid]=unit_key
    return all_errors

def main():
    ap=argparse.ArgumentParser(); ap.add_argument('paths',nargs='+'); args=ap.parse_args()
    paths=[]
    for raw in args.paths:
        p=Path(raw)
        paths.extend(sorted(p.glob('*.json')) if p.is_dir() else [p])
    errs=validate_files(paths)
    if errs:
        print(f'COURSE PACKAGE VALIDATION FAILED ({len(errs)})',file=sys.stderr)
        for e in errs: print('- '+e,file=sys.stderr)
        raise SystemExit(1)
    print(f'COURSE PACKAGE VALIDATION PASS: {len(paths)} package(s)')

if __name__=='__main__': main()
