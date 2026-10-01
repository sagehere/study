/* Pedagogy V2 Pilot Runtime - offline, deterministic, no external dependencies. */
'use strict';
(() => {
  const SCHEMA_VERSION='0.2', FLOW_VERSION='0.1.0', FLOW_ID='u1.trial.v2';
  const objectives={
    estimate:'O-U1-TRIAL-01',
    product:'O-U1-TRIAL-02',
    remainder:'O-U1-TRIAL-03',
    verify:'O-U1-TRIAL-04'
  };
  const misconceptions={
    remainder:'M-U1-TRIAL-02',
    verifyApprox:'M-U1-TRIAL-03'
  };
  const steps={
    diagnose:{phase:'diagnose',objective:objectives.remainder},
    repairRemainder:{phase:'repair',objective:objectives.remainder},
    repairAdjust:{phase:'repair',objective:objectives.remainder},
    freshRemainder:{phase:'repair',objective:objectives.remainder},
    contrast:{phase:'contrast',objective:objectives.verify},
    repairVerify:{phase:'repair',objective:objectives.verify},
    independent:{phase:'independent',objective:objectives.product},
    transfer:{phase:'transfer',objective:objectives.estimate},
    complete:{phase:'complete',objective:objectives.verify}
  };
  function enabled(){
    const q=new URLSearchParams(location.search);
    return q.get('pedagogyV2')!=='0';
  }
  function shouldHandle(unitId,nodeId){return enabled()&&unitId==='u1'&&nodeId==='trial';}
  function ensureState(root){
    root.pedagogy_v2??={schema_version:SCHEMA_VERSION,events:[],objectives:{},misconceptions:{},review_queue:[],sessions:{}};
    const p=root.pedagogy_v2;
    p.events??=[];p.objectives??={};p.misconceptions??={};p.review_queue??=[];p.sessions??={};
    return p;
  }
  function event(type,s,result={}){
    return{event_id:'e-'+Date.now()+'-'+Math.random().toString(36).slice(2,8),timestamp:new Date().toISOString(),course_id:'sujiao-math-2026',unit_id:'u1',node_id:'trial',objective_id:steps[s.current_step_id]?.objective||objectives.remainder,flow_id:FLOW_ID,step_id:s.current_step_id,type,result};
  }
  function emit(p,s,type,result={}){p.events.push(event(type,s,result));}
  function freshSession(){
    return{flow_id:FLOW_ID,flow_version:FLOW_VERSION,current_step_id:'diagnose',current_objective_id:objectives.remainder,lane:'standard',hint_level:'H0',step_attempts:{},pending_variant:null,renderer_semantic_state:{},seen_events:{}};
  }
  function session(root){
    const p=ensureState(root);
    let s=p.sessions[FLOW_ID];
    if(!s||s.flow_version!==FLOW_VERSION){s=freshSession();p.sessions[FLOW_ID]=s;}
    return s;
  }
  function setStep(s,id,lane=s.lane){s.current_step_id=id;s.current_objective_id=steps[id].objective;s.lane=lane;s.hint_level='H0';}
  function markObjective(p,id,stage){p.objectives[id]={...(p.objectives[id]||{}),stage,updated_at:new Date().toISOString()};}
  function markMisconception(p,id,confidence='high'){p.misconceptions[id]={active:true,confidence,updated_at:new Date().toISOString()};}
  function schedule(p,s,objective,reason){
    if(!p.review_queue.some(x=>x.objective_id===objective&&x.status==='pending')){
      p.review_queue.push({review_id:'r-'+Date.now(),objective_id:objective,reason,tier:'R1',status:'pending',source_flow_id:FLOW_ID,original_step_id:s.current_step_id});
      emit(p,s,'REVIEW_SCHEDULED',{objective_id:objective,reason});
    }
  }
  function submit(root,response){
    const p=ensureState(root),s=session(root),id=s.current_step_id;
    s.step_attempts[id]=(s.step_attempts[id]||0)+1;
    emit(p,s,'RESPONSE_SUBMITTED',{response});
    if(id==='diagnose'){
      if(response==='can'){s.lane='fast';emit(p,s,'SELF_CORRECTION',{diagnostic:true});setStep(s,'contrast','fast');return;}
      markMisconception(p,misconceptions.remainder);emit(p,s,'MISCONCEPTION_OBSERVED',{misconception_id:misconceptions.remainder,confidence:'high'});setStep(s,'repairRemainder','repair');return;
    }
    if(id==='repairRemainder'){
      if(response==='enough'){setStep(s,'repairAdjust','repair');return;}
      bumpHint(root);return;
    }
    if(id==='repairAdjust'){
      if(response==='up'){emit(p,s,'REPAIR_SUCCESS',{misconception_id:misconceptions.remainder});p.misconceptions[misconceptions.remainder]={active:false,confidence:'high'};markObjective(p,objectives.remainder,'guided_success');schedule(p,s,objectives.remainder,'misconception_repair');setStep(s,'freshRemainder','repair');return;}
      bumpHint(root);return;
    }
    if(id==='freshRemainder'){
      if(response==='can'){emit(p,s,'REPAIR_SUCCESS',{fresh_variant:true});markObjective(p,objectives.remainder,'independent_success');setStep(s,'contrast','standard');return;}
      bumpHint(root);return;
    }
    if(id==='contrast'){
      if(response==='28'){emit(p,s,'FORMALIZATION_UNLOCKED',{rule:'trial-with-approximate-verify-with-original'});markObjective(p,objectives.verify,'guided_success');setStep(s,'independent',s.lane);return;}
      markMisconception(p,misconceptions.verifyApprox);emit(p,s,'MISCONCEPTION_OBSERVED',{misconception_id:misconceptions.verifyApprox,confidence:'high'});setStep(s,'repairVerify','repair');return;
    }
    if(id==='repairVerify'){
      if(response==='28'){emit(p,s,'REPAIR_SUCCESS',{misconception_id:misconceptions.verifyApprox});p.misconceptions[misconceptions.verifyApprox]={active:false,confidence:'high'};markObjective(p,objectives.verify,'guided_success');setStep(s,'independent','standard');return;}
      bumpHint(root);return;
    }
    if(id==='independent'){
      if(response==='down'){emit(p,s,'INDEPENDENT_PASS',{independent:true});markObjective(p,objectives.product,'independent_success');setStep(s,'transfer',s.lane);return;}
      emit(p,s,'INDEPENDENT_FAIL',{response});s.lane='repair';bumpHint(root);return;
    }
    if(id==='transfer'){
      if(response==='fit'){emit(p,s,'TRANSFER_PASS',{independent:true});markObjective(p,objectives.estimate,'transfer_success');markObjective(p,objectives.verify,'transfer_success');setStep(s,'complete',s.lane);return;}
      emit(p,s,'TRANSFER_FAIL',{response});s.lane='repair';bumpHint(root);return;
    }
  }
  function bumpHint(root){
    const p=ensureState(root),s=session(root),n=Math.min(4,Number(s.hint_level.slice(1))+1);
    s.hint_level='H'+n;emit(p,s,'HINT_SHOWN',{level:s.hint_level});
    if(n===4)schedule(p,s,s.current_objective_id,'full_worked_example');
  }
  const hintText={
    diagnose:['比较余数和除数。','如果余数和除数一样大，还能不能再拿出一组？','把28个物品看成一整组。','196-168=28，而每组正好28。','余数达到除数，说明还可以再分一组。'],
    repairRemainder:['只比较28和28。','余数至少达到除数时还能组成一组。','画一组28个，再看余下28个。','28÷28=1。','余下28正好还能分1组。'],
    repairAdjust:['想想还能多分一组时，商应该怎样变。','多分一组意味着商增加1。','当前试商6，再多1组。','6+1=7。','应把商调大。'],
    freshRemainder:['先算28×5，再看余数。','172-140=32。','比较32和28。','32里还能再拿出28。','余数不小于除数，试商偏小。'],
    contrast:['试商时可以近似，验证时要回到原题。','原除数是28。','比较28×商与被除数。','30只用于估一估商。','验证必须使用原除数28。'],
    repairVerify:['哪个数来自原题？','28是原除数，30只是近似数。','用28乘回去。','28×7=196。','验证阶段使用原除数28。'],
    independent:['先看乘积是否超过被除数。','38×7=266。','266比228大。','乘积过大说明商偏大。','所以商要调小。'],
    transfer:['算49×7。','49×7=343。','356-343=13。','13<49且343<356。','试商7合适。']
  };
  function hint(root){const s=session(root);return hintText[s.current_step_id]?.[Number(s.hint_level.slice(1))]||'再检查数量关系。';}
  function reset(root){const p=ensureState(root);delete p.sessions[FLOW_ID];return session(root);}
  function viewModel(root){
    const s=session(root),common={step:s.current_step_id,lane:s.lane,hint:s.hint_level};
    const map={
      diagnose:{title:'先判断：余数还能不能成一组？',prompt:'196÷28，把28看成30先试商6。28×6＝168，196－168＝28。余下的28还能再分成一整组吗？',choices:[['can','能'],['cannot','不能']]},
      repairRemainder:{title:'只看一个事实',prompt:'每组需要28，余下也是28。这个余数够不够再组成一整组？',choices:[['enough','够'],['not','不够']]},
      repairAdjust:{title:'你来决定怎么调商',prompt:'既然还能再分一组，当前试商6应该怎样调整？',choices:[['up','调大'],['down','调小'],['same','不变']]},
      freshRemainder:{title:'换一道新题确认',prompt:'172÷28先试商5。28×5＝140，余数32。还能再分一组吗？',choices:[['can','能'],['cannot','不能']]},
      contrast:{title:'试商和验证不是同一个数',prompt:'把28看成30只是为了试商。真正验证196÷28的商时，应该用哪个除数乘回去？',choices:[['28','28'],['30','30']]},
      repairVerify:{title:'回到原题',prompt:'原题是196÷28；30只是近似。验证商时该使用？',choices:[['28','原除数28'],['30','近似数30']]},
      independent:{title:'独立判断一次',prompt:'228÷38试商7，38×7＝266。下一步应该？',choices:[['down','把商调小'],['up','把商调大'],['same','商不变']]},
      transfer:{title:'迁移：没有提示的试商',prompt:'356÷49，把49看成50后试商7。49×7＝343，余数13。这个试商怎样？',choices:[['fit','合适'],['up','偏小，要调大'],['down','偏大，要调小']]},
      complete:{title:'这一轮你是怎么判断的？',prompt:'试商可以用接近的整十数帮助估计；真正验证时回到原除数。乘积过大就调小，余数还能成组就调大。',choices:[]}
    };
    return{...common,...map[s.current_step_id]};
  }
  function mountTrial({host,rootState,onChange}){
    ensureState(rootState);const s=session(rootState);
    const render=()=>{
      const v=viewModel(rootState),p=ensureState(rootState);
      const progress=['diagnose','contrast','independent','transfer','complete'].indexOf(v.step);
      host.innerHTML=`<div class="connection"><strong>教学试点 · ${v.lane==='fast'?'快通道':v.lane==='repair'?'修复通道':'标准通道'}</strong><br>一次只做一个判断；答错时只修复当前概念，不重学整个知识点。</div><div class="lab-stage" style="padding:22px;text-align:left"><span class="pill">${v.step==='complete'?'完成':'试商与调商 V2'}</span><h3>${v.title}</h3><p style="font-size:1.08rem;line-height:1.8">${v.prompt}</p><div class="options" id="p2Choices">${v.choices.map(([x,t])=>`<button class="btn" data-p2-answer="${x}">${t}</button>`).join('')}</div><div id="p2Feedback" class="status" role="status" aria-live="polite"></div></div><div class="split-actions"><div><span class="small muted">当前步骤：${v.step} · 提示 ${v.hint}</span><p class="small muted" style="margin:4px 0">学习证据 ${p.events.length} 条；不会影响旧版星级和题库。</p></div><div class="row">${v.step!=='complete'?'<button class="btn" data-p2-hint>给我一点提示</button>':''}<button class="btn" data-p2-reset>重新开始本知识点</button></div></div>`;
      host.querySelectorAll('[data-p2-answer]').forEach(b=>b.onclick=()=>{submit(rootState,b.dataset.p2Answer);onChange();render();});
      const hb=host.querySelector('[data-p2-hint]');if(hb)hb.onclick=()=>{bumpHint(rootState);onChange();render();host.querySelector('#p2Feedback').textContent=hint(rootState);};
      host.querySelector('[data-p2-reset]').onclick=()=>{reset(rootState);onChange();render();};
      if(v.step==='complete')emitOnceComplete(rootState);
    };
    render();
  }
  function emitOnceComplete(root){
    const p=ensureState(root),s=session(root);if(s.seen_events.complete)return;
    s.seen_events.complete=true;emit(p,s,'SESSION_SAVED',{complete:true});
  }
  globalThis.PedagogyV2={SCHEMA_VERSION,FLOW_VERSION,FLOW_ID,objectives,misconceptions,steps,enabled,shouldHandle,ensureState,freshSession,session,submit,bumpHint,hint,viewModel,mountTrial,reset};
})();