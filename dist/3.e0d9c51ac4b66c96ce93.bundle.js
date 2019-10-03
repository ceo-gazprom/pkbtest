(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/PersonPage.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/PersonPage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      info: null,\n      sortFlag: false\n    };\n  },\n  mounted() {\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a\n      .get('/api/v1/person')\n      .then(response => (this.info = response.data.data));\n  },\n\n  methods: {\n    edit(e) {\n      console.log('obj', e);\n    },\n    send(e, idRow) {\n      e.target.blur();\n      console.log(idRow);\n    },\n    // Метод сортировки столбца\n    sort(){\n      // this.cahngeSort;\n        // Изменение флага сортировки\n        this.sortFlag = !this.sortFlag\n\n        // Сортировка\n        this.info.sort(\n          (a, b) => {\n            console.log('aue');\n            if (a['fio'] > b['fio']) {\n              return this.sortFlag ? 1 : -1\n            }\n            if (a['fio'] < b['fio']) {\n              return this.sortFlag ? -1 : 1\n            }\n            // a должно быть равным b\n            return 0;\n          }\n        );\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./src/components/PersonPage.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/PersonPage.vue?vue&type=template&id=6fdd1098&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PersonPage.vue?vue&type=template&id=6fdd1098& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"h2\", [_vm._v(\"Таблица должников:\")]),\n    _vm._v(\" \"),\n    _c(\"br\"),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _c(\"table\", { staticClass: \"table\" }, [\n      _c(\"thead\", [\n        _c(\"tr\", [\n          _c(\"th\", { attrs: { scope: \"col\" } }, [_vm._v(\"#\")]),\n          _vm._v(\" \"),\n          _c(\n            \"th\",\n            {\n              attrs: { scope: \"col\" },\n              on: {\n                click: function($event) {\n                  return _vm.sort()\n                }\n              }\n            },\n            [_vm._v(\"FIO\")]\n          )\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\n        \"tbody\",\n        _vm._l(_vm.info, function(item, index) {\n          return _c(\"tr\", { key: index }, [\n            _c(\n              \"td\",\n              {\n                attrs: { scope: \"row\" },\n                on: {\n                  click: function($event) {\n                    return _vm.edit($event)\n                  }\n                }\n              },\n              [_vm._v(_vm._s(item.id_person))]\n            ),\n            _vm._v(\" \"),\n            _c(\"td\", [\n              _c(\n                \"div\",\n                {\n                  attrs: { contenteditable: \"\" },\n                  on: {\n                    keydown: function($event) {\n                      if (\n                        !$event.type.indexOf(\"key\") &&\n                        _vm._k($event.keyCode, \"enter\", 13, $event.key, \"Enter\")\n                      ) {\n                        return null\n                      }\n                      $event.preventDefault()\n                      return _vm.send($event, item.id_person)\n                    }\n                  }\n                },\n                [_vm._v(_vm._s(item.fio))]\n              )\n            ])\n          ])\n        }),\n        0\n      )\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"p\", [\n      _vm._v(\n        \"\\n    1. Для таблицы должников добавьте возможность сортировки по FIO\"\n      ),\n      _c(\"br\"),\n      _vm._v(\n        \"\\n    2.Реализуйте inline-редактирование FIO во Vue компоненте\\n  \"\n      )\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/PersonPage.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/PersonPage.vue":
/*!***************************************!*\
  !*** ./src/components/PersonPage.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PersonPage_vue_vue_type_template_id_6fdd1098___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PersonPage.vue?vue&type=template&id=6fdd1098& */ \"./src/components/PersonPage.vue?vue&type=template&id=6fdd1098&\");\n/* harmony import */ var _PersonPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersonPage.vue?vue&type=script&lang=js& */ \"./src/components/PersonPage.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _PersonPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _PersonPage_vue_vue_type_template_id_6fdd1098___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _PersonPage_vue_vue_type_template_id_6fdd1098___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/PersonPage.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/PersonPage.vue?");

/***/ }),

/***/ "./src/components/PersonPage.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/PersonPage.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_PersonPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./PersonPage.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/components/PersonPage.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/PersonPage.vue?");

/***/ }),

/***/ "./src/components/PersonPage.vue?vue&type=template&id=6fdd1098&":
/*!**********************************************************************!*\
  !*** ./src/components/PersonPage.vue?vue&type=template&id=6fdd1098& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonPage_vue_vue_type_template_id_6fdd1098___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./PersonPage.vue?vue&type=template&id=6fdd1098& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/PersonPage.vue?vue&type=template&id=6fdd1098&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonPage_vue_vue_type_template_id_6fdd1098___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonPage_vue_vue_type_template_id_6fdd1098___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/PersonPage.vue?");

/***/ })

}]);