#!/usr/bin/env python3
import json, subprocess, tempfile
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
SC=ROOT/'scripts'/'scaffold_course_package.py'
VA=ROOT/'scripts'/'validate_course_package.py'
KINDS=['procedural','concept-representation','quantity-relation','boundary-concept']
with tempfile.TemporaryDirectory() as d:
    d=Path(d); files=[]
    for i,k in enumerate(KINDS,1):
        p=d/f'u{i}-demo.json'
        subprocess.run(['python3',str(SC),'--type',k,'--course','demo-course','--unit',f'u{i}','--node','demo','--out',str(p)],check=True,capture_output=True,text=True)
        files.append(p)
    subprocess.run(['python3',str(VA),*map(str,files)],check=True)
    a=json.loads(files[0].read_text()); b=json.loads(subprocess.run(['python3','-c',f'import sys,json; sys.path.insert(0,{str(ROOT / "scripts")!r}); from scaffold_course_package import build_package; print(json.dumps(build_package("procedural","demo-course","u1","demo")))'],capture_output=True,text=True,check=True).stdout)
    assert a['objectives']==b['objectives'] and a['misconceptions']==b['misconceptions']
    bad=json.loads(files[0].read_text()); bad['steps'][bad['initialStep']]['view']['renderer']='missingRenderer'; bp=d/'bad.json'; bp.write_text(json.dumps(bad))
    r=subprocess.run(['python3',str(VA),str(bp)],capture_output=True,text=True); assert r.returncode!=0 and 'renderer not registered' in r.stderr
print('SKILL AUTHORING TEST PASS: 4 templates, stable IDs, validator negative case')
