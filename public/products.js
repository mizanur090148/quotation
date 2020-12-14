(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/Products.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lists/Products.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
      product: null,
      products: [],
      pagination: {
        current_page: 1
      },
      search_key: ''
    };
  },
  mounted: function mounted() {
    this.getProducts();
  },
  watch: {
    search_key: function search_key() {
      this.searchProducts();
    }
  },
  methods: {
    searchProducts: function searchProducts() {
      var _this = this;

      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('search-products?search_key=' + this.search_key).then(function (res) {
        _this.products = res.data.data;
        _this.pagination = res.data;
      })["catch"](function (e) {
        console.log(e);
      });
    },
    getProductInfo: function getProductInfo(productId) {
      var _this2 = this;

      var loader = this.$loading.show({
        container: this.$refs.attendanceTable,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('products/' + productId).then(function (res) {
        _this2.product = res.data;

        _this2.$modal.show('productDetailModal');
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {
        loader.hide();
      });
    },
    closeModal: function closeModal() {
      this.$modal.hide('productDetailModal');
    },
    deleteProduct: function deleteProduct(id) {
      var _this3 = this;

      this.$snotify.clear();
      this.$snotify.confirm("Are you sure to delete this?", {
        closeOnClick: false,
        pauseOnHover: true,
        buttons: [{
          text: "Yes",
          action: function action(toast) {
            _this3.$snotify.remove(toast.id);

            _axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]('/products/' + id).then(function (response) {
              _this3.getProducts();

              _this3.$snotify.success('Successfully deleted', 'Success');
            })["catch"](function (e) {
              _this3.$snotify.success('Not deleted', 'Success');
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
    },
    getProducts: function getProducts() {
      var _this4 = this;

      var loader = this.$loading.show({
        container: this.$refs.attendanceTable,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('products?page=' + this.pagination.current_page).then(function (res) {
        _this4.products = res.data.data;
        _this4.pagination = res.data;
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/Products.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lists/Products.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modal-dialog {\n  max-width: 650px !important;\n  width: 650px !important;\n}\ntr span {\n  font-weight: bold;\n  padding-left: 10px !important;\n}\n.product-detail td {\n  text-align: left !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/Products.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lists/Products.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/Products.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/Products.vue?vue&type=template&id=50068ac9&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lists/Products.vue?vue&type=template&id=50068ac9& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
              _c("h4", { staticClass: "card-title" }, [_vm._v("Product List")]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row p-2" }, [
                _c(
                  "div",
                  { staticClass: "col-md-3 pl-1" },
                  [
                    _c("router-link", { attrs: { to: "/product/create" } }, [
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
                _c("div", { staticClass: "col-md-3 pr-1" }, [
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
                    attrs: { type: "text", placeholder: "Search" },
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
                    _vm.products.length > 0
                      ? _c(
                          "tbody",
                          _vm._l(_vm.products, function(product, index) {
                            return _c("tr", { key: product.id }, [
                              _c("td", [_vm._v(_vm._s(++index))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(product.name))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(product.code))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(product.category.name))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(product.brand.name))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(product.model.name))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(product.purchase_price))
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(product.tax_percentage))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(product.sale_price))]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-sm btn-primary btn-rounded btn-fw",
                                      attrs: { title: "View details" },
                                      on: {
                                        click: function($event) {
                                          return _vm.getProductInfo(product.id)
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "mdi mdi-eye" })]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "router-link",
                                    {
                                      staticClass:
                                        "btn btn-sm btn-success btn-rounded btn-fw",
                                      attrs: {
                                        to: "/product/" + product.id,
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
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-sm btn-danger btn-rounded btn-fw",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteProduct(product.id)
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
                                    attrs: { colspan: "10" }
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
                            return _vm.getProducts()
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
      _c(
        "modal",
        { attrs: { name: "productDetailModal", width: 700, height: 535 } },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c("h5", { staticClass: "modal-title" }, [
                    _vm._v("Product Details")
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.closeModal()
                        }
                      }
                    },
                    [
                      _c("span", { attrs: { "aria-hidden": "true" } }, [
                        _vm._v("×")
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _vm.product
                  ? _c("div", { staticClass: "modal-body" }, [
                      _c(
                        "table",
                        { staticClass: "list-table product-detail" },
                        [
                          _c("tr", { staticClass: "p-2" }, [
                            _c(
                              "td",
                              { staticClass: "p-2", attrs: { colspan: "2" } },
                              [
                                _c("img", {
                                  staticStyle: {
                                    height: "220px",
                                    width: "600px"
                                  },
                                  attrs: { src: _vm.product.image }
                                })
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticStyle: { width: "50%" } }, [
                              _c("span", [_vm._v("Product Name:")]),
                              _vm._v(" " + _vm._s(_vm.product.name))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("span", [_vm._v("Product Code:")]),
                              _vm._v(" " + _vm._s(_vm.product.code))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [
                              _c("span", [_vm._v("Category:")]),
                              _vm._v(" " + _vm._s(_vm.product.category.name))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("span", [_vm._v("Brand:")]),
                              _vm._v(" " + _vm._s(_vm.product.brand.name))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [
                              _c("span", [_vm._v("Model:")]),
                              _vm._v(" " + _vm._s(_vm.product.model.name))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("span", [_vm._v("Product Unit:")]),
                              _vm._v(" " + _vm._s(_vm.product.product_unit))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [
                              _c("span", [_vm._v("Purchase Price:")]),
                              _vm._v(" " + _vm._s(_vm.product.purchase_price))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("span", [_vm._v("Sale Price:")]),
                              _vm._v(" " + _vm._s(_vm.product.sale_price))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [
                              _c("span", [_vm._v("Warning Quantity:")]),
                              _vm._v(" " + _vm._s(_vm.product.warning_quantity))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("span", [_vm._v("Tax Percentage:")]),
                              _vm._v(" " + _vm._s(_vm.product.tax_percentage))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { attrs: { colspan: "2" } }, [
                              _c("span", [_vm._v("Product Details:")]),
                              _vm._v(
                                " " + _vm._s(_vm.product.product_detail) + " "
                              )
                            ])
                          ])
                        ]
                      )
                    ])
                  : _vm._e()
              ])
            ]
          )
        ]
      ),
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
        _c("th", [_vm._v("SL")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Code")]),
        _vm._v(" "),
        _c("th", [_vm._v("Category")]),
        _vm._v(" "),
        _c("th", [_vm._v("Brand")]),
        _vm._v(" "),
        _c("th", [_vm._v("Model")]),
        _vm._v(" "),
        _c("th", [_vm._v("Purchase Price")]),
        _vm._v(" "),
        _c("td", [_vm._v("Tax(%)")]),
        _vm._v(" "),
        _c("th", [_vm._v("Sale Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")])
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

/***/ "./resources/js/components/lists/Products.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/lists/Products.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products_vue_vue_type_template_id_50068ac9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=50068ac9& */ "./resources/js/components/lists/Products.vue?vue&type=template&id=50068ac9&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/components/lists/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Products.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/lists/Products.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_50068ac9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Products_vue_vue_type_template_id_50068ac9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/lists/Products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/lists/Products.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/lists/Products.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/lists/Products.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/lists/Products.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/Products.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/lists/Products.vue?vue&type=template&id=50068ac9&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/lists/Products.vue?vue&type=template&id=50068ac9& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_50068ac9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=template&id=50068ac9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/Products.vue?vue&type=template&id=50068ac9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_50068ac9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_50068ac9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);