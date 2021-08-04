(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);




function component() {
    const element = document.createElement('div');
    element.innerHTML = 'Hello Webpack';

    console.log(_index_css__WEBPACK_IMPORTED_MODULE_1___default.a);

    element.classList = _index_css__WEBPACK_IMPORTED_MODULE_1___default.a.helloWebpack;
    return element;
}

document.body.appendChild(component());
console.log(jquery__WEBPACK_IMPORTED_MODULE_2___default()(`.${_index_css__WEBPACK_IMPORTED_MODULE_1___default.a.helloWebpack}`).length);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(6);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {"injectType":"singletonStyleTag"}

options.insert = "head";
options.singleton = true;

var update = __webpack_require__(4)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "div {\n  color: red;\n}\n\n._13fV_T_Ts8JQKpvnALbBVm {\n  color: rgb(204, 107, 28);\n}\n", ""]);
// Exports
exports.locals = {
	"helloWebpack": "_13fV_T_Ts8JQKpvnALbBVm"
};

/***/ })
],[[0,0,2]]]);