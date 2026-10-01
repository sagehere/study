/* Registers u2 perimeter/area flows with the generic engine. */
'use strict';
(() => {
 const C=AreaCourseDefinitions,labels={badge:'概念教学试点',description:'先区分测量对象，再形成公式；错误只修当前概念。'};
 const meaning=PedagogyV2.register(C.meaning,AreaRenderer,{...labels,title:'周长与面积 · 意义'});
 const formula=PedagogyV2.register(C.formula,AreaRenderer,{...labels,title:'周长与面积 · 公式'});
 globalThis.AreaPedagogy={meaning,formula,definitions:C};
})();
