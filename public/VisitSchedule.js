(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["VisitSchedule"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/VisitSchedule.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/VisitSchedule.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../axios */ "./resources/js/axios/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      form: new Form({
        'id': '',
        'range': {
          start: new Date(),
          end: new Date()
        },
        'from_location': '',
        'to_location': '',
        'note': ''
      }),
      errors: []
    };
  },
  mounted: function mounted() {
    if (this.$route.params.id) {
      this.getVisitScheduleInfo(this.$route.params.id);
    }
  },
  methods: {
    store: function store() {
      var _this = this;

      this.errors = [];
      var loader = this.$loading.show({
        container: this.$refs.categoryContainer,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/visit-schedules', this.form).then(function (response) {
        if (response.status == 200) {
          _this.$snotify.success('Successfully created', 'Success');

          _this.$router.push({
            name: 'VisitSchedules'
          });
        } else {
          _this.$snotify.error('Something went worng', 'error');
        }
      })["catch"](function (errors) {
        _this.errors = errors.response.data.errors;
      })["finally"](function (e) {
        loader.hide();
      });
    },
    getVisitScheduleInfo: function getVisitScheduleInfo(id) {
      var _this2 = this;

      var loader = this.$loading.show({
        container: this.$refs.attendanceTable,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('visit-schedules/' + id).then(function (res) {
        var range = {
          start: res.data.from_date,
          end: res.data.to_date
        };
        var data = {};
        data.id = res.data.id;
        data.range = range;
        data.from_location = res.data.from_location;
        data.to_location = res.data.to_location;
        data.to_location = res.data.to_location;
        data.note = res.data.note;
        _this2.form = data;
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {
        loader.hide();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/VisitSchedule.vue?vue&type=template&id=388f4007&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/VisitSchedule.vue?vue&type=template&id=388f4007& ***!
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
                      return _vm.store()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-4" },
                      [
                        _c("v-date-picker", {
                          attrs: { "is-range": "" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var inputValue = ref.inputValue
                                var inputEvents = ref.inputEvents
                                return [
                                  _c("div", { staticClass: "row" }, [
                                    _c("div", { staticClass: "col-6" }, [
                                      _c("div", { staticClass: "form-group" }, [
                                        _c("label", [_vm._v("From Date")]),
                                        _vm._v(" "),
                                        _c(
                                          "input",
                                          _vm._g(
                                            {
                                              staticClass:
                                                "form-control form-control-sm",
                                              attrs: { readonly: "" },
                                              domProps: {
                                                value: inputValue.start
                                              }
                                            },
                                            inputEvents.start
                                          )
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-6" }, [
                                      _c("div", { staticClass: "form-group" }, [
                                        _c("label", [_vm._v("To Date")]),
                                        _vm._v(" "),
                                        _c(
                                          "input",
                                          _vm._g(
                                            {
                                              staticClass:
                                                "form-control form-control-sm ",
                                              attrs: { readonly: "" },
                                              domProps: {
                                                value: inputValue.end
                                              }
                                            },
                                            inputEvents.end
                                          )
                                        )
                                      ])
                                    ])
                                  ])
                                ]
                              }
                            }
                          ]),
                          model: {
                            value: _vm.form.range,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "range", $$v)
                            },
                            expression: "form.range"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("From Location")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.from_location,
                              expression: "form.from_location"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          class: { "is-invalid": _vm.errors.from_location },
                          attrs: {
                            type: "text",
                            placeholder: "Enter from location"
                          },
                          domProps: { value: _vm.form.from_location },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "from_location",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.from_location
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors.from_location[0]))
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("To Location")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.to_location,
                              expression: "form.to_location"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          class: { "is-invalid": _vm.errors.to_location },
                          attrs: {
                            type: "text",
                            placeholder: "Enter to location"
                          },
                          domProps: { value: _vm.form.to_location },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "to_location",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.to_location
                          ? _c("small", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors.to_location[0]))
                            ])
                          : _vm._e()
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row p-2" }, [
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
                      attrs: {
                        rows: "2",
                        cols: "12",
                        placeholder: "Enter note"
                      },
                      domProps: { value: _vm.form.note },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "note", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.note
                      ? _c("small", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.note[0]))
                        ])
                      : _vm._e()
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
                          _c(
                            "router-link",
                            { attrs: { to: "/visit-schedules" } },
                            [
                              _c(
                                "button",
                                { staticClass: "btn btn-sm btn-danger mr-2" },
                                [_vm._v("Cancel")]
                              )
                            ]
                          )
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/forms/VisitSchedule.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/forms/VisitSchedule.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VisitSchedule_vue_vue_type_template_id_388f4007___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VisitSchedule.vue?vue&type=template&id=388f4007& */ "./resources/js/components/forms/VisitSchedule.vue?vue&type=template&id=388f4007&");
/* harmony import */ var _VisitSchedule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VisitSchedule.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/VisitSchedule.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VisitSchedule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VisitSchedule_vue_vue_type_template_id_388f4007___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VisitSchedule_vue_vue_type_template_id_388f4007___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/VisitSchedule.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/VisitSchedule.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/forms/VisitSchedule.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitSchedule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./VisitSchedule.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/VisitSchedule.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitSchedule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/VisitSchedule.vue?vue&type=template&id=388f4007&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/forms/VisitSchedule.vue?vue&type=template&id=388f4007& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitSchedule_vue_vue_type_template_id_388f4007___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./VisitSchedule.vue?vue&type=template&id=388f4007& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/VisitSchedule.vue?vue&type=template&id=388f4007&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitSchedule_vue_vue_type_template_id_388f4007___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitSchedule_vue_vue_type_template_id_388f4007___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);