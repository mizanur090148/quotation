(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Sales"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Lists/Sales.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Lists/Sales.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../axios */ "./resources/js/axios/index.js");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2__);
var _methods;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      sales: [],
      pagination: {
        current_page: 1
      },
      search_key: ''
    };
  },
  mounted: function mounted() {
    this.getSales();
  },
  watch: {
    search_key: function search_key() {
      this.searchStockIns();
    }
  },
  methods: (_methods = {
    searchStockIns: function searchStockIns() {
      var _this = this;

      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('sales?search_key=' + this.search_key).then(function (res) {
        _this.sales = res.data.data;
        _this.pagination = res.data;
      })["catch"](function (e) {
        console.log(e);
      });
    }
  }, _defineProperty(_methods, "searchStockIns", function searchStockIns() {
    var _this2 = this;

    _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('search-sales?search_key=' + this.search_key).then(function (res) {
      _this2.sales = res.data.data;
      _this2.pagination = res.data;
    })["catch"](function (e) {
      console.log(e);
    });
  }), _defineProperty(_methods, "deleteSale", function deleteSale(stockInId) {
    var _this3 = this;

    this.$snotify.clear();
    this.$snotify.confirm("Are you sure to delete this?", {
      closeOnClick: false,
      pauseOnHover: true,
      buttons: [{
        text: "Yes",
        action: function action(toast) {
          _this3.$snotify.remove(toast.id);

          _axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]('/sales/' + stockInId).then(function (response) {
            _this3.getSales();

            _this3.$snotify.success('Successfully deleted', 'Success');
          })["catch"](function (e) {
            _this3.$snotify.error('Not deleted', 'Success');
          });
        },
        bold: true
      }, {
        text: "No",
        action: function action(toast) {
          _this3.$snotify.remove(toast.id);
        },
        bold: true
      }]
    });
  }), _defineProperty(_methods, "getSales", function getSales() {
    var _this4 = this;

    var loader = this.$loading.show({
      container: this.$refs.attendanceTable,
      canCancel: true,
      loader: 'bars'
    });
    _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('sales?page=' + this.pagination.current_page).then(function (res) {
      _this4.sales = res.data.data;
      _this4.pagination = res.data;
    })["catch"](function (error) {
      console.log(error);
    })["finally"](function () {
      loader.hide();
    });
  }), _methods)
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Lists/Sales.vue?vue&type=template&id=472f6fd7&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Lists/Sales.vue?vue&type=template&id=472f6fd7& ***!
  \**************************************************************************************************************************************************************************************************************/
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
              _c("h4", { staticClass: "card-title" }, [_vm._v("Sales List")]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row p-2" }, [
                _c(
                  "div",
                  { staticClass: "col-md-3 add-new-btn" },
                  [
                    _c("router-link", { attrs: { to: "/sales/create" } }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-primary btn-sm btn-rounded btn-fw",
                          attrs: { type: "button" }
                        },
                        [
                          _vm._v("Add New "),
                          _c("i", { staticClass: "fas fa-plus" })
                        ]
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.search_key,
                        expression: "search_key"
                      }
                    ],
                    staticClass: "form-control search-field",
                    attrs: {
                      type: "text",
                      placeholder: "Search by invoice no"
                    },
                    domProps: { value: _vm.search_key },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.search_key = $event.target.value
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "table-responsive" },
                [
                  _c("table", { staticClass: "list-table table-hover" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _vm.sales.length
                      ? _c(
                          "tbody",
                          _vm._l(_vm.sales, function(sale, index) {
                            return _c("tr", { key: sale.id }, [
                              _c("td", [_vm._v(_vm._s(++index))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(sale.invoice_number))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(sale.customer.name))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    sale.payment_status == 0 ? "Due" : "Sale"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(sale.total_product_cost))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(sale.delivery_cost))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(sale.others_cost))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(sale.total_cost))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(sale.sale_date))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(sale.created_by.full_name))
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass:
                                        "btn btn-sm btn-success btn-rounded btn-fw",
                                      attrs: {
                                        to: "/sales/" + sale.id,
                                        title: "edit"
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "mdi mdi-grease-pencil"
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "router-link",
                                    {
                                      staticClass:
                                        "btn btn-sm btn-primary btn-rounded btn-fw",
                                      attrs: {
                                        to: "/sale-invoice/" + sale.id,
                                        title: "View details"
                                      }
                                    },
                                    [_c("i", { staticClass: "mdi mdi-eye" })]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-sm btn-danger btn-rounded btn-fw",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteSale(sale.id)
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "mdi mdi-delete" })]
                                  )
                                ],
                                1
                              )
                            ])
                          }),
                          0
                        )
                      : _c("tbody", [
                          _vm.pagination.current_page ==
                          _vm.pagination.last_page
                            ? _c("tr", { staticClass: "not-found" }, [
                                _c(
                                  "td",
                                  {
                                    staticClass: "text-danger",
                                    attrs: { colspan: "11" }
                                  },
                                  [_vm._v("Not Found")]
                                )
                              ])
                            : _vm._e()
                        ])
                  ]),
                  _vm._v(" "),
                  _vm.pagination.last_page > 1
                    ? _c("v-pagination", {
                        attrs: { pagination: _vm.pagination, offset: 8 },
                        on: {
                          paginate: function($event) {
                            return _vm.getSales()
                          }
                        }
                      })
                    : _vm._e()
                ],
                1
              )
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
    return _c("thead", [
      _c("tr", [
        _c("td", [_vm._v("SL.")]),
        _vm._v(" "),
        _c("td", [_vm._v("Invoice No.")]),
        _vm._v(" "),
        _c("td", [_vm._v("Customer")]),
        _vm._v(" "),
        _c("td", [_vm._v("Payment Status")]),
        _vm._v(" "),
        _c("td", [_vm._v("Product Price")]),
        _vm._v(" "),
        _c("td", [_vm._v("Delivery Cost")]),
        _vm._v(" "),
        _c("td", [_vm._v("Others Cost")]),
        _vm._v(" "),
        _c("td", [_vm._v("Total Cost")]),
        _vm._v(" "),
        _c("td", [_vm._v("Sale Date")]),
        _vm._v(" "),
        _c("td", [_vm._v("Sale By By")]),
        _vm._v(" "),
        _c("td", [_vm._v("Action")])
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

/***/ "./resources/js/components/Lists/Sales.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Lists/Sales.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sales_vue_vue_type_template_id_472f6fd7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sales.vue?vue&type=template&id=472f6fd7& */ "./resources/js/components/Lists/Sales.vue?vue&type=template&id=472f6fd7&");
/* harmony import */ var _Sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sales.vue?vue&type=script&lang=js& */ "./resources/js/components/Lists/Sales.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sales_vue_vue_type_template_id_472f6fd7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sales_vue_vue_type_template_id_472f6fd7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Lists/Sales.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Lists/Sales.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Lists/Sales.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sales.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Lists/Sales.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sales_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Lists/Sales.vue?vue&type=template&id=472f6fd7&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Lists/Sales.vue?vue&type=template&id=472f6fd7& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sales_vue_vue_type_template_id_472f6fd7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sales.vue?vue&type=template&id=472f6fd7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Lists/Sales.vue?vue&type=template&id=472f6fd7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sales_vue_vue_type_template_id_472f6fd7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sales_vue_vue_type_template_id_472f6fd7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);