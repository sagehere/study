/* Pedagogy V2 registry/facade. Course knowledge is registered outside this file. */
'use strict';
(() => {
  const registry=new Map();
  function key(unitId,nodeId){return unitId+':'+nodeId;}
  function register(definition,renderers={},labels={}){
    const runtime=LearningFlowEngine.make(definition,renderers);registry.set(key(definition.unitId,definition.nodeId),{runtime,labels});return runtime;
  }
  function enabled(){const q=new URLSearchParams(location.search);return q.get('pedagogyV2')!=='0';}
  function entry(unitId,nodeId){return registry.get(key(unitId,nodeId));}
  function shouldHandle(unitId,nodeId){return enabled()&&registry.has(key(unitId,nodeId));}
  function mount({unitId,nodeId,host,rootState,onChange}){const e=entry(unitId,nodeId);if(!e)throw new Error('No pedagogy flow registered for '+key(unitId,nodeId));e.runtime.mount({host,rootState,onChange,labels:e.labels});}
  const api={register,enabled,entry,shouldHandle,mount,registry};
  globalThis.PedagogyV2=api;
})();
