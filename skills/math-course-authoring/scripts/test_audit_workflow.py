#!/usr/bin/env python3
import copy, json, subprocess, tempfile
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
SC=ROOT/'scripts'/'scaffold_course_package.py'
VA=ROOT/'scripts'/'validate_audit_report.py'

def run(pkg,audit,*extra):
    return subprocess.run(['python3',str(VA),str(pkg),str(audit),*extra],capture_output=True,text=True)

with tempfile.TemporaryDirectory() as td:
    d=Path(td); pkgp=d/'pkg.json'; auditp=d/'audit.json'
    subprocess.run(['python3',str(SC),'--type','procedural','--course','demo-course','--unit','u1','--node','demo','--out',str(pkgp)],check=True,capture_output=True,text=True)
    pkg=json.loads(pkgp.read_text())
    for sid,step in pkg['steps'].items():
        step['view']['title']=f'Demo {sid}'; step['view']['prompt']=f'Demo prompt {sid}'
    audit={
      'auditVersion':'0.1.0','flowId':pkg['flowId'],'revisionRound':0,
      'scores':{'sourceGrounding':2,'knowledgeTypeFit':2,'misconceptionQuality':2,'hintLadder':2,'evidenceIntegrity':1,'transferQuality':2,'rendererFit':2},
      'total':13,'criticalFailures':['same repaired item is being counted too close to independent mastery'],
      'gaps':{'source':[],'renderer':[]},
      'findings':[{'dimension':'evidenceIntegrity','severity':'critical','issue':'No fresh independent evidence.','revision':'Add a new independent item and emit INDEPENDENT_PASS.','resolved':False}],
      'decision':'revise','finalRecommendation':'draft','summary':'Revise evidence chain before release.'}
    pkgp.write_text(json.dumps(pkg,ensure_ascii=False,indent=2)); auditp.write_text(json.dumps(audit,ensure_ascii=False,indent=2))
    r=run(pkgp,auditp); assert r.returncode==0, r.stderr
    r=run(pkgp,auditp,'--require-ready'); assert r.returncode!=0 and 'require-ready' in r.stderr
    ind=pkg['steps']['independent']['transitions'][0]['effects']; ind.append({'type':'emit','event':'INDEPENDENT_PASS','result':{'independent':True}})
    pkg['meta']['authoringStatus']='ready'; pkgp.write_text(json.dumps(pkg,ensure_ascii=False,indent=2))
    audit2=copy.deepcopy(audit); audit2['revisionRound']=1; audit2['scores']['evidenceIntegrity']=2; audit2['total']=14; audit2['criticalFailures']=[]; audit2['findings'][0]['resolved']=True; audit2['decision']='pass'; audit2['finalRecommendation']='ready'; audit2['summary']='Fresh independent evidence added; ready gate satisfied.'
    auditp.write_text(json.dumps(audit2,ensure_ascii=False,indent=2))
    r=run(pkgp,auditp,'--require-ready'); assert r.returncode==0, r.stderr
    pkg['meta']['authoringStatus']='draft'; pkgp.write_text(json.dumps(pkg,ensure_ascii=False,indent=2))
    audit3=copy.deepcopy(audit2); audit3['revisionRound']=2; audit3['scores']['rendererFit']=1; audit3['total']=13; audit3['gaps']['renderer']=['needs threshold renderer']; audit3['finalRecommendation']='draft'; audit3['summary']='Quality threshold passes, but renderer gap blocks ready status.'
    auditp.write_text(json.dumps(audit3,ensure_ascii=False,indent=2))
    r=run(pkgp,auditp); assert r.returncode==0, r.stderr
    r=run(pkgp,auditp,'--require-ready'); assert r.returncode!=0
print('SKILL AUDIT WORKFLOW TEST PASS: revise -> ready and pass-as-draft blocker gates')
