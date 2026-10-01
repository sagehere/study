/* Registers u3 price flow from a declarative Course Package. */
'use strict';
(() => {
 const pkg=CoursePackageData['u3.price.v2'];if(!pkg)throw new Error('Missing Course Package u3.price.v2');
 const loaded=CoursePackageLoader.register(pkg,PriceRenderer);
 globalThis.PricePedagogy={...loaded,package:pkg};
})();
