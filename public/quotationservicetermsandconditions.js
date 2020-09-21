(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quotationservicetermsandconditions"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuotationServiceTermsAndConditions.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/QuotationServiceTermsAndConditions.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      service_categories: [],
      terms_and_conditions: []
    };
  },
  mounted: function mounted() {
    this.getServiceCategories();
    this.getTermsAndConditions();
  },
  methods: {
    getServiceCategories: function getServiceCategories() {
      var _this = this;

      var loader = this.$loading.show({
        container: this.$refs.attendanceTable,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('services-dropdown-data').then(function (res) {
        _this.service_categories = res.data;
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {
        loader.hide();
      });
    },
    getTermsAndConditions: function getTermsAndConditions() {
      var _this2 = this;

      var loader = this.$loading.show({
        container: this.$refs.attendanceTable,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('terms-and-conditions-dropdown-data').then(function (res) {
        _this2.terms_and_conditions = res.data;
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {
        loader.hide();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuotationServiceTermsAndConditions.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/QuotationServiceTermsAndConditions.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modal-dialog {\n  max-width: 650px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuotationServiceTermsAndConditions.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/QuotationServiceTermsAndConditions.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./QuotationServiceTermsAndConditions.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuotationServiceTermsAndConditions.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuotationServiceTermsAndConditions.vue?vue&type=template&id=7376b83c&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/QuotationServiceTermsAndConditions.vue?vue&type=template&id=7376b83c& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-wrapper" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6 grid-margin stretch-card" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Default form")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-description" }, [
                _vm._v(
                  "\n                  Basic form layout\n                "
                )
              ]),
              _vm._v(" "),
              _c("form", { staticClass: "forms-sample" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "exampleInputUsername1" } }, [
                    _vm._v("Username")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "exampleInputUsername1",
                      placeholder: "Username"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                    _vm._v("Email address")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "email",
                      id: "exampleInputEmail1",
                      placeholder: "Email"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "exampleInputPassword1" } }, [
                    _vm._v("Password")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "password",
                      id: "exampleInputPassword1",
                      placeholder: "Password"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { attrs: { for: "exampleInputConfirmPassword1" } },
                    [_vm._v("Confirm Password")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "password",
                      id: "exampleInputConfirmPassword1",
                      placeholder: "Password"
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "form-check form-check-flat form-check-primary"
                  },
                  [
                    _c("label", { staticClass: "form-check-label" }, [
                      _c("input", {
                        staticClass: "form-check-input",
                        attrs: { type: "checkbox" }
                      }),
                      _vm._v(
                        "\n                      Remember me\n                    "
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary mr-2",
                    attrs: { type: "submit" }
                  },
                  [_vm._v("Submit")]
                ),
                _vm._v(" "),
                _c("button", { staticClass: "btn btn-light" }, [
                  _vm._v("Cancel")
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 grid-margin stretch-card" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Horizontal Form")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-description" }, [
                _vm._v(
                  "\n                  Horizontal form layout\n                "
                )
              ]),
              _vm._v(" "),
              _c("form", { staticClass: "forms-sample" }, [
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-sm-3 col-form-label",
                      attrs: { for: "exampleInputUsername2" }
                    },
                    [_vm._v("Email")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-9" }, [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "exampleInputUsername2",
                        placeholder: "Username"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-sm-3 col-form-label",
                      attrs: { for: "exampleInputEmail2" }
                    },
                    [_vm._v("Email")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-9" }, [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        type: "email",
                        id: "exampleInputEmail2",
                        placeholder: "Email"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-sm-3 col-form-label",
                      attrs: { for: "exampleInputMobile" }
                    },
                    [_vm._v("Mobile")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-9" }, [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "exampleInputMobile",
                        placeholder: "Mobile number"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-sm-3 col-form-label",
                      attrs: { for: "exampleInputPassword2" }
                    },
                    [_vm._v("Password")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-9" }, [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        type: "password",
                        id: "exampleInputPassword2",
                        placeholder: "Password"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-sm-3 col-form-label",
                      attrs: { for: "exampleInputConfirmPassword2" }
                    },
                    [_vm._v("Re Password")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-9" }, [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        type: "password",
                        id: "exampleInputConfirmPassword2",
                        placeholder: "Password"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "form-check form-check-flat form-check-primary"
                  },
                  [
                    _c("label", { staticClass: "form-check-label" }, [
                      _c("input", {
                        staticClass: "form-check-input",
                        attrs: { type: "checkbox" }
                      }),
                      _vm._v(
                        "\n                      Remember me\n                    "
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary mr-2",
                    attrs: { type: "submit" }
                  },
                  [_vm._v("Submit")]
                ),
                _vm._v(" "),
                _c("button", { staticClass: "btn btn-light" }, [
                  _vm._v("Cancel")
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 grid-margin stretch-card" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Basic form elements")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-description" }, [
                _vm._v(
                  "\n                  Basic form elements\n                "
                )
              ]),
              _vm._v(" "),
              _c("form", { staticClass: "forms-sample" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "exampleInputName1" } }, [
                    _vm._v("Name")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "exampleInputName1",
                      placeholder: "Name"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "exampleInputEmail3" } }, [
                    _vm._v("Email address")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "email",
                      id: "exampleInputEmail3",
                      placeholder: "Email"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "exampleInputPassword4" } }, [
                    _vm._v("Password")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "password",
                      id: "exampleInputPassword4",
                      placeholder: "Password"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "exampleSelectGender" } }, [
                    _vm._v("Gender")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      staticClass: "form-control",
                      attrs: { id: "exampleSelectGender" }
                    },
                    [
                      _c("option", [_vm._v("Male")]),
                      _vm._v(" "),
                      _c("option", [_vm._v("Female")])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("File upload")]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "file-upload-default",
                    attrs: { type: "file", name: "img[]" }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group col-xs-12" }, [
                    _c("input", {
                      staticClass: "form-control file-upload-info",
                      attrs: {
                        type: "text",
                        disabled: "",
                        placeholder: "Upload Image"
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "input-group-append" }, [
                      _c(
                        "button",
                        {
                          staticClass: "file-upload-browse btn btn-primary",
                          attrs: { type: "button" }
                        },
                        [_vm._v("Upload")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "exampleInputCity1" } }, [
                    _vm._v("City")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "exampleInputCity1",
                      placeholder: "Location"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "exampleTextarea1" } }, [
                    _vm._v("Textarea")
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    staticClass: "form-control",
                    attrs: { id: "exampleTextarea1", rows: "4" }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary mr-2",
                    attrs: { type: "submit" }
                  },
                  [_vm._v("Submit")]
                ),
                _vm._v(" "),
                _c("button", { staticClass: "btn btn-light" }, [
                  _vm._v("Cancel")
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 grid-margin stretch-card" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Input size")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-description" }, [
                _vm._v("\n                  Add classes like "),
                _c("code", [_vm._v(".form-control-lg")]),
                _vm._v(" and "),
                _c("code", [_vm._v(".form-control-sm")]),
                _vm._v(".\n                ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Large input")]),
                _vm._v(" "),
                _c("input", {
                  staticClass: "form-control form-control-lg",
                  attrs: {
                    type: "text",
                    placeholder: "Username",
                    "aria-label": "Username"
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Default input")]),
                _vm._v(" "),
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    placeholder: "Username",
                    "aria-label": "Username"
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Small input")]),
                _vm._v(" "),
                _c("input", {
                  staticClass: "form-control form-control-sm",
                  attrs: {
                    type: "text",
                    placeholder: "Username",
                    "aria-label": "Username"
                  }
                })
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 grid-margin stretch-card" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Select size")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-description" }, [
                _vm._v("\n                  Add classes like "),
                _c("code", [_vm._v(".form-control-lg")]),
                _vm._v(" and "),
                _c("code", [_vm._v(".form-control-sm")]),
                _vm._v(".                    \n                ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "exampleFormControlSelect1" } }, [
                  _vm._v("Large select")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    staticClass: "form-control form-control-lg",
                    attrs: { id: "exampleFormControlSelect1" }
                  },
                  [
                    _c("option", [_vm._v("1")]),
                    _vm._v(" "),
                    _c("option", [_vm._v("2")]),
                    _vm._v(" "),
                    _c("option", [_vm._v("3")]),
                    _vm._v(" "),
                    _c("option", [_vm._v("4")]),
                    _vm._v(" "),
                    _c("option", [_vm._v("5")])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "exampleFormControlSelect2" } }, [
                  _vm._v("Default select")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    staticClass: "form-control",
                    attrs: { id: "exampleFormControlSelect2" }
                  },
                  [
                    _c("option", [_vm._v("1")]),
                    _vm._v(" "),
                    _c("option", [_vm._v("2")]),
                    _vm._v(" "),
                    _c("option", [_vm._v("3")]),
                    _vm._v(" "),
                    _c("option", [_vm._v("4")]),
                    _vm._v(" "),
                    _c("option", [_vm._v("5")])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "exampleFormControlSelect3" } }, [
                  _vm._v("Small select")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    staticClass: "form-control form-control-sm",
                    attrs: { id: "exampleFormControlSelect3" }
                  },
                  [
                    _c("option", [_vm._v("1")]),
                    _vm._v(" "),
                    _c("option", [_vm._v("2")]),
                    _vm._v(" "),
                    _c("option", [_vm._v("3")]),
                    _vm._v(" "),
                    _c("option", [_vm._v("4")]),
                    _vm._v(" "),
                    _c("option", [_vm._v("5")])
                  ]
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 grid-margin stretch-card" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Basic input groups")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-description" }, [
                _vm._v(
                  "\n                  Basic bootstrap input groups\n                "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("div", { staticClass: "input-group" }, [
                  _c("div", { staticClass: "input-group-prepend" }, [
                    _c("span", { staticClass: "input-group-text" }, [
                      _vm._v("@")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Username",
                      "aria-label": "Username"
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("div", { staticClass: "input-group" }, [
                  _c("div", { staticClass: "input-group-prepend" }, [
                    _c(
                      "span",
                      { staticClass: "input-group-text bg-primary text-white" },
                      [_vm._v("$")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      "aria-label": "Amount (to the nearest dollar)"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group-append" }, [
                    _c("span", { staticClass: "input-group-text" }, [
                      _vm._v(".00")
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("div", { staticClass: "input-group" }, [
                  _c("div", { staticClass: "input-group-prepend" }, [
                    _c("span", { staticClass: "input-group-text" }, [
                      _vm._v("$")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group-prepend" }, [
                    _c("span", { staticClass: "input-group-text" }, [
                      _vm._v("0.00")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      "aria-label": "Amount (to the nearest dollar)"
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("div", { staticClass: "input-group" }, [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Recipient's username",
                      "aria-label": "Recipient's username"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group-append" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-primary",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Search")]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("div", { staticClass: "input-group" }, [
                  _c("div", { staticClass: "input-group-prepend" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-sm btn-outline-primary dropdown-toggle",
                        attrs: {
                          type: "button",
                          "data-toggle": "dropdown",
                          "aria-haspopup": "true",
                          "aria-expanded": "false"
                        }
                      },
                      [_vm._v("Dropdown")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "dropdown-menu" }, [
                      _c(
                        "a",
                        { staticClass: "dropdown-item", attrs: { href: "#" } },
                        [_vm._v("Action")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "dropdown-item", attrs: { href: "#" } },
                        [_vm._v("Another action")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "dropdown-item", attrs: { href: "#" } },
                        [_vm._v("Something else here")]
                      ),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "dropdown-divider",
                        attrs: { role: "separator" }
                      }),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "dropdown-item", attrs: { href: "#" } },
                        [_vm._v("Separated link")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      "aria-label": "Text input with dropdown button"
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("div", { staticClass: "input-group" }, [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Find in facebook",
                      "aria-label": "Recipient's username"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group-append" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-facebook",
                        attrs: { type: "button" }
                      },
                      [_c("i", { staticClass: "mdi mdi-facebook" })]
                    )
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 grid-margin stretch-card" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Checkbox Controls")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-description" }, [
                _vm._v(
                  "Checkbox and radio controls (default appearance is in primary color)"
                )
              ]),
              _vm._v(" "),
              _c("form", [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("div", { staticClass: "form-check" }, [
                        _c("label", { staticClass: "form-check-label" }, [
                          _c("input", {
                            staticClass: "form-check-input",
                            attrs: { type: "checkbox" }
                          }),
                          _vm._v(
                            "\n                            Default\n                          "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-check" }, [
                        _c("label", { staticClass: "form-check-label" }, [
                          _c("input", {
                            staticClass: "form-check-input",
                            attrs: { type: "checkbox", checked: "" }
                          }),
                          _vm._v(
                            "\n                            Checked\n                          "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-check" }, [
                        _c("label", { staticClass: "form-check-label" }, [
                          _c("input", {
                            staticClass: "form-check-input",
                            attrs: { type: "checkbox", disabled: "" }
                          }),
                          _vm._v(
                            "\n                            Disabled\n                          "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-check" }, [
                        _c("label", { staticClass: "form-check-label" }, [
                          _c("input", {
                            staticClass: "form-check-input",
                            attrs: {
                              type: "checkbox",
                              disabled: "",
                              checked: ""
                            }
                          }),
                          _vm._v(
                            "\n                            Disabled checked\n                          "
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("div", { staticClass: "form-check" }, [
                        _c("label", { staticClass: "form-check-label" }, [
                          _c("input", {
                            staticClass: "form-check-input",
                            attrs: {
                              type: "radio",
                              name: "optionsRadios",
                              id: "optionsRadios1",
                              value: ""
                            }
                          }),
                          _vm._v(
                            "\n                            Default\n                          "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-check" }, [
                        _c("label", { staticClass: "form-check-label" }, [
                          _c("input", {
                            staticClass: "form-check-input",
                            attrs: {
                              type: "radio",
                              name: "optionsRadios",
                              id: "optionsRadios2",
                              value: "option2",
                              checked: ""
                            }
                          }),
                          _vm._v(
                            "\n                            Selected\n                          "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-check" }, [
                        _c("label", { staticClass: "form-check-label" }, [
                          _c("input", {
                            staticClass: "form-check-input",
                            attrs: {
                              type: "radio",
                              name: "optionsRadios2",
                              id: "optionsRadios3",
                              value: "option3",
                              disabled: ""
                            }
                          }),
                          _vm._v(
                            "\n                            Disabled\n                          "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-check" }, [
                        _c("label", { staticClass: "form-check-label" }, [
                          _c("input", {
                            staticClass: "form-check-input",
                            attrs: {
                              type: "radio",
                              name: "optionsRadio2",
                              id: "optionsRadios4",
                              value: "option4",
                              disabled: "",
                              checked: ""
                            }
                          }),
                          _vm._v(
                            "\n                            Selected and disabled\n                          "
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("p", { staticClass: "card-description" }, [
                _vm._v("Add class "),
                _c("code", [_vm._v(".form-check-{color}")]),
                _vm._v(" for checkbox and radio controls in theme colors")
              ]),
              _vm._v(" "),
              _c("form", [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "div",
                        { staticClass: "form-check form-check-primary" },
                        [
                          _c("label", { staticClass: "form-check-label" }, [
                            _c("input", {
                              staticClass: "form-check-input",
                              attrs: { type: "checkbox", checked: "" }
                            }),
                            _vm._v(
                              "\n                            Primary\n                          "
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-check form-check-success" },
                        [
                          _c("label", { staticClass: "form-check-label" }, [
                            _c("input", {
                              staticClass: "form-check-input",
                              attrs: { type: "checkbox", checked: "" }
                            }),
                            _vm._v(
                              "\n                            Success\n                          "
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-check form-check-info" }, [
                        _c("label", { staticClass: "form-check-label" }, [
                          _c("input", {
                            staticClass: "form-check-input",
                            attrs: { type: "checkbox", checked: "" }
                          }),
                          _vm._v(
                            "\n                            Info\n                          "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-check form-check-danger" },
                        [
                          _c("label", { staticClass: "form-check-label" }, [
                            _c("input", {
                              staticClass: "form-check-input",
                              attrs: { type: "checkbox", checked: "" }
                            }),
                            _vm._v(
                              "\n                            Danger\n                          "
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-check form-check-warning" },
                        [
                          _c("label", { staticClass: "form-check-label" }, [
                            _c("input", {
                              staticClass: "form-check-input",
                              attrs: { type: "checkbox", checked: "" }
                            }),
                            _vm._v(
                              "\n                            Warning\n                          "
                            )
                          ])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "div",
                        { staticClass: "form-check form-check-primary" },
                        [
                          _c("label", { staticClass: "form-check-label" }, [
                            _c("input", {
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                name: "ExampleRadio1",
                                id: "ExampleRadio1",
                                checked: ""
                              }
                            }),
                            _vm._v(
                              "\n                            Primary\n                          "
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-check form-check-success" },
                        [
                          _c("label", { staticClass: "form-check-label" }, [
                            _c("input", {
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                name: "ExampleRadio2",
                                id: "ExampleRadio2",
                                checked: ""
                              }
                            }),
                            _vm._v(
                              "\n                            Success\n                          "
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-check form-check-info" }, [
                        _c("label", { staticClass: "form-check-label" }, [
                          _c("input", {
                            staticClass: "form-check-input",
                            attrs: {
                              type: "radio",
                              name: "ExampleRadio3",
                              id: "ExampleRadio3",
                              checked: ""
                            }
                          }),
                          _vm._v(
                            "\n                            Info\n                          "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-check form-check-danger" },
                        [
                          _c("label", { staticClass: "form-check-label" }, [
                            _c("input", {
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                name: "ExampleRadio4",
                                id: "ExampleRadio4",
                                checked: ""
                              }
                            }),
                            _vm._v(
                              "\n                            Danger\n                          "
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-check form-check-warning" },
                        [
                          _c("label", { staticClass: "form-check-label" }, [
                            _c("input", {
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                name: "ExampleRadio5",
                                id: "ExampleRadio5",
                                checked: ""
                              }
                            }),
                            _vm._v(
                              "\n                            Warning\n                          "
                            )
                          ])
                        ]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 grid-margin stretch-card" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Inline forms")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-description" }, [
                _vm._v("\n                  Use the "),
                _c("code", [_vm._v(".form-inline")]),
                _vm._v(
                  " class to display a series of labels, form controls, and buttons on a single horizontal row\n                "
                )
              ]),
              _vm._v(" "),
              _c("form", { staticClass: "form-inline" }, [
                _c(
                  "label",
                  {
                    staticClass: "sr-only",
                    attrs: { for: "inlineFormInputName2" }
                  },
                  [_vm._v("Name")]
                ),
                _vm._v(" "),
                _c("input", {
                  staticClass: "form-control mb-2 mr-sm-2",
                  attrs: {
                    type: "text",
                    id: "inlineFormInputName2",
                    placeholder: "Jane Doe"
                  }
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass: "sr-only",
                    attrs: { for: "inlineFormInputGroupUsername2" }
                  },
                  [_vm._v("Username")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "input-group mb-2 mr-sm-2" }, [
                  _c("div", { staticClass: "input-group-prepend" }, [
                    _c("div", { staticClass: "input-group-text" }, [
                      _vm._v("@")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "inlineFormInputGroupUsername2",
                      placeholder: "Username"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-check mx-sm-2" }, [
                  _c("label", { staticClass: "form-check-label" }, [
                    _c("input", {
                      staticClass: "form-check-input",
                      attrs: { type: "checkbox", checked: "" }
                    }),
                    _vm._v(
                      "\n                      Remember me\n                    "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary mb-2",
                    attrs: { type: "submit" }
                  },
                  [_vm._v("Submit")]
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 grid-margin" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Horizontal Two column")
              ]),
              _vm._v(" "),
              _c("form", { staticClass: "form-sample" }, [
                _c("p", { staticClass: "card-description" }, [
                  _vm._v(
                    "\n                    Personal info\n                  "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                        _vm._v("First Name")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-9" }, [
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                        _vm._v("Last Name")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-9" }, [
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                        _vm._v("Gender")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-9" }, [
                        _c("select", { staticClass: "form-control" }, [
                          _c("option", [_vm._v("Male")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Female")])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                        _vm._v("Date of Birth")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-9" }, [
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { placeholder: "dd/mm/yyyy" }
                        })
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                        _vm._v("Category")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-9" }, [
                        _c("select", { staticClass: "form-control" }, [
                          _c("option", [_vm._v("Category1")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Category2")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Category3")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Category4")])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                        _vm._v("Membership")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c("div", { staticClass: "form-check" }, [
                          _c("label", { staticClass: "form-check-label" }, [
                            _c("input", {
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                name: "membershipRadios",
                                id: "membershipRadios1",
                                value: "",
                                checked: ""
                              }
                            }),
                            _vm._v(
                              "\n                              Free\n                            "
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-5" }, [
                        _c("div", { staticClass: "form-check" }, [
                          _c("label", { staticClass: "form-check-label" }, [
                            _c("input", {
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                name: "membershipRadios",
                                id: "membershipRadios2",
                                value: "option2"
                              }
                            }),
                            _vm._v(
                              "\n                              Professional\n                            "
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-description" }, [
                  _vm._v("\n                    Address\n                  ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                        _vm._v("Address 1")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-9" }, [
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                        _vm._v("State")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-9" }, [
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                        _vm._v("Address 2")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-9" }, [
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                        _vm._v("Postcode")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-9" }, [
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                        _vm._v("City")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-9" }, [
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group row" }, [
                      _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                        _vm._v("Country")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-9" }, [
                        _c("select", { staticClass: "form-control" }, [
                          _c("option", [_vm._v("America")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Italy")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Russia")]),
                          _vm._v(" "),
                          _c("option", [_vm._v("Britain")])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/QuotationServiceTermsAndConditions.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/QuotationServiceTermsAndConditions.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuotationServiceTermsAndConditions_vue_vue_type_template_id_7376b83c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuotationServiceTermsAndConditions.vue?vue&type=template&id=7376b83c& */ "./resources/js/components/QuotationServiceTermsAndConditions.vue?vue&type=template&id=7376b83c&");
/* harmony import */ var _QuotationServiceTermsAndConditions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuotationServiceTermsAndConditions.vue?vue&type=script&lang=js& */ "./resources/js/components/QuotationServiceTermsAndConditions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _QuotationServiceTermsAndConditions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuotationServiceTermsAndConditions.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/QuotationServiceTermsAndConditions.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QuotationServiceTermsAndConditions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuotationServiceTermsAndConditions_vue_vue_type_template_id_7376b83c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuotationServiceTermsAndConditions_vue_vue_type_template_id_7376b83c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/QuotationServiceTermsAndConditions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/QuotationServiceTermsAndConditions.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/QuotationServiceTermsAndConditions.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationServiceTermsAndConditions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./QuotationServiceTermsAndConditions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuotationServiceTermsAndConditions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationServiceTermsAndConditions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/QuotationServiceTermsAndConditions.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/QuotationServiceTermsAndConditions.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationServiceTermsAndConditions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./QuotationServiceTermsAndConditions.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuotationServiceTermsAndConditions.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationServiceTermsAndConditions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationServiceTermsAndConditions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationServiceTermsAndConditions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationServiceTermsAndConditions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationServiceTermsAndConditions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/QuotationServiceTermsAndConditions.vue?vue&type=template&id=7376b83c&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/QuotationServiceTermsAndConditions.vue?vue&type=template&id=7376b83c& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationServiceTermsAndConditions_vue_vue_type_template_id_7376b83c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./QuotationServiceTermsAndConditions.vue?vue&type=template&id=7376b83c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuotationServiceTermsAndConditions.vue?vue&type=template&id=7376b83c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationServiceTermsAndConditions_vue_vue_type_template_id_7376b83c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationServiceTermsAndConditions_vue_vue_type_template_id_7376b83c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);