<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Category List</h4>
            <hr>
            <div class="row p-2">
              <div class="col-md-3">                
                <button type="button" class="btn btn-primary btn-sm btn-rounded btn-fw"  @click="categoryModal">Add New <i class="fas fa-plus"></i></button>
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
                    <th>Category Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                  <tr v-if="categories.length > 0" v-for="(category, index) in categories" :key="category.id">
                    <td>{{ ++index }}</td>
                    <td>{{ category.name }}</td>                 
                    <td>
                      <button type="button" class="btn btn-sm btn-success btn-rounded btn-fw" @click="getCategoryInfo(category.id)">
                        <i class="mdi mdi-grease-pencil"></i>
                      </button>
                      <button type="button" class="btn btn-sm btn-danger btn-rounded btn-fw" @click="deleteCategory(category.id)">
                        <i class="mdi mdi-delete"></i>
                      </button>
                    </td>
                  </tr>
                  <tr v-else>
                    <td>Not Found</td>
                  </tr> 
                </tbody>
              </table>
              <v-pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="8" @paginate="getCategories()"></v-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>

    <modal name="categoryModal" :width="550" :height="325">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">New Category</h5>
            <button type="button" class="close" @click="closeModal('categoryModal')">
              <span aria-hidden="true" >&times;</span>
            </button>
          </div>
          <form @submit.prevent="categoryStore()">
            <div class="modal-body">
              <div class="row p-2">
                <div class="col-12">
                  <div class="form-group">
                    <label> Name</label>
                    <input type="text" v-model="category_form.name" class="form-control form-control-sm" :class="{ 'is-invalid': category_errors.name }" placeholder="Enter category name">
                    <small class="text-danger" v-if="category_errors.name">{{ category_errors.name[0] }}</small>
                  </div>
                </div>              
              </div>
            </div>
            <div class="modal-footer justify-content-md-center">
              <div class="row p-2 ">
                <div class="form-group">
                  <button type="submit" class="btn btn-sm btn-primary mr-2">Submit</button>
                  <button class="btn btn-sm btn-danger mr-2" @click="closeModal('categoryModal')">Close</button>
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
        categories: [],
        pagination: {
          current_page: 1
        },        
        category_errors: [],
        category_form: new Form({
          name: ''
        }),
        search_query: ''
      }
    },
    mounted() {
      this.getCategories()
    },
    methods: { 
      closeModal(modalName) {
        this.$modal.hide(modalName);
      },
      categoryModal()
      {
        this.category_form.reset();
        this.category_form.clear();
        this.$modal.show('categoryModal');
      },
      categoryStore() {
        this.category_errors = [];
        const loader = this.$loading.show({
           container: this.$refs.categoryContainer,
           canCancel: true,
           loader: 'bars'
        })
 
        axios.post('/categories', this.category_form)
          .then(response => {
            if (response.status == 200) {
              this.getCategories();
              this.$snotify.success('Successfully created', 'Success');
              this.$modal.hide('categoryModal');
              this.loader.hide();
            } else {
              this.$snotify.error('Something went worng', 'error');
            }
          })
          .catch( errors => {            
            this.category_errors = errors.response.data.errors;
          })
          .finally(e => {
            loader.hide();
          })
      },
      getCategoryInfo(categoryId) {
        axios.get('categories/' + categoryId)
          .then((res) => {
            this.category_form = res.data;
            this.$modal.show('categoryModal');
          })
          .catch((error) => {
            console.log(error);
          })
      },      
      getCategories() {
        const loader = this.$loading.show({
            container: this.$refs.attendanceTable,
            canCancel: true,
            loader: 'bars'
        })
        axios.get('categories?page='+this.pagination.current_page)
            .then((res) => {
              this.categories = res.data.data;
              this.pagination = res.data;               
            })
            .catch((error) => {
              console.log(error);
            })
            .finally(() => {    
              loader.hide();             
            });
      },
      deleteCategory(categoryId) {
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
                  this.$snotify.remove(toast.id);
                  axios.delete('/categories/' + categoryId)
                    .then(response => {
                      this.getCategories();
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