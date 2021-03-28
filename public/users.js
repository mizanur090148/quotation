(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/Users.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lists/Users.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../apis/Api */ "./resources/js/apis/Api.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      users: [],
      pagination: {
        current_page: 1
      },
      search_key: ''
    };
  },
  mounted: function mounted() {
    this.getUsers();
  },
  watch: {
    search_key: function search_key() {
      this.searchUsers();
    }
  },
  methods: {
    searchUsers: function searchUsers() {
      var _this = this;

      _apis_Api__WEBPACK_IMPORTED_MODULE_0__["default"].get('search-users?search_key=' + this.search_key).then(function (res) {
        _this.users = res.data.data;
        _this.pagination = res.data;
      })["catch"](function (e) {
        console.log(e);
      });
    },
    deleteUser: function deleteUser(userId) {
      var _this2 = this;

      this.$snotify.clear();
      this.$snotify.confirm("Are you sure to delete this?", {
        closeOnClick: false,
        pauseOnHover: true,
        buttons: [{
          text: "Yes",
          action: function action(toast) {
            _this2.$snotify.remove(toast.id);

            _apis_Api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]('/users/' + userId).then(function (response) {
              _this2.getUsers();

              _this2.$snotify.success('Successfully deleted', 'Success');
            })["catch"](function (e) {
              _this2.$snotify.error('Not deleted', 'error');
            });
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
    },
    getUsers: function getUsers() {
      var _this3 = this;

      var loader = this.$loading.show({
        container: this.$refs.attendanceTable,
        canCancel: true,
        loader: 'bars'
      });
      _apis_Api__WEBPACK_IMPORTED_MODULE_0__["default"].get('users?page=' + this.pagination.current_page).then(function (res) {
        _this3.users = res.data.data;
        _this3.pagination = res.data;
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {
        loader.hide();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/Users.vue?vue&type=template&id=c643c21a&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lists/Users.vue?vue&type=template&id=c643c21a& ***!
  \**************************************************************************************************************************************************************************************************************/
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
              _c("h4", { staticClass: "card-title" }, [_vm._v("User List")]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row p-2" }, [
                _c(
                  "div",
                  { staticClass: "col-md-3 add-new-btn" },
                  [
                    _c("router-link", { attrs: { to: "/user/create" } }, [
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
                _c("div", { staticClass: "col-md-3" }, [
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
                    _vm.users.length
                      ? _c(
                          "tbody",
                          _vm._l(_vm.users, function(user, index) {
                            return _c("tr", { key: user.id }, [
                              _c("td", [_vm._v(_vm._s(++index))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(user.first_name))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(user.last_name))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(user.email))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(user.mobile_no))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(user.address))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(user.role.name))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(user.outlet.name))]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass:
                                        "btn btn-sm btn-success btn-rounded btn-fw",
                                      attrs: {
                                        to: "/user/" + user.id,
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
                                          return _vm.deleteUser(user.id)
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
                                    attrs: { colspan: "9" }
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
                            return _vm.getUsers()
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
        _c("th", [_vm._v("Sl.")]),
        _vm._v(" "),
        _c("th", [_vm._v("F. Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("L. Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("E-mail")]),
        _vm._v(" "),
        _c("th", [_vm._v("Mobile No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Address")]),
        _vm._v(" "),
        _c("th", [_vm._v("Role")]),
        _vm._v(" "),
        _c("th", [_vm._v("Branch")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/lists/Users.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/lists/Users.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_c643c21a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=c643c21a& */ "./resources/js/components/lists/Users.vue?vue&type=template&id=c643c21a&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/components/lists/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_c643c21a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_c643c21a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/lists/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/lists/Users.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/lists/Users.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/lists/Users.vue?vue&type=template&id=c643c21a&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/lists/Users.vue?vue&type=template&id=c643c21a& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_c643c21a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=c643c21a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/Users.vue?vue&type=template&id=c643c21a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_c643c21a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_c643c21a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);