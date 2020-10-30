(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sateWiseSales"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/DateWiseSales.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Reports/DateWiseSales.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../axios */ "./resources/js/axios/index.js");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      errors: [],
      report_data: [],
      form: new Form({
        from_date: new Date().toISOString().split('T')[0],
        to_date: new Date().toISOString().split('T')[0]
      })
    };
  },
  mounted: function mounted() {},
  methods: {
    getDateWiseSlaesReport: function getDateWiseSlaesReport() {
      var _this = this;

      this.errors = [];
      var loader = this.$loading.show({
        container: this.$refs.customerContainer,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/date-wise-sales-report', {
        params: {
          from_date: this.form.from_date,
          to_date: this.form.to_date
        }
      }).then(function (response) {
        if (response.status == 200) {
          _this.report_data = response.data;

          _this.loader.hide();
        } else {
          _this.$snotify.error('Something went worng', 'error');
        }
      })["catch"](function (errors) {
        _this.errors = errors.response.data.errors;
      })["finally"](function (e) {
        loader.hide();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loading-overlay/dist/vue-loading.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loading-overlay/dist/vue-loading.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vld-shown {\n  overflow: hidden;\n}\n\n.vld-overlay {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  align-items: center;\n  display: none;\n  justify-content: center;\n  overflow: hidden;\n  z-index: 9999;\n}\n\n.vld-overlay.is-active {\n  display: flex;\n}\n\n.vld-overlay.is-full-page {\n  z-index: 9999;\n  position: fixed;\n}\n\n.vld-overlay .vld-background {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background: #fff;\n  opacity: 0.5;\n}\n\n.vld-overlay .vld-icon, .vld-parent {\n  position: relative;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/DateWiseSales.vue?vue&type=template&id=6421f7ef&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Reports/DateWiseSales.vue?vue&type=template&id=6421f7ef& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "content-wrapper" },
    [
      _c("div", { staticClass: "row justify-content-md-center" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Date Wise Sales Report")
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "form",
                {
                  staticClass: "forms-sample",
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.getDateWiseSlaesReport($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "row p-2" }, [
                    _c("div", { staticClass: "col-3" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("From Date")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.from_date,
                              expression: "form.from_date"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          class: { "is-invalid": _vm.errors.from_date },
                          attrs: { type: "date" },
                          domProps: { value: _vm.form.from_date },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "from_date",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.from_date
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors.from_date[0]))
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-3" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("To Date")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.to_date,
                              expression: "form.to_date"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          class: { "is-invalid": _vm.errors.to_date },
                          attrs: { type: "date" },
                          domProps: { value: _vm.form.to_date },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "to_date", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.to_date
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors.to_date[0]))
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(0)
                  ])
                ]
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _vm._m(1)
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("vue-snotify")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v(" ")]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "form-control form-control-sm btn btn-sm btn-primary",
            attrs: { type: "submit" }
          },
          [_vm._v("Search")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("table", { staticClass: "list-table" }, [
        _c("thead", [
          _c("tr", [
            _c("td", { attrs: { colspan: "9" } }, [
              _vm._v("Ordered Product Details")
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("Product Name")]),
            _vm._v(" "),
            _c("td", [_vm._v("Product Code")]),
            _vm._v(" "),
            _c("td", [_vm._v("Quantity")]),
            _vm._v(" "),
            _c("td", [_vm._v("Unit Price")]),
            _vm._v(" "),
            _c("td", [_vm._v("Discount")]),
            _vm._v(" "),
            _c("td", [_vm._v("Tax(5%)")]),
            _vm._v(" "),
            _c("td", [_vm._v("Total")]),
            _vm._v(" "),
            _c("td", [_vm._v("Actions")])
          ])
        ]),
        _vm._v(" "),
        _c("tbody", [_c("tr")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loading-overlay/dist/vue-loading.css":
/*!***************************************************************!*\
  !*** ./node_modules/vue-loading-overlay/dist/vue-loading.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./vue-loading.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loading-overlay/dist/vue-loading.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/axios/index.js":
/*!*************************************!*\
  !*** ./resources/js/axios/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'http://dev-quotation/api'
}));

/***/ }),

/***/ "./resources/js/components/Reports/DateWiseSales.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Reports/DateWiseSales.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateWiseSales_vue_vue_type_template_id_6421f7ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateWiseSales.vue?vue&type=template&id=6421f7ef& */ "./resources/js/components/Reports/DateWiseSales.vue?vue&type=template&id=6421f7ef&");
/* harmony import */ var _DateWiseSales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateWiseSales.vue?vue&type=script&lang=js& */ "./resources/js/components/Reports/DateWiseSales.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DateWiseSales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DateWiseSales_vue_vue_type_template_id_6421f7ef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DateWiseSales_vue_vue_type_template_id_6421f7ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Reports/DateWiseSales.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Reports/DateWiseSales.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Reports/DateWiseSales.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateWiseSales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DateWiseSales.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/DateWiseSales.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateWiseSales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Reports/DateWiseSales.vue?vue&type=template&id=6421f7ef&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Reports/DateWiseSales.vue?vue&type=template&id=6421f7ef& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateWiseSales_vue_vue_type_template_id_6421f7ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DateWiseSales.vue?vue&type=template&id=6421f7ef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/DateWiseSales.vue?vue&type=template&id=6421f7ef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateWiseSales_vue_vue_type_template_id_6421f7ef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateWiseSales_vue_vue_type_template_id_6421f7ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);