(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["purchaseOrSaleRetun"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/PurchaseOrSaleRetun.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/PurchaseOrSaleRetun.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      errors: [],
      customers: [],
      form: new Form({
        return_type: '',
        invoice_no: '',
        product_detail_list: []
      })
    };
  },
  mounted: function mounted() {
    this.invoiceDropdowndata();
  },
  methods: {
    invoiceDropdowndata: function invoiceDropdowndata() {
      var _this = this;

      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/get-invoice-dropdown').then(function (res) {
        _this.invoices = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getProductInfo: function getProductInfo(productId) {
      var _this2 = this;

      this.search_product = '';
      this.products = [];
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('products/' + productId).then(function (res) {
        _this2.product = res.data;

        _this2.form.product_detail_list.push({
          name: _this2.product.name,
          code: _this2.product.code,
          product_id: _this2.product.id,
          quantity: 1,
          sale_price: _this2.product.sale_price,
          tax_percentage: _this2.product.tax_percentage,
          tax_value: _this2.product.sale_tax_value,
          discount_percentage: 0,
          product_wise_total: _this2.product.sale_price * 1.
        });
      })["catch"](function (error) {
        console.log(error);
      });
    },
    calculateDiscount: function calculateDiscount(product_wise_total, discount_percentage) {
      return product_wise_total * (discount_percentage / 100);
    },
    closeModal: function closeModal(modalName) {
      this.$modal.hide(modalName);
    },
    deleteRow: function deleteRow(index, item) {
      var _this3 = this;

      if (this.form.product_detail_list.length > 1) {
        this.$snotify.confirm("Are you sure to delete this?", {
          closeOnClick: false,
          pauseOnHover: true,
          buttons: [{
            text: "Yes",
            action: function action(toast) {
              _this3.$snotify.remove(toast.id);

              var idx = _this3.form.product_detail_list.indexOf(index);

              _this3.form.product_detail_list.splice(idx, 1); //  this.calculateTotal();

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
      } else {
        alert('You can not delete this');
      }
    },
    store: function store() {
      var _this4 = this;

      this.errors = [];
      var loader = this.$loading.show({
        container: this.$refs.customerContainer,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/sales', this.form).then(function (response) {
        if (response.status == 200) {
          _this4.$snotify.success('Successfully created', 'Success');

          _this4.$router.push({
            name: 'sales'
          });
        } else {
          _this4.$snotify.error('Something went worng', 'error');
        }
      })["catch"](function (errors) {
        _this4.errors = errors.response.data.errors;
      })["finally"](function (e) {
        loader.hide();
      });
    },
    getSaleInfo: function getSaleInfo(saleId) {
      var _this5 = this;

      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('sales/' + saleId).then(function (res) {
        _this5.form = res.data;
        _this5.form.product_detail_list = res.data.sales;
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {//loader.hide();
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/PurchaseOrSaleRetun.vue?vue&type=style&index=0&id=b037d958&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/PurchaseOrSaleRetun.vue?vue&type=style&index=0&id=b037d958&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modal-dialog[data-v-b037d958] {\n    max-width: 750px !important;\n}\n/*   .btn i {\n    font-size: 10px !important;\n  } */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/PurchaseOrSaleRetun.vue?vue&type=style&index=0&id=b037d958&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/PurchaseOrSaleRetun.vue?vue&type=style&index=0&id=b037d958&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseOrSaleRetun.vue?vue&type=style&index=0&id=b037d958&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/PurchaseOrSaleRetun.vue?vue&type=style&index=0&id=b037d958&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/PurchaseOrSaleRetun.vue?vue&type=template&id=b037d958&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/PurchaseOrSaleRetun.vue?vue&type=template&id=b037d958&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
                _vm._v("Purchase Return")
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
                      return _vm.store($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "row p-2" }, [
                    _c("div", { staticClass: "col-3" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Return Type")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group col-xs-12" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.return_type,
                                  expression: "form.return_type"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: { "is-invalid": _vm.errors.return_type },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "return_type",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Select return type")
                              ]),
                              _vm._v(" "),
                              _c("option", { key: 0, domProps: { value: 0 } }, [
                                _vm._v("Purchase")
                              ]),
                              _vm._v(" "),
                              _c("option", { key: 1, domProps: { value: 1 } }, [
                                _vm._v("Sale")
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _vm.errors.return_type
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors.return_type[0]))
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-3" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Invoice No.")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group col-xs-12" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.invoice_no,
                                  expression: "form.invoice_no"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: { "is-invalid": _vm.errors.invoice_no },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "invoice_no",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Please select a Invoice")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.invoices, function(invoice, key) {
                                return _c(
                                  "option",
                                  { key: key, domProps: { value: invoice.id } },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        invoice.purchase_invoice
                                          ? invoice.purchase_invoice
                                          : invoice.invoice_number
                                      )
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "input-group-append" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-sm btn-primary",
                                attrs: { type: "button" },
                                on: { click: _vm.customerModal }
                              },
                              [_vm._v("+")]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.errors.invoice_no
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors.invoice_no[0]))
                            ])
                          : _vm._e()
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("table", { staticClass: "list-table" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _vm.form.product_detail_list.length
                        ? _c(
                            "tbody",
                            [
                              _vm._l(_vm.form.product_detail_list, function(
                                product_detail,
                                index
                              ) {
                                return _c("tr", { key: index }, [
                                  _c("td", [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(
                                          product_detail.name
                                            ? product_detail.name
                                            : product_detail.product.name
                                        ) +
                                        "\n                      "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(
                                          product_detail.code
                                            ? product_detail.code
                                            : product_detail.product.code
                                        ) +
                                        "\n                      "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _c(
                                      "div",
                                      { staticClass: "input-group col-xs-12" },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: product_detail.quantity,
                                              expression:
                                                "product_detail.quantity"
                                            }
                                          ],
                                          staticClass:
                                            "form-control form-control-sm",
                                          class: {
                                            "is-invalid": _vm.errors.quantity
                                          },
                                          staticStyle: {
                                            width: "70px !important"
                                          },
                                          attrs: {
                                            type: "number",
                                            placeholder: "Enter quantity"
                                          },
                                          domProps: {
                                            value: product_detail.quantity
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                product_detail,
                                                "quantity",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm._m(1, true),
                                        _vm._v(" "),
                                        _vm.errors.quantity
                                          ? _c(
                                              "small",
                                              { staticClass: "text-danger" },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.errors.quantity[0])
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(product_detail.sale_price) +
                                        "\n                      "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c(
                                      "div",
                                      { staticClass: "input-group col-xs-12" },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                product_detail.discount_percentage,
                                              expression:
                                                "product_detail.discount_percentage"
                                            }
                                          ],
                                          staticClass:
                                            "form-control form-control-sm text-right",
                                          class: {
                                            "is-invalid":
                                              _vm.errors.discount_percentage
                                          },
                                          staticStyle: {
                                            width: "60px !important"
                                          },
                                          attrs: {
                                            type: "number",
                                            placeholder: "Discount percentage"
                                          },
                                          domProps: {
                                            value:
                                              product_detail.discount_percentage
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                product_detail,
                                                "discount_percentage",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm._m(2, true),
                                        _vm._v(" "),
                                        _vm.errors.discount_percentage
                                          ? _c(
                                              "small",
                                              { staticClass: "text-danger" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.errors
                                                      .discount_percentage[0]
                                                  )
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(product_detail.tax_percentage) +
                                        "%\n                      "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(
                                          product_detail.product_wise_total
                                        ) +
                                        "\n                      "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-xs btn-danger btn-rounded btn-fw",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteRow(
                                              index,
                                              product_detail
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "mdi mdi-delete"
                                        })
                                      ]
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
                                    attrs: { colspan: "6" }
                                  },
                                  [_vm._v("Grand Total")]
                                ),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _vm._v(_vm._s(_vm.total_cost))
                                ])
                              ])
                            ],
                            2
                          )
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "row p-2 justify-content-md-center" },
                    [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-primary mr-2",
                              attrs: { type: "submit" }
                            },
                            [_vm._v("Submit")]
                          ),
                          _vm._v(" "),
                          _c("router-link", { attrs: { to: "/home" } }, [
                            _c(
                              "button",
                              { staticClass: "btn btn-sm btn-danger mr-2" },
                              [_vm._v("Cancel")]
                            )
                          ])
                        ],
                        1
                      )
                    ]
                  )
                ]
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
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-append" }, [
      _c(
        "button",
        { staticClass: "btn btn-sm btn-primary", attrs: { type: "button" } },
        [_vm._v("Pcs")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-append" }, [
      _c(
        "button",
        { staticClass: "btn btn-sm btn-primary", attrs: { type: "button" } },
        [_vm._v("%")]
      )
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

/***/ "./resources/js/components/forms/PurchaseOrSaleRetun.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/forms/PurchaseOrSaleRetun.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PurchaseOrSaleRetun_vue_vue_type_template_id_b037d958_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PurchaseOrSaleRetun.vue?vue&type=template&id=b037d958&scoped=true& */ "./resources/js/components/forms/PurchaseOrSaleRetun.vue?vue&type=template&id=b037d958&scoped=true&");
/* harmony import */ var _PurchaseOrSaleRetun_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PurchaseOrSaleRetun.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/PurchaseOrSaleRetun.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PurchaseOrSaleRetun_vue_vue_type_style_index_0_id_b037d958_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PurchaseOrSaleRetun.vue?vue&type=style&index=0&id=b037d958&scoped=true&lang=css& */ "./resources/js/components/forms/PurchaseOrSaleRetun.vue?vue&type=style&index=0&id=b037d958&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PurchaseOrSaleRetun_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PurchaseOrSaleRetun_vue_vue_type_template_id_b037d958_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PurchaseOrSaleRetun_vue_vue_type_template_id_b037d958_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b037d958",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/PurchaseOrSaleRetun.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/PurchaseOrSaleRetun.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/forms/PurchaseOrSaleRetun.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseOrSaleRetun_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseOrSaleRetun.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/PurchaseOrSaleRetun.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseOrSaleRetun_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/PurchaseOrSaleRetun.vue?vue&type=style&index=0&id=b037d958&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/PurchaseOrSaleRetun.vue?vue&type=style&index=0&id=b037d958&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseOrSaleRetun_vue_vue_type_style_index_0_id_b037d958_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseOrSaleRetun.vue?vue&type=style&index=0&id=b037d958&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/PurchaseOrSaleRetun.vue?vue&type=style&index=0&id=b037d958&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseOrSaleRetun_vue_vue_type_style_index_0_id_b037d958_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseOrSaleRetun_vue_vue_type_style_index_0_id_b037d958_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseOrSaleRetun_vue_vue_type_style_index_0_id_b037d958_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseOrSaleRetun_vue_vue_type_style_index_0_id_b037d958_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseOrSaleRetun_vue_vue_type_style_index_0_id_b037d958_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/forms/PurchaseOrSaleRetun.vue?vue&type=template&id=b037d958&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/forms/PurchaseOrSaleRetun.vue?vue&type=template&id=b037d958&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseOrSaleRetun_vue_vue_type_template_id_b037d958_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseOrSaleRetun.vue?vue&type=template&id=b037d958&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/PurchaseOrSaleRetun.vue?vue&type=template&id=b037d958&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseOrSaleRetun_vue_vue_type_template_id_b037d958_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseOrSaleRetun_vue_vue_type_template_id_b037d958_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);