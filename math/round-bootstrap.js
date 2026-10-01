/* Registers u5 rounding flow with the generic engine. */
'use strict';
(() => {
 const C=RoundCourseDefinition;
 const runtime=PedagogyV2.register(C.definition,RoundRenderer,{badge:'边界概念试点',title:'四舍五入 · 数轴与分界',description:'先看位置和距离，再抽象口诀；最后反推完整区间。'});
 globalThis.RoundPedagogy={runtime,definition:C.definition,objectives:C.objectives,misconceptions:C.misconceptions};
})();
