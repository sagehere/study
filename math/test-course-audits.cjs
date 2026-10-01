'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const dir=path.join(__dirname,'course-audits'),pkgDir=path.join(__dirname,'course-packages');
const validator=path.join(__dirname,'..','skills','math-course-authoring','scripts','validate_audit_report.py');
const audits=fs.readdirSync(dir).filter(x=>x.endsWith('.audit.json')).sort();
assert(audits.length>0,'expected at least one course audit');
for(const file of audits){
 const audit=JSON.parse(fs.readFileSync(path.join(dir,file),'utf8')),matches=fs.readdirSync(pkgDir).filter(x=>x.endsWith('.json')).filter(x=>JSON.parse(fs.readFileSync(path.join(pkgDir,x),'utf8')).flowId===audit.flowId);
 assert.equal(matches.length,1,`${file}: expected exactly one Course Package for ${audit.flowId}`);
 const run=cp.spawnSync('python3',[validator,path.join(pkgDir,matches[0]),path.join(dir,file),'--require-ready'],{encoding:'utf8'});
 assert.equal(run.status,0,`${file}: ${run.stderr||run.stdout}`);
}
console.log(`COURSE AUDIT TEST PASS: ${audits.length} ready audit(s)`);
