(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{103:function(t,e,a){"use strict";a.r(e);var o=a(0),n=(a(3),a(2),{data:function(){return{categories:[],pagination:{current_page:1},category_errors:[],category_form:new Form({name:""}),search_key:""}},mounted:function(){this.getCategories()},watch:{search_key:function(){this.searchCategories()}},methods:{searchCategories:function(){var t=this;o.a.get("search-categories?search_key="+this.search_key).then((function(e){t.categories=e.data.data,t.pagination=e.data})).catch((function(t){console.log(t)}))},closeModal:function(t){this.$modal.hide(t)},categoryModal:function(){this.category_form.reset(),this.category_form.clear(),this.$modal.show("categoryModal")},categoryStore:function(){var t=this;this.category_errors=[];var e=this.$loading.show({container:this.$refs.categoryContainer,canCancel:!0,loader:"bars"});o.a.post("/categories",this.category_form).then((function(e){200==e.status?(t.getCategories(),t.$snotify.success("Successfully created","Success"),t.$modal.hide("categoryModal"),t.loader.hide()):t.$snotify.error("Something went worng","error")})).catch((function(e){t.category_errors=e.response.data.errors})).finally((function(t){e.hide()}))},getCategoryInfo:function(t){var e=this;o.a.get("categories/"+t).then((function(t){e.category_form=t.data,e.$modal.show("categoryModal")})).catch((function(t){console.log(t)}))},getCategories:function(){var t=this,e=this.$loading.show({container:this.$refs.attendanceTable,canCancel:!0,loader:"bars"});o.a.get("categories?page="+this.pagination.current_page).then((function(e){t.categories=e.data.data,t.pagination=e.data})).catch((function(t){console.log(t)})).finally((function(){e.hide()}))},deleteCategory:function(t){var e=this;this.$snotify.clear(),this.$snotify.confirm("Are you sure to delete this?",{closeOnClick:!1,pauseOnHover:!0,buttons:[{text:"Yes",action:function(a){e.$snotify.remove(a.id),o.a.delete("/categories/"+t).then((function(t){e.getCategories(),e.$snotify.success("Successfully deleted","Success")})).catch((function(t){e.$snotify.success("Not deleted","Success")}))},bold:!0},{text:"No",action:function(t){e.$snotify.remove(t.id)},bold:!0}]})}}}),s=a(1),i=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 grid-margin stretch-card"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v("Category List")]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"row p-2"},[a("div",{staticClass:"col-md-3 add-new-btn"},[a("button",{staticClass:"btn btn-primary btn-sm btn-rounded btn-fw",attrs:{type:"button"},on:{click:t.categoryModal}},[t._v("Add New "),a("i",{staticClass:"fas fa-plus"})])]),t._v(" "),a("div",{staticClass:"col-md-6"}),t._v(" "),a("div",{staticClass:"col-md-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search_key,expression:"search_key"}],staticClass:"form-control search-field",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.search_key},on:{input:function(e){e.target.composing||(t.search_key=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"list-table table-hover"},[t._m(0),t._v(" "),t.categories.length>0?a("tbody",t._l(t.categories,(function(e,o){return a("tr",{key:e.id},[a("td",[t._v(t._s(++o))]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-sm btn-success btn-rounded btn-fw",attrs:{type:"button"},on:{click:function(a){return t.getCategoryInfo(e.id)}}},[a("i",{staticClass:"mdi mdi-grease-pencil"})]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-danger btn-rounded btn-fw",attrs:{type:"button"},on:{click:function(a){return t.deleteCategory(e.id)}}},[a("i",{staticClass:"mdi mdi-delete"})])])])})),0):a("tbody",[t.pagination.current_page==t.pagination.last_page?a("tr",{staticClass:"not-found"},[a("td",{staticClass:"text-danger",attrs:{colspan:"3"}},[t._v("Not Found")])]):t._e()])]),t._v(" "),t.pagination.last_page>1?a("v-pagination",{attrs:{pagination:t.pagination,offset:8},on:{paginate:function(e){return t.getCategories()}}}):t._e()],1)])])])]),t._v(" "),a("modal",{attrs:{name:"categoryModal",width:550,height:325}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("New Category")]),t._v(" "),a("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.closeModal("categoryModal")}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.categoryStore()}}},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row p-2"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v(" Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.category_form.name,expression:"category_form.name"}],staticClass:"form-control form-control-sm",class:{"is-invalid":t.category_errors.name},attrs:{type:"text",placeholder:"Enter category name"},domProps:{value:t.category_form.name},on:{input:function(e){e.target.composing||t.$set(t.category_form,"name",e.target.value)}}}),t._v(" "),t.category_errors.name?a("small",{staticClass:"text-danger"},[t._v(t._s(t.category_errors.name[0]))]):t._e()])])])]),t._v(" "),a("div",{staticClass:"modal-footer justify-content-md-center"},[a("div",{staticClass:"row p-2 "},[a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-sm btn-primary mr-2",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-danger mr-2",on:{click:function(e){return t.closeModal("categoryModal")}}},[t._v("Close")])])])])])])])]),t._v(" "),a("vue-snotify")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Sl.")]),this._v(" "),e("th",[this._v("Category Name")]),this._v(" "),e("th",[this._v("Action")])])])}],!1,null,null,null);e.default=i.exports},3:function(t,e,a){var o=a(43);"string"==typeof o&&(o=[[t.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(6)(o,n);o.locals&&(t.exports=o.locals)},43:function(t,e,a){(t.exports=a(5)(!1)).push([t.i,".vld-shown {\n  overflow: hidden;\n}\n\n.vld-overlay {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  align-items: center;\n  display: none;\n  justify-content: center;\n  overflow: hidden;\n  z-index: 9999;\n}\n\n.vld-overlay.is-active {\n  display: flex;\n}\n\n.vld-overlay.is-full-page {\n  z-index: 9999;\n  position: fixed;\n}\n\n.vld-overlay .vld-background {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background: #fff;\n  opacity: 0.5;\n}\n\n.vld-overlay .vld-icon, .vld-parent {\n  position: relative;\n}\n\n",""])}}]);