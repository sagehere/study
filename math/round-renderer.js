/* Renderer adapter for rounding / number-line boundary learning. */
'use strict';
(() => {
  function numberLine({min,max,point,boundaries=[],labels=[]}){const w=340,x0=30,y=88,pos=v=>x0+(v-min)/(max-min)*w;const ticks=boundaries.map((v,i)=>`<path d="M${pos(v)} ${y-18}v36" stroke="#c56a20" stroke-width="3"/><text x="${pos(v)}" y="${y+42}" text-anchor="middle" font-size="12">${labels[i]||v}</text>`).join('');return `<div class="scrollbox"><svg viewBox="0 0 400 155" role="img" aria-label="数轴上标出${point}和舍入分界"><path d="M${x0} ${y}H${x0+w}" stroke="#9db8d4" stroke-width="4"/>${ticks}<circle cx="${pos(point)}" cy="${y}" r="8" fill="#2476df"/><text x="${pos(point)}" y="${y-24}" text-anchor="middle" font-size="13">${point}</text></svg></div>`;}
  function nearest({left,right,point}){const dl=point-left,dr=right-point;return `<div role="img" aria-label="比较${point}到${left}和${right}的距离" style="margin:14px 0"><div class="connection" style="margin:0 0 8px">到 ${left} 的距离：<strong>${dl}</strong></div><div class="connection" style="margin:0">到 ${right} 的距离：<strong>${dr}</strong></div></div>`;}
  function interval({low,high,target}){return `<div role="img" aria-label="四舍五入到${target}的整数区间" style="margin:14px 0"><div style="height:18px;background:#d9ecff;border-left:4px solid #2476df;border-right:4px dashed #c56a20;border-radius:4px"></div><div class="split-actions small"><span>${low}（包含）</span><strong>→ 约 ${target}</strong><span>${high}（不包含）</span></div></div>`;}
  globalThis.RoundRenderer={numberLine,nearest,interval};
})();
