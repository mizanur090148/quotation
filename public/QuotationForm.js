(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quotationform"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuotationForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/QuotationForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      editMode: false,
      query: '',
      queryField: 'name',
      users: [],
      pagination: {
        current_page: 1
      },
      including_service_id: 0,
      form: new Form({
        vendor_id: '',
        quotation_date: '',
        subject: '',
        total_discount: 0,
        total_without_discount: 0,
        quotation_items: [{
          job_description: '',
          quantity: 0,
          service_per_year: 0
        }]
      }),
      errors: [],
      invoice_tax: 5,

      /*******vendor area*******/
      vendor_errors: [],
      vendor_id: 0,
      vendors: [],
      vendor_form: new Form({
        vendor_name: '',
        vendor_no: '',
        trn_no: '',
        fax_no: '',
        email: '',
        attention: '',
        attention_designation: '',
        telephone_no: '',
        address: ''
      })
    };
  },
  mounted: function mounted() {
    this.getVendorDropdowns();
  },
  computed: {
    quotation_total: function quotation_total() {
      var sum = 0;
      this.form.quotation_items.forEach(function (e) {
        sum += parseFloat(e.service_per_year);
      });
      return sum;
    },
    total_without_discount: function total_without_discount() {
      return this.quotation_total - this.form.total_discount;
    }
  },
  methods: {
    store: function store() {
      //alert(99);
      return false;
    },
    getVendorDropdowns: function getVendorDropdowns() {
      var _this = this;

      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/vendor-dropdown-data').then(function (res) {
        _this.vendors = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    vendorCreateForm: function vendorCreateForm() {
      this.vendor_form.reset();
      this.$modal.show('vendorModal');
    },
    hide: function hide() {
      this.$modal.hide('vendorModal');
    },
    vendorStore: function vendorStore() {
      var _this2 = this;

      this.vendor_errors = [];
      var loader = this.$loading.show({
        container: this.$refs.quotationContainer,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/vendors', this.vendor_form).then(function (response) {
        if (response.status == 200) {
          _this2.getVendorDropdowns();

          _this2.$snotify.success('Successfully created', 'Success');

          _this2.$modal.hide('vendorModal');

          _this2.loader.hide();
        } else {
          _this2.$snotify.error('Something went worng', 'error');
        }
      })["catch"](function (errors) {
        console.log(errors.response);
        _this2.vendor_errors = errors.response.data.errors;
      })["finally"](function (e) {
        loader.hide();
      });
    },

    /*********end vendor area*******/

    /*********invoice area**********/
    deleteRow: function deleteRow(index, item) {
      var _this3 = this;

      /* console.log(this.form.quotation_items.length);
      this.form.quotation_items.splice(1);
       console.log(index, item);
        var idx = this.quotation_items.indexOf(index);
        console.log(idx, index);
        if (idx > -1) {
            this.quotation_items.splice(idx, 1);
        } */
      if (this.form.quotation_items.length > 1) {
        this.$snotify.confirm("Are you sure to delete this?", {
          closeOnClick: false,
          pauseOnHover: true,
          buttons: [{
            text: "Yes",
            action: function action(toast) {
              _this3.$snotify.remove(toast.id);

              var idx = _this3.form.quotation_items.indexOf(index);

              _this3.form.quotation_items.splice(idx, 1); //  this.calculateTotal();

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
    },
    addNewRow: function addNewRow() {
      this.form.quotation_items.push({
        job_description: '',
        quantity: 0,
        service_per_year: 0
      });
    },
    reset: function reset() {
      this.form.reset();
      this.form.clear();
    },
    closeModal: function closeModal(modalName) {
      this.$modal.hide(modalName);
    },

    /*********end invoice area******/
    quotationStore: function quotationStore() {
      var _this4 = this;

      var loader = this.$loading.show({
        container: this.$refs.quotationContainer,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/quotations', this.form).then(function (response) {
        if (response.status == 200) {
          _this4.errors = [];

          _this4.$snotify.success('Successfully created', 'Success');

          _this4.$router.push({
            name: 'quotations'
          }); // this.form.reset();


          _this4.loader.hide(); //$('.v-error').empty();
          //this.$router.push({ name: 'users' });

        } else {
          _this4.$snotify.error('Something went worng', 'error');
        }
      })["catch"](this.setErrors)["finally"](function (e) {
        loader.hide();
      });
    },
    show: function show(user) {
      this.form.reset();
      this.form.fill(user);
      $("#showModal").modal("show");
      console.log(user);
    },
    edit: function edit(user) {
      this.editMode = true;
      this.form.reset();
      this.form.clear();
      this.form.fill(user);
      $('#cutomerModalLong').modal('show');
    },
    update: function update() {
      var _this5 = this;

      this.form.busy = true;
      this.form.put('/api/users/' + this.form.id).then(function (response) {
        _this5.getData();

        $('#cutomerModalLong').modal('hide');

        if (_this5.form.successful) {
          _this5.$snotify.success('Successfully updated', 'Success');

          _this5.form.reset();

          _this5.form.clear();
        } else {
          _this5.$snotify.error('Something went worng', 'error');
        }
      })["catch"](function (e) {
        console.log(e);
      });
    },
    setErrors: function setErrors(err) {
      this.errors = err.response.data.errors;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuotationForm.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/QuotationForm.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modal-dialog {\n  max-width: 650px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/number-to-words/numberToWords.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/number-to-words/numberToWords.min.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Number-To-Words util
 * @version v1.2.4
 * @link https://github.com/marlun78/number-to-words
 * @author Martin Eneqvist (https://github.com/marlun78)
 * @contributors Aleksey Pilyugin (https://github.com/pilyugin),Jeremiah Hall (https://github.com/jeremiahrhall),Adriano Melo (https://github.com/adrianomelo),dmrzn (https://github.com/dmrzn)
 * @license MIT
 */
!function(){"use strict";var e="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this,t=9007199254740991;function f(e){return!("number"!=typeof e||e!=e||e===1/0||e===-1/0)}function l(e){return"number"==typeof e&&Math.abs(e)<=t}var n=/(hundred|thousand|(m|b|tr|quadr)illion)$/,r=/teen$/,o=/y$/,i=/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,s={zero:"zeroth",one:"first",two:"second",three:"third",four:"fourth",five:"fifth",six:"sixth",seven:"seventh",eight:"eighth",nine:"ninth",ten:"tenth",eleven:"eleventh",twelve:"twelfth"};function h(e){return n.test(e)||r.test(e)?e+"th":o.test(e)?e.replace(o,"ieth"):i.test(e)?e.replace(i,a):e}function a(e,t){return s[t]}var u=10,d=100,p=1e3,v=1e6,b=1e9,y=1e12,c=1e15,g=9007199254740992,m=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],w=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function x(e,t){var n,r=parseInt(e,10);if(!f(r))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!l(r))throw new RangeError("Input is not a safe number, it’s either too large or too small.");return n=function e(t){var n,r,o=arguments[1];if(0===t)return o?o.join(" ").replace(/,$/,""):"zero";o||(o=[]);t<0&&(o.push("minus"),t=Math.abs(t));t<20?(n=0,r=m[t]):t<d?(n=t%u,r=w[Math.floor(t/u)],n&&(r+="-"+m[n],n=0)):t<p?(n=t%d,r=e(Math.floor(t/d))+" hundred"):t<v?(n=t%p,r=e(Math.floor(t/p))+" thousand,"):t<b?(n=t%v,r=e(Math.floor(t/v))+" million,"):t<y?(n=t%b,r=e(Math.floor(t/b))+" billion,"):t<c?(n=t%y,r=e(Math.floor(t/y))+" trillion,"):t<=g&&(n=t%c,r=e(Math.floor(t/c))+" quadrillion,");o.push(r);return e(n,o)}(r),t?h(n):n}var M={toOrdinal:function(e){var t=parseInt(e,10);if(!f(t))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!l(t))throw new RangeError("Input is not a safe number, it’s either too large or too small.");var n=String(t),r=Math.abs(t%100),o=11<=r&&r<=13,i=n.charAt(n.length-1);return n+(o?"th":"1"===i?"st":"2"===i?"nd":"3"===i?"rd":"th")},toWords:x,toWordsOrdinal:function(e){return h(x(e))}}; true?( true&&module.exports&&(exports=module.exports=M),exports.numberToWords=M):undefined}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuotationForm.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/QuotationForm.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./QuotationForm.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuotationForm.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuotationForm.vue?vue&type=template&id=bd8c57d6&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/QuotationForm.vue?vue&type=template&id=bd8c57d6& ***!
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
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      _vm.editMode ? _vm.update() : _vm.quotationStore()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "row p-3" }, [
                    _c("div", { staticClass: "col-3" }, [
                      _c("label", [_vm._v("To")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group col-xs-12" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.vendor_id,
                                expression: "form.vendor_id"
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            class: { "is-invalid": _vm.errors.vendor_id },
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
                                  _vm.form,
                                  "vendor_id",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Please a select vendor")
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.vendors, function(vendor, key) {
                              return _c(
                                "option",
                                { key: key, domProps: { value: vendor.id } },
                                [_vm._v(_vm._s(vendor.vendor_name))]
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
                              on: {
                                click: function($event) {
                                  return _vm.vendorCreateForm()
                                }
                              }
                            },
                            [_vm._v("+")]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm.errors.vendor_id
                        ? _c("small", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors.vendor_id[0]))
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-7" }, [
                      _c("label", [_vm._v("Quotation Subject")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.subject,
                              expression: "form.subject"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          class: { "is-invalid": _vm.errors.subject },
                          attrs: {
                            type: "Text",
                            placeholder: "Enter quotation subject"
                          },
                          domProps: { value: _vm.form.subject },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "subject", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm.errors.subject
                        ? _c("small", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors.subject[0]))
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("label", [_vm._v("Quotation Date")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.quotation_date,
                              expression: "form.quotation_date"
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: {
                            type: "date",
                            placeholder: "Enter quotation date"
                          },
                          domProps: { value: _vm.form.quotation_date },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "quotation_date",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm.errors.quotation_date
                        ? _c("small", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors.quotation_date[0]))
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("table", { staticClass: "list-table" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        [
                          _vm._l(_vm.form.quotation_items, function(
                            item,
                            index
                          ) {
                            return _c("tr", { key: index }, [
                              _c("td", { staticClass: "text-center" }, [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(++index) +
                                    "\n                        "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: item.job_description,
                                      expression: "item.job_description"
                                    }
                                  ],
                                  staticClass: "form-control form-control-sm",
                                  class: {
                                    "is-invalid": _vm.errors.job_description
                                  },
                                  attrs: {
                                    type: "text",
                                    placeholder: "Enter job description"
                                  },
                                  domProps: { value: item.job_description },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "job_description",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm.errors.job_description
                                  ? _c("div", { staticClass: "v-error" }, [
                                      _vm._v(
                                        _vm._s(_vm.errors.job_description[0])
                                      )
                                    ])
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: item.quantity,
                                      expression: "item.quantity"
                                    }
                                  ],
                                  staticClass:
                                    "form-control form-control-sm text-right",
                                  class: { "is-invalid": _vm.errors.quantity },
                                  attrs: {
                                    type: "number",
                                    min: "0",
                                    placeholder: "Enter quantity"
                                  },
                                  domProps: { value: item.quantity },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "quantity",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm.errors.quantity
                                  ? _c("div", { staticClass: "v-error" }, [
                                      _vm._v(_vm._s(_vm.errors.quantity[0]))
                                    ])
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: item.service_per_year,
                                      expression: "item.service_per_year"
                                    }
                                  ],
                                  staticClass:
                                    "form-control form-control-sm text-right",
                                  class: {
                                    "is-invalid": _vm.errors.service_per_year
                                  },
                                  attrs: {
                                    type: "number",
                                    min: "0",
                                    placeholder: "Enter service per year"
                                  },
                                  domProps: { value: item.service_per_year },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "service_per_year",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm.errors.service_per_year
                                  ? _c("div", { staticClass: "v-error" }, [
                                      _vm._v(
                                        _vm._s(_vm.errors.service_per_year[0])
                                      )
                                    ])
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-xs btn-success",
                                    attrs: { type: "button" },
                                    on: { click: _vm.addNewRow }
                                  },
                                  [
                                    _c("i", { staticClass: "fas fa fa-plus" }),
                                    _vm._v(
                                      "\n                              Add\n                            "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-xs btn-danger",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.deleteRow(index, item)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", { staticClass: "fas fa fa-times" }),
                                    _vm._v(
                                      " Delete\n                              "
                                    )
                                  ]
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
                                attrs: { colspan: "3" }
                              },
                              [_vm._v("Total")]
                            ),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.quotation_total,
                                    expression: "quotation_total"
                                  }
                                ],
                                staticClass:
                                  "form-control form-control-sm text-right",
                                attrs: {
                                  type: "number",
                                  placeholder: "Enter service per year",
                                  readonly: ""
                                },
                                domProps: { value: _vm.quotation_total },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.quotation_total = $event.target.value
                                  }
                                }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", { staticClass: "font-weight-bold" }, [
                            _c(
                              "td",
                              {
                                staticClass: "text-right",
                                attrs: { colspan: "3" }
                              },
                              [_vm._v("Total Discount")]
                            ),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.total_discount,
                                    expression: "form.total_discount"
                                  }
                                ],
                                staticClass:
                                  "form-control form-control-sm text-right",
                                attrs: { type: "number", min: "0" },
                                domProps: { value: _vm.form.total_discount },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "total_discount",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", { staticClass: "font-weight-bold" }, [
                            _c(
                              "td",
                              {
                                staticClass: "text-right capitalize",
                                attrs: { colspan: "3" }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    __webpack_require__(/*! number-to-words */ "./node_modules/number-to-words/numberToWords.min.js").toWords(
                                      _vm.total_without_discount
                                    )
                                  ) + " only"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.total_without_discount,
                                    expression: "total_without_discount"
                                  }
                                ],
                                staticClass:
                                  "form-control form-control-sm text-right",
                                attrs: { type: "number", readonly: "" },
                                domProps: { value: _vm.total_without_discount },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.total_without_discount =
                                      $event.target.value
                                  }
                                }
                              })
                            ])
                          ])
                        ],
                        2
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(2)
                ]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("modal", { attrs: { name: "vendorModal", width: 690, height: 480 } }, [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "h5",
                  {
                    staticClass: "modal-title",
                    attrs: { id: "exampleModalLabel" }
                  },
                  [_vm._v("New Outlet")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.closeModal("vendorModal")
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
                      return _vm.vendorStore()
                    }
                  }
                },
                [
                  _c(
                    "div",
                    { ref: "outletContainer", staticClass: "modal-body" },
                    [
                      _c("div", { staticClass: "row p-2" }, [
                        _c("div", { staticClass: "col-4" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "form-control-label",
                                attrs: { for: "vendor_name" }
                              },
                              [_vm._v("Vendor Name")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.vendor_form.vendor_name,
                                  expression: "vendor_form.vendor_name"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: {
                                "is-invalid": _vm.vendor_errors.vendor_name
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Enter vendor name"
                              },
                              domProps: { value: _vm.vendor_form.vendor_name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.vendor_form,
                                    "vendor_name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.vendor_errors.vendor_name
                              ? _c("small", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    _vm._s(_vm.vendor_errors.vendor_name[0])
                                  )
                                ])
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-4" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "form-control-label",
                                attrs: { for: "vendor_no" }
                              },
                              [_vm._v("Vendor No.")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.vendor_form.vendor_no,
                                  expression: "vendor_form.vendor_no"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: {
                                "is-invalid": _vm.vendor_errors.vendor_no
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Enter vendor no"
                              },
                              domProps: { value: _vm.vendor_form.vendor_no },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.vendor_form,
                                    "vendor_no",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.vendor_errors.vendor_no
                              ? _c("small", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(_vm.vendor_errors.vendor_no[0]))
                                ])
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-4" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "form-control-label",
                                attrs: { for: "trn_no" }
                              },
                              [_vm._v("Trn No.")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.vendor_form.trn_no,
                                  expression: "vendor_form.trn_no"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: { "is-invalid": _vm.vendor_errors.trn_no },
                              attrs: {
                                type: "text",
                                placeholder: "Enter trn no"
                              },
                              domProps: { value: _vm.vendor_form.trn_no },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.vendor_form,
                                    "trn_no",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.vendor_errors.trn_no
                              ? _c("small", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(_vm.vendor_errors.trn_no[0]))
                                ])
                              : _vm._e()
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row p-2" }, [
                        _c("div", { staticClass: "col-4" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "form-control-label",
                                attrs: { for: "telephone_no" }
                              },
                              [_vm._v("Telephone No.")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.vendor_form.telephone_no,
                                  expression: "vendor_form.telephone_no"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: {
                                "is-invalid": _vm.vendor_errors.telephone_no
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Enter telephone no"
                              },
                              domProps: { value: _vm.vendor_form.telephone_no },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.vendor_form,
                                    "telephone_no",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.vendor_errors.telephone_no
                              ? _c("small", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    _vm._s(_vm.vendor_errors.telephone_no[0])
                                  )
                                ])
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-4" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "form-control-label",
                                attrs: { for: "attention" }
                              },
                              [_vm._v("Attention")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.vendor_form.attention,
                                  expression: "vendor_form.attention"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: {
                                "is-invalid": _vm.vendor_errors.attention
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Enter attention"
                              },
                              domProps: { value: _vm.vendor_form.attention },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.vendor_form,
                                    "attention",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.vendor_errors.attention
                              ? _c("small", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(_vm.vendor_errors.attention[0]))
                                ])
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-4" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "form-control-label",
                                attrs: { for: "attention_designation" }
                              },
                              [_vm._v("Attention Designation")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.vendor_form.attention_designation,
                                  expression:
                                    "vendor_form.attention_designation"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: {
                                "is-invalid":
                                  _vm.vendor_errors.attention_designation
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Enter attention designation"
                              },
                              domProps: {
                                value: _vm.vendor_form.attention_designation
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.vendor_form,
                                    "attention_designation",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.vendor_errors.attention_designation
                              ? _c("small", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.vendor_errors.attention_designation[0]
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
                            _c(
                              "label",
                              {
                                staticClass: "form-control-label",
                                attrs: { for: "email" }
                              },
                              [_vm._v("E-mail")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.vendor_form.email,
                                  expression: "vendor_form.email"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: { "is-invalid": _vm.vendor_errors.email },
                              attrs: {
                                type: "text",
                                placeholder: "Enter email"
                              },
                              domProps: { value: _vm.vendor_form.email },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.vendor_form,
                                    "email",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.vendor_errors.email
                              ? _c("small", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(_vm.vendor_errors.email[0]))
                                ])
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-4" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "form-control-label",
                                attrs: { for: "fax_no" }
                              },
                              [_vm._v("Fax No.")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.vendor_form.fax_no,
                                  expression: "vendor_form.fax_no"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: { "is-invalid": _vm.vendor_errors.fax_no },
                              attrs: {
                                type: "text",
                                placeholder: "Enter fax no"
                              },
                              domProps: { value: _vm.vendor_form.fax_no },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.vendor_form,
                                    "fax_no",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.vendor_errors.fax_no
                              ? _c("small", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(_vm.vendor_errors.fax_no[0]))
                                ])
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-4" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "form-control-label",
                                attrs: { for: "address" }
                              },
                              [_vm._v("Address")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.vendor_form.address,
                                  expression: "vendor_form.address"
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              class: {
                                "is-invalid": _vm.vendor_errors.address
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Enter address"
                              },
                              domProps: { value: _vm.vendor_form.address },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.vendor_form,
                                    "address",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.vendor_errors.address
                              ? _c("small", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(_vm.vendor_errors.address[0]))
                                ])
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("hr")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "modal-footer justify-content-md-center" },
                    [
                      _c("div", { staticClass: "row" }, [
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
                            { staticClass: "btn btn-sm btn-danger mr-2" },
                            [_vm._v("Cancel")]
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row p-3" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-sm btn-primary quotation-headline",
          attrs: { type: "button" }
        },
        [_vm._v(" Services Description As Following Detail")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("No")]),
        _vm._v(" "),
        _c("th", [_vm._v("    Job Description")]),
        _vm._v(" "),
        _c("th", [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", [_vm._v("Service Price Per Year")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row p-2 justify-content-md-center" }, [
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
        _c("button", { staticClass: "btn btn-sm btn-danger mr-2" }, [
          _vm._v("Cancel")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/QuotationForm.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/QuotationForm.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuotationForm_vue_vue_type_template_id_bd8c57d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuotationForm.vue?vue&type=template&id=bd8c57d6& */ "./resources/js/components/QuotationForm.vue?vue&type=template&id=bd8c57d6&");
/* harmony import */ var _QuotationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuotationForm.vue?vue&type=script&lang=js& */ "./resources/js/components/QuotationForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _QuotationForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuotationForm.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/QuotationForm.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QuotationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuotationForm_vue_vue_type_template_id_bd8c57d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuotationForm_vue_vue_type_template_id_bd8c57d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/QuotationForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/QuotationForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/QuotationForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./QuotationForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuotationForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/QuotationForm.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/QuotationForm.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./QuotationForm.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuotationForm.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationForm_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/QuotationForm.vue?vue&type=template&id=bd8c57d6&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/QuotationForm.vue?vue&type=template&id=bd8c57d6& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationForm_vue_vue_type_template_id_bd8c57d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./QuotationForm.vue?vue&type=template&id=bd8c57d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuotationForm.vue?vue&type=template&id=bd8c57d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationForm_vue_vue_type_template_id_bd8c57d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationForm_vue_vue_type_template_id_bd8c57d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);