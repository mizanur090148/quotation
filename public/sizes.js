(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sizes"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sizes.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Sizes.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      listResponse: null,
      sizes: [],
      pagination: {
        current_page: 1
      },
      search_query: '',

      /*searchOptions: [
         {
            column: 'unique_id',
            label: 'Unique Id'
         },
         {
            column: 'code',
            label: 'Code'
         },
         {
            column: 'department',
            label: 'Department'
         },
         {
            column: 'designation',
            label: 'Designation'
         },
         {
            column: 'section',
            label: 'Section'
         }
      ],*/
      searchByField: 'Unique Id',
      searchByKey: 'unique_id'
    };
  },
  methods: {
    sizeDelete: function sizeDelete(id) {
      var _this = this;

      if (window.confirm('Are You Sure?')) {
        deleteEmployee(id).then(function (res) {
          console.log(res);

          _this.getsizes();
        })["catch"](function (error) {
          console.log(error);
        });
      }
    },
    getsizes: function getsizes() {
      var _this2 = this;

      var loader = this.$loading.show({
        container: this.$refs.attendanceTable,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('sizes?page=' + this.pagination.current_page).then(function (res) {
        _this2.sizes = res.data.content.data;
        _this2.pagination = res.data.content;
        console.log(res.data.content);
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {
        loader.hide();
      });
    }
  },
  mounted: function mounted() {
    this.getsizes();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sizes.vue?vue&type=template&id=1e03ff92&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Sizes.vue?vue&type=template&id=1e03ff92& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "content-wrapper" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-12 grid-margin stretch-card" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("h4", { staticClass: "card-title" }, [_vm._v("Size List")]),
            _vm._v(" "),
            _c("div", { staticClass: "row p-2" }, [
              _c(
                "div",
                { staticClass: "col-md-3" },
                [
                  _c("router-link", { attrs: { to: "/sizes/create" } }, [
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
              _vm._m(0)
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "table-responsive" },
              [
                _c("table", { staticClass: "list-table table-hover" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.sizes, function(size, index) {
                      return _vm.sizes.length > 0
                        ? _c("tr", { key: size.id }, [
                            _c("td", [_vm._v(_vm._s(++index))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(size.name))]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-sm btn-success btn-rounded btn-fw",
                                  attrs: { type: "button" },
                                  on: { click: function($event) {} }
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
                                      return _vm.deleteUser(_vm.user.id)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "mdi mdi-delete" })]
                              )
                            ])
                          ])
                        : _c("tr", [_c("td", [_vm._v("Not Found")])])
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _vm.pagination.last_page > 1
                  ? _c("v-pagination", {
                      attrs: { pagination: _vm.pagination, offset: 8 },
                      on: {
                        paginate: function($event) {
                          return _vm.getsizes()
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
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("input", {
        staticClass: "form-control search-field",
        attrs: { type: "text", placeholder: "Search" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Sl.")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Sizes.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Sizes.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sizes_vue_vue_type_template_id_1e03ff92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sizes.vue?vue&type=template&id=1e03ff92& */ "./resources/js/components/Sizes.vue?vue&type=template&id=1e03ff92&");
/* harmony import */ var _Sizes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sizes.vue?vue&type=script&lang=js& */ "./resources/js/components/Sizes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sizes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sizes_vue_vue_type_template_id_1e03ff92___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sizes_vue_vue_type_template_id_1e03ff92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Sizes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Sizes.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Sizes.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sizes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Sizes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sizes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sizes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Sizes.vue?vue&type=template&id=1e03ff92&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Sizes.vue?vue&type=template&id=1e03ff92& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sizes_vue_vue_type_template_id_1e03ff92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Sizes.vue?vue&type=template&id=1e03ff92& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sizes.vue?vue&type=template&id=1e03ff92&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sizes_vue_vue_type_template_id_1e03ff92___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sizes_vue_vue_type_template_id_1e03ff92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);