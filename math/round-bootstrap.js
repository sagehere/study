/* Registers u5 rounding flow from a declarative Course Package. */
'use strict';
(() => {
 const pkg=CoursePackageData['u5.round.v2'];if(!pkg)throw new Error('Missing Course Package u5.round.v2');
 const loaded=CoursePackageLoader.register(pkg,RoundRenderer);
 globalThis.RoundPedagogy={...loaded,package:pkg};
})();
