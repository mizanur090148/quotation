(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["purchaseOrSaleRetun"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/PurchaseRetun.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/PurchaseRetun.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      errors: [],
      invoices: [],
      purchase_invoice: '',
      purchase_detail_list: [],
      form: new Form({
        return_type: 0,
        invoice_id: ''
      })
    };
  },
  mounted: function mounted() {
    this.getPurchaseinvoicesDropdown();
  },
  methods: {
    getPurchaseinvoicesDropdown: function getPurchaseinvoicesDropdown() {
      var _this = this;

      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/get-purchase-invoices-dropdown').then(function (res) {
        _this.invoices = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getPurchaseInvoiceDetails: function getPurchaseInvoiceDetails() {
      var _this2 = this;

      this.purchase_invoice = '';
      this.purchase_detail_list = [];

      if (!this.form.invoice_id) {
        return false;
      }

      var loader = this.$loading.show({
        container: this.$refs.attendanceTable,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('get-invoice-details-for-return/', {
        params: {
          return_type: this.form.return_type,
          invoice_id: this.form.invoice_id
        }
      }).then(function (res) {
        _this2.purchase_invoice = res.data;
        _this2.purchase_detail_list = res.data.stock_ins;
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {
        loader.hide();
      });
    },
    returnProduct: function returnProduct(type, delete_id) {
      var _this3 = this;

      this.$snotify.confirm("Do you want to return this product?", {
        closeOnClick: false,
        pauseOnHover: true,
        buttons: [{
          text: "Yes",
          action: function action(toast) {
            _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('purchase-return/', {
              params: {
                delete_id: delete_id
              }
            }).then(function (res) {
              if (res.status) {
                if (type == 'invoice') {
                  _this3.purchase_detail_list = [];

                  _this3.getPurchaseinvoicesDropdown();
                } else {
                  _this3.getPurchaseInvoiceDetails();
                }

                _this3.$snotify.clear();

                _this3.$snotify.success('Successfully Returned', 'Success');
              } else {
                _this3.$snotify.error('Something went worng', 'error');
              }
            })["catch"](function (error) {
              _this3.$snotify.error('Something went worng', 'error');
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
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/SaleRetun.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/SaleRetun.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      errors: [],
      invoices: [],
      sale_invoice: '',
      sale_detail_list: [],
      form: new Form({
        return_type: 1,
        invoice_id: ''
      })
    };
  },
  mounted: function mounted() {
    this.getSaleInvoicesDropdown();
  },
  methods: {
    getSaleInvoicesDropdown: function getSaleInvoicesDropdown() {
      var _this = this;

      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/get-sale-invoices-dropdown').then(function (res) {
        _this.invoices = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getInvoiceWiseDetails: function getInvoiceWiseDetails() {
      var _this2 = this;

      this.sale_invoice = '';
      this.sale_detail_list = [];

      if (!this.form.invoice_id) {
        return false;
      }

      var loader = this.$loading.show({
        container: this.$refs.attendanceTable,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('get-invoice-details-for-return/', {
        params: {
          return_type: this.form.return_type,
          invoice_id: this.form.invoice_id
        }
      }).then(function (res) {
        _this2.sale_invoice = res.data;
        _this2.sale_detail_list = res.data.sales;
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {
        loader.hide();
      });
    },
    returnProduct: function returnProduct(type, delete_id) {
      var _this3 = this;

      this.$snotify.confirm("Do you want to return?", {
        closeOnClick: false,
        pauseOnHover: true,
        buttons: [{
          text: "Yes",
          action: function action(toast) {
            _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('sale-return/', {
              params: {
                delete_id: delete_id
              }
            }).then(function (res) {
              if (res.status) {
                if (type == 'invoice') {
                  _this3.sale_detail_list = [];

                  _this3.getSaleInvoicesDropdown();
                } else {
                  _this3.getInvoiceWiseDetails();
                }

                _this3.$snotify.clear();

                _this3.$snotify.success('Successfully Returned', 'Success');
              } else {
                _this3.$snotify.error('Something went worng', 'error');
              }
            })["catch"](function (error) {
              _this3.$snotify.error('Something went worng', 'error');
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/PurchaseRetun.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/PurchaseRetun.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.text-right {\n  padding-right: 7px !important\n}\n.text-left {\n  padding-left: 5px !important\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/SaleRetun.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/SaleRetun.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.text-right {\n  padding-right: 6px !important\n}\n.text-left {\n  padding-left: 5px !important\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/PurchaseRetun.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/PurchaseRetun.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseRetun.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/PurchaseRetun.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/SaleRetun.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/SaleRetun.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SaleRetun.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/SaleRetun.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/PurchaseRetun.vue?vue&type=template&id=331f09fe&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/PurchaseRetun.vue?vue&type=template&id=331f09fe& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
                    }
                  }
                },
                [
                  _c("div", { staticClass: "row p-2" }, [
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
                                  value: _vm.form.invoice_id,
                                  expression: "form.invoice_id"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: { "is-invalid": _vm.errors.invoice_no },
                              on: {
                                change: [
                                  function($event) {
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
                                      "invoice_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  _vm.getPurchaseInvoiceDetails
                                ]
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Please select an Invoice")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.invoices, function(invoice, key) {
                                return _c(
                                  "option",
                                  { key: key, domProps: { value: invoice.id } },
                                  [_vm._v(_vm._s(invoice.purchase_invoice))]
                                )
                              })
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _vm.errors.invoice_no
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors.invoice_no[0]))
                            ])
                          : _vm._e()
                      ])
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _vm.purchase_detail_list.length
                  ? _c("table", { staticClass: "list-table table-bordered" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        [
                          _vm._l(_vm.purchase_detail_list, function(
                            purchase_product,
                            index
                          ) {
                            return _c("tr", { key: index }, [
                              _c("td", { staticClass: "text-left" }, [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(purchase_product.supplier.name) +
                                    "\n                      "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-left" }, [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(purchase_product.product.name) +
                                    "\n                      "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-left" }, [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(purchase_product.product.code) +
                                    "\n                      "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-right" }, [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(purchase_product.quantity) +
                                    "\n                      "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-right" }, [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(
                                      purchase_product.product.purchase_price
                                    ) +
                                    "\n                      "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-right" }, [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(
                                      purchase_product.discount_percentage
                                    ) +
                                    "\n                      "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-right" }, [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(purchase_product.tax_value) +
                                    "\n                      "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-right" }, [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(
                                      purchase_product.product_wise_total
                                    ) +
                                    "\n                      "
                                )
                              ]),
                              _vm._v(" "),
                              _vm.purchase_detail_list.length > 1
                                ? _c("td", { staticClass: "text-center" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-xs btn-primary btn-rounded btn-fw",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            return _vm.returnProduct(
                                              "single",
                                              purchase_product.id
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("Return")]
                                    )
                                  ])
                                : _vm._e()
                            ])
                          }),
                          _vm._v(" "),
                          _c("tr", { staticClass: "font-weight-bold" }, [
                            _c(
                              "td",
                              {
                                staticClass: "text-right",
                                attrs: { colspan: "7" }
                              },
                              [_vm._v("Total Product Cost")]
                            ),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm.purchase_invoice.total_product_cost)
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", { staticClass: "font-weight-bold" }, [
                            _c(
                              "td",
                              {
                                staticClass: "text-right",
                                attrs: { colspan: "7" }
                              },
                              [_vm._v("Shipping Cost")]
                            ),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(_vm.purchase_invoice.shipping_cost))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", { staticClass: "font-weight-bold" }, [
                            _c(
                              "td",
                              {
                                staticClass: "text-right",
                                attrs: { colspan: "7" }
                              },
                              [_vm._v("Others Cost")]
                            ),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(_vm.purchase_invoice.others_cost))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", { staticClass: "font-weight-bold" }, [
                            _c(
                              "td",
                              {
                                staticClass: "grand text-right",
                                attrs: { colspan: "7" }
                              },
                              [_vm._v("Grand Total")]
                            ),
                            _vm._v(" "),
                            _c("td", { staticClass: "grand" }, [
                              _vm._v(_vm._s(_vm.purchase_invoice.total_cost))
                            ])
                          ])
                        ],
                        2
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-right" }, [
                _vm.purchase_detail_list.length
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-primary",
                        attrs: { type: "submit" },
                        on: {
                          click: function($event) {
                            return _vm.returnProduct(
                              "invoice",
                              _vm.purchase_invoice.id
                            )
                          }
                        }
                      },
                      [_vm._v("Return Invoice")]
                    )
                  : _vm._e()
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
    return _c("thead", [
      _c("tr", [
        _c("td", { attrs: { colspan: "9" } }, [
          _vm._v("Ordered Product Details")
        ])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", [_vm._v("Supplier Name")]),
        _vm._v(" "),
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/SaleRetun.vue?vue&type=template&id=0e1f5bf8&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/SaleRetun.vue?vue&type=template&id=0e1f5bf8& ***!
  \******************************************************************************************************************************************************************************************************************/
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
              _c("h4", { staticClass: "card-title" }, [_vm._v("Sale Return")]),
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
                    }
                  }
                },
                [
                  _c("div", { staticClass: "row p-2" }, [
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
                                  value: _vm.form.invoice_id,
                                  expression: "form.invoice_id"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: { "is-invalid": _vm.errors.invoice_no },
                              on: {
                                change: [
                                  function($event) {
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
                                      "invoice_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  _vm.getInvoiceWiseDetails
                                ]
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
                                  [_vm._v(_vm._s(invoice.invoice_number))]
                                )
                              })
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _vm.errors.invoice_no
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors.invoice_no[0]))
                            ])
                          : _vm._e()
                      ])
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _vm.sale_detail_list.length
                  ? _c("table", { staticClass: "list-table table-bordered" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        [
                          _vm._l(_vm.sale_detail_list, function(
                            sale_product,
                            index
                          ) {
                            return _c("tr", { key: index }, [
                              _c("td", { staticClass: "text-left" }, [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(sale_product.product.name) +
                                    "\n                      "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-left" }, [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(sale_product.product.code) +
                                    "\n                      "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-right" }, [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(sale_product.quantity) +
                                    "\n                      "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-right" }, [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(sale_product.sale_price) +
                                    "\n                      "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-right" }, [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(sale_product.discount_percentage) +
                                    "\n                      "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-right" }, [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(sale_product.tax_value) +
                                    "\n                      "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-right" }, [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(
                                      Math.round(
                                        sale_product.product_wise_total
                                      )
                                    ) +
                                    "\n                      "
                                )
                              ]),
                              _vm._v(" "),
                              _vm.sale_detail_list.length > 1
                                ? _c("td", { staticClass: "text-center" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-xs btn-primary btn-rounded btn-fw",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            return _vm.returnProduct(
                                              "single",
                                              sale_product.id
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("Return")]
                                    )
                                  ])
                                : _vm._e()
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
                              [_vm._v("Total Product Cost")]
                            ),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(
                                _vm._s(_vm.sale_invoice.total_product_price)
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", { staticClass: "font-weight-bold" }, [
                            _c(
                              "td",
                              {
                                staticClass: "text-right",
                                attrs: { colspan: "6" }
                              },
                              [_vm._v("Shipping Cost")]
                            ),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(_vm._s(_vm.sale_invoice.delivery_cost))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", { staticClass: "font-weight-bold" }, [
                            _c(
                              "td",
                              {
                                staticClass: "text-right",
                                attrs: { colspan: "6" }
                              },
                              [_vm._v("Others Cost")]
                            ),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(_vm._s(_vm.sale_invoice.others_cost))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", { staticClass: "font-weight-bold" }, [
                            _c(
                              "td",
                              {
                                staticClass: "text-right grand",
                                attrs: { colspan: "6" }
                              },
                              [_vm._v("Grand Total")]
                            ),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right grand" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.sale_invoice.invoice_wise_total_price
                                )
                              )
                            ])
                          ])
                        ],
                        2
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-right" }, [
                _vm.sale_detail_list.length
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-primary",
                        attrs: { type: "submit" },
                        on: {
                          click: function($event) {
                            return _vm.returnProduct(
                              "invoice",
                              _vm.sale_invoice.id
                            )
                          }
                        }
                      },
                      [_vm._v("Return Invoice")]
                    )
                  : _vm._e()
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
    return _c("thead", [
      _c("tr", [
        _c("td", { attrs: { colspan: "8" } }, [
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

/***/ "./resources/js/components/forms/PurchaseRetun.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/forms/PurchaseRetun.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PurchaseRetun_vue_vue_type_template_id_331f09fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PurchaseRetun.vue?vue&type=template&id=331f09fe& */ "./resources/js/components/forms/PurchaseRetun.vue?vue&type=template&id=331f09fe&");
/* harmony import */ var _PurchaseRetun_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PurchaseRetun.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/PurchaseRetun.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PurchaseRetun_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PurchaseRetun.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/forms/PurchaseRetun.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PurchaseRetun_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PurchaseRetun_vue_vue_type_template_id_331f09fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PurchaseRetun_vue_vue_type_template_id_331f09fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/PurchaseRetun.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/PurchaseRetun.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/forms/PurchaseRetun.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseRetun_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseRetun.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/PurchaseRetun.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseRetun_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/PurchaseRetun.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/forms/PurchaseRetun.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseRetun_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseRetun.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/PurchaseRetun.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseRetun_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseRetun_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseRetun_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseRetun_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseRetun_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/forms/PurchaseRetun.vue?vue&type=template&id=331f09fe&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/forms/PurchaseRetun.vue?vue&type=template&id=331f09fe& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseRetun_vue_vue_type_template_id_331f09fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseRetun.vue?vue&type=template&id=331f09fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/PurchaseRetun.vue?vue&type=template&id=331f09fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseRetun_vue_vue_type_template_id_331f09fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseRetun_vue_vue_type_template_id_331f09fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/forms/SaleRetun.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/forms/SaleRetun.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SaleRetun_vue_vue_type_template_id_0e1f5bf8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaleRetun.vue?vue&type=template&id=0e1f5bf8& */ "./resources/js/components/forms/SaleRetun.vue?vue&type=template&id=0e1f5bf8&");
/* harmony import */ var _SaleRetun_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SaleRetun.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/SaleRetun.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SaleRetun_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SaleRetun.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/forms/SaleRetun.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SaleRetun_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SaleRetun_vue_vue_type_template_id_0e1f5bf8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SaleRetun_vue_vue_type_template_id_0e1f5bf8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/SaleRetun.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/SaleRetun.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/forms/SaleRetun.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRetun_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SaleRetun.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/SaleRetun.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRetun_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/SaleRetun.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/forms/SaleRetun.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRetun_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SaleRetun.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/SaleRetun.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRetun_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRetun_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRetun_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRetun_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRetun_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/forms/SaleRetun.vue?vue&type=template&id=0e1f5bf8&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/forms/SaleRetun.vue?vue&type=template&id=0e1f5bf8& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRetun_vue_vue_type_template_id_0e1f5bf8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SaleRetun.vue?vue&type=template&id=0e1f5bf8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/SaleRetun.vue?vue&type=template&id=0e1f5bf8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRetun_vue_vue_type_template_id_0e1f5bf8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRetun_vue_vue_type_template_id_0e1f5bf8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);