(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return (self["webpackChunk_webpack_playground_depend_on"] = self["webpackChunk_webpack_playground_depend_on"] || []).push([[826],{

/***/ 479:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(804);




console.log(lodash__WEBPACK_IMPORTED_MODULE_0__.camelCase('test'));


/***/ })

},
0,[[479,666,215]]]);
});