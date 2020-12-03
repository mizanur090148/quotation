<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Outlet List</h4>
            <hr>
            <div class="row mb-2">
              <div class="col-md-3">                
                <button type="button" @click="outletCreateModal" class="btn btn-primary btn-sm btn-rounded btn-fw">Add New<i class="fas fa-plus"></i></button>
              </div>
              <div class="col-md-6"></div>
              <div class="col-md-3">
                <input type="text" class="form-control search-field" v-model="search_key" placeholder="Search"/>
              </div>              
            </div>
            <div class="table-responsive">
              <table class="list-table table-hover">
                <thead>
                  <tr>
                    <th>Sl.</th>
                    <th>Name</th>
                    <th>Responsible Person</th>
                    <th>E-mail</th>
                    <th>Phone No</th>
                    <th>Address</th>                   
                    <th>Action</th>
                </tr>
                </thead>
                <tbody v-if="outlets.length">
                  <tr v-for="(outlet, index) in outlets" :key="outlet.id">
                    <td>{{ ++index }}</td>
                    <td>{{ outlet.name }}</td>
                    <td>{{ outlet.responsible_person }}</td>
                    <td>{{ outlet.email }}</td>
                    <td>{{ outlet.phone_no }}</td>
                    <td>{{ outlet.address }}</td>                   
                    <td>
                      <button type="button" class="btn btn-sm btn-success btn-rounded btn-fw" @click="outletCreateModal(outlet)">
                        <i class="mdi mdi-grease-pencil"></i>
                      </button>
                      <button type="button" class="btn btn-sm btn-danger btn-rounded btn-fw" @click="deleteOutlet(outlet.id)">
                        <i class="mdi mdi-delete"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr v-if="pagination.current_page == pagination.last_page" class="not-found">
                    <td colspan="7" class="text-danger">Not Found</td>
                  </tr>
                </tbody>
              </table>
              <v-pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="8" @paginate="getOutlets()"></v-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- outlet Modal -->
    <modal name="outletModal" :width="690" :height="420">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">New Outlet</h5>
            <button type="button" class="close" @click="closeModal()">
              <span aria-hidden="true" >&times;</span>
            </button>
          </div>
          <form @submit.prevent="store()">
            <div class="modal-body">
              <div class="row p-2">
                <div class="col-4">
                  <div class="form-group">
                    <label>Outlet Name</label>
                    <input type="text" v-model="form.name" class="form-control form-control-sm" :class="{ 'is-invalid': errors.name }" placeholder="Enter supplier name">
                    <small class="text-danger" v-if="errors.name">{{ errors.name[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Responsible Person </label>
                    <input type="text" v-model="form.responsible_person" class="form-control form-control-sm" :class="{ 'is-invalid': errors.responsible_person }" placeholder="Enter responsible person">
                    <small class="text-danger" v-if="errors.responsible_person">{{ errors.responsible_person[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Phone No.</label>
                    <input type="text" v-model="form.phone_no" class="form-control form-control-sm" :class="{ 'is-invalid': errors.phone_no }" placeholder="Enter phone no">
                    <small class="text-danger" v-if="errors.phone_no">{{ errors.phone_no[0] }}</small>
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
                <div class="col-8">
                  <div class="form-group">
                    <label>Address</label>
                    <textarea v-model="form.address" class="form-control form-control-sm" :class="{ 'is-invalid': errors.address }" placeholder="Enter address"></textarea>
                    <small class="text-danger" v-if="errors.address">{{ errors.address[0] }}</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-md-center">           
              <div class="form-group">
                <button type="submit" class="btn btn-sm btn-primary mr-2">Submit</button>
                <button type="button" class="btn btn-sm btn-danger mr-2" @click="closeModal('supplierModal')">Close</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </modal>
    <vue-snotify></vue-snotify>
  </div>
</template>>

<script>
  import axios from '../../axios';
  import "vue-loading-overlay/dist/vue-loading.css";
  import Loading from 'vue-loading-overlay';
  
  export default {
    data() {
       return {
          listResponse: null,
          outlets: [],
          errors: [],
          search_key: '',
          pagination: {
            current_page: 1,
          },
          form: new Form({
            name: '',           
            address: '',
            phone_no: '',           
            responsible_person: '',
            email: '',
          }),
       }
    },     
    mounted() {
      this.getOutlets()
    },
    watch: {
      search_key: function() {
        this.searchOutlets();
      }
    },
    methods: {
      outletCreateModal(outlet = null)
      {        
        if (outlet) {          
          this.form = outlet;
        } else {
          this.form.clear();
          this.form.reset();
        }       
        this.$modal.show('outletModal');
      },
      closeModal() {
        this.$modal.hide('outletModal');
      },
      store() {
        this.supplier_errors = [];
        const loader = this.$loading.show({
          container: this.$refs.supplierContainer,
          canCancel: true,
          loader: 'bars'
        }) 
        axios.post('/outlets', this.form)
          .then(response => {
            if (response.status == 200) {
              this.getOutlets();
              this.$snotify.success('Successfully created', 'Success');
              this.$modal.hide('outletModal');
              this.loader.hide();
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
      searchOutlets() {
        axios.get('search-outlets?search_key=' + this.search_key)
          .then(res => {
            this.outlets = res.data.data;
            this.pagination = res.data;
          })
          .catch(e => {
            console.log(e);
          })
      }, 
      deleteOutlet(id) {
        this.$snotify.confirm(
          "Are you sure to delete this?",
          {
            closeOnClick: false,
            pauseOnHover: true,
            buttons: [
              {
                text: "Yes",
                action: toast => {
                  this.$snotify.remove(toast.id);
                  axios.delete('/outlets/' + id)
                    .then(response => {
                      this.getOutlets();
                      this.$snotify.success('Successfully deleted', 'Success');
                    })
                    .catch(e => {
                        this.$snotify.success('Not deleted', 'Success');
                    })
                },
                bold: true
              },
              {
                text: "No",
                action: toast => {
                  this.$snotify.remove(toast.id);
                },
                bold: true
              }
            ]
          }
        );
      },
      getOutlets() {
        const loader = this.$loading.show({
          container: this.$refs.attendanceTable,
          canCancel: true,
          loader: 'bars'
        })
        axios.get('outlets?page='+this.pagination.current_page)
          .then((res) => {
            this.outlets = res.data.data;
            this.pagination = res.data;
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            loader.hide();
          });
       }
    }    
  }
</script>

<style scoped>
  .modal-dialog {
    max-width: 630px !important;
  }
</style>