/* Generic offline learning-flow engine. No course-specific knowledge belongs here. */
'use strict';
(() => {
  const ENGINE_VERSION='0.1.0';
  function ensureRoot(root,schemaVersion){
    root.pedagogy_v2??={schema_version:schemaVersion,events:[],objectives:{},misconceptions:{},review_queue:[],sessions:{},variant_cursors:{}};
    const p=root.pedagogy_v2;p.events??=[];p.objectives??={};p.misconceptions??={};p.review_queue??=[];p.sessions??={};p.variant_cursors??={};return p;
  }
  function validate(def){
    const errors=[];if(!def||typeof def!=='object')return['definition must be object'];
    for(const k of ['schemaVersion','flowId','flowVersion','courseId','unitId','nodeId','initialStep','steps'])if(!def[k])errors.push('missing '+k);
    if(!def.steps||typeof def.steps!=='object')return errors;
    if(!def.steps[def.initialStep])errors.push('initialStep missing in steps');
    for(const [id,s] of Object.entries(def.steps)){
      if(!s.objectiveId)errors.push(id+': missing objectiveId');
      if(!s.view)errors.push(id+': missing view');
      for(const tr of s.transitions||[]){if(!tr.when)errors.push(id+': transition missing when');if(tr.to&&!def.steps[tr.to])errors.push(id+': transition target '+tr.to+' missing');}
      if(s.hints&&(!Array.isArray(s.hints)||s.hints.length!==5))errors.push(id+': hints must contain H0-H4');
    }
    if(def.steps[def.initialStep]){const seen=new Set(),walk=id=>{if(seen.has(id)||!def.steps[id])return;seen.add(id);for(const tr of def.steps[id].transitions||[])if(tr.to)walk(tr.to);};walk(def.initialStep);for(const id of Object.keys(def.steps))if(!seen.has(id))errors.push(id+': unreachable step');for(const [id,s] of Object.entries(def.steps))if(id!== 'complete'&&seen.has(id)&&(s.transitions||[]).length===0)errors.push(id+': non-terminal dead end');}
    return errors;
  }
  function make(def,rendererRegistry={}){
    const validation=validate(def);if(validation.length)throw new Error('Invalid learning flow: '+validation.join('; '));
    function event(type,s,result={}){return{event_id:'e-'+Date.now()+'-'+Math.random().toString(36).slice(2,8),timestamp:new Date().toISOString(),course_id:def.courseId,unit_id:def.unitId,node_id:def.nodeId,objective_id:def.steps[s.current_step_id]?.objectiveId||null,flow_id:def.flowId,step_id:s.current_step_id,type,result};}
    function emit(p,s,type,result={}){p.events.push(event(type,s,result));}
    function freshSession(){return{flow_id:def.flowId,flow_version:def.flowVersion,current_step_id:def.initialStep,current_objective_id:def.steps[def.initialStep].objectiveId,lane:'standard',hint_level:'H0',step_attempts:{},pending_variant:null,renderer_semantic_state:{},seen_events:{},flags:{}};}
    function state(root){return ensureRoot(root,def.schemaVersion);}
    function session(root){const p=state(root);let s=p.sessions[def.flowId];if(!s||s.flow_version!==def.flowVersion){s=freshSession();p.sessions[def.flowId]=s;}return s;}
    function setStep(s,id,lane=s.lane){s.current_step_id=id;s.current_objective_id=def.steps[id].objectiveId;s.lane=lane;s.hint_level='H0';}
    function markObjective(p,id,stage){p.objectives[id]={...(p.objectives[id]||{}),stage,updated_at:new Date().toISOString()};}
    function markMisconception(p,id,confidence='high'){p.misconceptions[id]={active:true,confidence,updated_at:new Date().toISOString()};}
    function resolveMisconception(p,id,confidence='high'){if(id)p.misconceptions[id]={...(p.misconceptions[id]||{}),active:false,confidence,updated_at:new Date().toISOString()};}
    function schedule(p,s,objective,reason,tier='R1'){if(!p.review_queue.some(x=>x.objective_id===objective&&x.status==='pending')){p.review_queue.push({review_id:'r-'+Date.now(),objective_id:objective,reason,tier,status:'pending',source_flow_id:def.flowId,original_step_id:s.current_step_id});emit(p,s,'REVIEW_SCHEDULED',{objective_id:objective,reason,tier});}}
    function variantsFor(step){return def.steps[step]?.variants||[];}
    function chooseVariant(p,s){if(s.pending_variant){const found=variantsFor(s.current_step_id).find(v=>v.id===s.pending_variant);if(found)return found;}const vs=variantsFor(s.current_step_id);if(!vs.length)return null;const key=def.flowId+':'+s.current_step_id,c=p.variant_cursors[key]||0,v=vs[c%vs.length];p.variant_cursors[key]=(c+1)%vs.length;s.pending_variant=v.id;emit(p,s,'VARIANT_ASSIGNED',{variant_id:v.id});return v;}
    function clearVariant(s){s.pending_variant=null;}
    function applyEffects(root,s,effects=[],ctx={}){const p=state(root);for(const e of effects){
      if(e.type==='emit')emit(p,s,e.event,e.result||ctx);
      else if(e.type==='markObjective')markObjective(p,e.objectiveId||s.current_objective_id,e.stage);
      else if(e.type==='markMisconception'){markMisconception(p,e.id,e.confidence);emit(p,s,'MISCONCEPTION_OBSERVED',{misconception_id:e.id,confidence:e.confidence||'high'});}
      else if(e.type==='resolveMisconception')resolveMisconception(p,e.id,e.confidence);
      else if(e.type==='scheduleReview')schedule(p,s,e.objectiveId||s.current_objective_id,e.reason,e.tier||'R1');
      else if(e.type==='assignVariant')chooseVariant(p,s);
      else if(e.type==='clearVariant')clearVariant(s);
      else if(e.type==='setFlag')s.flags[e.key]=e.value;
    }}
    function transitionMatches(tr,response,variant){if(tr.when==='*')return true;if(tr.when==='variantAnswer')return variant&&response===variant.answer;return response===tr.when;}
    function submit(root,response){const p=state(root),s=session(root),step=def.steps[s.current_step_id],variant=step.variants?.length?chooseVariant(p,s):null;s.step_attempts[s.current_step_id]=(s.step_attempts[s.current_step_id]||0)+1;emit(p,s,'RESPONSE_SUBMITTED',{response});const tr=(step.transitions||[]).find(x=>transitionMatches(x,response,variant));if(!tr){bumpHint(root);return;}applyEffects(root,s,tr.effects,{response,variant_id:variant?.id||null});if(tr.lane)s.lane=tr.lane;if(tr.to){setStep(s,tr.to,tr.lane||s.lane);if(def.steps[tr.to]?.variants?.length)chooseVariant(p,s);}}
    function bumpHint(root){const p=state(root),s=session(root),n=Math.min(4,Number(s.hint_level.slice(1))+1);s.hint_level='H'+n;emit(p,s,'HINT_SHOWN',{level:s.hint_level});const step=def.steps[s.current_step_id];if(n===4){if(step.reviewOnH4!==false)schedule(p,s,s.current_objective_id,'full_worked_example');if(step.variants?.length)chooseVariant(p,s);}return s.hint_level;}
    function hint(root){const s=session(root),h=def.steps[s.current_step_id].hints||['','','','',''];return h[Number(s.hint_level.slice(1))]??'';}
    function viewModel(root){const p=state(root),s=session(root),step=def.steps[s.current_step_id],variant=step.variants?.length?chooseVariant(p,s):null;const view=typeof step.view==='function'?step.view({session:s,state:p,variant,renderers:rendererRegistry}):step.view;return{step:s.current_step_id,lane:s.lane,hint:s.hint_level,variant_id:variant?.id||null,...view};}
    function reset(root){const p=state(root);delete p.sessions[def.flowId];return session(root);}
    function emitOnceComplete(root){const p=state(root),s=session(root);if(s.seen_events.complete)return;s.seen_events.complete=true;emit(p,s,'SESSION_SAVED',{complete:true});}
    function mount({host,rootState,onChange,labels={}}){session(rootState);const render=()=>{const v=viewModel(rootState),p=state(rootState),hn=Number(v.hint.slice(1)),laneLabel=v.lane==='fast'?(labels.fast||'快通道'):v.lane==='repair'?(labels.repair||'修复通道'):(labels.standard||'标准通道');host.innerHTML=`<div class="connection"><strong>${labels.badge||'教学流程'} · ${laneLabel}</strong><br>${labels.description||'先判断，再解释；需要时只修复当前概念。'}</div><div class="lab-stage" style="padding:22px;text-align:left"><span class="pill">${v.step==='complete'?(labels.complete||'完成'):(labels.title||'学习流程')}</span><h3>${v.title}</h3><p style="font-size:1.08rem;line-height:1.8">${v.prompt}</p>${v.visual||''}<div class="options">${(v.choices||[]).map(([x,t])=>`<button class="btn" data-flow-answer="${x}">${t}</button>`).join('')}</div><div data-flow-feedback class="status" role="status" aria-live="polite">${hn?`提示 ${hn}/4：${hint(rootState)}`:''}</div></div><div class="split-actions"><div><span class="small muted">当前步骤：${v.step} · 提示 ${v.hint}${v.variant_id?' · 变式 '+v.variant_id:''}</span><p class="small muted" style="margin:4px 0">学习证据 ${p.events.length} 条</p></div><div class="row">${v.step!=='complete'&&hn<4?'<button class="btn" data-flow-hint>给我一点提示</button>':''}<button class="btn" data-flow-reset>重新开始本知识点</button></div></div>`;host.querySelectorAll('[data-flow-answer]').forEach(b=>b.onclick=()=>{submit(rootState,b.dataset.flowAnswer);onChange();render();});const hb=host.querySelector('[data-flow-hint]');if(hb)hb.onclick=()=>{bumpHint(rootState);onChange();render();};host.querySelector('[data-flow-reset]').onclick=()=>{reset(rootState);onChange();render();};if(v.step==='complete')emitOnceComplete(rootState);};render();}
    return{definition:def,ENGINE_VERSION,validate:()=>validate(def),state,session,submit,bumpHint,hint,viewModel,reset,emitOnceComplete,mount};
  }
  globalThis.LearningFlowEngine={ENGINE_VERSION,validate,make};
})();
