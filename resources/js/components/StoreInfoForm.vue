<template>
  <div class="content-wrapper">
    <div class="row justify-content-md-center">      
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">New Entry Form</h4>           
            <form class="forms-sample" @submit.prevent="storeStoreInfo()">
              <div class="form-group row">
                <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Outlet</label>
                <div class="col-sm-9">
                  <div class="input-group">
                    <select v-model="store_info_form.outlet_id" class="form-control-sm form-control" :class="{ 'is-invalid': store_info_errors.outlet_id }">
                        <option value="">Please select a outlet</option>
                        <option v-for="outlet in outlets" :value="outlet.id">{{ outlet.name }}</option>
                    </select>                    
                    <div class="input-group-append">
                      <button class="btn btn-sm btn-primary" type="button" @click="outletModal">+</button>
                    </div>                    
                   </div>
                  <small class="text-danger" v-if="store_info_errors.outlet_id">{{ store_info_errors.outlet_id[0] }}</small>
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Category</label>
                <div class="col-sm-9">
                  <div class="input-group">                    
                    <select v-model="store_info_form.category_id" class="form-control-sm form-control" @change="getSubCategoriesByCategory($event)" :class="{ 'is-invalid': store_info_errors.category_id }">
                      <option value="">Please select a category</option>
                      <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
                    </select>
                    <div class="input-group-append">
                      <button class="btn btn-sm btn-primary" type="button" @click="categoryModal">+</button>
                    </div>
                  </div>
                  <small class="text-danger" v-if="store_info_errors.category_id">{{ store_info_errors.category_id[0] }}</small>
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Sub Category</label>
                <div class="col-sm-9">
                  <div class="input-group">                   
                    <select v-model="store_info_form.sub_category_id" class="form-control-sm form-control" :class="{ 'is-invalid': store_info_errors.sub_category_id }">
                      <option value="">Please select a sub category</option>
                      <option v-for="sub_category in sub_categories" :value="sub_category.id">{{ sub_category.name }}</option>
                    </select> 
                    <div class="input-group-append">
                      <button class="btn btn-sm btn-primary" type="button" :class="this.store_info_form.category_id ? '' : 'disabled' " @click="subCategoryModal">+</button>
                    </div>
                  </div>
                  <small class="text-danger" v-if="store_info_errors.sub_category_id">{{ store_info_errors.sub_category_id[0] }}</small>
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Color</label>
                <div class="col-sm-9">
                  <div class="input-group">
                    <select v-model="store_info_form.color_id" class="form-control-sm form-control" :class="{ 'is-invalid': store_info_errors.color_id }">
                      <option value="">Please select a color</option>
                      <option v-for="color in colors" :value="color.id">{{ color.name }}</option>
                    </select>
                    <div class="input-group-append">
                      <button class="btn btn-sm btn-primary" type="button" @click="categoryModal">+</button>
                    </div>                    
                  </div>
                  <small class="text-danger" v-if="store_info_errors.color_id">{{ store_info_errors.color_id[0] }}</small>
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Size</label>
                <div class="col-sm-9">
                  <div class="input-group">
                     <select v-model="store_info_form.size_id" class="form-control-sm form-control" :class="{ 'is-invalid': store_info_errors.size_id }">
                      <option value="">Please select a size</option>
                      <option v-for="size in sizes" :value="size.id">{{ size.name }}</option>
                    </select>
                    <div class="input-group-append">
                      <button class="btn btn-sm btn-primary" type="button" @click="categoryModal">+</button>
                    </div>                    
                  </div>
                  <small class="text-danger" v-if="store_info_errors.size_id">{{ store_info_errors.size_id[0] }}</small>
                </div>
              </div>             
              <div class="form-group row">
                <label for="exampleInputEmail2" class="col-sm-3 col-form-label">Item Code</label>
                <div class="col-sm-9">
                  <input type="text" v-model="store_info_form.item_code_or_description" class="form-control form-control-sm" id="item_code" placeholder="Item code" :class="{ 'is-invalid': store_info_errors.item_code_or_description }">
                  <small class="text-danger" v-if="store_info_errors.item_code_or_description">
                    {{ store_info_errors.item_code_or_description[0] }}
                  </small>
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputEmail2" class="col-sm-3 col-form-label">Quantity</label>
                <div class="col-sm-9">
                  <input type="number" v-model="store_info_form.quantity" class="form-control form-control-sm" id="Quantity" placeholder="Quantity" :class="{ 'is-invalid': store_info_errors.quantity }">
                  <small class="text-danger" v-if="store_info_errors.quantity">
                    {{ store_info_errors.quantity[0] }}
                  </small>
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputEmail2" class="col-sm-3 col-form-label">Rate(Taka)</label>
                <div class="col-sm-9">
                  <input type="number" v-model="store_info_form.rate" class="form-control form-control-sm" id="Rate" placeholder="Rate(Taka)" :class="{ 'is-invalid': store_info_errors.rate }">
                  <small class="text-danger" v-if="store_info_errors.rate">{{ store_info_errors.rate[0] }}</small>
                </div>
              </div> 
              <div class="form-group row justify-content-md-center p-2">
                <div class="col-sm-6">
                  <button type="submit" class="btn btn-sm btn-primary mr-2">Submit</button>
                  <button class="btn btn-sm btn-danger mr-2">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>      
    </div>

    <!-- Outlet Modal -->
    <modal name="outletModal" :width="550" :height="485">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New Outlet</h5>
            <button type="button" class="close" @click="closeModal('outletModal')">
              <span aria-hidden="true" >&times;</span>
            </button>
          </div>
          <form @submit.prevent="editMode ? outletStore() : outletStore()">
            <div class="modal-body" ref="outletContainer">
              <div class="row p-2">
                <div class="col-6">
                  <div class="form-group">
                    <label> Outlet Name</label>
                    <input type="text"  v-model="outlet_form.name" class="form-control form-control-sm" :class="{ 'is-invalid': outlet_errors.name }" placeholder="Enter outlet name">

                    <small class="text-danger" v-if="outlet_errors.name">{{ outlet_errors.name[0] }}</small>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label>Responsible Person</label>
                    <input type="text" v-model="outlet_form.responsible_person" class="form-control form-control-sm" placeholder="Enter responsible person" :class="{ 'is-invalid': outlet_errors.responsible_person }">

                    <small class="text-danger" v-if="outlet_errors.responsible_person">{{ outlet_errors.responsible_person[0] }}</small>
                  </div>
                </div>
              </div>
              <div class="row p-2">
                <div class="col-6">
                  <div class="form-group">
                    <label> Phone No.</label>
                    <input type="text" v-model="outlet_form.phone_no" class="form-control form-control-sm" placeholder="Enter phone No." :class="{ 'is-invalid': outlet_errors.phone_no }">

                    <small class="text-danger" v-if="outlet_errors.phone_no">{{ outlet_errors.phone_no[0] }}</small>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label>Email</label>
                    <input type="email" v-model="outlet_form.email" class="form-control form-control-sm" placeholder="Enter email" :class="{ 'is-invalid': outlet_errors.email }">

                    <small class="text-danger" v-if="outlet_errors.email">{{ outlet_errors.email[0] }}</small>
                  </div>
                </div>
              </div>
              <div class="row p-2">
                <div class="col-12">
                  <div class="form-group">
                    <label> Address</label>
                    <textarea type="text" v-model="outlet_form.address" class="form-control form-control-sm" placeholder="Enter address" :class="{ 'is-invalid': outlet_errors.address }"></textarea>

                    <small class="text-danger" v-if="outlet_errors.address">{{ outlet_errors.address[0] }}</small>
                  </div>
                </div>             
              </div>
            </div>
            <div class="modal-footer justify-content-md-center">
              <div class="row p-2 ">
                  <div class="form-group">
                    <button type="submit" class="btn btn-sm btn-primary mr-2">Submit</button>
                    <button class="btn btn-sm btn-danger mr-2">Cancel</button>
                  </div>
                </div>
            </div>
          </form>
        </div>
      </div>
    </modal>

    <!-- category Modal -->
    <modal name="categoryModal" :width="550" :height="321">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">New Category</h5>
            <button type="button" class="close" @click="closeModal('categoryModal')">
              <span aria-hidden="true" >&times;</span>
            </button>
          </div>
          <form @submit.prevent="editMode ? categoryStore() : categoryStore()">
            <div class="modal-body">
              <div class="row p-2">
                <div class="col-12">
                  <div class="form-group">
                    <label> Name</label>
                    <input type="text"  v-model="category_form.name" class="form-control form-control-sm" :class="{ 'is-invalid': category_errors.name }" placeholder="Enter category name">                    

                    <small class="text-danger" v-if="category_errors.name">{{ category_errors.name[0] }}</small>
                  </div>
                </div>              
              </div>
            </div>
            <div class="modal-footer justify-content-md-center">
              <div class="row p-2 ">
                <div class="form-group">
                  <button type="submit" class="btn btn-sm btn-primary mr-2">Submit</button>
                  <button class="btn btn-sm btn-danger mr-2">Cancel</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </modal>

    <!--sub category Modal -->
    <modal name="subCategoryModal" :width="550" :height="321">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">New Sub Category</h5>
            <button type="button" class="close" @click="closeModal('subCategoryModal')">
              <span aria-hidden="true" >&times;</span>
            </button>
          </div>
          <form @submit.prevent="editMode ? subCategoryStore() : subCategoryStore()">
            <div class="modal-body">
              <div class="row p-2">
                <div class="col-12">
                  <div class="form-group">
                    <label> Name</label>
                    <input type="text"  v-model="sub_category_form.name" class="form-control form-control-sm" :class="{ 'is-invalid': sub_category_errors.name }" placeholder="Enter category name">

                    <small class="text-danger" v-if="sub_category_errors.name">{{ sub_category_errors.name[0] }}</small>

                    
                  </div>
                </div>              
              </div>
            </div>
            <div class="modal-footer justify-content-md-center">
              <div class="row p-2 ">
                <div class="form-group">
                  <button type="submit" class="btn btn-sm btn-primary mr-2">Submit</button>
                  <button class="btn btn-sm btn-danger mr-2">Cancel</button>
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
 
  import axios from '../axios';
  import "vue-loading-overlay/dist/vue-loading.css";
  import Loading from 'vue-loading-overlay';

  export default {
    data: function () {
      return {
        outlets: [],
        errors: [],
        outlet_errors: [],
        editMode: false,
        outlet_form: new Form({
          name: '',
          responsible_person: '',
          phone_no: '',
          email: '',
          address: '',
          company_id: 1
        }),
        store_info_errors: [],
        store_info_form: new Form({
          outlet_id: '',
          category_id: '',
          sub_category_id: '',
          color_id: '',
          size_id: '',
          item_code_or_description: '',
          quantity: '',
          rate: '',
          user_id: 1
        }),
        categories: [],
        colors: [],
        sizes: [],
        category_errors: [],
        name: 2,
        category_form: new Form({
          name: '',
          outlet_id: 1
        }),
        sub_categories: [],
        sub_category_errors: [],
        sub_category_form: new Form({
          name: '',
          category_id: 1
        })
      }
    },    
    mounted() {
      this.getOutlets();
      this.getCategoriesList();
      this.getColors();
      this.getSizes();
    },
    methods: {
      storeStoreInfo() {      
        const loader = this.$loading.show({
           container: this.$refs.outletContainer,
           canCancel: true,
           loader: 'bars'
        })
 
        axios.post('/store-info', this.store_info_form)
          .then(response => {
            if (response.status == 200) {
              this.$snotify.success('Successfully created', 'Success');              
              this.$router.push({name: 'store-info'});
            } else {
              this.$snotify.error('Something went worng', 'error');
            }
          })
          .catch( errors => {
            this.store_info_errors = errors.response.data.errors;
          })
          .finally(e => {
            loader.hide();
         })
      },

      getOutlets() {
        axios.get('/outlets')
          .then((res) => {
            this.outlets = res.data.content.data;
          })
          .catch((error) => {
            console.log(error);
          })
      },
      
      outletStore() {
        this.outlet_errors = [];
        const loader = this.$loading.show({
           container: this.$refs.outletContainer,
           canCancel: true,
           loader: 'bars'
        })
 
        axios.post('/outlets', this.outlet_form)
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
            this.outlet_errors = errors.response.data.errors;
          })
          .finally(e => {
            loader.hide();
         })
      },
      categoryStore() {
        this.category_errors = [];
        const loader = this.$loading.show({
           container: this.$refs.categoryContainer,
           canCancel: true,
           loader: 'bars'
        })
 
        axios.post('/category-sub-categories', this.category_form)
          .then(response => {
            if (response.status == 200) {
              this.getCategoriesList();
              this.$snotify.success('Successfully created', 'Success');
              this.$modal.hide('categoryModal');
              this.loader.hide();
            } else {
              this.$snotify.error('Something went worng', 'error');
            }
          })
          .catch( errors => {
            console.log(errors);
            this.category_errors = errors.response.data.errors;
          })
          .finally(e => {
            loader.hide();
          })
      },

      subCategoryStore() {
        this.category_errors = [];
        const loader = this.$loading.show({
           container: this.$refs.categoryContainer,
           canCancel: true,
           loader: 'bars'
        })
 
        axios.post('/category-sub-categories', this.sub_category_form)
          .then(response => {
            if (response.status == 200) {
              // this.getCategoriesList();
              this.$snotify.success('Successfully created', 'Success');
              this.$modal.hide('subCategoryModal');
              this.loader.hide();
            } else {
              this.$snotify.error('Something went worng', 'error');
            }
          })
          .catch( errors => {
            console.log(errors);
            this.category_errors = errors.response.data.errors;
          })
          .finally(e => {
            loader.hide();
          })
      },
      getCategoriesList() {
        axios.get('/categories')
          .then((res) => {
            this.categories = res.data.content.data;
          })
          .catch((error) => {
            console.log(error);
          })
      },
      getSubCategoriesByCategory() {
        if (this.store_info_form.category_id) {
          axios.get('/sub-categories-by-category/'+this.store_info_form.category_id)
          .then((res) => {
            this.sub_categories = res.data.content.data;
          })
          .catch((error) => {
            console.log(error);
          })
        } else {
          this.sub_categories = [];
        }       
      },
      getColors() {
        axios.get('/colors')
          .then((res) => {
            this.colors = res.data.content.data;
          })
          .catch((error) => {
            console.log(error);
          })
      },
      getSizes() {
        axios.get('/sizes')
          .then((res) => {
            this.sizes = res.data.content.data;
          })
          .catch((error) => {
            console.log(error);
          })
      },
      outletModal()
      {      
        this.outlet_form.reset();
        this.outlet_form.clear();
        this.$modal.show('outletModal');
      },
      categoryModal()
      {
        this.category_form.reset();
        this.category_form.clear();
        this.$modal.show('categoryModal');
      },
      subCategoryModal()
      {
        if (this.store_info_form.category_id) {
          this.sub_category_form.reset();
          this.sub_category_form.clear();
          this.$modal.show('subCategoryModal');  
        } else {
          alert('Please select category first');
        }     
      },
      closeModal(modalName) {
        this.$modal.hide(modalName);
      },
        
    }
  }
</script>