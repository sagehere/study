/* Renderer adapter for perimeter/area conceptual learning. */
'use strict';
(() => {
  function rect({w=5,h=3,mode='both',label=''}){const cell=38,x=24,y=18,W=w*cell,H=h*cell;let cells='';for(let i=0;i<w;i++)for(let j=0;j<h;j++)cells+=`<rect x="${x+i*cell}" y="${y+j*cell}" width="${cell}" height="${cell}" fill="${mode==='area'||mode==='both'?'#d9ecff':'#fff'}" stroke="#b9cde3"/>`;const edge=mode==='perimeter'||mode==='both'?`<rect x="${x}" y="${y}" width="${W}" height="${H}" fill="none" stroke="#c44a36" stroke-width="6"/>`:'';return `<div class="scrollbox"><svg viewBox="0 0 ${W+48} ${H+62}" role="img" aria-label="${label||`${w}乘${h}长方形`}">${cells}${edge}<text x="${x+W/2}" y="${H+48}" text-anchor="middle">长 ${w}　宽 ${h}</text></svg></div><p class="diagram-caption">${mode==='perimeter'?'红线：围一圈的边界':mode==='area'?'蓝格：铺满的平面':'红线表示边界；蓝格表示铺满的平面'}</p>`;}
  function sideSum(w,h){return `<div class="formula" aria-label="边长关系">${w} ＋ ${h} ＋ ${w} ＋ ${h}</div><div class="small muted">沿边界走一圈：两条长、两条宽。</div>`;}
  function tileRows(w,h){return `<div class="formula" aria-label="方格关系">每行 ${w} 格 × ${h} 行</div><div class="small muted">铺满平面：一行有多少格 × 有多少行。</div>`;}
  globalThis.AreaRenderer={rect,sideSum,tileRows};
})();
