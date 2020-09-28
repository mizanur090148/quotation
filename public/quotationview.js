(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quotationview"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuotationView.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/QuotationView.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../axios */ "./resources/js/axios/index.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      quotation: null,
      quotation_items: null,
      vendor: null
    };
  },
  mounted: function mounted() {
    this.getQuotation();
  },
  methods: {
    getQuotation: function getQuotation() {
      var _this = this;

      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/quotations/' + this.$route.params.id).then(function (res) {
        _this.quotation = res.data;
        _this.quotation_items = _this.quotation.quotation_details;
        _this.vendor = res.data.vendor;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuotationView.vue?vue&type=template&id=6775ad14&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/QuotationView.vue?vue&type=template&id=6775ad14& ***!
  \****************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-12 grid-margin stretch-card" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Quotation Details")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row p-3" }, [
                _c("div", { staticClass: "col-4" }, [
                  _c("span", [_vm._v("To")]),
                  _c("br"),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.vendor.vendor_name))]),
                  _c("br"),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(_vm._s(_vm.vendor.attention_designation))
                  ]),
                  _c("br"),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.vendor.address))]),
                  _c("br"),
                  _c("br")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-4" }),
                _vm._v(" "),
                _c("div", { staticClass: "col-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-control-label font-weight-bold",
                        attrs: { for: "last-name" }
                      },
                      [_vm._v("Quotation Date")]
                    ),
                    _vm._v(
                      "\n                      " +
                        _vm._s(_vm.quotation.quotation_date) +
                        "\n                  "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary quotation-headline",
                  attrs: { type: "button" }
                },
                [_vm._v(" Services Description As Following Detail")]
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive" }, [
                _c("table", { staticClass: "list-table" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.quotation_items, function(item, index) {
                        return _c("tr", { key: index }, [
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(
                              "\n                                " +
                                _vm._s(++index) +
                                "\n                            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                                " +
                                _vm._s(item.job_description) +
                                "\n                            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(
                              "\n                                " +
                                _vm._s(item.quantity) +
                                "\n                            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(
                              "\n                                " +
                                _vm._s(item.service_per_year) +
                                "\n                            "
                            )
                          ])
                        ])
                      }),
                      _vm._v(" "),
                      _c("tr", { staticClass: "font-weight-bold" }, [
                        _c(
                          "td",
                          {
                            staticClass: "text-right",
                            attrs: { colspan: "3" }
                          },
                          [_vm._v("Total Without Discount")]
                        ),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.quotation.quotation_total) +
                              "\n                            "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", { staticClass: "font-weight-bold" }, [
                        _c(
                          "td",
                          {
                            staticClass: "text-right",
                            attrs: { colspan: "3" }
                          },
                          [_vm._v("Total Discount")]
                        ),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.quotation.total_discount))])
                      ]),
                      _vm._v(" "),
                      _c("tr", { staticClass: "font-weight-bold" }, [
                        _c(
                          "td",
                          {
                            staticClass: "text-right capitalize",
                            attrs: { colspan: "3" }
                          },
                          [
                            _vm._v(
                              "\n                              In words, " +
                                _vm._s(
                                  __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'number-to-words'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())).toWords(
                                    _vm.quotation.quotation_total -
                                      _vm.quotation.total_discount
                                  )
                                ) +
                                " only\n                            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.quotation.quotation_total -
                                _vm.quotation.total_discount
                            )
                          )
                        ])
                      ])
                    ],
                    2
                  )
                ])
              ])
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
    return _c("div", { staticClass: "row p-3" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "form-group" }, [
          _c(
            "label",
            {
              staticClass: "form-control-label font-weight-bold",
              attrs: { for: "subject" }
            },
            [_vm._v("Subject: ")]
          ),
          _vm._v("\n                      This is subject\n                  ")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("No")]),
        _vm._v(" "),
        _c("th", [_vm._v("    Job Description")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "10%" } }, [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "15%" } }, [
          _vm._v("Service Price Per Year")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/QuotationView.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/QuotationView.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuotationView_vue_vue_type_template_id_6775ad14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuotationView.vue?vue&type=template&id=6775ad14& */ "./resources/js/components/QuotationView.vue?vue&type=template&id=6775ad14&");
/* harmony import */ var _QuotationView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuotationView.vue?vue&type=script&lang=js& */ "./resources/js/components/QuotationView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuotationView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuotationView_vue_vue_type_template_id_6775ad14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuotationView_vue_vue_type_template_id_6775ad14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/QuotationView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/QuotationView.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/QuotationView.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./QuotationView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuotationView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/QuotationView.vue?vue&type=template&id=6775ad14&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/QuotationView.vue?vue&type=template&id=6775ad14& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationView_vue_vue_type_template_id_6775ad14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./QuotationView.vue?vue&type=template&id=6775ad14& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuotationView.vue?vue&type=template&id=6775ad14&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationView_vue_vue_type_template_id_6775ad14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationView_vue_vue_type_template_id_6775ad14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);