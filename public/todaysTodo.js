(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todaysTodo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/TodaysTodo.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/TodaysTodo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      done_form: {
        id: this,
        status: ""
      },
      pending_todos: [],
      completed_todos: []
    };
  },
  mounted: function mounted() {
    this.getPendingTodos();
  },
  methods: {
    getPendingTodos: function getPendingTodos() {
      var _this = this;

      var loader = this.$loading.show({
        container: this.$refs.attendanceTable,
        canCancel: true,
        loader: "bars"
      });
      _apis_Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("pending-todos").then(function (res) {
        _this.pending_todos = res.data.pending_todos;
        _this.completed_todos = res.data.completed_todos;
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {
        loader.hide();
      });
    },
    addNote: function addNote() {
      var _this$note = this.note,
          text = _this$note.text,
          title = _this$note.title,
          color = _this$note.color;
      this.notes.push({
        text: text,
        date: new Date(Date.now()).toLocaleString()
      });
      this.note.text = "";
    },
    deleteTodo: function deleteTodo(id) {
      var _this2 = this;

      this.$snotify.clear();
      this.$snotify.confirm("Are you sure to delete this?", {
        closeOnClick: false,
        pauseOnHover: true,
        buttons: [{
          text: "Yes",
          action: function action(toast) {
            _this2.$snotify.remove(toast.id);

            _apis_Api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]('/todos/' + id).then(function (response) {
              _this2.getPendingTodos();

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
    changeTodoStatus: function changeTodoStatus(id) {
      var _this3 = this;

      this.$snotify.clear();
      this.$snotify.confirm("Are you sure to done this?", {
        closeOnClick: false,
        pauseOnHover: true,
        buttons: [{
          text: "Yes",
          action: function action(toast) {
            _this3.$snotify.remove(toast.id);

            _apis_Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/change-todo-status?id=" + id).then(function (response) {
              _this3.getPendingTodos();

              _this3.$snotify.success("Successfully done", "Success");
            })["catch"](function (e) {
              _this3.$snotify.error('Not deleted', 'error');
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/TodaysTodo.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/TodaysTodo.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.todo-area {\r\n  border: 1px solid #1d1d1f;\r\n  padding: 5px;\r\n  margin-bottom: 10px;\r\n  font-size: 13px;\r\n  font-style: italic;\r\n  font-style: italic;\n}\ni {\r\n  font-size: 12px;\r\n  clear: both;\r\n  font-style: italic;\r\n  display: block;\n}\nh2 {\r\n  margin: 10px;\n}\nbutton {\r\n  padding: 0;\r\n  cursor: pointer;\r\n  background: transparent;\r\n  border: 0;\r\n  -webkit-appearance: none;\n}\n.button {\r\n  display: block;\r\n  box-sizing: content-box;\r\n  width: 200px;\r\n  padding: 8px;\r\n  margin: 0 10px 20px 10px;\r\n  border: 1px solid #ccc;\r\n  cursor: pointer;\r\n  clear: both;\n}\n.button:hover {\r\n  background-color: black;\r\n  color: white;\r\n  border-color: black;\n}\n.top {\r\n  text-align: right;\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  justify-content: space-between;\r\n  margin-bottom: 0em;\n}\n.done-btn {\r\n  position: relative;\r\n  padding-right: 8px;\n}\n.mdi-checkbox-marked-circle-outline:before {\r\n  font-size: 22px;\r\n  color: green;\n}\n.mdi-close-circle-outline {\r\n  font-size: 22px;\r\n  color: red;\n}\n.completed-todo {\r\n  background: #a5d1a5;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/TodaysTodo.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/TodaysTodo.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./TodaysTodo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/TodaysTodo.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/TodaysTodo.vue?vue&type=template&id=1d7a6d03&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/TodaysTodo.vue?vue&type=template&id=1d7a6d03& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
                _vm._v("Todays Todo Status")
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-6" },
                  _vm._l(_vm.pending_todos, function(todo, index) {
                    return _c("div", { key: index, staticClass: "todo-area" }, [
                      _c("div", { staticClass: "top" }, [
                        _c("div", { staticClass: "btn-area" }, [
                          _c(
                            "button",
                            {
                              staticClass: "done-btn",
                              attrs: { title: "Click to done" },
                              on: {
                                click: function($event) {
                                  return _vm.changeTodoStatus(todo.id)
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass:
                                  "mdi mdi-checkbox-marked-circle-outline"
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "del-btn",
                              attrs: { title: "Click to delete" },
                              on: {
                                click: function($event) {
                                  return _vm.deleteTodo(todo.id)
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "mdi mdi-close-circle-outline"
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("i", [_vm._v(_vm._s(todo.todo_created))])
                      ]),
                      _vm._v(
                        "\n                " +
                          _vm._s(todo.title) +
                          "\n              "
                      )
                    ])
                  }),
                  0
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-6" },
                  _vm._l(_vm.completed_todos, function(todo, index) {
                    return _c(
                      "div",
                      { key: index, staticClass: "todo-area completed-todo" },
                      [
                        _c("div", { staticClass: "top" }, [
                          _c(
                            "button",
                            {
                              attrs: { title: "Click to undone" },
                              on: {
                                click: function($event) {
                                  return _vm.changeTodoStatus(todo.id)
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass:
                                  "mdi mdi-checkbox-marked-circle-outline"
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c("i", [_vm._v(_vm._s(todo.completed_date_time))])
                        ]),
                        _vm._v(
                          "\n                " +
                            _vm._s(todo.title) +
                            "\n              "
                        )
                      ]
                    )
                  }),
                  0
                )
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/forms/TodaysTodo.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/forms/TodaysTodo.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TodaysTodo_vue_vue_type_template_id_1d7a6d03___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodaysTodo.vue?vue&type=template&id=1d7a6d03& */ "./resources/js/components/forms/TodaysTodo.vue?vue&type=template&id=1d7a6d03&");
/* harmony import */ var _TodaysTodo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodaysTodo.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/TodaysTodo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TodaysTodo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodaysTodo.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/forms/TodaysTodo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TodaysTodo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TodaysTodo_vue_vue_type_template_id_1d7a6d03___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TodaysTodo_vue_vue_type_template_id_1d7a6d03___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/TodaysTodo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/TodaysTodo.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/forms/TodaysTodo.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodaysTodo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TodaysTodo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/TodaysTodo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodaysTodo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/TodaysTodo.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/forms/TodaysTodo.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TodaysTodo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./TodaysTodo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/TodaysTodo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TodaysTodo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TodaysTodo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TodaysTodo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TodaysTodo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TodaysTodo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/forms/TodaysTodo.vue?vue&type=template&id=1d7a6d03&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/forms/TodaysTodo.vue?vue&type=template&id=1d7a6d03& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodaysTodo_vue_vue_type_template_id_1d7a6d03___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TodaysTodo.vue?vue&type=template&id=1d7a6d03& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/TodaysTodo.vue?vue&type=template&id=1d7a6d03&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodaysTodo_vue_vue_type_template_id_1d7a6d03___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodaysTodo_vue_vue_type_template_id_1d7a6d03___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);