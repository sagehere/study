/* Generic long-division structure renderer. */
'use strict';
(() => {
  function longDivision({dividend,divisor,quotient='',current='',product='',remainder='',bringDown='',highlight='none',label=''}){
    const row=(name,value,key)=>`<div style="display:grid;grid-template-columns:100px 1fr;gap:10px;padding:7px 10px;border-radius:8px;${highlight===key?'background:#fff1c9;':''}"><span class="small muted">${name}</span><strong style="font-variant-numeric:tabular-nums">${value}</strong></div>`;
    return `<div role="img" aria-label="${label||`${dividend}除以${divisor}的竖式结构`}" style="margin:14px 0;max-width:360px"><div class="connection" style="text-align:center;margin:0 0 8px"><strong>${dividend} ÷ ${divisor}</strong>${quotient!==''?`　商 ${quotient}`:''}</div>${current!==''?row('当前被除数',current,'current'):''}${product!==''?row('商×除数',product,'product'):''}${remainder!==''?row('当前余数',remainder,'remainder'):''}${bringDown!==''?row('落下下一位',bringDown,'bringDown'):''}<p class="small muted" style="margin:8px 10px 0">除到被除数的哪一位，商就写在那一位上面；每一步余数都必须小于除数。</p></div>`;
  }
  globalThis.DivisionRenderer={longDivision};
})();
