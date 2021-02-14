<template>
  <div class="content-wrapper">
    <div class="row justify-content-md-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">New Entry Form</h4>
            <hr>
            <form class="forms-sample" @submit.prevent="store">
              <div class="row p-2">
                <div class="col-4">
                  <div class="form-group">
                    <label>First Name</label>
                    <input type="text" v-model="form.first_name" class="form-control form-control-sm" :class="{ 'is-invalid': errors.first_name }" placeholder="Enter first name">
                    <small class="text-danger" v-if="errors.first_name">{{ errors.first_name[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" v-model="form.last_name" class="form-control form-control-sm" :class="{ 'is-invalid': errors.last_name }" placeholder="Enter last name">
                    <small class="text-danger" v-if="errors.last_name">{{ errors.last_name[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Mobile No.</label>
                    <input type="text" v-model="form.mobile_no" class="form-control form-control-sm" :class="{ 'is-invalid': errors.mobile_no }" placeholder="Enter mobile no">
                    <small class="text-danger" v-if="errors.mobile_no">{{ errors.mobile_no[0] }}</small>
                  </div>
                </div>
              </div>
              <div class="row p-2">
                <div class="col-4">
                  <div class="form-group">
                    <label>E-mail</label>
                    <input type="text" v-model="form.email" class="form-control form-control-sm" :class="{ 'is-invalid': errors.email }" placeholder="Enter email">
                    <small class="text-danger" v-if="errors.email">{{ errors.email[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Designation</label>
                    <input type="text" v-model="form.designation" class="form-control form-control-sm" :class="{ 'is-invalid': errors.designation }" placeholder="Enter address">
                    <small class="text-danger" v-if="errors.designation">{{ errors.designation[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Address</label>
                    <input type="text" v-model="form.address" class="form-control form-control-sm" :class="{ 'is-invalid': errors.address }" placeholder="Enter address">
                    <small class="text-danger" v-if="errors.address">{{ errors.address[0] }}</small>
                  </div>
                </div>                
              </div>
              <div class="row p-2">
                <div class="col-4">
                  <div class="form-group">
                    <label>Branch</label>
                    <select v-model="form.outlet_id" class="form-control form-control-sm" :class="{ 'is-invalid': errors.outlet_id }">
                      <option :value="1">Branch1</option>
                    </select>
                  </div>
                  <small class="text-danger" v-if="errors.outlet_id">{{ errors.outlet_id[0] }}</small>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Role</label>
                    <select v-model="form.role_id" class="form-control form-control-sm" :class="{ 'is-invalid': form.role_id }">
                        <option value="">Please select a role</option>
                        <option v-for="(role, key) in roles" :value="role.id" :key="key">{{ role.name }}</option>
                      </select>                    
                  </div>
                  <small class="text-danger" v-if="errors.role_id">{{ errors.role_id[0] }}</small>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Status</label>
                    <select v-model="form.status" class="form-control form-control-sm" :class="{ 'is-invalid': errors.status }">
                      <option :value="1" :key="1">Active</option>
                      <option :value="0" :key="0">Inactive</option>
                    </select>
                  </div>
                  <small class="text-danger" v-if="errors.status">{{ errors.status[0] }}</small>
                </div>
              </div>
              <div class="row p-2">
                <div class="col-4">
                  <div class="form-group">
                    <label>Password</label>
                    <input type="password" v-model="form.password" class="form-control form-control-sm" :class="{ 'is-invalid': errors.password }" id="address" placeholder="Enter address">
                    <small class="text-danger" v-if="errors.password">{{ errors.password[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Confirmed Password</label>
                    <input type="password" v-model="form.confirmed_password" class="form-control form-control-sm" :class="{ 'is-invalid': errors.confirmed_password }" id="address" placeholder="Enter address">
                    <small class="text-danger" v-if="errors.confirmed_password">{{ errors.confirmed_password[0] }}</small>
                  </div>
                </div>
              </div>
              <div class="row p-2 justify-content-md-center">
                <div class="form-group">
                  <button type="submit" class="btn btn-sm btn-primary mr-2">Submit</button>
                  <router-link to="/users">
                    <button class="btn btn-sm btn-danger mr-2">Cancel</button>
                  </router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>      
    </div>
    <vue-snotify></vue-snotify>
  </div>
</template>

<script>

  import axios from '../../axios';
  import "vue-loading-overlay/dist/vue-loading.css";
  import Loading from 'vue-loading-overlay';
  
  export default {
    data() {
      return { 
        errors: [],
        roles: [],
        form: new Form({
          id: '',
          first_name: '',
          last_name: '',
          email: '',
          mobile_no: '',
          designation: '',
          status: 1,
          outlet_id: 1,
          company_id: 1,
          role_id: '',
          password: '',
          confirmed_password: ''
        }),
      }     
    },
    mounted() {
      this.roleDropdowndata();
      if (this.$route.params.id) {
        this.getProductInfo(this.$route.params.id);
      }
    },
    methods: {
      closeModal(modalName) {
        this.$modal.hide(modalName);
      },
      getProductInfo(productId) {
        const loader = this.$loading.show({
          container: this.$refs.attendanceTable,
          canCancel: true,
          loader: 'bars'
        })
        axios.get('users/' + productId)
          .then((res) => {
            this.form = res.data;
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            loader.hide();
          });
      },
      store() {
        this.errors = [];
        const loader = this.$loading.show({
          container: this.$refs.categoryContainer,
          canCancel: true,
          loader: 'bars'
        })
 
        axios.post('/users', this.form)
          .then(response => {           
            if (response.status == 200) {           
              this.$snotify.success('Successfully created', 'Success');
              this.$router.push({name: 'users'});
            } else {
              this.$snotify.error('Something went worng', 'error');
            }
          })
          .catch( errors => {            
            this.errors = errors.response.data.errors;
          })
          .finally(e => {
            loader.hide();
          })
      },
      roleDropdowndata() {
        axios.get('/role-dropdown-data')
          .then((res) => {
            this.roles = res.data;
          })
          .catch((error) => {
            console.log(error);
          })
      },      
    }
  }
</script>