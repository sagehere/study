/* Generic four-digits-per-group place-value renderer. */
'use strict';
(() => {
  function placeValueGroups({value,label=''}){
    const raw=String(value).replace(/\D/g,'')||'0',pad=raw.padStart(Math.ceil(raw.length/4)*4,'0'),groups=[];
    for(let i=0;i<pad.length;i+=4)groups.push(pad.slice(i,i+4));
    const names=['个级','万级','亿级','万亿级','亿亿级'];
    const cells=groups.map((g,i)=>{const name=names[groups.length-1-i]||`第${groups.length-i}级`;return `<div style="min-width:88px;border:1px solid #b9cde3;border-radius:8px;padding:8px;text-align:center"><div class="small muted">${name}</div><strong style="letter-spacing:.15em;font-variant-numeric:tabular-nums">${g}</strong></div>`;}).join('');
    return `<div role="img" aria-label="${label||`${raw}按四位一级分组`}" class="scrollbox" style="margin:14px 0"><div style="display:flex;gap:8px;min-width:max-content">${cells}</div><p class="small muted" style="margin:8px 0 0">从右边起每四位一级；读数时先按级处理，再判断零是否需要读出。</p></div>`;
  }
  globalThis.PlaceValueRenderer={placeValueGroups};
})();
