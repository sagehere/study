/* Renderer adapter for the trial course. */
'use strict';
(() => {
  function ratioBar(total,used,group,label){const w=280,uw=Math.max(0,Math.min(w,w*used/total)),rw=w-uw,gw=Math.max(8,w*group/total);return `<div aria-label="${label}" style="margin:14px 0"><div style="display:flex;height:34px;border:2px solid #8fb2d7;border-radius:8px;overflow:hidden"><span style="width:${uw}px;background:#b8d9ff"></span><span style="width:${rw}px;background:#ffd16e"></span></div><div class="small muted" style="margin-top:6px">蓝色：已分 ${used}　黄色：余 ${total-used}　｜一整组相当于约 ${Math.round(gw)}px</div></div>`;}
  function compareBars(a,p,label){const max=Math.max(a,p),w=280;return `<div aria-label="${label}" style="margin:14px 0"><div class="small">被除数 ${a}</div><div style="height:20px;width:${w*a/max}px;background:#b8d9ff;border-radius:6px"></div><div class="small" style="margin-top:8px">除数×试商 ${p}</div><div style="height:20px;width:${w*p/max}px;background:#ffd16e;border-radius:6px"></div></div>`;}
  globalThis.TrialRenderer={ratioBar,compareBars};
})();
