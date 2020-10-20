(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["StockIn"],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        name: '',
        code: '',
        unit: '',
        tax: '',
        sale_unit: '',
        total_cost_without_tax: '',
        product_detail_list: [{
          supplier_id: '',
          category_id: '',
          product_id: '',
          // product_code: '',
          quantity: 0,
          product_wise_total: 0,
          net_unit_cost: 0,
          discount_percentage: '',
          discount_value: 0
        }],
        tax_percentage: '',
        percentage_value: '',
        profit_margin: '',
        sale_value: '',
        note: ''
      }),
      suppliers: [],
      supplier_errors: [],
      supplier_form: new Form({
        name: '',
        address: '',
        mobile_no: '',
        telephone_no: '',
        responsible_person: '',
        email: ''
      }),
      categories: [],
      products: [],
      percentage_dropdowns: []
    };
  },
  mounted: function mounted() {
    this.supplierDropdowndata();
    this.categoryDropdowndata();
    this.getPrcentageValueDropdownData();

    if (this.$route.params.id) {
      this.getProductInfo(this.$route.params.id);
    }
  },
  watch: {
    'form.product_detail_list': {
      handler: function handler(newValue, oldValue) {
        var _this = this;

        newValue.forEach(function (product_detail) {
          var product_wise_total = product_detail.quantity * product_detail.net_unit_cost;

          var discount_value = _this.calculateDiscount(product_wise_total, product_detail.discount_percentage);

          product_detail.discount_value = discount_value;
          product_detail.product_wise_total = product_wise_total - discount_value;
          product_detail.product_id = product_detail.product_id;
        });
      },
      deep: true
    }
  },
  computed: {
    total_cost_without_tax: function total_cost_without_tax() {
      var sum = 0;
      this.form.product_detail_list.forEach(function (product_detail) {
        sum += product_detail.product_wise_total;
      });
      return sum;
    },
    total_value: function total_value() {
      return this.total_cost_without_tax * (this.form.tax_percentage / 100);
    },
    total_cost_with_tax: function total_cost_with_tax() {
      return this.total_value + this.total_cost_without_tax;
    }
  },
  methods: {
    getPrcentageValueDropdownData: function getPrcentageValueDropdownData() {
      var percentage_dropdowns = new Array();

      for (var index = 0; index <= 100; index++) {
        percentage_dropdowns.push(index);
      }

      this.percentage_dropdowns = percentage_dropdowns;
    },
    calculateDiscount: function calculateDiscount(product_wise_total, discount_percentage) {
      var discount_value = product_wise_total * (discount_percentage / 100);
      return discount_value.toFixed(2);
    },
    closeModal: function closeModal(modalName) {
      this.$modal.hide(modalName);
    },
    addNewRow: function addNewRow() {
      var _this$form$product_de;

      this.form.product_detail_list.push((_this$form$product_de = {
        supplier_id: '',
        category_id: '',
        product_id: ''
      }, _defineProperty(_this$form$product_de, "product_id", ''), _defineProperty(_this$form$product_de, "quantity", 0), _defineProperty(_this$form$product_de, "net_unit_cost", 0), _defineProperty(_this$form$product_de, "discount", 0), _this$form$product_de));
    },
    deleteRow: function deleteRow(index, item) {
      var _this2 = this;

      if (this.form.product_detail_list.length > 1) {
        this.$snotify.confirm("Are you sure to delete this?", {
          closeOnClick: false,
          pauseOnHover: true,
          buttons: [{
            text: "Yes",
            action: function action(toast) {
              _this2.$snotify.remove(toast.id);

              var idx = _this2.form.product_detail_list.indexOf(index);

              _this2.form.product_detail_list.splice(idx, 1); //  this.calculateTotal();

            },
            bold: true
          }, {
            text: "No",
            action: function action(toast) {
              _this2.$snotify.remove(toast.id);
            },
            bold: true
          }]
        });
      } else {
        alert('You can not delete this');
      }
    },
    getProductInfo: function getProductInfo(event) {
      var _this3 = this;

      var loader = this.$loading.show({
        container: this.$refs.attendanceTable,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('products/' + event.target.value).then(function (res) {
        _this3.product = res.data;
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {
        loader.hide();
      });
    },
    getProductsByCategory: function getProductsByCategory(event) {
      var _this4 = this;

      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/get-products-by-category/' + event.target.value).then(function (res) {
        _this4.products = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
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
          _this5.$snotify.success('Successfully created', 'Success');

          _this5.$router.push({
            name: 'stock-ins'
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
    supplierDropdowndata: function supplierDropdowndata() {
      var _this6 = this;

      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/supplier-dropdown-data').then(function (res) {
        _this6.suppliers = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    categoryDropdowndata: function categoryDropdowndata() {
      var _this7 = this;

      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/category-dropdown-data').then(function (res) {
        _this7.categories = res.data;
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
    },
    modelModal: function modelModal() {
      this.model_form.reset();
      this.model_form.clear();
      this.$modal.show('modelModal');
    },
    modelStore: function modelStore() {
      var _this9 = this;

      this.model_errors = [];
      var loader = this.$loading.show({
        container: this.$refs.modelContainer,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/models', this.model_form).then(function (response) {
        if (response.status == 200) {
          _this9.modelDropdowndata();

          _this9.$snotify.success('Successfully created', 'Success');

          _this9.$modal.hide('modelModal');

          _this9.loader.hide();
        } else {
          _this9.$snotify.error('Something went worng', 'error');
        }
      })["catch"](function (errors) {
        _this9.model_errors = errors.response.data.errors;
      })["finally"](function (e) {
        loader.hide();
      });
    },
    brandModal: function brandModal() {
      this.brand_form.reset();
      this.brand_form.clear();
      this.$modal.show('brandModal');
    },
    brandStore: function brandStore() {
      var _this10 = this;

      this.brand_errors = [];
      var loader = this.$loading.show({
        container: this.$refs.brandContainer,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/brands', this.brand_form).then(function (response) {
        if (response.status == 200) {
          _this10.brandDropdowndata();

          _this10.$snotify.success('Successfully created', 'Success');

          _this10.$modal.hide('brandModal');

          _this10.loader.hide();
        } else {
          _this10.$snotify.error('Something went worng', 'error');
        }
      })["catch"](function (errors) {
        _this10.brand_errors = errors.response.data.errors;
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
exports.push([module.i, "\n.modal-dialog[data-v-7cbd69c0] {\n  max-width: 750px !important;\n}\n.btn i[data-v-7cbd69c0] {\n  font-size: 10px !important;\n}\n", ""]);

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
                    _c("div", { staticClass: "col-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Supplier")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group col-xs-12" }, [
                          _c("span", { staticClass: "input-group-append" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-sm btn-primary",
                                attrs: { type: "button" },
                                on: { click: _vm.supplierModal }
                              },
                              [_vm._v("+")]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.errors.supplier_id
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors.supplier_id[0]))
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Supplier")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group col-xs-12" }, [
                          _c("input", {
                            staticClass: "form-control form-control-sm",
                            class: { "is-invalid": _vm.errors.document },
                            attrs: { type: "file", name: "document" }
                          })
                        ]),
                        _vm._v(" "),
                        _vm.errors.supplier_id
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors.supplier_id[0]))
                            ])
                          : _vm._e()
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v("\n            Product Table\n            "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("table", { staticClass: "list-table" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _c(
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
                                        value: product_detail.supplier_id,
                                        expression: "product_detail.supplier_id"
                                      }
                                    ],
                                    staticClass: "form-control form-control-sm",
                                    class: {
                                      "is-invalid": _vm.errors.supplier_id
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
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
                                    _c("option", { attrs: { value: "" } }, [
                                      _vm._v("Please select a supplier")
                                    ]),
                                    _vm._v(" "),
                                    _vm._l(_vm.suppliers, function(
                                      supplier,
                                      key
                                    ) {
                                      return _c(
                                        "option",
                                        {
                                          key: key,
                                          domProps: { value: supplier.id }
                                        },
                                        [_vm._v(_vm._s(supplier.name))]
                                      )
                                    })
                                  ],
                                  2
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: product_detail.category_id,
                                        expression: "product_detail.category_id"
                                      }
                                    ],
                                    staticClass: "form-control form-control-sm",
                                    class: {
                                      "is-invalid": _vm.errors.category_id
                                    },
                                    on: {
                                      change: [
                                        function($event) {
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
                                            "category_id",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        },
                                        function($event) {
                                          return _vm.getProductsByCategory(
                                            $event
                                          )
                                        }
                                      ]
                                    }
                                  },
                                  [
                                    _c("option", { attrs: { value: "" } }, [
                                      _vm._v("Please select a category")
                                    ]),
                                    _vm._v(" "),
                                    _vm._l(_vm.categories, function(
                                      category,
                                      key
                                    ) {
                                      return _c(
                                        "option",
                                        {
                                          key: key,
                                          domProps: { value: category.id }
                                        },
                                        [_vm._v(_vm._s(category.name))]
                                      )
                                    })
                                  ],
                                  2
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: product_detail.product_id,
                                        expression: "product_detail.product_id"
                                      }
                                    ],
                                    staticClass: "form-control form-control-sm",
                                    class: {
                                      "is-invalid": _vm.errors.product_id
                                    },
                                    on: {
                                      change: [
                                        function($event) {
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
                                            "product_id",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        },
                                        function($event) {
                                          return _vm.getProductInfo($event)
                                        }
                                      ]
                                    }
                                  },
                                  [
                                    _c("option", { attrs: { value: "" } }, [
                                      _vm._v("Please select a product")
                                    ]),
                                    _vm._v(" "),
                                    _vm._l(_vm.products, function(
                                      product,
                                      key
                                    ) {
                                      return _c(
                                        "option",
                                        {
                                          key: key,
                                          domProps: { value: product.id }
                                        },
                                        [_vm._v(_vm._s(product.name))]
                                      )
                                    })
                                  ],
                                  2
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: product_detail.quantity,
                                      expression: "product_detail.quantity"
                                    }
                                  ],
                                  staticClass:
                                    "form-control form-control-sm text-right",
                                  class: { "is-invalid": _vm.errors.quantity },
                                  attrs: {
                                    type: "number",
                                    placeholder: "Enter quantity"
                                  },
                                  domProps: { value: product_detail.quantity },
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
                                _vm.errors.quantity
                                  ? _c(
                                      "small",
                                      { staticClass: "text-danger" },
                                      [_vm._v(_vm._s(_vm.errors.quantity[0]))]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: product_detail.net_unit_cost,
                                      expression: "product_detail.net_unit_cost"
                                    }
                                  ],
                                  staticClass:
                                    "form-control form-control-sm text-right",
                                  class: {
                                    "is-invalid": _vm.errors.net_unit_cost
                                  },
                                  attrs: {
                                    type: "number",
                                    placeholder: "Enter net unit cost"
                                  },
                                  domProps: {
                                    value: product_detail.net_unit_cost
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        product_detail,
                                        "net_unit_cost",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.errors.net_unit_cost
                                  ? _c(
                                      "small",
                                      { staticClass: "text-danger" },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.errors.net_unit_cost[0])
                                        )
                                      ]
                                    )
                                  : _vm._e()
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
                                    _vm._m(1, true),
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
                              _c("td", { staticClass: "text-right" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: product_detail.discount_value,
                                      expression:
                                        "product_detail.discount_value"
                                    }
                                  ],
                                  staticClass:
                                    "form-control form-control-sm text-right",
                                  class: {
                                    "is-invalid": _vm.errors.discount_value
                                  },
                                  attrs: {
                                    type: "number",
                                    disabled: "",
                                    placeholder: "Discount value"
                                  },
                                  domProps: {
                                    value: product_detail.discount_value
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        product_detail,
                                        "discount_value",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.errors.discount_value
                                  ? _c(
                                      "small",
                                      { staticClass: "text-danger" },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.errors.discount_value[0])
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-right" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: product_detail.product_wise_total,
                                      expression:
                                        "product_detail.product_wise_total"
                                    }
                                  ],
                                  staticClass:
                                    "form-control form-control-sm text-right",
                                  class: {
                                    "is-invalid": _vm.errors.product_wise_total
                                  },
                                  attrs: {
                                    type: "number",
                                    disabled: "",
                                    placeholder: "Enter product_wise_total"
                                  },
                                  domProps: {
                                    value: product_detail.product_wise_total
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        product_detail,
                                        "product_wise_total",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.errors.product_wise_total
                                  ? _c(
                                      "small",
                                      { staticClass: "text-danger" },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.product_wise_total[0]
                                          )
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-xs btn-success btn-rounded btn-fw",
                                    attrs: { type: "button" },
                                    on: { click: _vm.addNewRow }
                                  },
                                  [_c("i", { staticClass: "mdi mdi-plus" })]
                                ),
                                _vm._v(" "),
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
                                  [_c("i", { staticClass: "mdi mdi-delete" })]
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
                              [_vm._v("Total Cost Without Tax")]
                            ),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(_vm._s(_vm.total_cost_without_tax))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c(
                              "td",
                              {
                                staticClass: "text-right",
                                attrs: { colspan: "5" }
                              },
                              [
                                _vm._v(
                                  "\n                        Tax \n                      "
                                )
                              ]
                            ),
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
                                        value: _vm.form.tax_percentage,
                                        expression: "form.tax_percentage"
                                      }
                                    ],
                                    staticClass:
                                      "form-control form-control-sm text-right",
                                    class: {
                                      "is-invalid": _vm.errors.tax_percentage
                                    },
                                    attrs: {
                                      type: "number",
                                      placeholder: "Tax Percentage"
                                    },
                                    domProps: {
                                      value: _vm.form.tax_percentage
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "tax_percentage",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm._m(2),
                                  _vm._v(" "),
                                  _vm.errors.tax_percentage
                                    ? _c(
                                        "small",
                                        { staticClass: "text-danger" },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.errors.tax_percentage[0])
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(_vm._s(_vm.total_value))
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
                              [_vm._v("Total Cost")]
                            ),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(_vm._s(_vm.total_cost_with_tax))
                            ])
                          ])
                        ],
                        2
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v("\n            Profit Margin\n            "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "row p-2" }, [
                    _c("div", { staticClass: "col-3" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Profit Margin")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group col-xs-12" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.profit_margin,
                                  expression: "form.profit_margin"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: { "is-invalid": _vm.errors.profit_margin },
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
                                    "profit_margin",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Please select a profit margin")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "1" } }, [
                                _vm._v("Percentage(%)")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "2" } }, [
                                _vm._v("Value")
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _vm.errors.profit_margin
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors.profit_margin[0]))
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-3" }, [
                      _vm.form.profit_margin == "1"
                        ? _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Percentage value%")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.percentage_value,
                                    expression: "form.percentage_value"
                                  }
                                ],
                                staticClass: "form-control form-control-sm",
                                class: { "is-invalid": _vm.errors.category_id },
                                on: {
                                  change: [
                                    function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.form,
                                        "percentage_value",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                    function($event) {
                                      return _vm.getProductsByCategory($event)
                                    }
                                  ]
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Please select a category")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.percentage_dropdowns, function(
                                  percentage,
                                  key
                                ) {
                                  return _c(
                                    "option",
                                    {
                                      key: key,
                                      domProps: { value: percentage }
                                    },
                                    [_vm._v(_vm._s(percentage) + "%")]
                                  )
                                })
                              ],
                              2
                            )
                          ])
                        : _vm.form.profit_margin == "2"
                        ? _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Sale Value")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.sale_value,
                                  expression: "form.sale_value"
                                }
                              ],
                              staticClass:
                                "form-control form-control-sm text-right",
                              class: {
                                "is-invalid": _vm.errors.tax_percentage
                              },
                              attrs: {
                                type: "number",
                                placeholder: "Tax Percentage"
                              },
                              domProps: { value: _vm.form.sale_value },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "sale_value",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.errors.category_id
                        ? _c("small", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors.category_id[0]))
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _vm.form.percentage_value != "" &&
                    _vm.form.profit_margin == "1"
                      ? _c("div", { staticClass: "col-3" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Sale Value")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.sale_value,
                                  expression: "form.sale_value"
                                }
                              ],
                              staticClass:
                                "form-control form-control-sm text-right",
                              class: {
                                "is-invalid": _vm.errors.tax_percentage
                              },
                              attrs: {
                                type: "number",
                                placeholder: "Tax Percentage"
                              },
                              domProps: { value: _vm.form.sale_value },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "sale_value",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _vm.errors.category_id
                            ? _c("small", { staticClass: "text-danger" }, [
                                _vm._v(_vm._s(_vm.errors.category_id[0]))
                              ])
                            : _vm._e()
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-3" }, [
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
                          staticClass:
                            "form-control form-control-sm text-right",
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
                          _c("router-link", { attrs: { to: "/products" } }, [
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
        { attrs: { name: "supplierModal", width: 795, height: 375 } },
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
                            _c("label", [_vm._v("Responsible Person")]),
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
                                placeholder: "Enter responsible person"
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
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-4" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Mobile No.")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.supplier_form.mobile_no,
                                  expression: "supplier_form.mobile_no"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: {
                                "is-invalid": _vm.supplier_errors.mobile_no
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Enter mobile no"
                              },
                              domProps: { value: _vm.supplier_form.mobile_no },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.supplier_form,
                                    "mobile_no",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.supplier_errors.mobile_no
                              ? _c("small", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    _vm._s(_vm.supplier_errors.mobile_no[0])
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
                                placeholder: "Enter supplier email"
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
                                placeholder: "Enter supplier address"
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
        _c("td", [_vm._v("Supplier")]),
        _vm._v(" "),
        _c("td", [_vm._v("Category")]),
        _vm._v(" "),
        _c("td", [_vm._v("Product Name")]),
        _vm._v(" "),
        _c("td", [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("td", [_vm._v("Net Unit Cost")]),
        _vm._v(" "),
        _c("td", [_vm._v("Discount%")]),
        _vm._v(" "),
        _c("td", [_vm._v("Discount Value")]),
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
        [_vm._v("%")]
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