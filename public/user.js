(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{4:function(s,t,e){var o=e(40);"string"==typeof o&&(o=[[s.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(6)(o,r);o.locals&&(s.exports=o.locals)},40:function(s,t,e){(s.exports=e(5)(!1)).push([s.i,".vld-shown {\n  overflow: hidden;\n}\n\n.vld-overlay {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  align-items: center;\n  display: none;\n  justify-content: center;\n  overflow: hidden;\n  z-index: 9999;\n}\n\n.vld-overlay.is-active {\n  display: flex;\n}\n\n.vld-overlay.is-full-page {\n  z-index: 9999;\n  position: fixed;\n}\n\n.vld-overlay .vld-background {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background: #fff;\n  opacity: 0.5;\n}\n\n.vld-overlay .vld-icon, .vld-parent {\n  position: relative;\n}\n\n",""])},90:function(s,t,e){"use strict";e.r(t);var o=e(0),r=(e(4),e(2),{data:function(){return{errors:[],roles:[],form:new Form({id:"",first_name:"",last_name:"",email:"",mobile_no:"",designation:"",status:1,outlet_id:1,company_id:1,role_id:"",password:"",confirmed_password:""})}},mounted:function(){this.roleDropdowndata(),this.$route.params.id&&this.getProductInfo(this.$route.params.id)},methods:{closeModal:function(s){this.$modal.hide(s)},getProductInfo:function(s){var t=this,e=this.$loading.show({container:this.$refs.attendanceTable,canCancel:!0,loader:"bars"});o.a.get("users/"+s).then((function(s){t.form=s.data})).catch((function(s){console.log(s)})).finally((function(){e.hide()}))},store:function(){var s=this;this.errors=[];var t=this.$loading.show({container:this.$refs.categoryContainer,canCancel:!0,loader:"bars"});o.a.post("/users",this.form).then((function(t){200==t.status?(s.$snotify.success("Successfully created","Success"),s.$router.push({name:"users"})):s.$snotify.error("Something went worng","error")})).catch((function(t){s.errors=t.response.data.errors})).finally((function(s){t.hide()}))},roleDropdowndata:function(){var s=this;o.a.get("/role-dropdown-data").then((function(t){s.roles=t.data})).catch((function(s){console.log(s)}))}}}),a=e(1),n=Object(a.a)(r,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"row justify-content-md-center"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[s._v("New Entry Form")]),s._v(" "),e("hr"),s._v(" "),e("form",{staticClass:"forms-sample",on:{submit:function(t){return t.preventDefault(),s.store(t)}}},[e("div",{staticClass:"row p-2"},[e("div",{staticClass:"col-4"},[e("div",{staticClass:"form-group"},[e("label",[s._v(" First Name")]),s._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.form.first_name,expression:"form.first_name"}],staticClass:"form-control form-control-sm",class:{"is-invalid":s.errors.first_name},attrs:{type:"text",placeholder:"Enter first name"},domProps:{value:s.form.first_name},on:{input:function(t){t.target.composing||s.$set(s.form,"first_name",t.target.value)}}}),s._v(" "),s.errors.first_name?e("small",{staticClass:"text-danger"},[s._v(s._s(s.errors.first_name[0]))]):s._e()])]),s._v(" "),e("div",{staticClass:"col-4"},[e("div",{staticClass:"form-group"},[e("label",[s._v("Last Name")]),s._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.form.last_name,expression:"form.last_name"}],staticClass:"form-control form-control-sm",class:{"is-invalid":s.errors.last_name},attrs:{type:"text",placeholder:"Enter last name"},domProps:{value:s.form.last_name},on:{input:function(t){t.target.composing||s.$set(s.form,"last_name",t.target.value)}}}),s._v(" "),s.errors.last_name?e("small",{staticClass:"text-danger"},[s._v(s._s(s.errors.last_name[0]))]):s._e()])]),s._v(" "),e("div",{staticClass:"col-4"},[e("div",{staticClass:"form-group"},[e("label",[s._v("Mobile No.")]),s._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.form.mobile_no,expression:"form.mobile_no"}],staticClass:"form-control form-control-sm",class:{"is-invalid":s.errors.mobile_no},attrs:{type:"text",placeholder:"Enter mobile no"},domProps:{value:s.form.mobile_no},on:{input:function(t){t.target.composing||s.$set(s.form,"mobile_no",t.target.value)}}}),s._v(" "),s.errors.mobile_no?e("small",{staticClass:"text-danger"},[s._v(s._s(s.errors.mobile_no[0]))]):s._e()])])]),s._v(" "),e("div",{staticClass:"row p-2"},[e("div",{staticClass:"col-4"},[e("div",{staticClass:"form-group"},[e("label",[s._v("E-mail")]),s._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.form.email,expression:"form.email"}],staticClass:"form-control form-control-sm",class:{"is-invalid":s.errors.email},attrs:{type:"text",placeholder:"Enter email"},domProps:{value:s.form.email},on:{input:function(t){t.target.composing||s.$set(s.form,"email",t.target.value)}}}),s._v(" "),s.errors.email?e("small",{staticClass:"text-danger"},[s._v(s._s(s.errors.email[0]))]):s._e()])]),s._v(" "),e("div",{staticClass:"col-4"},[e("div",{staticClass:"form-group"},[e("label",[s._v("Designation")]),s._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.form.designation,expression:"form.designation"}],staticClass:"form-control form-control-sm",class:{"is-invalid":s.errors.designation},attrs:{type:"text",placeholder:"Enter address"},domProps:{value:s.form.designation},on:{input:function(t){t.target.composing||s.$set(s.form,"designation",t.target.value)}}}),s._v(" "),s.errors.designation?e("small",{staticClass:"text-danger"},[s._v(s._s(s.errors.designation[0]))]):s._e()])]),s._v(" "),e("div",{staticClass:"col-4"},[e("div",{staticClass:"form-group"},[e("label",[s._v("Address")]),s._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.form.address,expression:"form.address"}],staticClass:"form-control form-control-sm",class:{"is-invalid":s.errors.address},attrs:{type:"text",placeholder:"Enter address"},domProps:{value:s.form.address},on:{input:function(t){t.target.composing||s.$set(s.form,"address",t.target.value)}}}),s._v(" "),s.errors.address?e("small",{staticClass:"text-danger"},[s._v(s._s(s.errors.address[0]))]):s._e()])])]),s._v(" "),e("div",{staticClass:"row p-2"},[e("div",{staticClass:"col-4"},[e("div",{staticClass:"form-group"},[e("label",[s._v("Outlet")]),s._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:s.form.outlet_id,expression:"form.outlet_id"}],staticClass:"form-control form-control-sm",class:{"is-invalid":s.errors.outlet_id},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(s){return s.selected})).map((function(s){return"_value"in s?s._value:s.value}));s.$set(s.form,"outlet_id",t.target.multiple?e:e[0])}}},[e("option",{domProps:{value:1}},[s._v("Outlet1")])])]),s._v(" "),s.errors.outlet_id?e("small",{staticClass:"text-danger"},[s._v(s._s(s.errors.outlet_id[0]))]):s._e()]),s._v(" "),e("div",{staticClass:"col-4"},[e("div",{staticClass:"form-group"},[e("label",[s._v("Role")]),s._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:s.form.role_id,expression:"form.role_id"}],staticClass:"form-control form-control-sm",class:{"is-invalid":s.form.role_id},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(s){return s.selected})).map((function(s){return"_value"in s?s._value:s.value}));s.$set(s.form,"role_id",t.target.multiple?e:e[0])}}},[e("option",{attrs:{value:""}},[s._v("Please select a role")]),s._v(" "),s._l(s.roles,(function(t,o){return e("option",{key:o,domProps:{value:t.id}},[s._v(s._s(t.name))])}))],2)]),s._v(" "),s.errors.role_id?e("small",{staticClass:"text-danger"},[s._v(s._s(s.errors.role_id[0]))]):s._e()]),s._v(" "),e("div",{staticClass:"col-4"},[e("div",{staticClass:"form-group"},[e("label",[s._v("Status")]),s._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:s.form.status,expression:"form.status"}],staticClass:"form-control form-control-sm",class:{"is-invalid":s.errors.status},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(s){return s.selected})).map((function(s){return"_value"in s?s._value:s.value}));s.$set(s.form,"status",t.target.multiple?e:e[0])}}},[e("option",{key:1,domProps:{value:1}},[s._v("Active")]),s._v(" "),e("option",{key:0,domProps:{value:0}},[s._v("Inactive")])])]),s._v(" "),s.errors.status?e("small",{staticClass:"text-danger"},[s._v(s._s(s.errors.status[0]))]):s._e()])]),s._v(" "),e("div",{staticClass:"row p-2"},[e("div",{staticClass:"col-4"},[e("div",{staticClass:"form-group"},[e("label",[s._v("Password")]),s._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.form.password,expression:"form.password"}],staticClass:"form-control form-control-sm",class:{"is-invalid":s.errors.password},attrs:{type:"password",id:"address",placeholder:"Enter address"},domProps:{value:s.form.password},on:{input:function(t){t.target.composing||s.$set(s.form,"password",t.target.value)}}}),s._v(" "),s.errors.password?e("small",{staticClass:"text-danger"},[s._v(s._s(s.errors.password[0]))]):s._e()])]),s._v(" "),e("div",{staticClass:"col-4"},[e("div",{staticClass:"form-group"},[e("label",[s._v("Confirmed Password")]),s._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.form.confirmed_password,expression:"form.confirmed_password"}],staticClass:"form-control form-control-sm",class:{"is-invalid":s.errors.confirmed_password},attrs:{type:"password",id:"address",placeholder:"Enter address"},domProps:{value:s.form.confirmed_password},on:{input:function(t){t.target.composing||s.$set(s.form,"confirmed_password",t.target.value)}}}),s._v(" "),s.errors.confirmed_password?e("small",{staticClass:"text-danger"},[s._v(s._s(s.errors.confirmed_password[0]))]):s._e()])])]),s._v(" "),e("div",{staticClass:"row p-2 justify-content-md-center"},[e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-sm btn-primary mr-2",attrs:{type:"submit"}},[s._v("Submit")]),s._v(" "),e("router-link",{attrs:{to:"/users"}},[e("button",{staticClass:"btn btn-sm btn-danger mr-2"},[s._v("Cancel")])])],1)])])])])])]),s._v(" "),e("vue-snotify")],1)}),[],!1,null,null,null);t.default=n.exports}}]);