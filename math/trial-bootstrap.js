/* Registers u1 trial from a declarative Course Package. */
'use strict';
(() => {
  const pkg=CoursePackageData['u1.trial.v2'];
  if(!pkg)throw new Error('Missing Course Package u1.trial.v2');
  const loaded=CoursePackageLoader.register(pkg,TrialRenderer);
  const variants=pkg.steps.freshRemainder.variants;
  globalThis.TrialPedagogy={...loaded,package:pkg,variants};
})();
