/* Registers u3 price flow with the generic engine. */
'use strict';
(() => {
 const C=PriceCourseDefinition;
 const runtime=PedagogyV2.register(C.definition,PriceRenderer,{badge:'数量关系试点',title:'单价 · 数量 · 总价',description:'先理解“每1份”，再切换未知量；复合题先拆关系。'});
 globalThis.PricePedagogy={runtime,definition:C.definition,objectives:C.objectives,misconceptions:C.misconceptions};
})();
