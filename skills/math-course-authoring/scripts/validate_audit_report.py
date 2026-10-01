#!/usr/bin/env python3
import argparse, json, sys
from pathlib import Path
from validate_course_package import Validator

DIMENSIONS = [
    'sourceGrounding','knowledgeTypeFit','misconceptionQuality','hintLadder',
    'evidenceIntegrity','transferQuality','rendererFit'
]
SEVERITIES = {'minor','major','critical'}
DECISIONS = {'pass','revise','blocked'}
RECOMMENDATIONS = {'draft','ready'}

def emitted_events(pkg):
    events=set()
    for step in (pkg.get('steps') or {}).values():
        for tr in step.get('transitions',[]) or []:
            for fx in tr.get('effects',[]) or []:
                if fx.get('type')=='emit' and fx.get('event'):
                    events.add(fx['event'])
    return events

def validate_pair(pkg,audit,require_ready=False):
    errors=[]
    def err(msg): errors.append(msg)
    pkg_errors=Validator().validate(pkg,'package')
    errors.extend('package: '+x for x in pkg_errors)
    if not isinstance(audit,dict): return errors+['audit: must be object']
    if audit.get('auditVersion')!='0.1.0': err('audit: auditVersion must be 0.1.0')
    if audit.get('flowId')!=pkg.get('flowId'): err('audit: flowId must match package flowId')
    rr=audit.get('revisionRound')
    if not isinstance(rr,int) or isinstance(rr,bool) or rr<0 or rr>3: err('audit: revisionRound must be integer 0..3')
    scores=audit.get('scores')
    if not isinstance(scores,dict):
        err('audit: scores must be object'); scores={}
    if set(scores)!=set(DIMENSIONS): err('audit: scores must contain exactly the seven rubric dimensions')
    for k in DIMENSIONS:
        v=scores.get(k)
        if not isinstance(v,int) or isinstance(v,bool) or v<0 or v>2: err(f'audit: score {k} must be integer 0..2')
    computed=sum(v for k,v in scores.items() if k in DIMENSIONS and isinstance(v,int) and not isinstance(v,bool))
    if audit.get('total')!=computed: err(f'audit: total must equal score sum {computed}')
    critical=audit.get('criticalFailures')
    if not isinstance(critical,list) or any(not isinstance(x,str) or not x.strip() for x in critical): err('audit: criticalFailures must be a list of non-empty strings')
    critical=critical if isinstance(critical,list) else []
    gaps=audit.get('gaps')
    if not isinstance(gaps,dict) or set(gaps)!={'source','renderer'}: err('audit: gaps must contain exactly source and renderer arrays'); gaps={'source':[],'renderer':[]}
    for k in ['source','renderer']:
        if not isinstance(gaps.get(k),list) or any(not isinstance(x,str) or not x.strip() for x in gaps.get(k,[])): err(f'audit: gaps.{k} must be a list of non-empty strings')
    findings=audit.get('findings')
    if not isinstance(findings,list): err('audit: findings must be array'); findings=[]
    unresolved_major=False
    for i,f in enumerate(findings):
        if not isinstance(f,dict): err(f'audit: findings[{i}] must be object'); continue
        for key in ['dimension','severity','issue','revision','resolved']:
            if key not in f: err(f'audit: findings[{i}] missing {key}')
        if f.get('dimension') not in DIMENSIONS: err(f'audit: findings[{i}].dimension invalid')
        if f.get('severity') not in SEVERITIES: err(f'audit: findings[{i}].severity invalid')
        if not isinstance(f.get('issue'),str) or not f.get('issue','').strip(): err(f'audit: findings[{i}].issue required')
        if not isinstance(f.get('revision'),str) or not f.get('revision','').strip(): err(f'audit: findings[{i}].revision required')
        if not isinstance(f.get('resolved'),bool): err(f'audit: findings[{i}].resolved must be boolean')
        if f.get('severity') in {'major','critical'} and f.get('resolved') is False: unresolved_major=True
    decision=audit.get('decision')
    rec=audit.get('finalRecommendation')
    if decision not in DECISIONS: err('audit: invalid decision')
    if rec not in RECOMMENDATIONS: err('audit: invalid finalRecommendation')
    if not isinstance(audit.get('summary'),str) or not audit.get('summary','').strip(): err('audit: summary required')
    total=audit.get('total') if isinstance(audit.get('total'),int) else -1
    if decision=='pass' and (total<12 or critical or unresolved_major): err('audit: pass requires total >=12, no criticalFailures, and no unresolved major/critical findings')
    if decision=='revise' and not (total<12 or critical or unresolved_major): err('audit: revise requires a fixable score/critical/unresolved-major reason')
    if decision=='blocked' and not (critical or gaps.get('source') or gaps.get('renderer') or unresolved_major): err('audit: blocked requires an explicit blocker')
    if scores.get('sourceGrounding')==2 and gaps.get('source'): err('audit: sourceGrounding=2 conflicts with source gaps')
    if scores.get('rendererFit')==2 and gaps.get('renderer'): err('audit: rendererFit=2 conflicts with renderer gaps')
    events=emitted_events(pkg)
    if scores.get('evidenceIntegrity')==2:
        if 'INDEPENDENT_PASS' not in events: err('audit: evidenceIntegrity=2 requires INDEPENDENT_PASS evidence')
        if 'TRANSFER_PASS' not in events: err('audit: evidenceIntegrity=2 requires TRANSFER_PASS evidence')
    if scores.get('transferQuality')==2 and 'TRANSFER_PASS' not in events: err('audit: transferQuality=2 requires TRANSFER_PASS evidence')
    pkg_status=(pkg.get('meta') or {}).get('authoringStatus','draft')
    if rec=='ready':
        if pkg_status!='ready': err('audit: ready recommendation requires package authoringStatus=ready')
        if decision!='pass' or total<12 or critical or unresolved_major: err('audit: ready recommendation requires a passing audit')
        for k in ['sourceGrounding','evidenceIntegrity','rendererFit']:
            if scores.get(k)!=2: err(f'audit: ready recommendation requires {k}=2')
        if gaps.get('source') or gaps.get('renderer'): err('audit: ready recommendation requires no source/renderer gaps')
        if any(v<1 for v in scores.values() if isinstance(v,int)): err('audit: ready recommendation requires every dimension >=1')
        if 'TODO' in json.dumps(pkg,ensure_ascii=False): err('audit: ready package contains TODO')
    if rec=='draft' and pkg_status=='ready': err('audit: package is ready but audit recommends draft')
    if require_ready and rec!='ready': err('audit: --require-ready gate not satisfied')
    return errors

def main():
    ap=argparse.ArgumentParser()
    ap.add_argument('package')
    ap.add_argument('audit')
    ap.add_argument('--require-ready',action='store_true')
    args=ap.parse_args()
    try: pkg=json.loads(Path(args.package).read_text())
    except Exception as e: print(f'PACKAGE READ FAILED: {e}',file=sys.stderr); raise SystemExit(1)
    try: audit=json.loads(Path(args.audit).read_text())
    except Exception as e: print(f'AUDIT READ FAILED: {e}',file=sys.stderr); raise SystemExit(1)
    errors=validate_pair(pkg,audit,args.require_ready)
    if errors:
        print(f'AUDIT VALIDATION FAILED ({len(errors)})',file=sys.stderr)
        for e in errors: print('- '+e,file=sys.stderr)
        raise SystemExit(1)
    print(f'AUDIT REPORT VALID: decision={audit["decision"]} recommendation={audit["finalRecommendation"]} total={audit["total"]}/14 round={audit["revisionRound"]}')

if __name__=='__main__': main()
