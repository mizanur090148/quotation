(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forms/Product.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forms/Product.vue?vue&type=script&lang=js& ***!
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      product_errors: [],
      product_form: new Form({
        category_id: '',
        brand_id: '',
        model_id: '',
        product_name: '',
        product_code: '',
        unit: '',
        tax: '',
        sale_unit: ''
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
      brand_form: new Form({
        name: ''
      })
    };
  },
  mounted: function mounted() {
    this.categoryDropdowndata();
    this.modelDropdowndata();
    this.brandDropdowndata();

    if (this.$route.params.id) {
      this.getProductInfo(this.$route.params.id);
    }
  },
  methods: {
    closeModal: function closeModal(modalName) {
      this.$modal.hide(modalName);
    },
    getProductInfo: function getProductInfo(productId) {
      var _this = this;

      var loader = this.$loading.show({
        container: this.$refs.attendanceTable,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('products/' + productId).then(function (res) {
        _this.product_form = res.data;
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {
        loader.hide();
      });
    },
    productStore: function productStore() {
      var _this2 = this;

      this.errors = [];
      var loader = this.$loading.show({
        container: this.$refs.categoryContainer,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/products', this.product_form).then(function (response) {
        if (response.status == 200) {
          _this2.$snotify.success('Successfully created', 'Success');

          _this2.$router.push({
            name: 'products'
          });
        } else {
          _this2.$snotify.error('Something went worng', 'error');
        }
      })["catch"](function (errors) {
        _this2.product_errors = errors.response.data.errors;
      })["finally"](function (e) {
        loader.hide();
      });
    },
    categoryDropdowndata: function categoryDropdowndata() {
      var _this3 = this;

      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/category-dropdown-data').then(function (res) {
        _this3.categories = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    modelDropdowndata: function modelDropdowndata() {
      var _this4 = this;

      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/model-dropdown-data').then(function (res) {
        _this4.models = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    brandDropdowndata: function brandDropdowndata() {
      var _this5 = this;

      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/brand-dropdown-data').then(function (res) {
        _this5.brandss = res.data;
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
      var _this6 = this;

      this.category_errors = [];
      var loader = this.$loading.show({
        container: this.$refs.categoryContainer,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/categories', this.category_form).then(function (response) {
        if (response.status == 200) {
          _this6.categoryDropdowndata();

          _this6.$snotify.success('Successfully created', 'Success');

          _this6.$modal.hide('categoryModal');

          _this6.loader.hide();
        } else {
          _this6.$snotify.error('Something went worng', 'error');
        }
      })["catch"](function (errors) {
        _this6.category_errors = errors.response.data.errors;
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
      var _this7 = this;

      this.model_errors = [];
      var loader = this.$loading.show({
        container: this.$refs.modelContainer,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/models', this.model_form).then(function (response) {
        if (response.status == 200) {
          _this7.modelDropdowndata();

          _this7.$snotify.success('Successfully created', 'Success');

          _this7.$modal.hide('modelModal');

          _this7.loader.hide();
        } else {
          _this7.$snotify.error('Something went worng', 'error');
        }
      })["catch"](function (errors) {
        _this7.model_errors = errors.response.data.errors;
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
      var _this8 = this;

      this.brand_errors = [];
      var loader = this.$loading.show({
        container: this.$refs.brandContainer,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/brands', this.brand_form).then(function (response) {
        if (response.status == 200) {
          _this8.brandDropdowndata();

          _this8.$snotify.success('Successfully created', 'Success');

          _this8.$modal.hide('brandModal');

          _this8.loader.hide();
        } else {
          _this8.$snotify.error('Something went worng', 'error');
        }
      })["catch"](function (errors) {
        _this8.brand_errors = errors.response.data.errors;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forms/Product.vue?vue&type=template&id=aa92c9d8&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Forms/Product.vue?vue&type=template&id=aa92c9d8& ***!
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
                    ]),
                    _vm._v(" "),
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
                    ])
                  ]),
                  _vm._v(" "),
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
                              value: _vm.product_form.product_code,
                              expression: "product_form.product_code"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          class: {
                            "is-invalid": _vm.product_errors.product_code
                          },
                          attrs: {
                            type: "text",
                            placeholder: "Enter product code"
                          },
                          domProps: { value: _vm.product_form.product_code },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.product_form,
                                "product_code",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.product_errors.product_code
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.product_errors.product_code[0]))
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Unit")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.product_form.unit,
                              expression: "product_form.unit"
                            }
                          ],
                          staticClass:
                            "form-control form-control-sm text-right",
                          class: { "is-invalid": _vm.product_errors.unit },
                          attrs: { type: "number", placeholder: "Enter unit" },
                          domProps: { value: _vm.product_form.unit },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.product_form,
                                "unit",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.product_errors.unit
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.product_errors.unit[0]))
                            ])
                          : _vm._e()
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row p-2" }, [
                    _c("div", { staticClass: "col-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Sale Unit")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.product_form.sale_unit,
                              expression: "product_form.sale_unit"
                            }
                          ],
                          staticClass:
                            "form-control form-control-sm text-right",
                          class: { "is-invalid": _vm.product_errors.sale_unit },
                          attrs: {
                            type: "number",
                            placeholder: "Enter sale unit"
                          },
                          domProps: { value: _vm.product_form.sale_unit },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.product_form,
                                "sale_unit",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.product_errors.sale_unit
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.product_errors.sale_unit[0]))
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Tax")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.product_form.tax,
                              expression: "product_form.tax"
                            }
                          ],
                          staticClass:
                            "form-control form-control-sm text-right",
                          class: { "is-invalid": _vm.product_errors.tax },
                          attrs: { type: "number", placeholder: "Enter tax" },
                          domProps: { value: _vm.product_form.tax },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.product_form,
                                "tax",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.product_errors.tax
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.product_errors.tax[0]))
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

/***/ "./resources/js/components/Forms/Product.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Forms/Product.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_aa92c9d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=aa92c9d8& */ "./resources/js/components/Forms/Product.vue?vue&type=template&id=aa92c9d8&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/components/Forms/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_aa92c9d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_aa92c9d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Forms/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Forms/Product.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Forms/Product.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forms/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Forms/Product.vue?vue&type=template&id=aa92c9d8&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Forms/Product.vue?vue&type=template&id=aa92c9d8& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_aa92c9d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=aa92c9d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Forms/Product.vue?vue&type=template&id=aa92c9d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_aa92c9d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_aa92c9d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);