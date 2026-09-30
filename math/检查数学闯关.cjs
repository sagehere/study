/* Run with Node.js. Add --browser for offline browser and responsive checks. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const file=path.join(__dirname,'数学闯关.html'),html=fs.readFileSync(file,'utf8');
function script(id){const m=html.match(new RegExp('<script id="'+id+'">([\\s\\S]*?)</script>'));assert(m,`missing ${id}`);return m[1];}
const context={};vm.createContext(context);vm.runInContext(script('quest-core'),context);vm.runInContext(script('quest-data'),context);
const M=context.MathQuest,D=context.QuestData,units=[...D.COURSE,D.FINAL],qs=units.flatMap(u=>u.questions),ids=qs.map(q=>q.id),unitIds=units.map(u=>u.id);
const plain=x=>JSON.parse(JSON.stringify(x));
assert.equal(qs.length,120);assert.equal(new Set(ids).size,120);
for(const u of D.COURSE){assert.equal(u.questions.length,18);for(const [kind,n] of [['base',6],['apply',8],['challenge',4]])assert.equal(u.questions.filter(q=>q.diff===kind).length,n);for(const node of u.nodes)assert(u.questions.filter(q=>q.node===node.id).length>=2,`no variant: ${u.id}/${node.id}`);}
for(const u of units)for(const q of u.questions){assert(u.nodes.some(n=>n.id===q.node),q.id);assert(D.SOURCES[q.source]);assert(q.facts.length>0&&q.relation&&q.verify&&q.hint);assert(M.answerMatches(q,q.answer),q.id);if(q.fieldChoices){const answers=Array.isArray(q.answer)?q.answer:[q.answer];q.fieldChoices.forEach((choices,i)=>{assert(choices.includes(answers[i]),q.id);assert.equal(new Set(choices.map(String)).size,choices.length,q.id);assert(choices.length>=3,q.id);});}if(q.choices)assert(q.choices.includes(q.answer),`${q.id}: answer missing from choices`);for(const w of q.work)assert.equal(M.calc(w.expr),w.value,`${q.id}: ${w.expr}`);}
// Independent arithmetic from the story quantities; quotient/remainder and unit
// conversions are deliberately computed separately from the lesson parser.
const expected={
 u1:[420/60,196/28,[Math.floor(172/28),172%28],null,480/60,240/3/4,228/38,[Math.floor(639/30),639%30],[Math.floor(840/50),840%50],936/4/3,Math.ceil(235/45),336/2/6-24,Math.floor(360/78),780%40,(426-48)/6,[29*8,29*9-1],288/3/4*5*2,[12,7*3]],
 u2:[null,(9+4)*2,7*7,3*100,12,null,[60/2-18,18*(60/2-18)],8000/100,17+8*2,null,10*6-3*2,9*6*100/(3*3),[6,(6+1)*2],2*100-150,(10+6)*2,(6+6)*2,12*5/(3*2),(8+4)*2],
 u3:[6*4,480/15,8*7,60*4,null,18/3,600-12*38,600/8-230/5,280/4*7,24*5/30,160/8,16*58+13*42,(108+162)/3,84/(7*6),18/(7-4),null,Math.floor(90/(48/6*5)),null],
 u4:[32+18*4,72/8*3,(45-15)/5,120/((18-8)*3),18+18*2,null,(600-4*126)/48,150+120/6*5,525/((81-56)*3),18+18*2-6,(600-10*30)/6,3*22+24/4,440-200/5*8,null,null,(45-(45-2-41)*5)/5-2,(78+4)/2,null],
 u5:[10*10,3,null,2700000/10000,Math.round(384204/10000),null,null,null,80000-5000,null,3*1e8+5*1e6+8*1e3,null,[Math.round(794900/10000),Math.round(795000/10000)],null,[85000-1,75000],null,99999999+1,54321-12345],
 u6:[128*16,90*120,300*50,108*75/45*21,25*25,null,128*16,null,11800-(2099*3+1929*2+1549),45*45,null,459+678,null,null,45*45-44*46,null,null,65*65],
 final:[432/72,40/2/5*4*3,15*15-6*4,(42+9)*(15+9),(450-75*2)/60,(776-12*28)/20,125+(572+78)/26,4*20*560,Math.round(7399000/10000),null,57*107,480/15]
};
let verified=0;for(const u of units)u.questions.forEach((q,i)=>{if(expected[u.id][i]!==null){assert.deepEqual(plain(q.answer),expected[u.id][i],`${q.id}: independent answer`);verified++;}});
for(const [n,s] of [[0,'零'],[10,'十'],[11,'十一'],[101,'一百零一'],[1001,'一千零一'],[10000,'一万'],[10001,'一万零一'],[207000,'二十万七千'],[200700,'二十万零七百'],[10023000,'一千零二万三千'],[400300000,'四亿零三十万'],[305008000,'三亿零五百万八千'],[100010001,'一亿零一万零一'],[999999999999,'九千九百九十九亿九千九百九十九万九千九百九十九']])assert.equal(M.readNumber(n),s,`read ${n}`);
assert.throws(()=>M.readNumber(1e12));assert.throws(()=>M.calc('1÷0'));assert.throws(()=>M.calc('alert(1)'));assert.throws(()=>M.calc('1..2'));assert.throws(()=>M.calc('1+'));assert.equal(M.calc('120÷[(18－8)×3]'),4);assert.equal(M.calc('72÷8×3'),27);assert.equal(M.calc('32＋18×4'),104);
assert(M.answerMatches({answer:[16,40],unit:['包','本']},'１６包，４０本'));assert(!M.answerMatches({answer:40,unit:'本'},'40千克'));assert(!M.answerMatches({answer:40},'4e1'));assert(!M.answerMatches({answer:[16,40]},'16'));assert(M.answerMatches({answer:'对'},'正确'));
const s=M.session(['u1-01','u1-02'],'u1','a');M.attempt(s,'u1-01',false);M.attempt(s,'u1-01',true);assert.equal(M.score(s),0);M.attempt(s,'u1-02',true);M.attempt(s,'u1-02',true);assert.equal(s.attempts['u1-02'].tries,1);assert.equal(M.score(s),1);M.reveal(s,'u1-01');assert.equal(M.score(s),1);
for(const [a,b,c,n] of [[5,7,4,0],[6,6,4,1],[7,7,2,2],[7,7,3,3]])assert.equal(M.stars(a,b,c),n);
const stored=M.fresh();stored.current={unit:'u1',tab:'quiz',node:'trial',session:s};stored.needs=['u1-01'];stored.stars.u1=2;const recovered=M.restore(JSON.stringify(stored),ids,unitIds);assert.equal(M.score(recovered.current.session),1);assert.equal(recovered.current.session.attempts['u1-01'].revealed,true);assert.equal(recovered.stars.u1,2);assert.equal(M.restore('broken',ids,unitIds).version,1);assert.equal(M.restore('{"version":1,"needs":["bad"],"stars":{"u1":99}}',ids,unitIds).needs.length,0);
assert.equal(M.perimeter([[0,0],[1,0],[2,0],[0,1],[1,1],[2,1]]),10);assert.equal(M.perimeter([[0,0],[1,0],[2,0],[3,0],[4,0],[5,0]]),14);
assert(!/<(?:script|link)[^>]+(?:src|href)="https?:/.test(html),'offline runtime dependency');assert(!/\beval\s*\(/.test(html),'eval not allowed');new vm.Script(script('quest-app'));
console.log(`PASS: 120 questions, ${verified} independently calculated answers, all worked steps, reading/rounding/units, scoring, persistence, offline structure.`);
if(process.argv.includes('--browser'))browserChecks().catch(e=>{console.error(e);process.exitCode=1;});
async function browserChecks(){
 const pw=require(path.resolve(path.dirname(process.execPath),'..','node_modules','playwright'));
 const browser=await pw.chromium.launch({headless:true,executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'});
 try {
 const ctx=await browser.newContext({viewport:{width:1280,height:900},offline:true,reducedMotion:'reduce'}),page=await ctx.newPage(),errors=[],requests=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(/^https?:/.test(r.url()))requests.push(r.url());});
 await page.goto(require('node:url').pathToFileURL(file).href);await page.evaluate(()=>localStorage.clear());await page.reload();
 const act=(name)=>page.locator(`[data-action="${name}"]`);
 async function openUnit(id){await page.locator('#homeBtn').click();await page.locator(`[data-action="unit"][data-unit="${id}"]`).click();}
 async function setAnswer(locator,value){if(await locator.evaluate(el=>el.tagName)==='SELECT')await locator.selectOption(String(value));else await locator.fill(String(value));}
 async function fillCurrent(correct=true){const q=await page.evaluate(()=>{const s=QuestApp.quiz;return[...QuestData.COURSE,QuestData.FINAL].flatMap(u=>u.questions).find(q=>q.id===s.ids[s.index]);});const values=Array.isArray(q.answer)?q.answer:[q.answer];for(let i=0;i<values.length;i++){const el=page.locator(`.answer[data-index="${i}"]`),choices=q.fieldChoices?.[i]||q.choices;const value=correct?values[i]:choices?choices.find(c=>String(c)!==String(values[i])):typeof values[i]==='number'?values[i]+1:'错误预测';await setAnswer(el,value);}await act('check').click();return q;}
 // Navigation must change in place; unanswered next cannot mark or advance.
 await openUnit('u1');await page.locator('[data-action="tab"][data-tab="quiz"]').first().click();await page.locator('[data-action="start"][data-round="a"]').click();
 assert(await act('next').isDisabled());assert.equal(await act('next').innerText(),'下一题 →');
 await page.evaluate(()=>document.querySelector('[data-action="next"]').dispatchEvent(new MouseEvent('click',{bubbles:true})));assert.equal(await page.evaluate(()=>QuestApp.quiz.index),0);assert.equal(await page.evaluate(()=>Object.keys(QuestApp.quiz.attempts).length),0);
 await fillCurrent(false);assert(await act('next').isDisabled());await fillCurrent();assert(await act('next').isEnabled());assert.equal(await page.evaluate(()=>MathQuest.score(QuestApp.quiz)),0);
 assert(await page.evaluate(()=>document.querySelector('#questionNavigation').compareDocumentPosition(document.querySelector('#solutionHost'))&Node.DOCUMENT_POSITION_FOLLOWING));
 await act('next').click();await act('reveal').click();assert(await act('next').isEnabled());await page.reload();assert(await act('next').isEnabled());await act('next').click();const skipped=await page.evaluate(()=>QuestApp.quiz.ids[QuestApp.quiz.index]);await act('skip').click();assert((await page.evaluate(()=>QuestApp.state.needs)).includes(skipped));
 await openUnit('u5');await page.locator('[data-action="nodequiz"][data-node="read"]').first().click();assert.equal(await page.locator('select.answer').count(),1);await act('check').click();assert.equal(await page.evaluate(()=>Object.keys(QuestApp.quiz.attempts).length),0);await fillCurrent();assert(await act('next').isEnabled());
 for(const width of [1280,768,390]){await page.setViewportSize({width,height:900});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`quiz ${width}`);assert(await act('next').isVisible());}await page.screenshot({path:path.join(__dirname,'数学闯关-测验.png'),fullPage:true});await page.setViewportSize({width:1280,height:900});
 const predictions={trial:'偏小',division:'9',remainder:'40',groups:'28',trace:'16',rectangle:'26,36',areaUnits:'100',cut:'32',fixed:'36',inverse:'12',price:'56',speed:'180',one:'42',order:'104',brackets:'4',model:'2',reverse:'5',places:'30500',read:'三亿零五百万八千',compare:'小于',round:'79',code:'20260409',multiply:'2048',estimate:'够',calculator:'96',pattern:'625'};
 for(const u of D.COURSE){await openUnit(u.id);for(const n of u.nodes){await page.locator(`[data-action="learnnode"][data-node="${n.id}"]`).first().click();await setAnswer(page.locator('#predictionInput'),predictions[n.lab]);await page.locator('#observeBtn').click();assert((await page.locator('#observation').innerText()).includes('预测吻合'),`${u.id}/${n.lab}: prediction`);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`${n.lab} overflow`);}
  for(const round of ['a','b','c']){await page.locator('[data-action="tab"][data-tab="quiz"]').first().click();await page.locator(`[data-action="start"][data-round="${round}"]`).click();for(let i=0;i<(round==='c'?4:7);i++){await fillCurrent();assert(await act('next').isEnabled());assert.equal(await act('next').innerText(),i===(round==='c'?3:6)?'完成小关，查看总结':'下一题 →');await act('next').click();}assert((await page.locator('.score').innerText()).includes(`${round==='c'?4:7}`));}assert.equal(await page.evaluate(id=>QuestApp.state.stars[id],u.id),3);
 }
 await openUnit('final');await page.locator('[data-action="tab"][data-tab="quiz"]').first().click();await page.locator('[data-action="start"]').click();for(let i=0;i<12;i++){await fillCurrent();await act('next').click();}assert.equal(await page.evaluate(()=>QuestApp.state.results.final.final),12);
 // Wrong-first, repeated submission, full explanation, refresh and variant clearing.
 await openUnit('u1');await page.locator('[data-action="tab"][data-tab="quiz"]').first().click();await page.locator('[data-action="start"][data-round="a"]').click();await fillCurrent(false);assert.equal(await page.evaluate(()=>QuestApp.quiz.attempts['u1-01'].first),false);await fillCurrent(true);await page.evaluate(()=>document.querySelector('[data-action="check"]').click());assert.equal(await page.evaluate(()=>MathQuest.score(QuestApp.quiz)),0);await page.reload();assert.equal(await page.evaluate(()=>MathQuest.score(QuestApp.quiz)),0);
 await page.locator('#homeBtn').click();await page.reload();await openUnit('u1');await act('resume').click();assert.equal(await page.evaluate(()=>QuestApp.quiz.index),0);assert.equal(await page.evaluate(()=>MathQuest.score(QuestApp.quiz)),0);await act('next').click();await act('reveal').click();assert(await page.locator('#solutionHost').innerText());
 await page.locator('#solutionHost [data-condition]').first().click();await page.locator('#checkConditions').click();assert((await page.locator('#conditionStatus').innerText()).includes('条件齐全'));
 await page.locator('#solutionHost details').filter({has:page.locator('[data-relation]')}).locator('summary').first().click();await page.locator('[data-relation="0"]').click();assert((await page.locator('#relationStatus').innerText()).includes('连起来'));
 await page.locator('#solutionHost details').filter({has:page.locator('[data-work]')}).locator('summary').first().click();await page.locator('#work-0').fill('168');await page.locator('[data-work="0"]').click();assert((await page.locator('#workstatus-0').innerText()).includes('正确'));
 const id=await page.evaluate(()=>QuestApp.quiz.ids[QuestApp.quiz.index]);assert((await page.evaluate(()=>QuestApp.state.needs)).includes(id));await page.locator('#reviewBtn').click();await page.locator(`[data-action="practice"][data-q="${id}"]`).click();assert.notEqual(await page.evaluate(()=>QuestApp.quiz.ids[0]),id);await fillCurrent();assert(!(await page.evaluate(()=>QuestApp.state.needs)).includes(id));
 await page.locator('#homeBtn').click();await act('wholemap').click();assert.equal(await page.locator('.bigmap button').count(),6);
 const topicPredictions={tiles:'10',travel:'可以',measure:'31.6',billion:'10000'};
 for(const t of D.ACTIVITIES){await page.locator('#homeBtn').click();await page.locator(`[data-action="activity"][data-topic="${t.id}"]`).click();await setAnswer(page.locator('#predictionInput'),topicPredictions[t.id]);await page.locator('#observeBtn').click();assert((await page.locator('#observation').innerText()).includes('预测吻合'),t.id);await page.locator('#topicCheck').check();}
 // Exercise controls and alternate branches, not just the default drawings.
 async function lab(u,n){await openUnit(u);await page.locator(`[data-action="learnnode"][data-node="${n}"]`).first().click();}
 async function predict(value){await setAnswer(page.locator('#predictionInput'),value);await page.locator('#observeBtn').click();assert((await page.locator('#observation').innerText()).includes('预测吻合'),`prediction ${value}`);}
 async function slider(id,n){await page.locator('#'+id).evaluate((el,value)=>{el.value=value;el.dispatchEvent(new Event('input',{bubbles:true}));},String(n));}
 await lab('u1','trial');await page.locator('#trialTask').selectOption('b');await predict('偏小');await slider('trialQ',7);await predict('合适');
 await lab('u1','vertical');await page.locator('[data-divstep="6"]').click();assert(await page.locator('#observation .notice').isVisible());for(let i=0;i<7;i++)await page.locator(`[data-divstep="${i}"]`).click();await predict(9);
 await lab('u1','chain');await slider('racks',5);await slider('layers',4);await predict('不能整除');
 await lab('u2','meaning');await page.locator('#traceMode').selectOption('a');await predict(15);
 await lab('u2','formula');await slider('rectL',12);await slider('rectW',10);await predict('44,120');
 await lab('u2','units');await page.locator('#areaMode').selectOption('m');await slider('areaCount',3);await predict(300);
 await lab('u2','cut');await page.locator('#cutMode').selectOption('notch');await predict(36);await page.locator('#cutMode').selectOption('wall');await predict(22);
 await lab('u2','change');await page.locator('#fixedMode').selectOption('a');await predict(24);await slider('fixedL',1);await predict(74);
 await page.setViewportSize({width:1280,height:900});await page.screenshot({path:path.join(__dirname,'数学闯关-互动.png'),fullPage:true});
 await lab('u3','inverse');await page.locator('#unknown').selectOption('a');await predict(4);await page.locator('#unknown').selectOption('b');await predict(3);
 await lab('u3','price');await slider('price',20);await slider('quantity',12);await predict(240);
 await lab('u3','speed');await slider('speed',10);await slider('hours',2);await predict(20);
 await lab('u3','one');await page.locator('#oneMode').selectOption('total');await predict(4);
 await lab('u4','order');await page.locator('#orderTask').selectOption('b');await page.locator('[data-order-op="1"]').click();assert(await page.locator('#observation .notice').isVisible());await page.locator('[data-order-op="0"]').click();await page.locator('[data-order-op="1"]').click();await predict(27);
 await lab('u4','bracket');for(let i=0;i<3;i++)await page.locator(`[data-bstep="${i}"]`).click();await predict(4);
 await lab('u4','reverse');await slider('boxN',0);await predict(7);
 await lab('u5','read');await page.locator('[data-place="8"][data-delta="1"]').click();await predict('三亿零五百万九千');
 // Set every digit to nine through the real controls; distractors must stay in range.
 for(let i=0;i<12;i++){for(let j=0;j<10;j++){const digit=await page.locator('.place-cell b').nth(i).innerText();if(digit==='9')break;await page.locator(`[data-place="${i}"][data-delta="1"]`).click();}}
 await predict('九千九百九十九亿九千九百九十九万九千九百九十九');
 await lab('u5','compare');await page.locator('#compareTask').selectOption('wan');await predict(270);await page.locator('#compareTask').selectOption('yi');await predict(9);
 await lab('u5','round');await slider('roundN',845000);await predict(85);
 await lab('u5','code');await slider('codeClass',12);await slider('codeNo',50);await predict('20261250');
 await lab('u6','multiply');await slider('mulA',324);await slider('mulB',65);await predict(21060);
 await lab('u6','estimate');await page.locator('#estCase').selectOption('rackets');await predict('不能确定');await page.locator('#estWay').selectOption('down');await predict('不够');await page.locator('#estCase').selectOption('food');await predict('不能确定');
 await lab('u6','calculator');for(const k of '11800－(2099×3＋1929×2＋1549)')await page.locator(`[data-key="${k}"]`).click();await page.locator('[data-key="＝"]').click();assert.equal(await page.locator('#calcDisplay').innerText(),'96');await predict(96);
 await lab('u6','pattern');await slider('squareN',35);await page.locator('#squareView').selectOption('rebuilt');await predict(1225);
 for(const width of [768,390]){await page.setViewportSize({width,height:900});await page.locator('#homeBtn').click();assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`home ${width}`);for(const u of D.COURSE){await openUnit(u.id);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`mind ${u.id}/${width}`);for(const n of u.nodes){await page.locator(`[data-action="learnnode"][data-node="${n.id}"]`).first().click();assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`lab ${u.id}/${n.id}/${width}`);}}await lab('u5','read');if(width===390)await page.screenshot({path:path.join(__dirname,'数学闯关-手机.png'),fullPage:true});}
 await page.setViewportSize({width:1280,height:900});await page.locator('#homeBtn').click();page.once('dialog',d=>d.dismiss());await page.locator('#resetBtn').click();assert.equal(await page.evaluate(()=>QuestApp.state.stars.u6),3);page.once('dialog',d=>d.accept());await page.locator('#resetBtn').click();assert.equal(await page.evaluate(()=>Object.keys(QuestApp.state.stars).length),0);assert.equal(await page.evaluate(()=>Object.keys(QuestApp.state.sessions).length),0);await page.screenshot({path:path.join(__dirname,'数学闯关-电脑.png'),fullPage:true});
 // Simulate unavailable storage without affecting the normal context.
 const blocked=await browser.newContext({viewport:{width:390,height:844},offline:true});await blocked.addInitScript(()=>{Object.defineProperty(Storage.prototype,'setItem',{value(){throw new Error('blocked');}});});const p2=await blocked.newPage();await p2.goto(require('node:url').pathToFileURL(file).href);assert(await p2.locator('#storageNotice').isVisible());assert.equal(await p2.locator('.unit-card').count(),6);await blocked.close();
 assert.deepEqual(errors,[],'browser errors');assert.deepEqual(requests,[],'external runtime requests');console.log('PASS: offline browser, all units/labs/120 answers, 18 stars, full explanations, retry/reveal/refresh/variants, four topics, desktop/tablet/mobile, reduced motion and storage failure.');
 } finally { await browser.close(); }
}
