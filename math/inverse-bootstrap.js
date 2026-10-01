/* Registers u3 multiplication/division inverse flow from a declarative Course Package. */
'use strict';
(() => {
 const pkg=CoursePackageData['u3.inverse.v2'];if(!pkg)throw new Error('Missing Course Package u3.inverse.v2');
 const loaded=CoursePackageLoader.register(pkg,PriceRenderer);
 globalThis.InversePedagogy={...loaded,package:pkg};
})();
