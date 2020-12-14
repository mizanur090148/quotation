(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/Product.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/Product.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
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
      product_errors: [],
      imagepreview: null,
      product_form: new Form({
        id: '',
        category_id: '',
        brand_id: '',
        model_id: '',
        name: '',
        code: '',
        product_unit: 0,
        purchase_price: '',
        sale_price: '',
        warning_quantity: '',
        tax_percentage: '',
        product_detail: '',
        image: ''
      }),
      categories: [],
      category_errors: [],
      category_form: new Form({
        name: ''
      }),
      models: [],
      model_errors: [],
      model_form: new Form({
        name: ''
      }),
      brandss: [],
      brand_errors: [],
      tax_percentage_dropdown_data: [],
      brand_form: new Form({
        name: ''
      })
    };
  },
  mounted: function mounted() {
    this.categoryDropdowndata();
    this.modelDropdowndata();
    this.brandDropdowndata();
    this.getTaxPrcentageDropdownData();

    if (this.$route.params.id) {
      this.getProductInfo(this.$route.params.id);
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
    imageSelected: function imageSelected(e) {
      var _this = this;

      this.product_form.image = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(this.product_form.image);

      reader.onload = function (e) {
        _this.imagepreview = e.target.result;
      };
    },
    removeImage: function removeImage(e) {
      this.product_form.image = '';
      this.imagepreview = '';
    },
    getTaxPrcentageDropdownData: function getTaxPrcentageDropdownData() {
      var tax_percentage_dropdown_data = [];

      for (var index = 1; index <= 50; index++) {
        tax_percentage_dropdown_data.push(index);
      }

      this.tax_percentage_dropdown_data = tax_percentage_dropdown_data;
    },
    closeModal: function closeModal(modalName) {
      this.$modal.hide(modalName);
    },
    getProductInfo: function getProductInfo(productId) {
      var _this2 = this;

      var loader = this.$loading.show({
        container: this.$refs.attendanceTable,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('products/' + productId).then(function (res) {
        _this2.product_form = res.data;
        _this2.product_form.brand_id = res.data.brand_id ? res.data.brand_id : '';
        _this2.product_form.model_id = res.data.model_id ? res.data.model_id : '';
        _this2.product_form.warning_quantity = res.data.warning_quantity ? res.data.warning_quantity : '';
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {
        loader.hide();
      });
    },
    productStore: function productStore() {
      var _this3 = this;

      this.errors = [];
      var loader = this.$loading.show({
        container: this.$refs.categoryContainer,
        canCancel: true,
        loader: 'bars'
      });
      var data = new FormData();
      data.append('id', this.product_form.id);
      data.append('name', this.product_form.name);
      data.append('code', this.product_form.code);
      data.append('category_id', this.product_form.category_id);
      data.append('brand_id', this.product_form.brand_id);
      data.append('model_id', this.product_form.model_id);
      data.append('product_unit', this.product_form.product_unit);
      data.append('purchase_price', this.product_form.purchase_price);
      data.append('sale_price', this.product_form.sale_price);
      data.append('warning_quantity', this.product_form.warning_quantity);
      data.append('tax_percentage', this.product_form.tax_percentage);
      data.append('product_detail', this.product_form.product_detail);
      data.append('image', this.product_form.image);
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/products', data).then(function (response) {
        if (response.status == 200) {
          _this3.$snotify.success('Successfully created', 'Success');

          _this3.$router.push({
            name: 'products'
          });
        } else {
          _this3.$snotify.error('Something went worng', 'error');
        }
      })["catch"](function (errors) {
        _this3.product_errors = errors.response.data.errors;
      })["finally"](function (e) {
        loader.hide();
      });
    },
    categoryDropdowndata: function categoryDropdowndata() {
      var _this4 = this;

      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/category-dropdown-data').then(function (res) {
        _this4.categories = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    modelDropdowndata: function modelDropdowndata() {
      var _this5 = this;

      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/model-dropdown-data').then(function (res) {
        _this5.models = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    brandDropdowndata: function brandDropdowndata() {
      var _this6 = this;

      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/brand-dropdown-data').then(function (res) {
        _this6.brandss = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    categoryModal: function categoryModal() {
      this.category_form.reset();
      this.category_form.clear();
      this.$modal.show('categoryModal');
    },
    categoryStore: function categoryStore() {
      var _this7 = this;

      this.category_errors = [];
      var loader = this.$loading.show({
        container: this.$refs.categoryContainer,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/categories', this.category_form).then(function (response) {
        if (response.status == 200) {
          _this7.categoryDropdowndata();

          _this7.$snotify.success('Successfully created', 'Success');

          _this7.$modal.hide('categoryModal');

          _this7.loader.hide();
        } else {
          _this7.$snotify.error('Something went worng', 'error');
        }
      })["catch"](function (errors) {
        _this7.category_errors = errors.response.data.errors;
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
      var _this8 = this;

      this.model_errors = [];
      var loader = this.$loading.show({
        container: this.$refs.modelContainer,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/models', this.model_form).then(function (response) {
        if (response.status == 200) {
          _this8.modelDropdowndata();

          _this8.$snotify.success('Successfully created', 'Success');

          _this8.$modal.hide('modelModal');

          _this8.loader.hide();
        } else {
          _this8.$snotify.error('Something went worng', 'error');
        }
      })["catch"](function (errors) {
        _this8.model_errors = errors.response.data.errors;
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
      var _this9 = this;

      this.brand_errors = [];
      var loader = this.$loading.show({
        container: this.$refs.brandContainer,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/brands', this.brand_form).then(function (response) {
        if (response.status == 200) {
          _this9.brandDropdowndata();

          _this9.$snotify.success('Successfully created', 'Success');

          _this9.$modal.hide('brandModal');

          _this9.loader.hide();
        } else {
          _this9.$snotify.error('Something went worng', 'error');
        }
      })["catch"](function (errors) {
        _this9.brand_errors = errors.response.data.errors;
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/Product.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/Product.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nimg {\n  width: 50%;\n  height: 100%;\n  display: block;\n  margin-bottom: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/Product.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/Product.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/Product.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/Product.vue?vue&type=template&id=801b4998&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/Product.vue?vue&type=template&id=801b4998& ***!
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
                  attrs: { enctype: "multipart/form-data" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.productStore($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "row p-2" }, [
                    _c("div", { staticClass: "col-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Product Name")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.product_form.name,
                              expression: "product_form.name"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          class: { "is-invalid": _vm.product_errors.name },
                          attrs: {
                            type: "text",
                            placeholder: "Enter product name"
                          },
                          domProps: { value: _vm.product_form.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.product_form,
                                "name",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.product_errors.name
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.product_errors.name[0]))
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Product Code")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.product_form.code,
                              expression: "product_form.code"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          class: { "is-invalid": _vm.product_errors.code },
                          attrs: {
                            type: "text",
                            placeholder: "Enter product code"
                          },
                          domProps: { value: _vm.product_form.code },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.product_form,
                                "code",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.product_errors.code
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.product_errors.code[0]))
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Category")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group col-xs-12" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.product_form.category_id,
                                  expression: "product_form.category_id"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: {
                                "is-invalid": _vm.product_errors.category_id
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
                                    _vm.product_form,
                                    "category_id",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Please select a category")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.categories, function(category, key) {
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
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "input-group-append" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-sm btn-primary",
                                attrs: { type: "button" },
                                on: { click: _vm.categoryModal }
                              },
                              [_vm._v("+")]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.product_errors.category_id
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.product_errors.category_id[0]))
                            ])
                          : _vm._e()
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row p-2" }, [
                    _c("div", { staticClass: "col-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Brand")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group col-xs-12" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.product_form.brand_id,
                                  expression: "product_form.brand_id"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: {
                                "is-invalid": _vm.product_errors.brand_id
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
                                    _vm.product_form,
                                    "brand_id",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Please select a brand")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.brandss, function(brand, key) {
                                return _c(
                                  "option",
                                  { key: key, domProps: { value: brand.id } },
                                  [_vm._v(_vm._s(brand.name))]
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
                                on: { click: _vm.brandModal }
                              },
                              [_vm._v("+")]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.product_errors.brand_id
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.product_errors.brand_id[0]))
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Model")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group col-xs-12" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.product_form.model_id,
                                  expression: "product_form.model_id"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: {
                                "is-invalid": _vm.product_errors.model_id
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
                                    _vm.product_form,
                                    "model_id",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Please select a model")
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.models, function(model, key) {
                                return _c(
                                  "option",
                                  { key: key, domProps: { value: model.id } },
                                  [_vm._v(_vm._s(model.name))]
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
                                on: { click: _vm.modelModal }
                              },
                              [_vm._v("+")]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.product_errors.model_id
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.product_errors.model_id[0]))
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Product Unit")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.product_form.product_unit,
                                expression: "product_form.product_unit"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            class: {
                              "is-invalid": _vm.product_errors.product_unit
                            },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.product_form,
                                  "product_unit",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { key: 0, domProps: { value: 0 } }, [
                              _vm._v("Piece")
                            ]),
                            _vm._v(" "),
                            _c("option", { key: 1, domProps: { value: 1 } }, [
                              _vm._v("Dzn")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _vm.product_errors.product_unit
                        ? _c("small", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.product_errors.product_unit[0]))
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row p-2" }, [
                    _c("div", { staticClass: "col-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Purchase Price(Unit Price)")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.product_form.purchase_price,
                              expression: "product_form.purchase_price"
                            }
                          ],
                          staticClass:
                            "form-control form-control-sm text-right",
                          class: {
                            "is-invalid": _vm.product_errors.purchase_price
                          },
                          attrs: {
                            type: "text",
                            placeholder: "Enter purchase price"
                          },
                          domProps: { value: _vm.product_form.purchase_price },
                          on: {
                            keypress: function($event) {
                              return _vm.isNumber($event)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.product_form,
                                "purchase_price",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.product_errors.purchase_price
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(
                                _vm._s(_vm.product_errors.purchase_price[0])
                              )
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Sale Price(Unit Price)")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.product_form.sale_price,
                              expression: "product_form.sale_price"
                            }
                          ],
                          staticClass:
                            "form-control form-control-sm text-right",
                          class: {
                            "is-invalid": _vm.product_errors.sale_price
                          },
                          attrs: {
                            type: "text",
                            placeholder: "Enter sale price"
                          },
                          domProps: { value: _vm.product_form.sale_price },
                          on: {
                            keypress: function($event) {
                              return _vm.isNumber($event)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.product_form,
                                "sale_price",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.product_errors.sale_price
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.product_errors.sale_price[0]))
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Warning Quantity")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.product_form.warning_quantity,
                              expression: "product_form.warning_quantity"
                            }
                          ],
                          staticClass:
                            "form-control form-control-sm text-right",
                          class: {
                            "is-invalid": _vm.product_errors.warning_quantity
                          },
                          attrs: {
                            type: "text",
                            placeholder: "Enter warning qty"
                          },
                          domProps: {
                            value: _vm.product_form.warning_quantity
                          },
                          on: {
                            keypress: function($event) {
                              return _vm.isNumber($event)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.product_form,
                                "warning_quantity",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.product_errors.warning_quantity
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(
                                _vm._s(_vm.product_errors.warning_quantity[0])
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
                        _c("label", [_vm._v("Tax Percentage")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.product_form.tax_percentage,
                                expression: "product_form.tax_percentage"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            class: {
                              "is-invalid": _vm.product_errors.tax_percentage
                            },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.product_form,
                                  "tax_percentage",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Please select a percentage")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.tax_percentage_dropdown_data, function(
                              percentage,
                              key
                            ) {
                              return _c(
                                "option",
                                { key: key, domProps: { value: percentage } },
                                [_vm._v(_vm._s(percentage) + "%")]
                              )
                            })
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _vm.product_errors.tax_percentage
                        ? _c("small", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.product_errors.tax_percentage[0]))
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-4" }, [
                      _c("div", { staticClass: "custom-file mt-4" }, [
                        _c("input", {
                          staticClass: "custom-file-input",
                          attrs: { type: "file", id: "customFile", accept: "" },
                          on: { change: _vm.imageSelected }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-file-label",
                            attrs: { for: "" }
                          },
                          [_vm._v("Choose an image")]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-4" }, [
                      _vm.imagepreview || _vm.product_form.image
                        ? _c("div", { staticClass: "mt-3" }, [
                            _c("img", {
                              staticClass: "figure-img img-fluid rounded",
                              staticStyle: { "max-height": "60px" },
                              attrs: {
                                src: _vm.imagepreview
                                  ? _vm.imagepreview
                                  : _vm.product_form.image
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-xs btn-danger text-right",
                                attrs: { type: "button" },
                                on: { click: _vm.removeImage }
                              },
                              [_c("i", { staticClass: "mdi mdi-delete" })]
                            )
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row p-2" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Product Details")]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.product_form.product_detail,
                              expression: "product_form.product_detail"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          class: {
                            "is-invalid": _vm.product_errors.product_detail
                          },
                          attrs: {
                            rows: "3",
                            placeholder: "Enter product details"
                          },
                          domProps: { value: _vm.product_form.product_detail },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.product_form,
                                "product_detail",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.product_errors.product_detail
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(
                                _vm._s(_vm.product_errors.product_detail[0])
                              )
                            ])
                          : _vm._e()
                      ])
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
        { attrs: { name: "categoryModal", width: 550, height: 325 } },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c("h5", { staticClass: "modal-title" }, [
                    _vm._v("New Category")
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.closeModal("categoryModal")
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
                        return _vm.categoryStore()
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "modal-body" }, [
                      _c("div", { staticClass: "row p-2" }, [
                        _c("div", { staticClass: "col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v(" Name")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.category_form.name,
                                  expression: "category_form.name"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: { "is-invalid": _vm.category_errors.name },
                              attrs: {
                                type: "text",
                                placeholder: "Enter category name"
                              },
                              domProps: { value: _vm.category_form.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.category_form,
                                    "name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.category_errors.name
                              ? _c("small", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(_vm.category_errors.name[0]))
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
                        _c("div", { staticClass: "row p-2 " }, [
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
                                on: {
                                  click: function($event) {
                                    return _vm.closeModal("categoryModal")
                                  }
                                }
                              },
                              [_vm._v("Close")]
                            )
                          ])
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
      _c("modal", { attrs: { name: "brandModal", width: 550, height: 325 } }, [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h5", { staticClass: "modal-title" }, [_vm._v("New Brand")]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.closeModal("brandModal")
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
                      return _vm.brandStore()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "modal-body" }, [
                    _c("div", { staticClass: "row p-2" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v(" Name")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.brand_form.name,
                                expression: "brand_form.name"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            class: { "is-invalid": _vm.brand_errors.name },
                            attrs: {
                              type: "text",
                              placeholder: "Enter brand name"
                            },
                            domProps: { value: _vm.brand_form.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.brand_form,
                                  "name",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.brand_errors.name
                            ? _c("small", { staticClass: "text-danger" }, [
                                _vm._v(_vm._s(_vm.brand_errors.name[0]))
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
                      _c("div", { staticClass: "row p-2 " }, [
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
                              on: {
                                click: function($event) {
                                  return _vm.closeModal("brandModal")
                                }
                              }
                            },
                            [_vm._v("Close")]
                          )
                        ])
                      ])
                    ]
                  )
                ]
              )
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("modal", { attrs: { name: "modelModal", width: 550, height: 325 } }, [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h5", { staticClass: "modal-title" }, [_vm._v("New Model")]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.closeModal("modelModal")
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
                      return _vm.modelStore()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "modal-body" }, [
                    _c("div", { staticClass: "row p-2" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v(" Name")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.model_form.name,
                                expression: "model_form.name"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            class: { "is-invalid": _vm.model_errors.name },
                            attrs: {
                              type: "text",
                              placeholder: "Enter model name"
                            },
                            domProps: { value: _vm.model_form.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.model_form,
                                  "name",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.model_errors.name
                            ? _c("small", { staticClass: "text-danger" }, [
                                _vm._v(_vm._s(_vm.model_errors.name[0]))
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
                      _c("div", { staticClass: "row p-2 " }, [
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
                              on: {
                                click: function($event) {
                                  return _vm.closeModal("modelModal")
                                }
                              }
                            },
                            [_vm._v("Close")]
                          )
                        ])
                      ])
                    ]
                  )
                ]
              )
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("vue-snotify")
    ],
    1
  )
}
var staticRenderFns = []
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

/***/ "./resources/js/components/forms/Product.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/forms/Product.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_801b4998___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=801b4998& */ "./resources/js/components/forms/Product.vue?vue&type=template&id=801b4998&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Product_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/forms/Product.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_801b4998___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_801b4998___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/Product.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/forms/Product.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/Product.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/forms/Product.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/Product.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/forms/Product.vue?vue&type=template&id=801b4998&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/forms/Product.vue?vue&type=template&id=801b4998& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_801b4998___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=801b4998& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/Product.vue?vue&type=template&id=801b4998&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_801b4998___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_801b4998___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);