/* Registers the first course flow with the generic engine. */
'use strict';
(() => {
  const C=TrialCourseDefinition;
  const runtime=PedagogyV2.register(C.definition,TrialRenderer,{badge:'教学试点',title:'试商与调商 V2',description:'答对还要说得通；典型错误只修当前概念，不整段重学。'});
  // Compatibility/debug surface used by deterministic tests and future authoring tools.
  globalThis.TrialPedagogy={runtime,definition:C.definition,objectives:C.objectives,misconceptions:C.misconceptions,variants:C.variants};
})();
