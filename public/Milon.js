(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Milon"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/StockIn.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/StockIn.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      form: new Form({
        purchase_invoice: '',
        stock_in_status: 1,
        stock_in_document: '',
        shipping_cost: '',
        others_cost: '',
        note: '',
        created_by: 1,
        outlet_id: 1,
        product_detail_list: []
      }),
      suppliers: [],
      supplier_errors: [],
      supplier_form: new Form({
        name: '',
        trn_no: '',
        address: '',
        mobile_no: '',
        telephone_no: '',
        responsible_person: '',
        email: ''
      }),
      products: [],
      product: null,
      search_product: ''
    };
  },
  mounted: function mounted() {
    this.supplierDropdowndata();

    if (this.$route.params.id) {
      this.getStockInChallanInfo(this.$route.params.id);
    } else {
      this.getStockInChallan();
    }
  },
  watch: {
    'form.product_detail_list': {
      handler: function handler(newValue, oldValue) {
        var _this = this;

        newValue.forEach(function (product_detail) {
          var tax_value = product_detail.tax_value * product_detail.quantity;
          var product_wise_total = product_detail.quantity * product_detail.purchase_price ? product_detail.purchase_price : product_detail.product.purchase_price;

          var discount_value = _this.calculateDiscount(product_wise_total, product_detail.discount_percentage);

          product_wise_total = product_wise_total + tax_value - discount_value;
          product_detail.product_wise_total = product_wise_total.toFixed(2);
        });
      },
      deep: true
    }
  },
  computed: {
    total_cost: function total_cost() {
      var sum = 0;
      this.form.product_detail_list.forEach(function (product_detail) {
        sum += parseFloat(product_detail.product_wise_total);
      });
      return sum.toFixed(2);
    }
  },
  methods: {
    isNumber: function isNumber(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;

      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
        evt.preventDefault();
        ;
      } else {
        return true;
      }
    },
    getStockInChallan: function getStockInChallan() {
      this.form.purchase_invoice = Date.now();
    },
    autoComplete: function autoComplete() {
      var _this2 = this;

      this.products = [];

      if (this.search_product.length > 0) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/search-product-in-purchase', {
          params: {
            search_product: this.search_product
          }
        }).then(function (response) {
          _this2.products = response.data;
        })["catch"](function (e) {
          console.log(e);
        });
      }
    },
    getProductInfo: function getProductInfo(productId) {
      var _this3 = this;

      this.search_product = '';
      this.products = [];
      var lastSelectedSupplierId = this.lastSelectedSupplierId();
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('products/' + productId).then(function (res) {
        _this3.product = res.data;

        _this3.form.product_detail_list.push({
          supplier_id: lastSelectedSupplierId,
          name: _this3.product.name,
          code: _this3.product.code,
          product_id: _this3.product.id,
          quantity: 1,
          unit: _this3.product.unit.name,
          purchase_price: _this3.product.purchase_price,
          tax_percentage: _this3.product.tax_percentage,
          tax_value: _this3.product.purchase_tax_value,
          discount_percentage: 0,
          product_wise_total: _this3.product.purchase_price * 1.
        });
      })["catch"](function (error) {
        console.log(error);
      });
    },
    lastSelectedSupplierId: function lastSelectedSupplierId() {
      var supplierId = '';
      var countLength = this.form.product_detail_list.length;

      if (countLength > 0) {
        --countLength;
        supplierId = this.form.product_detail_list[countLength].supplier_id;
      }

      return supplierId;
    },
    calculateDiscount: function calculateDiscount(product_wise_total, discount_percentage) {
      var discount_value = product_wise_total * (discount_percentage / 100);
      return discount_value.toFixed(2);
    },
    closeModal: function closeModal(modalName) {
      this.$modal.hide(modalName);
    },
    deleteRow: function deleteRow(index, item) {
      var _this4 = this;

      if (this.form.product_detail_list.length > 1) {
        this.$snotify.clear();
        this.$snotify.confirm("Are you sure to delete this?", {
          closeOnClick: false,
          pauseOnHover: true,
          buttons: [{
            text: "Yes",
            action: function action(toast) {
              _this4.$snotify.remove(toast.id);

              var idx = _this4.form.product_detail_list.indexOf(index);

              _this4.form.product_detail_list.splice(idx, 1); //  this.calculateTotal();

            },
            bold: true
          }, {
            text: "No",
            action: function action(toast) {
              _this4.$snotify.remove(toast.id);
            },
            bold: true
          }]
        });
      } else {
        alert('You can not delete this');
      }
    },
    store: function store() {
      var _this5 = this;

      this.errors = [];
      var loader = this.$loading.show({
        container: this.$refs.supplierContainer,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/stock-ins', this.form).then(function (response) {
        if (response.status == 200) {
          _this5.$snotify.clear();

          _this5.$snotify.success('Successfully created', 'Success');

          _this5.$router.push({
            name: 'milons'
          });
        } else {
          _this5.$snotify.error('Something went worng', 'error');
        }
      })["catch"](function (errors) {
        _this5.errors = errors.response.data.errors;
      })["finally"](function (e) {
        loader.hide();
      });
    },
    getStockInChallanInfo: function getStockInChallanInfo(stockInId) {
      var _this6 = this;

      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('stock-ins/' + stockInId).then(function (res) {
        _this6.form = res.data;
        _this6.form.product_detail_list = res.data.stock_ins;
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {//loader.hide();
      });
    },
    supplierDropdowndata: function supplierDropdowndata() {
      var _this7 = this;

      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/supplier-dropdown-data').then(function (res) {
        _this7.suppliers = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    supplierModal: function supplierModal() {
      this.supplier_form.reset();
      this.supplier_form.clear();
      this.$modal.show('supplierModal');
    },
    supplierStore: function supplierStore() {
      var _this8 = this;

      this.supplier_errors = [];
      var loader = this.$loading.show({
        container: this.$refs.supplierContainer,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/suppliers', this.supplier_form).then(function (response) {
        if (response.status == 200) {
          _this8.supplierDropdowndata();

          _this8.$snotify.clear();

          _this8.$snotify.success('Successfully created', 'Success');

          _this8.$modal.hide('supplierModal');

          _this8.loader.hide();
        } else {
          _this8.$snotify.error('Something went worng', 'error');
        }
      })["catch"](function (errors) {
        _this8.supplier_errors = errors.response.data.errors;
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/StockIn.vue?vue&type=style&index=0&id=7cbd69c0&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/StockIn.vue?vue&type=style&index=0&id=7cbd69c0&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modal-dialog[data-v-7cbd69c0] {\n  max-width: 750px !important;\n}\n.list-group-item[data-v-7cbd69c0] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 17px !important;\n}\n.text-right[data-v-7cbd69c0] {\n  padding-right: 6px !important\n}\n.text-left[data-v-7cbd69c0] {\n  padding-left: 5px !important\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/StockIn.vue?vue&type=style&index=0&id=7cbd69c0&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/StockIn.vue?vue&type=style&index=0&id=7cbd69c0&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./StockIn.vue?vue&type=style&index=0&id=7cbd69c0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/StockIn.vue?vue&type=style&index=0&id=7cbd69c0&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/StockIn.vue?vue&type=template&id=7cbd69c0&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/StockIn.vue?vue&type=template&id=7cbd69c0&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
                _vm._v("New Entry Form")
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
                        _c("label", [_vm._v("Purchase Invoice")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.purchase_invoice,
                              expression: "form.purchase_invoice"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          class: { "is-invalid": _vm.errors.purchase_invoice },
                          attrs: { type: "text", disabled: "" },
                          domProps: { value: _vm.form.purchase_invoice },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "purchase_invoice",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.purchase_invoice
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors.purchase_invoice[0]))
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-3" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Status")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group col-xs-12" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.stock_in_status,
                                  expression: "form.stock_in_status"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: {
                                "is-invalid": _vm.errors.stock_in_status
                              },
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
                                    "stock_in_status",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { key: 0, domProps: { value: 0 } }, [
                                _vm._v("Pending")
                              ]),
                              _vm._v(" "),
                              _c("option", { key: 1, domProps: { value: 1 } }, [
                                _vm._v("Received")
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _vm.errors.stock_in_status
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors.stock_in_status[0]))
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-3" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Supplier")]),
                        _vm._v(" "),
                        _c("div"),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-primary",
                            attrs: { type: "button" },
                            on: { click: _vm.supplierModal }
                          },
                          [_vm._v("Add Supplier")]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "row p-2" }, [
                    _c("div", { staticClass: "col-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("  Search & Select Product")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.search_product,
                              expression: "search_product"
                            }
                          ],
                          staticClass:
                            "form-control form-control-sm product-seach",
                          attrs: {
                            type: "text",
                            placeholder: "Search product"
                          },
                          domProps: { value: _vm.search_product },
                          on: {
                            keyup: _vm.autoComplete,
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.search_product = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.product
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors.product[0]))
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.products.length
                          ? _c("div", { staticClass: "panel-footer" }, [
                              _c(
                                "ul",
                                { staticClass: "list-group" },
                                _vm._l(_vm.products, function(product, key) {
                                  return _c(
                                    "a",
                                    {
                                      key: key,
                                      staticClass: "list-group-item",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          return _vm.getProductInfo(product.id)
                                        }
                                      }
                                    },
                                    [_vm._v(_vm._s(product.name))]
                                  )
                                }),
                                0
                              )
                            ])
                          : _vm._e()
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row p-2" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c(
                        "table",
                        { staticClass: "list-table table-bordered" },
                        [
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
                                        _c(
                                          "select",
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  product_detail.supplier_id,
                                                expression:
                                                  "product_detail.supplier_id"
                                              }
                                            ],
                                            staticClass:
                                              "form-control form-control-sm",
                                            class: {
                                              "is-invalid":
                                                _vm.errors.supplier_id
                                            },
                                            attrs: { required: "" },
                                            on: {
                                              change: function($event) {
                                                var $$selectedVal = Array.prototype.filter
                                                  .call(
                                                    $event.target.options,
                                                    function(o) {
                                                      return o.selected
                                                    }
                                                  )
                                                  .map(function(o) {
                                                    var val =
                                                      "_value" in o
                                                        ? o._value
                                                        : o.value
                                                    return val
                                                  })
                                                _vm.$set(
                                                  product_detail,
                                                  "supplier_id",
                                                  $event.target.multiple
                                                    ? $$selectedVal
                                                    : $$selectedVal[0]
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "option",
                                              { attrs: { value: "" } },
                                              [
                                                _vm._v(
                                                  "Please select a supplier"
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(_vm.suppliers, function(
                                              supplier,
                                              key
                                            ) {
                                              return _c(
                                                "option",
                                                {
                                                  key: key,
                                                  domProps: {
                                                    value: supplier.id
                                                  }
                                                },
                                                [_vm._v(_vm._s(supplier.name))]
                                              )
                                            })
                                          ],
                                          2
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-left" }, [
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
                                      _c("td", { staticClass: "text-left" }, [
                                        _vm._v(
                                          "                    \n                        " +
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
                                          {
                                            staticClass: "input-group col-xs-12"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    product_detail.quantity,
                                                  expression:
                                                    "product_detail.quantity"
                                                }
                                              ],
                                              staticClass:
                                                "form-control form-control-sm text-right",
                                              class: {
                                                "is-invalid":
                                                  _vm.errors.quantity
                                              },
                                              staticStyle: {
                                                width: "60px !important"
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
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "input-group-append"
                                              },
                                              [
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn btn-xs btn-primary",
                                                    attrs: { type: "button" }
                                                  },
                                                  [
                                                    product_detail.unit
                                                      ? _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              product_detail.unit
                                                            )
                                                          )
                                                        ])
                                                      : _vm._e()
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _vm.errors.quantity
                                              ? _c(
                                                  "small",
                                                  {
                                                    staticClass: "text-danger"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.errors.quantity[0]
                                                      )
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-right" }, [
                                        _vm._v(
                                          "\n                        " +
                                            _vm._s(
                                              product_detail.purchase_price
                                                ? product_detail.purchase_price
                                                : product_detail.product
                                                    .purchase_price
                                            ) +
                                            "\n                      "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "input-group col-xs-12"
                                          },
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
                                                placeholder:
                                                  "Discount percentage"
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
                                            _vm._m(1, true),
                                            _vm._v(" "),
                                            _vm.errors.discount_percentage
                                              ? _c(
                                                  "small",
                                                  {
                                                    staticClass: "text-danger"
                                                  },
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
                                      _c("td", { staticClass: "text-right" }, [
                                        _vm._v(
                                          "                     \n                        " +
                                            _vm._s(
                                              product_detail.tax_percentage
                                            ) +
                                            "%\n                      "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-right" }, [
                                        _vm._v(
                                          "\n                        " +
                                            _vm._s(
                                              product_detail.product_wise_total
                                            ) +
                                            "\n                      "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-right" }, [
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
                                  _c(
                                    "tr",
                                    { staticClass: "font-weight-bold" },
                                    [
                                      _c("td", { attrs: { colspan: "7" } }, [
                                        _vm._v("Grand Total")
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-right" }, [
                                        _vm._v(_vm._s(_vm.total_cost))
                                      ])
                                    ]
                                  )
                                ],
                                2
                              )
                            : _vm._e()
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row p-2" }, [
                    _c("div", { staticClass: "col-3" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Shipping Cost")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.shipping_cost,
                              expression: "form.shipping_cost"
                            }
                          ],
                          staticClass:
                            "form-control form-control-sm text-right",
                          class: { "is-invalid": _vm.errors.shipping_cost },
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.shipping_cost },
                          on: {
                            keypress: function($event) {
                              return _vm.isNumber($event)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "shipping_cost",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.shipping_cost
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors.shipping_cost[0]))
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-3" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Other's Cost")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.others_cost,
                              expression: "form.others_cost"
                            }
                          ],
                          staticClass:
                            "form-control form-control-sm text-right",
                          class: { "is-invalid": _vm.errors.others_cost },
                          attrs: { type: "text" },
                          domProps: { value: _vm.form.others_cost },
                          on: {
                            keypress: function($event) {
                              return _vm.isNumber($event)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "others_cost",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.others_cost
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors.others_cost[0]))
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Note")]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.note,
                              expression: "form.note"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          class: { "is-invalid": _vm.errors.note },
                          attrs: { placeholder: "Enter note" },
                          domProps: { value: _vm.form.note },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "note", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm.errors.note
                        ? _c("small", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors.note[0]))
                          ])
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
                          _c("router-link", { attrs: { to: "/stock-ins" } }, [
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
      _c(
        "modal",
        { attrs: { name: "supplierModal", width: 795, height: 400 } },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c("h5", { staticClass: "modal-title" }, [
                    _vm._v("New supplier")
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.closeModal("supplierModal")
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
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.supplierStore()
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "modal-body" }, [
                      _c("div", { staticClass: "row p-2" }, [
                        _c("div", { staticClass: "col-4" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Supplier Name")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.supplier_form.name,
                                  expression: "supplier_form.name"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: { "is-invalid": _vm.supplier_errors.name },
                              attrs: {
                                type: "text",
                                placeholder: "Enter supplier name"
                              },
                              domProps: { value: _vm.supplier_form.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.supplier_form,
                                    "name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.supplier_errors.name
                              ? _c("small", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(_vm.supplier_errors.name[0]))
                                ])
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-4" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("TRN No.")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.supplier_form.trn_no,
                                  expression: "supplier_form.trn_no"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: {
                                "is-invalid": _vm.supplier_errors.trn_no
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Enter trn no"
                              },
                              domProps: { value: _vm.supplier_form.trn_no },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.supplier_form,
                                    "trn_no",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.supplier_errors.trn_no
                              ? _c("small", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(_vm.supplier_errors.trn_no[0]))
                                ])
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-4" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Attention Name")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.supplier_form.responsible_person,
                                  expression: "supplier_form.responsible_person"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: {
                                "is-invalid":
                                  _vm.supplier_errors.responsible_person
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Enter attention name"
                              },
                              domProps: {
                                value: _vm.supplier_form.responsible_person
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.supplier_form,
                                    "responsible_person",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.supplier_errors.responsible_person
                              ? _c("small", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.supplier_errors.responsible_person[0]
                                    )
                                  )
                                ])
                              : _vm._e()
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row p-2" }, [
                        _c("div", { staticClass: "col-4" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Telephone No.")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.supplier_form.telephone_no,
                                  expression: "supplier_form.telephone_no"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: {
                                "is-invalid": _vm.supplier_errors.telephone_no
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Enter telephone no"
                              },
                              domProps: {
                                value: _vm.supplier_form.telephone_no
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.supplier_form,
                                    "telephone_no",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.supplier_errors.telephone_no
                              ? _c("small", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    _vm._s(_vm.supplier_errors.telephone_no[0])
                                  )
                                ])
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-4" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("E-mail")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.supplier_form.email,
                                  expression: "supplier_form.email"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: {
                                "is-invalid": _vm.supplier_errors.email
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Enter email"
                              },
                              domProps: { value: _vm.supplier_form.email },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.supplier_form,
                                    "email",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.supplier_errors.email
                              ? _c("small", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(_vm.supplier_errors.email[0]))
                                ])
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-4" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Address")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.supplier_form.address,
                                  expression: "supplier_form.address"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: {
                                "is-invalid": _vm.supplier_errors.address
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Enter address"
                              },
                              domProps: { value: _vm.supplier_form.address },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.supplier_form,
                                    "address",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.supplier_errors.address
                              ? _c("small", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(_vm.supplier_errors.address[0]))
                                ])
                              : _vm._e()
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "modal-footer justify-content-md-center" },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-primary mr-2",
                              attrs: { type: "submit" }
                            },
                            [_vm._v("Submit")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-danger mr-2",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.closeModal("supplierModal")
                                }
                              }
                            },
                            [_vm._v("Close")]
                          )
                        ])
                      ]
                    )
                  ]
                )
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
        _c("td", { attrs: { colspan: "9" } }, [_vm._v("Product Details Table")])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", [_vm._v("Supplier")]),
        _vm._v(" "),
        _c("td", [_vm._v("Product Name")]),
        _vm._v(" "),
        _c("td", [_vm._v("Product Code")]),
        _vm._v(" "),
        _c("td", [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("td", [_vm._v("Unit Cost")]),
        _vm._v(" "),
        _c("td", [_vm._v("Discount(%)")]),
        _vm._v(" "),
        _c("td", [_vm._v("Tax(%)")]),
        _vm._v(" "),
        _c("td", [_vm._v("Product Total")]),
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

/***/ "./resources/js/components/forms/StockIn.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/forms/StockIn.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StockIn_vue_vue_type_template_id_7cbd69c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StockIn.vue?vue&type=template&id=7cbd69c0&scoped=true& */ "./resources/js/components/forms/StockIn.vue?vue&type=template&id=7cbd69c0&scoped=true&");
/* harmony import */ var _StockIn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StockIn.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/StockIn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _StockIn_vue_vue_type_style_index_0_id_7cbd69c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StockIn.vue?vue&type=style&index=0&id=7cbd69c0&scoped=true&lang=css& */ "./resources/js/components/forms/StockIn.vue?vue&type=style&index=0&id=7cbd69c0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StockIn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StockIn_vue_vue_type_template_id_7cbd69c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StockIn_vue_vue_type_template_id_7cbd69c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7cbd69c0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/StockIn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/StockIn.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/forms/StockIn.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StockIn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./StockIn.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/StockIn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StockIn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/StockIn.vue?vue&type=style&index=0&id=7cbd69c0&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/forms/StockIn.vue?vue&type=style&index=0&id=7cbd69c0&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StockIn_vue_vue_type_style_index_0_id_7cbd69c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./StockIn.vue?vue&type=style&index=0&id=7cbd69c0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/StockIn.vue?vue&type=style&index=0&id=7cbd69c0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StockIn_vue_vue_type_style_index_0_id_7cbd69c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StockIn_vue_vue_type_style_index_0_id_7cbd69c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StockIn_vue_vue_type_style_index_0_id_7cbd69c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StockIn_vue_vue_type_style_index_0_id_7cbd69c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StockIn_vue_vue_type_style_index_0_id_7cbd69c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/forms/StockIn.vue?vue&type=template&id=7cbd69c0&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/forms/StockIn.vue?vue&type=template&id=7cbd69c0&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StockIn_vue_vue_type_template_id_7cbd69c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./StockIn.vue?vue&type=template&id=7cbd69c0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/StockIn.vue?vue&type=template&id=7cbd69c0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StockIn_vue_vue_type_template_id_7cbd69c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StockIn_vue_vue_type_template_id_7cbd69c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);