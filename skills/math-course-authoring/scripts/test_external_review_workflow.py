#!/usr/bin/env python3
import json, subprocess, tempfile
from pathlib import Path
ROOT=Path(__file__).resolve().parents[3]
PKG=ROOT/'math/course-packages/u2-formula.json'
SCAFF=Path(__file__).with_name('scaffold_external_review.py')
VALID=Path(__file__).with_name('validate_external_review.py')

def run(args,ok=True):
 p=subprocess.run(args,text=True,capture_output=True)
 if ok and p.returncode!=0: raise AssertionError(p.stderr or p.stdout)
 if not ok and p.returncode==0: raise AssertionError('expected failure')
 return p

with tempfile.TemporaryDirectory() as td:
 out=Path(td)/'review.json'
 run(['python3',str(SCAFF),str(PKG),str(out),'--records-dir',td,'--reviewer-role','frontline-teacher','--mode','written-review'])
 r=json.loads(out.read_text());assert r['reviewRound']==1 and r['overall']['status']=='draft' and r['closure']['status']=='open'
 run(['python3',str(VALID),str(PKG),str(out),'--require-current'])
 r['findings']=[{'findingId':'F1','category':'classroom-feasibility','severity':'minor','target':{'stepId':'independent'},'observation':'示例课堂节奏偏快。','recommendation':'观察学生是否需要多一轮口头解释。','disposition':{'status':'pending','rationale':''},'impact':{'flowVersionPolicy':'undecided','sessionPolicy':'undecided','affectedSteps':['independent'],'affectedObjectives':[],'requiredChecks':['manual-review']}}]
 r['overall']={'status':'submitted','summary':'一条课堂可行性意见'};out.write_text(json.dumps(r,ensure_ascii=False,indent=2)+'\n')
 run(['python3',str(VALID),str(PKG),str(out),'--require-current'])
 bad=json.loads(PKG.read_text());bad['labels']['title']='changed after review';changed=Path(td)/'changed.json';changed.write_text(json.dumps(bad,ensure_ascii=False,indent=2))
 run(['python3',str(VALID),str(changed),str(out),'--require-current'],ok=False)
 print('EXTERNAL REVIEW WORKFLOW TEST PASS: scaffold, current binding, finding validation, stale-after-change detection.')
