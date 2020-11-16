(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{113:function(t,n,e){"use strict";e.r(n);var r=e(0),o=(e(3),e(2),{data:function(){return{reports:[],form:new Form({report_date:(new Date).toISOString().split("T")[0]})}},mounted:function(){this.getDailyInventoryReport()},methods:{printSection:function(){this.$htmlToPaper("printArea")},getDailyInventoryReport:function(){var t=this,n=this.$loading.show({container:this.$refs.customerContainer,canCancel:!0,loader:"bars"});r.a.get("/daily-inventory-report",{params:{report_date:this.form.report_date}}).then((function(n){200==n.status?(t.reports=n.data,t.loader.hide()):t.$snotify.error("Something went worng","error")})).catch((function(t){n.hide()})).finally((function(t){n.hide()}))}}}),s=(e(56),e(58),e(1)),a=Object(s.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"row justify-content-md-center",attrs:{id:"printArea"}},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title text-center"},[t._v("Daily Inventory Report")]),t._v(" "),e("hr"),t._v(" "),e("form",{staticClass:"forms-sample",on:{submit:function(n){return n.preventDefault(),t.getDailyInventoryReport(n)}}},[e("div",{staticClass:"row p-2"},[e("div",{staticClass:"col-3"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"no-print"},[t._v("Report Date")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.report_date,expression:"form.report_date"}],staticClass:"form-control form-control-sm no-print",attrs:{type:"date"},domProps:{value:t.form.report_date},on:{change:t.getDailyInventoryReport,input:function(n){n.target.composing||t.$set(t.form,"report_date",n.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-7"}),t._v(" "),e("div",{staticClass:"col-2 text-right"},[e("a",{staticClass:"text-right",attrs:{href:"#"},on:{click:t.printSection}},[e("i",{staticClass:"mdi mdi-printer"})])])])]),t._v(" "),e("div",{staticClass:"row"},[e("table",{staticClass:"list-table table table-bordered"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t.reports.length?e("tbody",t._l(t.reports,(function(n,r){return r!=t.reports.length-1?e("tr",{key:r},[e("td",[t._v("\n                      "+t._s(++r)+"\n                    ")]),t._v(" "),e("td",[t._v("\n                      "+t._s(n.product.name)+"\n                    ")]),t._v(" "),e("td",[t._v("\n                      "+t._s(n.product.code)+"\n                    ")]),t._v(" "),e("td",[t._v("\n                      "+t._s(n.stock_qty)+"\n                    ")]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("\n                      "+t._s(n.sale_qty)+"\n                    ")]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("\n                      "+t._s(n.inventory_qty)+"\n                    ")])]):e("tr",{staticClass:"font-weight-bold"},[e("td",{attrs:{colspan:"3"}},[t._v("\n                      Total\n                    ")]),t._v(" "),e("td",[t._v("\n                      "+t._s(n.stock_qty)+"\n                    ")]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("\n                      "+t._s(n.sale_qty)+"\n                    ")]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("\n                      "+t._s(n.inventory_qty)+"\n                    ")])])})),0):e("tbody",[t._m(2)])])])])])])]),t._v(" "),e("vue-snotify")],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("tr",[e("td",{staticClass:"text-center font-weight-bold",attrs:{colspan:"9"}},[t._v("Daily Inventory Report ")])]),t._v(" "),e("tr",[e("td",[t._v("SL.")]),t._v(" "),e("td",[t._v("Product Name")]),t._v(" "),e("td",[t._v("Product Code")]),t._v(" "),e("td",[t._v("Total Stock In Qty")]),t._v(" "),e("td",[t._v("Total Sales Qty")]),t._v(" "),e("td",[t._v("Inventory Qty")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("tbody",[n("tr")])},function(){var t=this.$createElement,n=this._self._c||t;return n("tr",{staticClass:"not-found"},[n("td",{staticClass:"text-danger",attrs:{colspan:"9"}},[this._v("Not Found")])])}],!1,null,"4e90a826",null);n.default=a.exports},16:function(t,n,e){var r=e(57);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(6)(r,o);r.locals&&(t.exports=r.locals)},17:function(t,n,e){var r=e(59);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(6)(r,o);r.locals&&(t.exports=r.locals)},3:function(t,n,e){var r=e(43);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(6)(r,o);r.locals&&(t.exports=r.locals)},43:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,".vld-shown {\n  overflow: hidden;\n}\n\n.vld-overlay {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  align-items: center;\n  display: none;\n  justify-content: center;\n  overflow: hidden;\n  z-index: 9999;\n}\n\n.vld-overlay.is-active {\n  display: flex;\n}\n\n.vld-overlay.is-full-page {\n  z-index: 9999;\n  position: fixed;\n}\n\n.vld-overlay .vld-background {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background: #fff;\n  opacity: 0.5;\n}\n\n.vld-overlay .vld-icon, .vld-parent {\n  position: relative;\n}\n\n",""])},56:function(t,n,e){"use strict";var r=e(16);e.n(r).a},57:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,"\nhr[data-v-4e90a826] {\n  margin-top: 0rem !important;\n  margin-bottom: 0.2rem !important;\n}  \n",""])},58:function(t,n,e){"use strict";var r=e(17);e.n(r).a},59:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,"\n@media print {\n  /* All your print styles go here */\n.no-print {\n    display: none !important;\n}\n}\n",""])}}]);