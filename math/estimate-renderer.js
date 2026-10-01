/* Generic threshold/bound renderer for decision-by-estimate learning. */
'use strict';
(() => {
  function thresholdBound({estimate,threshold,relation='≤',estimateLabel='估计界',thresholdLabel='阈值',unit='',conclusion=''}){
    const max=Math.max(Math.abs(Number(estimate)||0),Math.abs(Number(threshold)||0),1),pct=v=>Math.max(2,Math.min(100,(Number(v)||0)/max*100));
    return `<div role="img" aria-label="${estimateLabel}${estimate}${unit}，${thresholdLabel}${threshold}${unit}，关系${relation}${conclusion?`，结论${conclusion}`:''}" style="margin:14px 0;max-width:420px"><div class="small muted" style="display:flex;justify-content:space-between"><span>${estimateLabel}</span><span>${thresholdLabel}</span></div><div style="position:relative;height:20px;background:#edf3f8;border-radius:10px;overflow:hidden;margin:6px 0 8px"><div style="height:100%;width:${pct(estimate)}%;background:#d7e8fb"></div><div style="position:absolute;left:${pct(threshold)}%;top:0;bottom:0;width:3px;background:#b45b28"></div></div><div class="connection" style="margin:0;text-align:center"><strong>${estimate}${unit} ${relation} ${threshold}${unit}</strong>${conclusion?`　→　${conclusion}`:''}</div><p class="small muted" style="margin:8px 0 0">关键不是“估得像不像”，而是这个估计方向能不能保证结论。</p></div>`;
  }
  globalThis.EstimateRenderer={thresholdBound};
})();
