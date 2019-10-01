(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/DebtPage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/DebtPage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      info: null\n    };\n  },\n  mounted() {\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a\n      .get('http://localhost:3000/api/v1/person')\n      .then(response => (this.info = response.data.data));\n  }\n});\n\n\n//# sourceURL=webpack:///./src/components/DebtPage.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DebtPage.vue?vue&type=template&id=5cb87e1c&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DebtPage.vue?vue&type=template&id=5cb87e1c& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"h2\", [_vm._v(\"Долги:\")]),\n    _vm._v(\" \"),\n    _c(\"table\", { staticClass: \"table\" }, [\n      _vm._m(0),\n      _vm._v(\" \"),\n      _c(\n        \"tbody\",\n        _vm._l(_vm.info, function(item, index) {\n          return _c(\"tr\", { key: index }, [\n            _c(\"td\", { attrs: { scope: \"row\" } }, [\n              _vm._v(_vm._s(item.id_person))\n            ]),\n            _vm._v(\" \"),\n            _c(\"td\", [_vm._v(_vm._s(item.fio))]),\n            _vm._v(\" \"),\n            _c(\"td\", [_vm._v(\"-\")]),\n            _vm._v(\" \"),\n            _c(\"td\", [_vm._v(\"-\")])\n          ])\n        }),\n        0\n      )\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"thead\", [\n      _c(\"tr\", [\n        _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"#\")]),\n        _vm._v(\" \"),\n        _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"ФИО\")]),\n        _vm._v(\" \"),\n        _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"Задолженность\")]),\n        _vm._v(\" \"),\n        _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"Период\")])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/DebtPage.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/DebtPage.vue":
/*!*************************************!*\
  !*** ./src/components/DebtPage.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DebtPage_vue_vue_type_template_id_5cb87e1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DebtPage.vue?vue&type=template&id=5cb87e1c& */ \"./src/components/DebtPage.vue?vue&type=template&id=5cb87e1c&\");\n/* harmony import */ var _DebtPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DebtPage.vue?vue&type=script&lang=js& */ \"./src/components/DebtPage.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _DebtPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _DebtPage_vue_vue_type_template_id_5cb87e1c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _DebtPage_vue_vue_type_template_id_5cb87e1c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/DebtPage.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/DebtPage.vue?");

/***/ }),

/***/ "./src/components/DebtPage.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/components/DebtPage.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_DebtPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./DebtPage.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/components/DebtPage.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_DebtPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/DebtPage.vue?");

/***/ }),

/***/ "./src/components/DebtPage.vue?vue&type=template&id=5cb87e1c&":
/*!********************************************************************!*\
  !*** ./src/components/DebtPage.vue?vue&type=template&id=5cb87e1c& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DebtPage_vue_vue_type_template_id_5cb87e1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./DebtPage.vue?vue&type=template&id=5cb87e1c& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DebtPage.vue?vue&type=template&id=5cb87e1c&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DebtPage_vue_vue_type_template_id_5cb87e1c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DebtPage_vue_vue_type_template_id_5cb87e1c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/DebtPage.vue?");

/***/ })

}]);