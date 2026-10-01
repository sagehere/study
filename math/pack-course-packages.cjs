'use strict';
const fs=require('node:fs'),path=require('node:path');
const dir=path.join(__dirname,'course-packages'),out=path.join(__dirname,'course-packages.generated.js');
const validation=require('./validate-course-packages.cjs').validateAll(dir);if(validation.errors.length){console.error('Refusing to pack invalid Course Packages:');for(const e of validation.errors)console.error('- '+e);process.exit(1);}
const files=fs.readdirSync(dir).filter(x=>x.endsWith('.json')).sort(),packages={};
function scan(v,p){if(typeof v==='string'&&/\b(?:eval|new Function|javascript:)\b/i.test(v))throw new Error(`${p}: executable text forbidden`);if(v&&typeof v==='object')for(const [k,x] of Object.entries(v)){if(['script','code','expression','function'].includes(k))throw new Error(`${p}: executable key forbidden ${k}`);scan(x,`${p}.${k}`);}}
for(const file of files){const full=path.join(dir,file),pkg=JSON.parse(fs.readFileSync(full,'utf8'));if(pkg.packageVersion!=='0.1.0')throw new Error(`${file}: unsupported packageVersion`);for(const k of ['flowId','flowVersion','courseId','unitId','nodeId','steps'])if(!pkg[k])throw new Error(`${file}: missing ${k}`);if(packages[pkg.flowId])throw new Error(`${file}: duplicate flowId ${pkg.flowId}`);scan(pkg,file);packages[pkg.flowId]=pkg;}
const banner='/* GENERATED from math/course-packages/*.json by pack-course-packages.cjs. Do not edit manually. */\n';
const generated=banner+"'use strict';\n"+`globalThis.CoursePackageData=${JSON.stringify(packages,null,2)};\n`;
if(process.argv.includes('--check')){const current=fs.existsSync(out)?fs.readFileSync(out,'utf8'):'';if(current!==generated){console.error('Course package bundle is stale. Run: node math/pack-course-packages.cjs');process.exit(1);}console.log(`PACK CHECK PASS: ${files.length} course package(s)`);}else{fs.writeFileSync(out,generated);console.log(`PACKED ${files.length} course package(s): ${files.join(', ')}`);}
