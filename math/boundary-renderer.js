/* Generic boundary-role renderer: counted outer edges vs excluded seams/walls. */
'use strict';
(() => {
  function boundaryTrace({segments=[],label='边界追踪'}){
    const rows=(segments||[]).map((s,i)=>{const counted=s.counted!==false;return `<div style="display:grid;grid-template-columns:28px 1fr auto;gap:8px;align-items:center;padding:7px 9px;border-radius:8px;background:${counted?'#eef8ef':'#f3f4f6'}"><strong>${i+1}</strong><span>${s.name||'边段'}</span><span class="small">${counted?'计入外边界':'不计入'}</span></div>`;}).join('');
    const counted=(segments||[]).filter(s=>s.counted!==false).map(s=>s.name).join('、')||'无';
    const excluded=(segments||[]).filter(s=>s.counted===false).map(s=>s.name).join('、')||'无';
    return `<div role="img" aria-label="${label}。计入外边界：${counted}。不计入：${excluded}" style="margin:14px 0;max-width:460px"><div class="connection" style="margin:0 0 8px;text-align:center"><strong>${label}</strong></div><div style="display:grid;gap:6px">${rows}</div><p class="small muted" style="margin:8px 0 0">先判断一条边是不是最终图形的外边界，再决定是否计入；内部接缝或贴墙边不计入围栏/周长。</p></div>`;
  }
  globalThis.BoundaryRenderer={boundaryTrace};
})();
