'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),os=require('node:os'),path=require('node:path'),cp=require('node:child_process');
const {validateAll}=require('./validate-course-packages.cjs');
const tool=path.join(__dirname,'create-course-package.cjs');
const types=['procedural','concept-representation','quantity-relation','boundary-concept'];
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'study-authoring-'));
function run(args){return cp.spawnSync(process.execPath,[tool,...args],{encoding:'utf8'});}
try{
 const snapshots=[];
 for(let i=0;i<types.length;i++){
  const type=types[i],unit='ux'+(i+1),node='demo'+(i+1),out=path.join(tmp,type);
  const a=run(['--type',type,'--course','demo-course','--unit',unit,'--node',node,'--title','Demo '+type,'--out',out]);assert.equal(a.status,0,a.stderr||a.stdout);
  const file=path.join(out,`${unit}-${node}.json`);assert(fs.existsSync(file));const pkg=JSON.parse(fs.readFileSync(file,'utf8'));assert.equal(pkg.meta.authoringStatus,'draft');assert.equal(pkg.meta.knowledgeType,type);assert.equal(pkg.flowId,`${unit}.${node}.v2`);assert(Object.values(pkg.objectives).every(x=>x.startsWith(`O-${unit.toUpperCase()}-${node.toUpperCase()}-`)));assert(Object.values(pkg.misconceptions).every(x=>x.startsWith(`M-${unit.toUpperCase()}-${node.toUpperCase()}-`)));const check=validateAll(out);assert.deepEqual(check.errors,[],`${type}: ${check.errors.join('; ')}`);snapshots.push({type,objectives:pkg.objectives,misconceptions:pkg.misconceptions});
  const again=run(['--type',type,'--course','demo-course','--unit',unit,'--node',node,'--out',out]);assert.notEqual(again.status,0);assert((again.stderr+again.stdout).includes('Refusing to overwrite'));
 }
 // Stable IDs are deterministic for the same course/unit/node/type inputs.
 const d1=require('./create-course-package.cjs').skeleton({type:'procedural',course:'demo-course',unit:'u9',node:'sample',title:'A',status:'draft'}),d2=require('./create-course-package.cjs').skeleton({type:'procedural',course:'demo-course',unit:'u9',node:'sample',title:'B',status:'draft'});assert.deepEqual(d1.objectives,d2.objectives);assert.deepEqual(d1.misconceptions,d2.misconceptions);
 // Safety and publishing gates.
 let x=run(['--type','unknown','--course','demo-course','--unit','u1','--node','x','--out',tmp]);assert.notEqual(x.status,0);assert((x.stderr+x.stdout).includes('Unknown --type'));
 x=run(['--type','procedural','--course','Demo Course','--unit','u1','--node','x','--out',tmp]);assert.notEqual(x.status,0);assert((x.stderr+x.stdout).includes('identifier rules'));
 x=run(['--type','procedural','--course','demo-course','--unit','u1','--node','publish-test','--publish']);assert.notEqual(x.status,0);assert((x.stderr+x.stdout).includes('Refusing --publish for a draft'));
 // Official package set remains exactly the five real packages; drafts are not picked up by packer/validator.
 const official=validateAll(path.join(__dirname,'course-packages'));assert.equal(official.files.length,21);assert.deepEqual(official.errors,[]);
 console.log(`COURSE AUTHORING TEST PASS: ${types.length} templates, stable IDs, overwrite/publish/input gates.`);
} finally {fs.rmSync(tmp,{recursive:true,force:true});}
