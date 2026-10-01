/* Pedagogy V2 Pilot Runtime - offline, deterministic, no external dependencies. */
'use strict';
(() => {
  const SCHEMA_VERSION='0.2', FLOW_VERSION='0.2.0', FLOW_ID='u1.trial.v2';
  const objectives={estimate:'O-U1-TRIAL-01',product:'O-U1-TRIAL-02',remainder:'O-U1-TRIAL-03',verify:'O-U1-TRIAL-04',explain:'O-U1-TRIAL-05'};
  const misconceptions={remainder:'M-U1-TRIAL-02',verifyApprox:'M-U1-TRIAL-03',luckyGuess:'M-U1-TRIAL-04'};
  const steps={
    diagnose:{phase:'diagnose',objective:objectives.remainder},reasonRemainder:{phase:'explain',objective:objectives.explain},
    repairRemainder:{phase:'repair',objective:objectives.remainder},repairAdjust:{phase:'repair',objective:objectives.remainder},freshRemainder:{phase:'repair',objective:objectives.remainder},
    contrast:{phase:'contrast',objective:objectives.verify},repairVerify:{phase:'repair',objective:objectives.verify},formalize:{phase:'formalize',objective:objectives.explain},
    independent:{phase:'independent',objective:objectives.product},transfer:{phase:'transfer',objective:objectives.estimate},complete:{phase:'complete',objective:objectives.verify}
  };
  const variants=[
    {id:'rv-172-28',a:172,b:28,q:5,p:140,r:32,answer:'can'},
    {id:'rv-252-36',a:252,b:36,q:6,p:216,r:36,answer:'can'},
    {id:'rv-329-47',a:329,b:47,q:6,p:282,r:47,answer:'can'}
  ];
  function enabled(){const q=new URLSearchParams(location.search);return q.get('pedagogyV2')!=='0';}
  function shouldHandle(unitId,nodeId){return enabled()&&unitId==='u1'&&nodeId==='trial';}
  function ensureState(root){root.pedagogy_v2??={schema_version:SCHEMA_VERSION,events:[],objectives:{},misconceptions:{},review_queue:[],sessions:{},variant_cursor:0};const p=root.pedagogy_v2;p.events??=[];p.objectives??={};p.misconceptions??={};p.review_queue??=[];p.sessions??={};p.variant_cursor??=0;return p;}
  function event(type,s,result={}){return{event_id:'e-'+Date.now()+'-'+Math.random().toString(36).slice(2,8),timestamp:new Date().toISOString(),course_id:'sujiao-math-2026',unit_id:'u1',node_id:'trial',objective_id:steps[s.current_step_id]?.objective||objectives.remainder,flow_id:FLOW_ID,step_id:s.current_step_id,type,result};}
  function emit(p,s,type,result={}){p.events.push(event(type,s,result));}
  function freshSession(){return{flow_id:FLOW_ID,flow_version:FLOW_VERSION,current_step_id:'diagnose',current_objective_id:objectives.remainder,lane:'standard',hint_level:'H0',step_attempts:{},pending_variant:null,renderer_semantic_state:{},seen_events:{},formalized:false};}
  function session(root){const p=ensureState(root);let s=p.sessions[FLOW_ID];if(!s||s.flow_version!==FLOW_VERSION){s=freshSession();p.sessions[FLOW_ID]=s;}return s;}
  function setStep(s,id,lane=s.lane){s.current_step_id=id;s.current_objective_id=steps[id].objective;s.lane=lane;s.hint_level='H0';}
  function markObjective(p,id,stage){p.objectives[id]={...(p.objectives[id]||{}),stage,updated_at:new Date().toISOString()};}
  function markMisconception(p,id,confidence='high'){p.misconceptions[id]={active:true,confidence,updated_at:new Date().toISOString()};}
  function schedule(p,s,objective,reason){if(!p.review_queue.some(x=>x.objective_id===objective&&x.status==='pending')){p.review_queue.push({review_id:'r-'+Date.now(),objective_id:objective,reason,tier:'R1',status:'pending',source_flow_id:FLOW_ID,original_step_id:s.current_step_id});emit(p,s,'REVIEW_SCHEDULED',{objective_id:objective,reason});}}
  function chooseVariant(p,s){if(s.pending_variant)return variants.find(v=>v.id===s.pending_variant)||variants[0];const v=variants[p.variant_cursor%variants.length];p.variant_cursor=(p.variant_cursor+1)%variants.length;s.pending_variant=v.id;emit(p,s,'VARIANT_ASSIGNED',{variant_id:v.id});return v;}
  function clearVariant(s){s.pending_variant=null;}
  function submit(root,response){
    const p=ensureState(root),s=session(root),id=s.current_step_id;s.step_attempts[id]=(s.step_attempts[id]||0)+1;emit(p,s,'RESPONSE_SUBMITTED',{response});
    if(id==='diagnose'){
      if(response==='can'){markObjective(p,objectives.remainder,'diagnostic_success');setStep(s,'reasonRemainder','standard');return;}
      markMisconception(p,misconceptions.remainder);emit(p,s,'MISCONCEPTION_OBSERVED',{misconception_id:misconceptions.remainder,confidence:'high'});setStep(s,'repairRemainder','repair');return;
    }
    if(id==='reasonRemainder'){
      if(response==='becauseEnough'){markObjective(p,objectives.explain,'diagnostic_success');emit(p,s,'EXPLANATION_PASS',{independent:true});setStep(s,'contrast','fast');return;}
      markMisconception(p,misconceptions.luckyGuess,'medium');emit(p,s,'MISCONCEPTION_OBSERVED',{misconception_id:misconceptions.luckyGuess,confidence:'medium'});setStep(s,'repairRemainder','repair');return;
    }
    if(id==='repairRemainder'){if(response==='enough'){setStep(s,'repairAdjust','repair');return;}bumpHint(root);return;}
    if(id==='repairAdjust'){
      if(response==='up'){emit(p,s,'REPAIR_SUCCESS',{misconception_id:misconceptions.remainder});p.misconceptions[misconceptions.remainder]={active:false,confidence:'high'};if(p.misconceptions[misconceptions.luckyGuess])p.misconceptions[misconceptions.luckyGuess].active=false;markObjective(p,objectives.remainder,'guided_success');schedule(p,s,objectives.remainder,'misconception_repair');chooseVariant(p,s);setStep(s,'freshRemainder','repair');return;}bumpHint(root);return;
    }
    if(id==='freshRemainder'){
      const v=chooseVariant(p,s);if(response===v.answer){emit(p,s,'REPAIR_SUCCESS',{fresh_variant:true,variant_id:v.id});markObjective(p,objectives.remainder,'independent_success');clearVariant(s);setStep(s,'contrast','standard');return;}bumpHint(root);return;
    }
    if(id==='contrast'){
      if(response==='28'){markObjective(p,objectives.verify,'guided_success');setStep(s,'formalize',s.lane);return;}
      markMisconception(p,misconceptions.verifyApprox);emit(p,s,'MISCONCEPTION_OBSERVED',{misconception_id:misconceptions.verifyApprox,confidence:'high'});setStep(s,'repairVerify','repair');return;
    }
    if(id==='repairVerify'){
      if(response==='28'){emit(p,s,'REPAIR_SUCCESS',{misconception_id:misconceptions.verifyApprox});p.misconceptions[misconceptions.verifyApprox]={active:false,confidence:'high'};markObjective(p,objectives.verify,'guided_success');setStep(s,'formalize','standard');return;}bumpHint(root);return;
    }
    if(id==='formalize'){
      if(response==='rule'){s.formalized=true;emit(p,s,'FORMALIZATION_UNLOCKED',{rule:'estimate-with-near-ten;verify-with-original;adjust-by-product-and-remainder'});markObjective(p,objectives.explain,'guided_success');setStep(s,'independent',s.lane);return;}bumpHint(root);return;
    }
    if(id==='independent'){
      if(response==='down'){emit(p,s,'INDEPENDENT_PASS',{independent:true});markObjective(p,objectives.product,'independent_success');setStep(s,'transfer',s.lane);return;}emit(p,s,'INDEPENDENT_FAIL',{response});s.lane='repair';bumpHint(root);return;
    }
    if(id==='transfer'){
      if(response==='fit'){emit(p,s,'TRANSFER_PASS',{independent:true});markObjective(p,objectives.estimate,'transfer_success');markObjective(p,objectives.verify,'transfer_success');setStep(s,'complete',s.lane);return;}emit(p,s,'TRANSFER_FAIL',{response});s.lane='repair';bumpHint(root);return;
    }
  }
  function bumpHint(root){const p=ensureState(root),s=session(root),n=Math.min(4,Number(s.hint_level.slice(1))+1);s.hint_level='H'+n;emit(p,s,'HINT_SHOWN',{level:s.hint_level});if(n===4){schedule(p,s,s.current_objective_id,'full_worked_example');if(s.current_step_id==='freshRemainder')chooseVariant(p,s);}}
  const hintText={
    diagnose:['','只比较余数和除数，不急着算完整答案。','余数如果达到除数，说明至少还能组成一整组。','这里余数28，除数也是28；把它们放在一起比较。','196－28×6＝28，而28÷28＝1，所以还可以再分一组。'],
    reasonRemainder:['','想一想“余数必须小于除数”是什么意思。','如果余数和除数相等，余数还没有小于除数。','28个正好就是一整组28个。','所以“能”不是猜的：因为余数28达到除数28，还能再组成一整组。'],
    repairRemainder:['','只比较28和28。','余数至少达到除数时还能组成一组。','把余下的28看成一盒完整的28。','28÷28＝1，余下28正好还能分1组。'],
    repairAdjust:['','还能多分一组时，商应该朝哪个方向变化？','多分一组意味着商增加1。','当前试商6，再多1组就是7。','6＋1＝7，所以应把商调大。'],
    freshRemainder:['','先看“余数”和“除数”的大小关系。','只要余数不小于除数，就还可以再分一组。','把图中的黄色余量和一整组宽度对比。','余数达到或超过除数，所以当前试商仍偏小。'],
    contrast:['','30只是为了让试商更方便，题目里的除数没有变。','真正检验答案，要用原题中的数。','原题是196÷28，所以乘回去应使用28。','近似数负责“估”，原除数负责“验”。'],
    repairVerify:['','哪个数来自原题，哪个数只是临时近似？','28来自原题，30只是帮助试商。','用28乘回去检验。','28×7＝196，所以验证阶段必须使用28。'],
    formalize:['','把“估”和“验”分开想。','试商可以借助接近的整十数，但验证要回到原除数。','再加上两条调商条件：乘积过大→调小；余数还能成组→调大。','完整规律：近似数帮助试商；原除数负责验证；乘积过大调小，余数不小于除数调大。'],
    independent:['','先看38×7和228谁大。','乘积超过被除数，说明分得太多。','38×7＝266＞228。','乘积过大，所以商7偏大，应调小。'],
    transfer:['','先看49×7和356，再看余数。','49×7＝343，没有超过356。','356－343＝13，且13＜49。','乘积不过大、余数又小于除数，所以试商7合适。']
  };
  function hint(root){const s=session(root);return hintText[s.current_step_id]?.[Number(s.hint_level.slice(1))]??'再检查数量关系。';}
  function reset(root){const p=ensureState(root);delete p.sessions[FLOW_ID];return session(root);}
  function ratioBar(total,used,group,label){const w=280,uw=Math.max(0,Math.min(w,w*used/total)),rw=w-uw,gw=Math.max(8,w*group/total);return `<div aria-label="${label}" style="margin:14px 0"><div style="display:flex;height:34px;border:2px solid #8fb2d7;border-radius:8px;overflow:hidden"><span style="width:${uw}px;background:#b8d9ff"></span><span style="width:${rw}px;background:#ffd16e"></span></div><div class="small muted" style="margin-top:6px">蓝色：已分 ${used}　黄色：余 ${total-used}　｜一整组相当于约 ${Math.round(gw)}px</div></div>`;}
  function compareBars(a,p,label){const max=Math.max(a,p),w=280;return `<div aria-label="${label}" style="margin:14px 0"><div class="small">被除数 ${a}</div><div style="height:20px;width:${w*a/max}px;background:#b8d9ff;border-radius:6px"></div><div class="small" style="margin-top:8px">除数×试商 ${p}</div><div style="height:20px;width:${w*p/max}px;background:#ffd16e;border-radius:6px"></div></div>`;}
  function viewModel(root){
    const p=ensureState(root),s=session(root),common={step:s.current_step_id,lane:s.lane,hint:s.hint_level},v=chooseVariantIfNeeded(p,s);
    const map={
      diagnose:{title:'先判断，再解释',prompt:'196÷28，把28看成30先试商6。28×6＝168，196－168＝28。余下的28还能再分成一整组吗？',choices:[['can','能'],['cannot','不能']],visual:ratioBar(196,168,28,'196中已分168，余28，与一组28比较')},
      reasonRemainder:{title:'你为什么判断“还能分”？',prompt:'选出真正能说明理由的一项。',choices:[['becauseEnough','因为余数28已经达到除数28，还能组成一整组'],['becauseNear','因为28接近30'],['becauseEven','因为196是偶数']],visual:ratioBar(196,168,28,'余数28与一组28等量')},
      repairRemainder:{title:'只修一个概念：余数约束',prompt:'每组需要28，余下也是28。这个余数够不够再组成一整组？',choices:[['enough','够'],['not','不够']],visual:ratioBar(196,168,28,'余数28等于一整组28')},
      repairAdjust:{title:'你来决定怎么调商',prompt:'既然还能再分一组，当前试商6应该怎样调整？',choices:[['up','调大'],['down','调小'],['same','不变']]},
      freshRemainder:{title:'换一道新题确认，不背答案',prompt:`${v.a}÷${v.b}先试商${v.q}。${v.b}×${v.q}＝${v.p}，余数${v.r}。还能再分一组吗？`,choices:[['can','能'],['cannot','不能']],visual:ratioBar(v.a,v.p,v.b,`${v.a}中已分${v.p}，余${v.r}，与一组${v.b}比较`),variant_id:v.id},
      contrast:{title:'试商和验证不是同一个数',prompt:'把28看成30只是为了试商。真正验证196÷28的商时，应该用哪个除数乘回去？',choices:[['28','原除数28'],['30','近似数30']]},
      repairVerify:{title:'回到原题',prompt:'原题是196÷28；30只是近似。验证商时该使用？',choices:[['28','原除数28'],['30','近似数30']]},
      formalize:{title:'现在才把规律说完整',prompt:'哪一句最准确地总结刚才的发现？',choices:[['rule','近似数帮助试商；原除数负责验证；乘积过大调小，余数不小于除数调大'],['near','只要把除数看成整十数，最后也一直用整十数'],['guess','试商主要靠猜，多试几次就行']]},
      independent:{title:'撤掉支架，独立判断',prompt:'228÷38试商7，38×7＝266。下一步应该？',choices:[['down','把商调小'],['up','把商调大'],['same','商不变']],visual:compareBars(228,266,'比较被除数228与乘积266')},
      transfer:{title:'迁移：换除数、换被除数',prompt:'356÷49，把49看成50后试商7。49×7＝343，余数13。这个试商怎样？',choices:[['fit','合适'],['up','偏小，要调大'],['down','偏大，要调小']],visual:ratioBar(356,343,49,'356中已分343，余13，小于一组49')},
      complete:{title:'你已经完成“试商—验证—调商”闭环',prompt:'试商可以借助近似数降低估算难度，但判断商是否合适必须回到原除数：乘积超过被除数就调小；余数不小于除数就调大。',choices:[]}
    };return{...common,...map[s.current_step_id]};
  }
  function chooseVariantIfNeeded(p,s){return s.current_step_id==='freshRemainder'?chooseVariant(p,s):variants[0];}
  function mountTrial({host,rootState,onChange}){ensureState(rootState);session(rootState);const render=()=>{const v=viewModel(rootState),p=ensureState(rootState),hn=Number(v.hint.slice(1));host.innerHTML=`<div class="connection"><strong>教学试点 · ${v.lane==='fast'?'快通道':v.lane==='repair'?'修复通道':'标准通道'}</strong><br>答对还要说得通；典型错误只修当前概念，不整段重学。</div><div class="lab-stage" style="padding:22px;text-align:left"><span class="pill">${v.step==='complete'?'完成':'试商与调商 V2'}</span><h3>${v.title}</h3><p style="font-size:1.08rem;line-height:1.8">${v.prompt}</p>${v.visual||''}<div class="options" id="p2Choices">${v.choices.map(([x,t])=>`<button class="btn" data-p2-answer="${x}">${t}</button>`).join('')}</div><div id="p2Feedback" class="status" role="status" aria-live="polite">${hn?`提示 ${hn}/4：${hint(rootState)}`:''}</div></div><div class="split-actions"><div><span class="small muted">当前步骤：${v.step} · 提示 ${v.hint}${v.variant_id?' · 变式 '+v.variant_id:''}</span><p class="small muted" style="margin:4px 0">学习证据 ${p.events.length} 条；不会影响旧版星级和题库。</p></div><div class="row">${v.step!=='complete'&&hn<4?'<button class="btn" data-p2-hint>给我一点提示</button>':''}<button class="btn" data-p2-reset>重新开始本知识点</button></div></div>`;host.querySelectorAll('[data-p2-answer]').forEach(b=>b.onclick=()=>{submit(rootState,b.dataset.p2Answer);onChange();render();});const hb=host.querySelector('[data-p2-hint]');if(hb)hb.onclick=()=>{bumpHint(rootState);onChange();render();};host.querySelector('[data-p2-reset]').onclick=()=>{reset(rootState);onChange();render();};if(v.step==='complete')emitOnceComplete(rootState);};render();}
  function emitOnceComplete(root){const p=ensureState(root),s=session(root);if(s.seen_events.complete)return;s.seen_events.complete=true;emit(p,s,'SESSION_SAVED',{complete:true});}
  globalThis.PedagogyV2={SCHEMA_VERSION,FLOW_VERSION,FLOW_ID,objectives,misconceptions,steps,variants,enabled,shouldHandle,ensureState,freshSession,session,submit,bumpHint,hint,viewModel,mountTrial,reset};
})();
