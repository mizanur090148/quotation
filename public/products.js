(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{101:function(t,n,a){"use strict";a.r(n);var e=a(0),s=(a(3),a(2),{data:function(){return{product:null,products:[],pagination:{current_page:1},search_key:""}},mounted:function(){this.getProducts()},watch:{search_key:function(){this.searchProducts()}},methods:{searchProducts:function(){var t=this;e.a.get("search-products?search_key="+this.search_key).then((function(n){t.products=n.data.data,t.pagination=n.data})).catch((function(t){console.log(t)}))},getProductInfo:function(t){var n=this,a=this.$loading.show({container:this.$refs.attendanceTable,canCancel:!0,loader:"bars"});e.a.get("products/"+t).then((function(t){n.product=t.data,n.$modal.show("productDetailModal")})).catch((function(t){console.log(t)})).finally((function(){a.hide()}))},closeModal:function(){this.$modal.hide("productDetailModal")},deleteProduct:function(t){var n=this;this.$snotify.clear(),this.$snotify.confirm("Are you sure to delete this?",{closeOnClick:!1,pauseOnHover:!0,buttons:[{text:"Yes",action:function(a){n.$snotify.remove(a.id),e.a.delete("/products/"+t).then((function(t){n.getProducts(),n.$snotify.success("Successfully deleted","Success")})).catch((function(t){n.$snotify.success("Not deleted","Success")}))},bold:!0},{text:"No",action:function(t){n.$snotify.remove(t.id)},bold:!0}]})},getProducts:function(){var t=this,n=this.$loading.show({container:this.$refs.attendanceTable,canCancel:!0,loader:"bars"});e.a.get("products?page="+this.pagination.current_page).then((function(n){t.products=n.data.data,t.pagination=n.data})).catch((function(t){console.log(t)})).finally((function(){n.hide()}))}}}),o=(a(46),a(1)),i=Object(o.a)(s,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 grid-margin stretch-card"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v("Product List")]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"row p-2"},[a("div",{staticClass:"col-md-3 pl-1"},[a("router-link",{attrs:{to:"/product/create"}},[a("button",{staticClass:"btn btn-primary btn-sm btn-rounded btn-fw",attrs:{type:"button"}},[t._v("Add New "),a("i",{staticClass:"fas fa-plus"})])])],1),t._v(" "),a("div",{staticClass:"col-md-6"}),t._v(" "),a("div",{staticClass:"col-md-3 pr-1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search_key,expression:"search_key"}],staticClass:"form-control search-field",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.search_key},on:{input:function(n){n.target.composing||(t.search_key=n.target.value)}}})])]),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"list-table table-hover"},[t._m(0),t._v(" "),t.products.length>0?a("tbody",t._l(t.products,(function(n,e){return a("tr",{key:n.id},[a("td",[t._v(t._s(++e))]),t._v(" "),a("td",[t._v(t._s(n.name))]),t._v(" "),a("td",[t._v(t._s(n.code))]),t._v(" "),a("td",[t._v(t._s(n.category.name))]),t._v(" "),a("td",[t._v(t._s(n.brand.name))]),t._v(" "),a("td",[t._v(t._s(n.model.name))]),t._v(" "),a("td",[t._v(t._s(n.purchase_price))]),t._v(" "),a("td",[t._v(t._s(n.tax_percentage))]),t._v(" "),a("td",[t._v(t._s(n.sale_price))]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-sm btn-primary btn-rounded btn-fw",attrs:{title:"View details"},on:{click:function(a){return t.getProductInfo(n.id)}}},[a("i",{staticClass:"mdi mdi-eye"})]),t._v(" "),a("router-link",{staticClass:"btn btn-sm btn-success btn-rounded btn-fw",attrs:{to:"/product/"+n.id,title:"edit"}},[a("i",{staticClass:"mdi mdi-grease-pencil"})]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-danger btn-rounded btn-fw",attrs:{type:"button"},on:{click:function(a){return t.deleteProduct(n.id)}}},[a("i",{staticClass:"mdi mdi-delete"})])],1)])})),0):a("tbody",[t.pagination.current_page==t.pagination.last_page?a("tr",{staticClass:"not-found"},[a("td",{staticClass:"text-danger",attrs:{colspan:"10"}},[t._v("Not Found")])]):t._e()])]),t._v(" "),t.pagination.last_page>1?a("v-pagination",{attrs:{pagination:t.pagination,offset:8},on:{paginate:function(n){return t.getProducts()}}}):t._e()],1)])])])]),t._v(" "),a("modal",{attrs:{name:"productDetailModal",width:700,height:535}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("Product Details")]),t._v(" "),a("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(n){return t.closeModal()}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),t.product?a("div",{staticClass:"modal-body"},[a("table",{staticClass:"list-table product-detail"},[a("tr",{staticClass:"p-2"},[a("td",{staticClass:"p-2",attrs:{colspan:"2"}},[a("img",{staticStyle:{height:"220px",width:"600px"},attrs:{src:t.product.image}})])]),t._v(" "),a("tr",[a("td",{staticStyle:{width:"50%"}},[a("span",[t._v("Product Name:")]),t._v(" "+t._s(t.product.name))]),t._v(" "),a("td",[a("span",[t._v("Product Code:")]),t._v(" "+t._s(t.product.code))])]),t._v(" "),a("tr",[a("td",[a("span",[t._v("Category:")]),t._v(" "+t._s(t.product.category.name))]),t._v(" "),a("td",[a("span",[t._v("Brand:")]),t._v(" "+t._s(t.product.brand.name))])]),t._v(" "),a("tr",[a("td",[a("span",[t._v("Model:")]),t._v(" "+t._s(t.product.model.name))]),t._v(" "),a("td",[a("span",[t._v("Product Unit:")]),t._v(" "+t._s(t.product.product_unit))])]),t._v(" "),a("tr",[a("td",[a("span",[t._v("Purchase Price:")]),t._v(" "+t._s(t.product.purchase_price))]),t._v(" "),a("td",[a("span",[t._v("Sale Price:")]),t._v(" "+t._s(t.product.sale_price))])]),t._v(" "),a("tr",[a("td",[a("span",[t._v("Warning Quantity:")]),t._v(" "+t._s(t.product.warning_quantity))]),t._v(" "),a("td",[a("span",[t._v("Tax Percentage:")]),t._v(" "+t._s(t.product.tax_percentage))])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[a("span",[t._v("Product Details:")]),t._v(" "+t._s(t.product.product_detail)+" ")])])])]):t._e()])])]),t._v(" "),a("vue-snotify")],1)}),[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("thead",[a("tr",[a("th",[t._v("SL")]),t._v(" "),a("th",[t._v("Product Name")]),t._v(" "),a("th",[t._v("Code")]),t._v(" "),a("th",[t._v("Category")]),t._v(" "),a("th",[t._v("Brand")]),t._v(" "),a("th",[t._v("Model")]),t._v(" "),a("th",[t._v("Purchase Price")]),t._v(" "),a("td",[t._v("Tax(%)")]),t._v(" "),a("th",[t._v("Sale Price")]),t._v(" "),a("th",[t._v("Actions")])])])}],!1,null,null,null);n.default=i.exports},11:function(t,n,a){var e=a(47);"string"==typeof e&&(e=[[t.i,e,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(6)(e,s);e.locals&&(t.exports=e.locals)},3:function(t,n,a){var e=a(43);"string"==typeof e&&(e=[[t.i,e,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(6)(e,s);e.locals&&(t.exports=e.locals)},43:function(t,n,a){(t.exports=a(5)(!1)).push([t.i,".vld-shown {\n  overflow: hidden;\n}\n\n.vld-overlay {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  align-items: center;\n  display: none;\n  justify-content: center;\n  overflow: hidden;\n  z-index: 9999;\n}\n\n.vld-overlay.is-active {\n  display: flex;\n}\n\n.vld-overlay.is-full-page {\n  z-index: 9999;\n  position: fixed;\n}\n\n.vld-overlay .vld-background {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background: #fff;\n  opacity: 0.5;\n}\n\n.vld-overlay .vld-icon, .vld-parent {\n  position: relative;\n}\n\n",""])},46:function(t,n,a){"use strict";var e=a(11);a.n(e).a},47:function(t,n,a){(t.exports=a(5)(!1)).push([t.i,"\n.modal-dialog {\n  max-width: 650px !important;\n  width: 650px !important;\n}\nspan {\n  font-weight: bold;\n  padding-left: 10px !important;\n}\n.product-detail td {\n  text-align: left !important;\n}\n",""])}}]);