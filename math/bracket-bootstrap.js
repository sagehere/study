/* Registers u4 bracket/order flow from a declarative Course Package. */
'use strict';
(() => {
 const pkg=CoursePackageData['u4.bracket.v2'];if(!pkg)throw new Error('Missing Course Package u4.bracket.v2');
 const loaded=CoursePackageLoader.register(pkg,{});
 globalThis.BracketPedagogy={...loaded,package:pkg};
})();
