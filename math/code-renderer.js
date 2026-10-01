/* Generic segmented-code renderer. */
'use strict';
(() => {
  function codeSegments({rawValue='',segments=[],label='编码字段'}){
    const raw=String(rawValue),cells=(segments||[]).map((s,i)=>`<div style="border:1px solid #b9cde3;border-radius:8px;padding:8px;text-align:center;min-width:82px"><div style="font-variant-numeric:tabular-nums;font-weight:700;letter-spacing:.08em">${s.value??''}</div><div class="small muted">${s.label||`字段${i+1}`}</div></div>`).join('');
    const aria=(segments||[]).map(s=>`${s.label||'字段'}${s.value??''}`).join('，');
    return `<div role="img" aria-label="${label}：${aria||raw}" class="scrollbox" style="margin:14px 0"><div class="connection" style="margin:0 0 8px;text-align:center"><strong>${raw}</strong></div><div style="display:flex;gap:8px;min-width:max-content">${cells}</div><p class="small muted" style="margin:8px 0 0">编码里的数字可以表示类别、时间、位置或顺序；先按规则分字段，再解释每一段含义。</p></div>`;
  }
  globalThis.CodeRenderer={codeSegments};
})();
