#!/usr/bin/env python3
import argparse, json, re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TEMPLATE_DIR = ROOT / 'references' / 'templates'
REGISTRY = json.loads((ROOT/'references'/'renderer-registry.json').read_text())
RENDERERS = set(REGISTRY['renderers'])
TYPES = sorted(p.stem for p in TEMPLATE_DIR.glob('*.json'))

ID_RE = re.compile(r'^[a-z0-9][a-z0-9._-]*$')

def slug(value, label):
    if not value or not ID_RE.match(value):
        raise ValueError(f'{label} must match lowercase [a-z0-9._-] identifier rules')
    return value

def id_part(v):
    return re.sub(r'[^A-Z0-9]+', '-', v.upper()).strip('-')

def stable_ids(prefix, unit, node, roles):
    return {role: f'{prefix}-{id_part(unit)}-{id_part(node)}-{i:02d}' for i, role in enumerate(roles, 1)}

def hints(step):
    return [
        '',
        f'聚焦 {step} 的关键条件。',
        f'用一个表征或对比检查 {step}。',
        f'给出 {step} 的部分示范。',
        f'完整示范 {step}，随后必须用新证据重新验证。',
    ]

def build_package(kind, course, unit, node, title=None, status='draft'):
    if kind not in TYPES:
        raise ValueError(f'unknown knowledge type: {kind}; allowed: {", ".join(TYPES)}')
    course, unit, node = slug(course, 'course'), slug(unit, 'unit'), slug(node, 'node')
    if status not in {'draft','ready'}:
        raise ValueError('status must be draft or ready')
    title = title or node
    template = json.loads((TEMPLATE_DIR/f'{kind}.json').read_text())
    if template['defaultRenderer'] not in RENDERERS:
        raise ValueError(f'template renderer not registered: {template["defaultRenderer"]}')
    objectives = stable_ids('O', unit, node, template['objectiveRoles'])
    misconceptions = stable_ids('M', unit, node, template['misconceptionRoles'])
    objective_values = list(objectives.values())
    mis_values = list(misconceptions.values())
    steps = {}
    for i, step_id in enumerate(template['steps']):
        terminal = i == len(template['steps']) - 1
        next_step = None if terminal else template['steps'][i+1]
        step = {
            'objectiveId': objective_values[min(i, len(objective_values)-1)],
            'hints': ['', '', '', '', ''] if terminal else hints(step_id),
            'view': {
                'title': f'TODO：{title} · {step_id}',
                'prompt': f'TODO：为 {step_id} 编写一个只包含一个主要认知动作的提示。',
                'choices': [] if terminal else [['continue','继续']],
            },
            'transitions': [] if terminal else [{'when':'continue','to':next_step,'effects':[]}],
        }
        if terminal:
            step['reviewOnH4'] = False
        if step_id == 'repair' and mis_values and not terminal:
            step['transitions'][0]['effects'].append({'type':'resolveMisconception','id':mis_values[0]})
        if step_id == 'formalize' and not terminal:
            step['transitions'][0]['effects'].append({'type':'emit','event':'FORMALIZATION_UNLOCKED','result':{'draft':True}})
        if step_id == 'transfer' and not terminal:
            step['transitions'][0]['effects'].append({'type':'emit','event':'TRANSFER_PASS','result':{'draft':True}})
        steps[step_id] = step
    return {
        'packageVersion':'0.1.0','schemaVersion':'0.2',
        'flowId':f'{unit}.{node}.v2','flowVersion':'0.1.0',
        'courseId':course,'unitId':unit,'nodeId':node,'initialStep':template['steps'][0],
        'labels':{'badge':'课程草稿','title':title,'description':f'{kind} authoring scaffold'},
        'objectives':objectives,'misconceptions':misconceptions,
        'meta':{'authoringStatus':status,'knowledgeType':kind,'generatedBy':'math-course-authoring'},
        'steps':steps,
    }

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--type', required=True, choices=TYPES)
    ap.add_argument('--course', required=True)
    ap.add_argument('--unit', required=True)
    ap.add_argument('--node', required=True)
    ap.add_argument('--title')
    ap.add_argument('--status', default='draft', choices=['draft','ready'])
    ap.add_argument('--out', required=True, help='Output JSON path')
    ap.add_argument('--force', action='store_true')
    args = ap.parse_args()
    pkg = build_package(args.type,args.course,args.unit,args.node,args.title,args.status)
    out = Path(args.out)
    if out.exists() and not args.force:
        raise SystemExit(f'refusing to overwrite existing file: {out}')
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(pkg, ensure_ascii=False, indent=2)+'\n')
    print(f'CREATED {out}')
    print(f'TYPE {args.type}')
    print(f'FLOW {pkg["flowId"]}')
    print(f'STATUS {pkg["meta"]["authoringStatus"]}')

if __name__ == '__main__': main()
