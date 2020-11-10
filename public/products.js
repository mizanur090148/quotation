<<<<<<< HEAD
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{11:function(t,n,a){var e=a(44);"string"==typeof e&&(e=[[t.i,e,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(6)(e,s);e.locals&&(t.exports=e.locals)},4:function(t,n,a){var e=a(40);"string"==typeof e&&(e=[[t.i,e,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(6)(e,s);e.locals&&(t.exports=e.locals)},40:function(t,n,a){(t.exports=a(5)(!1)).push([t.i,".vld-shown {\n  overflow: hidden;\n}\n\n.vld-overlay {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  align-items: center;\n  display: none;\n  justify-content: center;\n  overflow: hidden;\n  z-index: 9999;\n}\n\n.vld-overlay.is-active {\n  display: flex;\n}\n\n.vld-overlay.is-full-page {\n  z-index: 9999;\n  position: fixed;\n}\n\n.vld-overlay .vld-background {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background: #fff;\n  opacity: 0.5;\n}\n\n.vld-overlay .vld-icon, .vld-parent {\n  position: relative;\n}\n\n",""])},43:function(t,n,a){"use strict";var e=a(11);a.n(e).a},44:function(t,n,a){(t.exports=a(5)(!1)).push([t.i,"\n.modal-dialog {\n  max-width: 650px !important;\n  width: 650px !important;\n}\nspan {\n  font-weight: bold;\n  padding-left: 10px !important;\n}\n.product-detail td {\n  text-align: left !important;\n}\n",""])},92:function(t,n,a){"use strict";a.r(n);var e=a(0),s=(a(4),a(2),{data:function(){return{product:null,products:[],pagination:{current_page:1},search_key:""}},mounted:function(){this.getProducts()},watch:{search_key:function(){this.searchProducts()}},methods:{searchProducts:function(){var t=this;e.a.get("search-products?search_key="+this.search_key).then((function(n){t.products=n.data.data,t.pagination=n.data})).catch((function(t){console.log(t)}))},getProductInfo:function(t){var n=this,a=this.$loading.show({container:this.$refs.attendanceTable,canCancel:!0,loader:"bars"});e.a.get("products/"+t).then((function(t){n.product=t.data,n.$modal.show("productDetailModal")})).catch((function(t){console.log(t)})).finally((function(){a.hide()}))},closeModal:function(){this.$modal.hide("productDetailModal")},deleteProduct:function(t){var n=this;this.$snotify.clear(),this.$snotify.confirm("Are you sure to delete this?",{closeOnClick:!1,pauseOnHover:!0,buttons:[{text:"Yes",action:function(a){n.$snotify.remove(a.id),e.a.delete("/products/"+t).then((function(t){n.getProducts(),n.$snotify.success("Successfully deleted","Success")})).catch((function(t){n.$snotify.success("Not deleted","Success")}))},bold:!0},{text:"No",action:function(t){n.$snotify.remove(t.id)},bold:!0}]})},getProducts:function(){var t=this,n=this.$loading.show({container:this.$refs.attendanceTable,canCancel:!0,loader:"bars"});e.a.get("products?page="+this.pagination.current_page).then((function(n){t.products=n.data.data,t.pagination=n.data})).catch((function(t){console.log(t)})).finally((function(){n.hide()}))}}}),o=(a(43),a(1)),i=Object(o.a)(s,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 grid-margin stretch-card"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v("Product List")]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"row p-2"},[a("div",{staticClass:"col-md-3 pl-1"},[a("router-link",{attrs:{to:"/product/create"}},[a("button",{staticClass:"btn btn-primary btn-sm btn-rounded btn-fw",attrs:{type:"button"}},[t._v("Add New "),a("i",{staticClass:"fas fa-plus"})])])],1),t._v(" "),a("div",{staticClass:"col-md-6"}),t._v(" "),a("div",{staticClass:"col-md-3 pr-1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search_key,expression:"search_key"}],staticClass:"form-control search-field",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.search_key},on:{input:function(n){n.target.composing||(t.search_key=n.target.value)}}})])]),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"list-table table-hover"},[t._m(0),t._v(" "),t.products.length>0?a("tbody",t._l(t.products,(function(n,e){return a("tr",{key:n.id},[a("td",[t._v(t._s(++e))]),t._v(" "),a("td",[t._v(t._s(n.name))]),t._v(" "),a("td",[t._v(t._s(n.code))]),t._v(" "),a("td",[t._v(t._s(n.category.name))]),t._v(" "),a("td",[t._v(t._s(n.brand.name))]),t._v(" "),a("td",[t._v(t._s(n.model.name))]),t._v(" "),a("td",[t._v(t._s(n.purchase_price))]),t._v(" "),a("td",[t._v(t._s(n.tax_percentage))]),t._v(" "),a("td",[t._v(t._s(n.sale_price))]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-sm btn-primary btn-rounded btn-fw",attrs:{title:"View details"},on:{click:function(a){return t.getProductInfo(n.id)}}},[a("i",{staticClass:"mdi mdi-eye"})]),t._v(" "),a("router-link",{staticClass:"btn btn-sm btn-success btn-rounded btn-fw",attrs:{to:"/product/"+n.id,title:"edit"}},[a("i",{staticClass:"mdi mdi-grease-pencil"})]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-danger btn-rounded btn-fw",attrs:{type:"button"},on:{click:function(a){return t.deleteProduct(n.id)}}},[a("i",{staticClass:"mdi mdi-delete"})])],1)])})),0):a("tbody",[t.pagination.current_page==t.pagination.last_page?a("tr",{staticClass:"not-found"},[a("td",{staticClass:"text-danger",attrs:{colspan:"10"}},[t._v("Not Found")])]):t._e()])]),t._v(" "),t.pagination.last_page>1?a("v-pagination",{attrs:{pagination:t.pagination,offset:8},on:{paginate:function(n){return t.getProducts()}}}):t._e()],1)])])])]),t._v(" "),a("modal",{attrs:{name:"productDetailModal",width:700,height:535}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("Product Details")]),t._v(" "),a("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(n){return t.closeModal()}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),t.product?a("div",{staticClass:"modal-body"},[a("table",{staticClass:"list-table product-detail"},[a("tr",{staticClass:"p-2"},[a("td",{staticClass:"p-2",attrs:{colspan:"2"}},[a("img",{staticStyle:{height:"220px",width:"600px"},attrs:{src:t.product.image}})])]),t._v(" "),a("tr",[a("td",{staticStyle:{width:"50%"}},[a("span",[t._v("Product Name:")]),t._v(" "+t._s(t.product.name))]),t._v(" "),a("td",[a("span",[t._v("Product Code:")]),t._v(" "+t._s(t.product.code))])]),t._v(" "),a("tr",[a("td",[a("span",[t._v("Category:")]),t._v(" "+t._s(t.product.category.name))]),t._v(" "),a("td",[a("span",[t._v("Brand:")]),t._v(" "+t._s(t.product.brand.name))])]),t._v(" "),a("tr",[a("td",[a("span",[t._v("Model:")]),t._v(" "+t._s(t.product.model.name))]),t._v(" "),a("td",[a("span",[t._v("Product Unit:")]),t._v(" "+t._s(t.product.product_unit))])]),t._v(" "),a("tr",[a("td",[a("span",[t._v("Purchase Price:")]),t._v(" "+t._s(t.product.purchase_price))]),t._v(" "),a("td",[a("span",[t._v("Sale Price:")]),t._v(" "+t._s(t.product.sale_price))])]),t._v(" "),a("tr",[a("td",[a("span",[t._v("Warning Quantity:")]),t._v(" "+t._s(t.product.warning_quantity))]),t._v(" "),a("td",[a("span",[t._v("Tax Percentage:")]),t._v(" "+t._s(t.product.tax_percentage))])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[a("span",[t._v("Product Details:")]),t._v(" "+t._s(t.product.product_detail)+" ")])])])]):t._e()])])]),t._v(" "),a("vue-snotify")],1)}),[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("thead",[a("tr",[a("th",[t._v("SL")]),t._v(" "),a("th",[t._v("Product Name")]),t._v(" "),a("th",[t._v("Code")]),t._v(" "),a("th",[t._v("Category")]),t._v(" "),a("th",[t._v("Brand")]),t._v(" "),a("th",[t._v("Model")]),t._v(" "),a("th",[t._v("Purchase Price")]),t._v(" "),a("td",[t._v("Tax(%)")]),t._v(" "),a("th",[t._v("Sale Price")]),t._v(" "),a("th",[t._v("Actions")])])])}],!1,null,null,null);n.default=i.exports}}]);
=======
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/Products.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lists/Products.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      product: null,
      products: [],
      pagination: {
        current_page: 1
      },
      search_key: ''
    };
  },
  mounted: function mounted() {
    this.getProducts();
  },
  watch: {
    search_key: function search_key() {
      this.searchProducts();
    }
  },
  methods: {
    searchProducts: function searchProducts() {
      var _this = this;

      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('search-products?search_key=' + this.search_key).then(function (res) {
        _this.products = res.data.data;
        _this.pagination = res.data;
      })["catch"](function (e) {
        console.log(e);
      });
    },
    getProductInfo: function getProductInfo(productId) {
      var _this2 = this;

      var loader = this.$loading.show({
        container: this.$refs.attendanceTable,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('products/' + productId).then(function (res) {
        _this2.product = res.data;

        _this2.$modal.show('productDetailModal');
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {
        loader.hide();
      });
    },
    closeModal: function closeModal() {
      this.$modal.hide('productDetailModal');
    },
    deleteProduct: function deleteProduct(id) {
      var _this3 = this;

      this.$snotify.clear();
      this.$snotify.confirm("Are you sure to delete this?", {
        closeOnClick: false,
        pauseOnHover: true,
        buttons: [{
          text: "Yes",
          action: function action(toast) {
            _this3.$snotify.remove(toast.id);

            _axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]('/products/' + id).then(function (response) {
              _this3.getProducts();

              _this3.$snotify.success('Successfully deleted', 'Success');
            })["catch"](function (e) {
              _this3.$snotify.success('Not deleted', 'Success');
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
    },
    getProducts: function getProducts() {
      var _this4 = this;

      var loader = this.$loading.show({
        container: this.$refs.attendanceTable,
        canCancel: true,
        loader: 'bars'
      });
      _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('products?page=' + this.pagination.current_page).then(function (res) {
        _this4.products = res.data.data;
        _this4.pagination = res.data;
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/Products.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lists/Products.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modal-dialog {\n  max-width: 650px !important;\n  width: 650px !important;\n}\nspan {\n  font-weight: bold;\n  padding-left: 10px !important;\n}\n.product-detail td {\n  text-align: left !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/Products.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lists/Products.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/Products.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/Products.vue?vue&type=template&id=50068ac9&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lists/Products.vue?vue&type=template&id=50068ac9& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
              _c("h4", { staticClass: "card-title" }, [_vm._v("Product List")]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row p-2" }, [
                _c(
                  "div",
                  { staticClass: "col-md-3 pl-1" },
                  [
                    _c("router-link", { attrs: { to: "/product/create" } }, [
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
                _c("div", { staticClass: "col-md-3 pr-1" }, [
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
                    _vm.products.length > 0
                      ? _c(
                          "tbody",
                          _vm._l(_vm.products, function(product, index) {
                            return _c("tr", { key: product.id }, [
                              _c("td", [_vm._v(_vm._s(++index))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(product.name))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(product.code))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(product.category.name))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(product.brand.name))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(product.model.name))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(product.purchase_price))
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(product.tax_percentage))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(product.sale_price))]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-sm btn-primary btn-rounded btn-fw",
                                      attrs: { title: "View details" },
                                      on: {
                                        click: function($event) {
                                          return _vm.getProductInfo(product.id)
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "mdi mdi-eye" })]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "router-link",
                                    {
                                      staticClass:
                                        "btn btn-sm btn-success btn-rounded btn-fw",
                                      attrs: {
                                        to: "/product/" + product.id,
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
                                          return _vm.deleteProduct(product.id)
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
                                    attrs: { colspan: "10" }
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
                            return _vm.getProducts()
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
      _c(
        "modal",
        { attrs: { name: "productDetailModal", width: 700, height: 535 } },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c("h5", { staticClass: "modal-title" }, [
                    _vm._v("Product Details")
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.closeModal()
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
                _vm.product
                  ? _c("div", { staticClass: "modal-body" }, [
                      _c(
                        "table",
                        { staticClass: "list-table product-detail" },
                        [
                          _c("tr", { staticClass: "p-2" }, [
                            _c(
                              "td",
                              { staticClass: "p-2", attrs: { colspan: "2" } },
                              [
                                _c("img", {
                                  staticStyle: {
                                    height: "220px",
                                    width: "600px"
                                  },
                                  attrs: { src: _vm.product.image }
                                })
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticStyle: { width: "50%" } }, [
                              _c("span", [_vm._v("Product Name:")]),
                              _vm._v(" " + _vm._s(_vm.product.name))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("span", [_vm._v("Product Code:")]),
                              _vm._v(" " + _vm._s(_vm.product.code))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [
                              _c("span", [_vm._v("Category:")]),
                              _vm._v(" " + _vm._s(_vm.product.category.name))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("span", [_vm._v("Brand:")]),
                              _vm._v(" " + _vm._s(_vm.product.brand.name))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [
                              _c("span", [_vm._v("Model:")]),
                              _vm._v(" " + _vm._s(_vm.product.model.name))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("span", [_vm._v("Product Unit:")]),
                              _vm._v(" " + _vm._s(_vm.product.product_unit))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [
                              _c("span", [_vm._v("Purchase Price:")]),
                              _vm._v(" " + _vm._s(_vm.product.purchase_price))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("span", [_vm._v("Sale Price:")]),
                              _vm._v(" " + _vm._s(_vm.product.sale_price))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [
                              _c("span", [_vm._v("Warning Quantity:")]),
                              _vm._v(" " + _vm._s(_vm.product.warning_quantity))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("span", [_vm._v("Tax Percentage:")]),
                              _vm._v(" " + _vm._s(_vm.product.tax_percentage))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { attrs: { colspan: "2" } }, [
                              _c("span", [_vm._v("Product Details:")]),
                              _vm._v(
                                " " + _vm._s(_vm.product.product_detail) + " "
                              )
                            ])
                          ])
                        ]
                      )
                    ])
                  : _vm._e()
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
        _c("th", [_vm._v("SL")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Code")]),
        _vm._v(" "),
        _c("th", [_vm._v("Category")]),
        _vm._v(" "),
        _c("th", [_vm._v("Brand")]),
        _vm._v(" "),
        _c("th", [_vm._v("Model")]),
        _vm._v(" "),
        _c("th", [_vm._v("Purchase Price")]),
        _vm._v(" "),
        _c("td", [_vm._v("Tax(%)")]),
        _vm._v(" "),
        _c("th", [_vm._v("Sale Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")])
      ])
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

/***/ "./resources/js/components/lists/Products.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/lists/Products.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products_vue_vue_type_template_id_50068ac9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=50068ac9& */ "./resources/js/components/lists/Products.vue?vue&type=template&id=50068ac9&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/components/lists/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Products.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/lists/Products.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_50068ac9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Products_vue_vue_type_template_id_50068ac9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/lists/Products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/lists/Products.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/lists/Products.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/lists/Products.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/lists/Products.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/Products.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/lists/Products.vue?vue&type=template&id=50068ac9&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/lists/Products.vue?vue&type=template&id=50068ac9& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_50068ac9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=template&id=50068ac9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/Products.vue?vue&type=template&id=50068ac9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_50068ac9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_50068ac9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
>>>>>>> bfff8cc8643670b9b1e2c20e73eb2804984ffb8a
