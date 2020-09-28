<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Brand List</h4>
            <hr>
            <div class="row p-2">
              <div class="col-md-3">             
                <button type="button" class="btn btn-primary btn-sm btn-rounded btn-fw" @click="brandModal">Add New <i class="fas fa-plus"></i></button>
              </div>
              <div class="col-md-6"></div>
              <div class="col-md-3">
                <input type="text" class="form-control search-field" placeholder="Search"/>
              </div>
            </div>
            <div class="table-responsive">
              <table class="list-table table-hover">
                <thead>
                  <tr>
                    <th>Sl.</th>
                    <th>Brand Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                  <tr v-if="brands.length > 0" v-for="(brand, index) in brands" :key="brand.id">
                    <td>{{ ++index }}</td>
                    <td>{{ brand.name }}</td>                 
                    <td>
                      <button type="button" class="btn btn-sm btn-success btn-rounded btn-fw" @click="getBrandInfo(brand.id)">
                        <i class="mdi mdi-grease-pencil"></i>
                      </button>
                      <button type="button" class="btn btn-sm btn-danger btn-rounded btn-fw" @click="deleteBrand(brand.id)">
                        <i class="mdi mdi-delete"></i>
                      </button>
                    </td>
                  </tr>
                  <tr v-else>
                    <td>Not Found</td>
                  </tr> 
                </tbody>
              </table>
              <v-pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="8" @paginate="getBrands()"></v-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>

    <modal name="brandModal" :width="550" :height="325">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">New Brand</h5>
            <button type="button" class="close" @click="closeModal('brandModal')">
              <span aria-hidden="true" >&times;</span>
            </button>
          </div>
          <form @submit.prevent="brandStore()">
            <div class="modal-body">
              <div class="row p-2">
                <div class="col-12">
                  <div class="form-group">
                    <label> Name</label>
                    <input type="text" v-model="brand_form.name" class="form-control form-control-sm" :class="{ 'is-invalid': brand_errors.name }" placeholder="Enter brand name">
                    <small class="text-danger" v-if="brand_errors.name">{{ brand_errors.name[0] }}</small>
                  </div>
                </div>              
              </div>
            </div>
            <div class="modal-footer justify-content-md-center">
              <div class="row p-2 ">
                <div class="form-group">
                  <button type="submit" class="btn btn-sm btn-primary mr-2">Submit</button>
                  <button class="btn btn-sm btn-danger mr-2" @click="closeModal('brandModal')">Close</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </modal>

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
        brands: [],
        pagination: {
          current_page: 1
        },
        brand_errors: [],
        brand_form: new Form({
          name: ''
        }),
        search_query: ''
      }
    },
    mounted() {
      this.getBrands()
    },
    methods: {  
      closeModal(modalName) {
        this.$modal.hide(modalName);
      },
      getBrandInfo(brandId) {
       // this.brand_form.clear();
        axios.get('brands/' + brandId)
          .then((res) => {
            this.brand_form = res.data;
            this.$modal.show('brandModal');
          })
          .catch((error) => {
            console.log(error);
          })
      },
      brandModal()
      {
       // this.brand_form.reset();
        //this.brand_form.clear();
        this.$modal.show('brandModal');
      },
      brandStore() {
        this.brand_errors = [];
        const loader = this.$loading.show({
           container: this.$refs.brandContainer,
           canCancel: true,
           loader: 'bars'
        })
 
        axios.post('/brands', this.brand_form)
          .then(response => {
            if (response.status == 200) {              
              this.$snotify.success('Successfully created', 'Success');
              this.getBrands();
              this.$modal.hide('brandModal');
              this.loader.hide();
            } else {
              this.$snotify.error('Something went worng', 'error');
            }
          })
          .catch( errors => {            
            this.brand_errors = errors.response.data.errors;
          })
          .finally(e => {
            loader.hide();
          })
      },
      getBrands() {
        const loader = this.$loading.show({
            container: this.$refs.attendanceTable,
            canCancel: true,
            loader: 'bars'
        })
        axios.get('brands?page='+this.pagination.current_page)
            .then((res) => {
              this.brands = res.data.data;
              this.pagination = res.data;               
            })
            .catch((error) => {
              console.log(error);
            })
            .finally(() => {    
              loader.hide();             
            });
      },
      deleteBrand(brandId) {
          this.$snotify.clear();
          this.$snotify.confirm(
            "Are you sure to delete this?",
            {
              closeOnClick: false,
              pauseOnHover: true,
              buttons: [
                {
                  text: "Yes",
                  action: toast => {
                    this.$snotify.remove(toast.brandId);
                    axios.delete('/brands/' + brandId)
                      .then(response => {
                          this.getBrands();
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
    }
  }
</script>