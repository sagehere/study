/* Generic area decomposition / rearrangement renderer. */
'use strict';
(() => {
  function areaDecomposition({base=20,tail=5,label=''}){
    base=Number(base);tail=Number(tail);const total=base+tail,scale=5,x=18,y=22,A=base*scale,B=tail*scale,T=total*scale;
    const left=`<g><rect x="${x}" y="${y}" width="${A}" height="${A}" fill="#d9ecff" stroke="#6f8fad"/><rect x="${x+A}" y="${y}" width="${B}" height="${A}" fill="#ffe4b8" stroke="#b98b47"/><rect x="${x}" y="${y+A}" width="${A}" height="${B}" fill="#ffe4b8" stroke="#b98b47"/><rect x="${x+A}" y="${y+A}" width="${B}" height="${B}" fill="#f7d6e8" stroke="#a66b8d"/><text x="${x+T/2}" y="${y+T+18}" text-anchor="middle">(${base}+${tail}) × (${base}+${tail})</text></g>`;
    const rx=x+T+70, rw=(base+2*tail)*scale;
    const right=`<g><rect x="${rx}" y="${y}" width="${rw}" height="${A}" fill="#d9ecff" stroke="#6f8fad"/><rect x="${rx+rw}" y="${y+A-B}" width="${B}" height="${B}" fill="#f7d6e8" stroke="#a66b8d"/><line x1="${rx+A}" y1="${y}" x2="${rx+A}" y2="${y+A}" stroke="#b98b47" stroke-dasharray="4 3"/><text x="${rx+rw/2}" y="${y+A+18}" text-anchor="middle">${base} × ${base+2*tail} ＋ ${tail}²</text></g>`;
    const w=rx+rw+B+24,h=Math.max(T,A)+64;
    return `<div class="scrollbox"><svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${label||`${total}乘${total}拆成${base}乘${base+2*tail}加${tail}平方`}">${left}<text x="${x+T+35}" y="${y+T/2}" text-anchor="middle" font-size="24">→</text>${right}</svg></div><p class="diagram-caption">同一块面积只做拆分与搬移，总面积不变；蓝/橙区域重组成大矩形，粉色小正方形保留。</p>`;
  }
  globalThis.DecompositionRenderer={areaDecomposition};
})();
