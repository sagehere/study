/* Declarative Course Package loader. Converts validated data into engine definitions. */
'use strict';
(() => {
  const PACKAGE_VERSION='0.1.0';
  const allowedEffects=new Set(['emit','markObjective','markMisconception','resolveMisconception','scheduleReview','assignVariant','clearVariant','setFlag']);
  const allowedWhen=new Set(['*','variantAnswer']);
  function clone(x){return JSON.parse(JSON.stringify(x));}
  function validate(pkg,rendererRegistry={}){
    const errors=[];
    if(!pkg||typeof pkg!=='object'||Array.isArray(pkg))return['package must be an object'];
    for(const k of ['packageVersion','schemaVersion','flowId','flowVersion','courseId','unitId','nodeId','initialStep','steps'])if(pkg[k]===undefined||pkg[k]===null||pkg[k]==='')errors.push('missing '+k);
    if(pkg.packageVersion!==PACKAGE_VERSION)errors.push('unsupported packageVersion '+pkg.packageVersion);
    if(!pkg.steps||typeof pkg.steps!=='object'||Array.isArray(pkg.steps))return errors.concat('steps must be an object');
    if(!pkg.steps[pkg.initialStep])errors.push('initialStep missing in steps');
    const objectiveIds=new Set(Object.values(pkg.objectives||{})),misconceptionIds=new Set(Object.values(pkg.misconceptions||{}));
    for(const [id,s] of Object.entries(pkg.steps)){
      if(!s.objectiveId)errors.push(id+': missing objectiveId'); else if(objectiveIds.size&&!objectiveIds.has(s.objectiveId))errors.push(id+': unknown objectiveId '+s.objectiveId);
      if(!s.view||typeof s.view!=='object'||Array.isArray(s.view))errors.push(id+': view must be data object');
      if(s.view?.renderer){if(typeof s.view.renderer!=='string')errors.push(id+': renderer must be string');else if(typeof rendererRegistry[s.view.renderer]!=='function')errors.push(id+': unknown renderer '+s.view.renderer);if(s.view.rendererArgs!==undefined&&(!s.view.rendererArgs||typeof s.view.rendererArgs!=='object'))errors.push(id+': rendererArgs must be object or array');}
      if(s.view?.promptTemplate!==undefined&&typeof s.view.promptTemplate!=='string')errors.push(id+': promptTemplate must be string');
      if(s.hints&&(!Array.isArray(s.hints)||s.hints.length!==5||s.hints.some(x=>typeof x!=='string')))errors.push(id+': hints must be 5 strings');
      if(s.variants&&(!Array.isArray(s.variants)||s.variants.some(v=>!v||typeof v!=='object'||!v.id||v.answer===undefined)))errors.push(id+': variants malformed');
      for(const tr of s.transitions||[]){
        if(typeof tr.when!=='string')errors.push(id+': transition when must be string');
        if(tr.when?.startsWith('$'))errors.push(id+': executable/expressive transition forbidden');
        if(tr.to&&!pkg.steps[tr.to])errors.push(id+': transition target '+tr.to+' missing');
        for(const e of tr.effects||[]){if(!allowedEffects.has(e.type))errors.push(id+': unsupported effect '+e.type);if(e.id&&misconceptionIds.size&&!misconceptionIds.has(e.id))errors.push(id+': unknown misconception '+e.id);}
      }
      // Reject code-bearing keys or values recursively inside package data.
      scan(s,id,errors);
    }
    return errors;
  }
  function scan(value,path,errors){
    if(typeof value==='function'){errors.push(path+': function forbidden');return;}
    if(typeof value==='string'&&/\b(?:eval|new Function|javascript:)\b/i.test(value))errors.push(path+': executable text forbidden');
    if(value&&typeof value==='object'){for(const [k,v] of Object.entries(value)){if(['script','code','expression','function'].includes(k))errors.push(path+': executable key forbidden '+k);scan(v,path+'.'+k,errors);}}
  }
  function template(text,ctx){if(typeof text!=='string')return text;return text.replace(/\{\{\s*([a-zA-Z0-9_.]+)\s*\}\}/g,(_,path)=>{const v=path.split('.').reduce((a,k)=>a?.[k],ctx);return v===undefined?'':String(v);});}
  function templateDeep(value,ctx){if(typeof value==='string')return template(value,ctx);if(Array.isArray(value))return value.map(x=>templateDeep(x,ctx));if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,templateDeep(v,ctx)]));return value;}
  function compile(pkg,rendererRegistry={}){
    const errors=validate(pkg,rendererRegistry);if(errors.length)throw new Error('Invalid course package: '+errors.join('; '));
    const def=clone(pkg);delete def.packageVersion;delete def.labels;
    for(const [id,step] of Object.entries(pkg.steps)){
      const raw=step.view;
      def.steps[id].view=({variant,renderers})=>{
        const ctx={variant:variant||{},course:pkg.meta||{}};
        const view=templateDeep(raw,ctx),name=view.renderer,args=view.rendererArgs;
        delete view.renderer;delete view.rendererArgs;delete view.promptTemplate;
        if(raw.promptTemplate)view.prompt=template(raw.promptTemplate,ctx);
        if(name){const resolved=templateDeep(args||{},ctx);view.visual=Array.isArray(resolved)?renderers[name](...resolved):renderers[name](resolved);}
        return view;
      };
    }
    return{definition:def,labels:clone(pkg.labels||{}),objectives:clone(pkg.objectives||{}),misconceptions:clone(pkg.misconceptions||{})};
  }
  function register(pkg,rendererRegistry={}){const c=compile(pkg,rendererRegistry),runtime=PedagogyV2.register(c.definition,rendererRegistry,c.labels);return{runtime,...c};}
  globalThis.CoursePackageLoader={PACKAGE_VERSION,validate,compile,register};
})();
