#!/usr/bin/env python3
import argparse, hashlib, json, re
from pathlib import Path

ROLES={'math-education-expert','frontline-teacher','curriculum-researcher','teaching-researcher','other'}
MODES={'written-review','interview','lesson-observation','classroom-trial','workshop','other'}

def canonical_hash(pkg):
    raw=json.dumps(pkg,ensure_ascii=False,sort_keys=True,separators=(',',':')).encode('utf-8')
    return hashlib.sha256(raw).hexdigest()

def review_prefix(flow_id):
    return re.sub(r'[^A-Z0-9]+','-',flow_id.upper()).strip('-')

def next_round(records_dir,flow_id):
    n=0
    if records_dir.exists():
        for p in records_dir.glob('*.json'):
            try:d=json.loads(p.read_text())
            except Exception:continue
            if d.get('flowId')==flow_id and isinstance(d.get('reviewRound'),int):n=max(n,d['reviewRound'])
    return n+1

def main():
    ap=argparse.ArgumentParser()
    ap.add_argument('package')
    ap.add_argument('output')
    ap.add_argument('--records-dir',default='math/external-reviews/records')
    ap.add_argument('--reviewer-role',required=True,choices=sorted(ROLES))
    ap.add_argument('--mode',required=True,choices=sorted(MODES))
    ap.add_argument('--reviewer-label',default='')
    ap.add_argument('--organization',default='')
    ap.add_argument('--date',default='')
    ap.add_argument('--student-population',default='')
    args=ap.parse_args()
    pkg=json.loads(Path(args.package).read_text())
    flow=pkg['flowId']; rnd=next_round(Path(args.records_dir),flow)
    review={
      'reviewSchemaVersion':'0.1.0','reviewId':f'ER-{review_prefix(flow)}-R{rnd}','reviewRound':rnd,
      'flowId':flow,'reviewedFlowVersion':pkg['flowVersion'],'reviewedPackageSha256':canonical_hash(pkg),
      'reviewer':{'role':args.reviewer_role,'label':args.reviewer_label,'organization':args.organization},
      'context':{'date':args.date,'mode':args.mode,'studentPopulation':args.student_population,'notes':''},
      'overall':{'status':'draft','summary':''},'findings':[],
      'closure':{'status':'open','notes':'','resolvedFlowVersion':None,'resolvedPackageSha256':None,
                 'internalRevalidation':{'packageValidation':False,'pedagogyAudit':False,'stateMachine':False,'browserE2E':False}}
    }
    out=Path(args.output);out.parent.mkdir(parents=True,exist_ok=True);out.write_text(json.dumps(review,ensure_ascii=False,indent=2)+'\n')
    print(f'EXTERNAL REVIEW SCAFFOLDED: {review["reviewId"]} for {flow}@{pkg["flowVersion"]}')

if __name__=='__main__':main()
