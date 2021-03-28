(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{224:function(t,e,s){"use strict";s.r(e);var a=s(2),i={data:function(){return{schedules:[],pagination:{current_page:1},search_key:"",role:localStorage.getItem("role")}},mounted:function(){this.getVisitSchedules()},watch:{search_key:function(){this.searchVisitSchedules()}},methods:{searchVisitSchedules:function(){var t=this;a.a.get("search-visit-schedules?search_key="+this.search_key).then((function(e){t.schedules=e.data.data,t.pagination=e.data})).catch((function(t){console.log(t)}))},deleteVisitSchedule:function(t){var e=this;this.$snotify.clear(),this.$snotify.confirm("Are you sure to delete this?",{closeOnClick:!1,pauseOnHover:!0,buttons:[{text:"Yes",action:function(s){e.$snotify.remove(s.id),a.a.delete("/visit-schedules/"+t).then((function(t){e.getVisitSchedules(),e.$snotify.success("Successfully deleted","Success")})).catch((function(t){e.$snotify.error("Not deleted","error")}))},bold:!0},{text:"No",action:function(t){e.$snotify.remove(t.id)},bold:!0}]})},getVisitSchedules:function(){var t=this,e=this.$loading.show({container:this.$refs.attendanceTable,canCancel:!0,loader:"bars"});a.a.get("visit-schedules?page="+this.pagination.current_page).then((function(e){t.schedules=e.data.data,t.pagination=e.data})).catch((function(t){console.log(t)})).finally((function(){e.hide()}))}}},n=s(1),c=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12 grid-margin stretch-card"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v("Visit Schedule List")]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"row p-2"},[s("div",{staticClass:"col-md-3 pl-1"},[s("router-link",{attrs:{to:"/visit-schedules/create"}},[s("button",{staticClass:"btn btn-primary btn-sm btn-rounded btn-fw",attrs:{type:"button"}},[t._v("Add New "),s("i",{staticClass:"fas fa-plus"})])])],1),t._v(" "),s("div",{staticClass:"col-md-6"}),t._v(" "),s("div",{staticClass:"col-md-3 pr-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search_key,expression:"search_key"}],staticClass:"form-control search-field",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.search_key},on:{input:function(e){e.target.composing||(t.search_key=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"list-table table-hover"},[t._m(0),t._v(" "),t.schedules.length>0?s("tbody",t._l(t.schedules,(function(e,a){return s("tr",{key:e.id,class:0==e.status?"text-primary":1==e.status?"text-success":2==e.status?"text-warning":3==e.status?"text-danger":""},[s("td",[t._v(t._s(++a))]),t._v(" "),s("td",[t._v(t._s(e.from_date))]),t._v(" "),s("td",[t._v(t._s(e.to_date))]),t._v(" "),s("td",[t._v(t._s(e.from_location))]),t._v(" "),s("td",[t._v(t._s(e.to_location))]),t._v(" "),s("td",[t._v(t._s(0==e.status?"Pending":"Accepted"))]),t._v(" "),s("td",[t._v(t._s(e.note))]),t._v(" "),s("td",[t._v(t._s(e.admin_comment))]),t._v(" "),s("td",[t._v(t._s(e.created_by.first_name+" "+e.created_by.last_name))]),t._v(" "),s("td",{staticClass:"text-center"},[3==t.role?s("router-link",{staticClass:"btn btn-sm btn-success btn-rounded btn-fw",attrs:{to:"/visit-schedules/"+e.id,title:"edit"}},[s("i",{staticClass:"mdi mdi-grease-pencil"})]):t._e(),t._v(" "),1==t.role||2==t.role?s("router-link",{staticClass:"btn btn-sm btn-primary btn-rounded btn-fw",attrs:{to:"/review-visit-schedules/"+e.id,title:"edit"}},[s("i",{staticClass:"mdi mdi-eye"})]):t._e(),t._v(" "),s("button",{staticClass:"btn btn-sm btn-danger btn-rounded btn-fw",attrs:{type:"button"},on:{click:function(s){return t.deleteVisitSchedule(e.id)}}},[s("i",{staticClass:"mdi mdi-delete"})])],1)])})),0):s("tbody",[t.pagination.current_page==t.pagination.last_page?s("tr",{staticClass:"not-found"},[s("td",{staticClass:"text-danger",attrs:{colspan:"10"}},[t._v("Not Found")])]):t._e()])]),t._v(" "),t.pagination.last_page>1?s("v-pagination",{attrs:{pagination:t.pagination,offset:8},on:{paginate:function(e){return t.getVisitSchedules()}}}):t._e()],1)])])])]),t._v(" "),s("vue-snotify")],1)}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("SL")]),t._v(" "),s("th",[t._v("From Date")]),t._v(" "),s("th",[t._v("To Date")]),t._v(" "),s("th",[t._v("From Location")]),t._v(" "),s("th",[t._v("To Location")]),t._v(" "),s("th",[t._v("Status")]),t._v(" "),s("th",[t._v("Note")]),t._v(" "),s("th",[t._v("Admin Comment")]),t._v(" "),s("th",[t._v("Created By")]),t._v(" "),s("th",[t._v("Actions")])])])}],!1,null,null,null);e.default=c.exports}}]);