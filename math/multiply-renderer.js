/* Renderer adapter for multi-digit multiplication partial products. */
'use strict';
(() => {
  function partialProducts({a,b,onesProduct,tensProduct,total,highlight='none'}){
    const tens=Math.floor(b/10),ones=b%10;
    const row=(label,value,key,note)=>`<div style="display:grid;grid-template-columns:92px 1fr;gap:10px;align-items:center;padding:8px 10px;border-radius:8px;${highlight===key?'background:#fff1c9;':''}"><span class="small muted">${label}</span><strong style="text-align:right;font-variant-numeric:tabular-nums">${value}</strong>${note?`<span></span><span class="small muted" style="text-align:right">${note}</span>`:''}</div>`;
    return `<div role="img" aria-label="${a}乘${b}的部分积与位值" style="margin:14px 0;max-width:360px"><div class="connection" style="margin:0 0 8px;text-align:center"><strong>${a} × ${b}</strong>　=　${a} × ${tens*10} + ${a} × ${ones}</div>${row(`个位 ${ones}`,onesProduct,'ones',`${a}×${ones}`)}${row(`十位 ${tens}`,tensProduct,'tens',`${a}×${tens*10}`)}<div style="border-top:2px solid #8fb2d7;margin:4px 10px"></div>${row('合并',total,'total','两个部分积相加')}<p class="small muted" style="margin:8px 10px 0">十位数字表示“几个十”，因此第二个部分积必须体现十位价值。</p></div>`;
  }
  globalThis.MultiplyRenderer={partialProducts};
})();
