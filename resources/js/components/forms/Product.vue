<template>
  <div class="content-wrapper">
    <div class="row justify-content-md-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">New Entry Form</h4>
            <hr>
            <form class="forms-sample" @submit.prevent="productStore" enctype="multipart/form-data">
              <div class="row p-2">
                <div class="col-4">
                  <div class="form-group">
                    <label>Product Name</label>
                    <input type="text" v-model="product_form.name" class="form-control form-control-sm" :class="{ 'is-invalid': product_errors.name }" placeholder="Enter product name">
                    <small class="text-danger" v-if="product_errors.name">{{ product_errors.name[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Product Code</label>
                    <input type="text" v-model="product_form.code" class="form-control form-control-sm" :class="{ 'is-invalid': product_errors.code }" placeholder="Enter product code">
                    <small class="text-danger" v-if="product_errors.code">{{ product_errors.code[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Category</label>
                    <div class="input-group col-xs-12">
                      <select v-model="product_form.category_id" class="form-control form-control-sm" :class="{ 'is-invalid': product_errors.category_id }">
                        <option value="">Please select a category</option>
                        <option v-for="(category, key) in categories" :value="category.id" :key="key">{{ category.name }}</option>
                      </select>
                      <span class="input-group-append">
                        <button class="btn btn-sm btn-primary" type="button" @click="categoryModal">+</button>
                      </span>
                    </div>
                    <small class="text-danger" v-if="product_errors.category_id">{{ product_errors.category_id[0] }}</small>
                  </div>
                </div>
              </div>  
              <div class="row p-2">  
                <div class="col-4">
                  <div class="form-group">
                    <label>Brand</label>
                    <div class="input-group col-xs-12">
                      <select v-model="product_form.brand_id" class="form-control form-control-sm" :class="{ 'is-invalid': product_errors.brand_id }">
                        <option value="">Please select a brand</option>
                        <option v-for="(brand, key) in brandss" :value="brand.id" :key="key">{{ brand.name }}</option>
                      </select>
                      <span class="input-group-append">
                        <button class="btn btn-sm btn-primary" type="button" @click="brandModal">+</button>
                      </span>
                    </div>
                    <small class="text-danger" v-if="product_errors.brand_id">{{ product_errors.brand_id[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Model</label>
                    <div class="input-group col-xs-12">
                      <select v-model="product_form.model_id" class="form-control form-control-sm" :class="{ 'is-invalid': product_errors.model_id }">
                        <option value="">Please select a model</option>
                        <option v-for="(model, key) in models" :value="model.id" :key="key">{{ model.name }}</option>
                      </select>
                      <span class="input-group-append">
                        <button class="btn btn-sm btn-primary" type="button" @click="modelModal">+</button>
                      </span>
                    </div>
                    <small class="text-danger" v-if="product_errors.model_id">{{ product_errors.model_id[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Product Unit</label>
                    <select v-model="product_form.product_unit" class="form-control form-control-sm" :class="{ 'is-invalid': product_errors.product_unit }">                      
                      <option :value="0" :key="0">Piece</option>
                      <!-- <option :value="1" :key="1">Dozen</option> -->
                    </select>
                  </div>
                  <small class="text-danger" v-if="product_errors.product_unit">{{ product_errors.product_unit[0] }}</small>
                </div>                
              </div>            
              <div class="row p-2">
                <div class="col-4">
                  <div class="form-group">
                    <label>Purchase Price(Unit Price)</label>                    
                    <input type="text" @keypress="isNumber($event)" v-model="product_form.purchase_price" class="form-control form-control-sm text-right" :class="{ 'is-invalid': product_errors.purchase_price }" placeholder="Enter purchase price">
                    <small class="text-danger" v-if="product_errors.purchase_price">{{ product_errors.purchase_price[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Sale Price(Unit Price)</label>                    
                    <input type="text" @keypress="isNumber($event)" v-model="product_form.sale_price" class="form-control form-control-sm text-right" :class="{ 'is-invalid': product_errors.sale_price }" placeholder="Enter sale price">
                    <small class="text-danger" v-if="product_errors.sale_price">{{ product_errors.sale_price[0] }}</small>
                  </div>
                </div>                
                <div class="col-4">
                  <div class="form-group">
                    <label>Warning Quantity</label>
                    <input type="text" @keypress="isNumber($event)" v-model="product_form.warning_quantity" class="form-control form-control-sm text-right" :class="{ 'is-invalid': product_errors.warning_quantity }" placeholder="Enter warning qty">
                    <small class="text-danger" v-if="product_errors.warning_quantity">{{ product_errors.warning_quantity[0] }}</small>
                  </div>
                </div>
              </div>
              <div class="row p-2"> 
                <div class="col-4">
                  <div class="form-group">
                    <label>Tax Percentage</label>
                    <select v-model="product_form.tax_percentage" class="form-control form-control-sm" :class="{ 'is-invalid': product_errors.tax_percentage }">
                      <option v-for="(percentage, key) in tax_percentage_dropdown_data" :value="percentage" :key="key">{{ percentage }}%</option>
                    </select>
                  </div>
                  <small class="text-danger" v-if="product_errors.tax_percentage">{{ product_errors.tax_percentage[0] }}</small>
                </div>
                <div class="col-4">
                  <div class="custom-file mt-4">
                    <input type="file" @change="imageSelected" class="custom-file-input" id="customFile" accept="">
                    <label for="" class="custom-file-label">Choose an image</label>                
                  </div>                                   
                </div>  
                <div class="col-4">
                  <div v-if="imagepreview || product_form.image" class="mt-3">
                    <img :src="imagepreview ? imagepreview : product_form.image" class="figure-img img-fluid rounded" style="max-height: 60px;">
                    <button type="button" class="btn btn-xs btn-danger text-right" @click="removeImage"><i class="mdi mdi-delete"></i></button>
                  </div> 
                </div>         
              </div>            
              <div class="row p-2">                
                <div class="col-12">
                  <div class="form-group">
                    <label>Product Details</label>
                    <textarea v-model="product_form.product_detail" rows="3" class="form-control form-control-sm" :class="{ 'is-invalid': product_errors.product_detail }" placeholder="Enter product details"></textarea>
                    <small class="text-danger" v-if="product_errors.product_detail">{{ product_errors.product_detail[0] }}</small>
                  </div>
                </div>
              </div>
              <div class="row p-2 justify-content-md-center">
                <div class="form-group">
                  <button type="submit" class="btn btn-sm btn-primary mr-2">Submit</button>
                  <router-link to="/products">
                    <button class="btn btn-sm btn-danger mr-2">Cancel</button>
                  </router-link>
                </div>
              </div>              
            </form>          
          </div>
        </div>
      </div>      
    </div>
    <!-- category Modal -->
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

    <!-- Brand Modal -->
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

    <modal name="modelModal" :width="550" :height="325">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">New Model</h5>
            <button type="button" class="close" @click="closeModal('modelModal')">
              <span aria-hidden="true" >&times;</span>
            </button>
          </div>
          <form @submit.prevent="modelStore()">
            <div class="modal-body">
              <div class="row p-2">
                <div class="col-12">
                  <div class="form-group">
                    <label> Name</label>
                    <input type="text" v-model="model_form.name" class="form-control form-control-sm" :class="{ 'is-invalid': model_errors.name }" placeholder="Enter model name">
                    <small class="text-danger" v-if="model_errors.name">{{ model_errors.name[0] }}</small>
                  </div>
                </div>              
              </div>
            </div>
            <div class="modal-footer justify-content-md-center">
              <div class="row p-2 ">
                <div class="form-group">
                  <button type="submit" class="btn btn-sm btn-primary mr-2">Submit</button>
                  <button class="btn btn-sm btn-danger mr-2" @click="closeModal('modelModal')">Close</button>
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

<style>
  img {
    width: 50%;
    height: 100%;
    display: block;
    margin-bottom: 10px;
  }
</style>
<script>
  import axios from '../../axios';
  import "vue-loading-overlay/dist/vue-loading.css";
  import Loading from 'vue-loading-overlay';
  
  export default {
    data() {
      return { 
        product_errors: [],     
        imagepreview : null,
        product_form: new Form({
          id: '',
          category_id: '',
          brand_id: '',
          model_id: '',
          name: '',
          code: '',
          product_unit: 0,        
          purchase_price: '',
          sale_price: '',
          warning_quantity: '',
          tax_percentage: 5,
          product_detail: '',
          image: ''
        }),
        categories: [],
        category_errors: [],
        category_form: new Form({
          name: ''
        }),
        models: [],
        model_errors: [],
        model_form: new Form({
          name: ''
        }),
        brandss: [],
        brand_errors: [],
        tax_percentage_dropdown_data: [],
        brand_form: new Form({
          name: ''
        })
      }
    },
    mounted() {
      this.categoryDropdowndata();
      this.modelDropdowndata();
      this.brandDropdowndata();
      this.getTaxPrcentageDropdownData();

      if (this.$route.params.id) {
        this.getProductInfo(this.$route.params.id);
      }
    },
    methods: {
      isNumber: function(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
          evt.preventDefault();;
        } else {
          return true;
        }
      },
      imageSelected(e) {
        this.product_form.image = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(this.product_form.image);
        reader.onload = e => {
          this.imagepreview = e.target.result;
        }
      },
      removeImage: function (e) {  
        this.product_form.image = '';
        this.imagepreview = '';
      },      
      getTaxPrcentageDropdownData() {
        let tax_percentage_dropdown_data = new Array();
        for (let index = 1; index <= 50; index++) {
          tax_percentage_dropdown_data.push(index);          
        }
        this.tax_percentage_dropdown_data = tax_percentage_dropdown_data;
      },
      closeModal(modalName) {
        this.$modal.hide(modalName);
      },
      getProductInfo(productId) {
        const loader = this.$loading.show({
          container: this.$refs.attendanceTable,
          canCancel: true,
          loader: 'bars'
        })
        axios.get('products/' + productId)
          .then((res) => {
            this.product_form = res.data;
            this.product_form.brand_id = res.data.brand_id ? res.data.brand_id : '';
            this.product_form.model_id = res.data.model_id ? res.data.model_id : '';
            this.product_form.warning_quantity = res.data.warning_quantity ? res.data.warning_quantity : '';
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            loader.hide();
          });
      },
      productStore() {
        this.errors = [];
        const loader = this.$loading.show({
          container: this.$refs.categoryContainer,
          canCancel: true,
          loader: 'bars'
        });

        let data = new FormData;
        data.append('name', this.product_form.name);
        data.append('code', this.product_form.code);
        data.append('category_id', this.product_form.category_id);
        data.append('brand_id', this.product_form.brand_id);
        data.append('model_id', this.product_form.model_id);        
        data.append('product_unit', this.product_form.product_unit);
        data.append('purchase_price', this.product_form.purchase_price);
        data.append('sale_price', this.product_form.sale_price);
        data.append('warning_quantity', this.product_form.warning_quantity);
        data.append('tax_percentage', this.product_form.tax_percentage);
        data.append('product_detail', this.product_form.product_detail);
        data.append('image', this.product_form.image);

        axios.post('/products', data)
          .then(response => {
            if (response.status == 200) {           
              this.$snotify.success('Successfully created', 'Success');
              this.$router.push({name: 'products'});
            } else {
              this.$snotify.error('Something went worng', 'error');
            }
          })
          .catch( errors => {            
            this.product_errors = errors.response.data.errors;
          })
          .finally(e => {
            loader.hide();
          })
      },
      categoryDropdowndata() {
        axios.get('/category-dropdown-data')
          .then((res) => {
              this.categories = res.data;
          })
          .catch((error) => {
              console.log(error);
          })
      },
      modelDropdowndata() {
        axios.get('/model-dropdown-data')
          .then((res) => {
            this.models = res.data;
          })
          .catch((error) => {
              console.log(error);
          })
      },
      brandDropdowndata() {
        axios.get('/brand-dropdown-data')
          .then((res) => {
            this.brandss = res.data;
          })
          .catch((error) => {
            console.log(error);
          })
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
              this.categoryDropdowndata();
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
      modelModal()
      {
        this.model_form.reset();
        this.model_form.clear();
        this.$modal.show('modelModal');
      },
      modelStore() {
        this.model_errors = [];
        const loader = this.$loading.show({
           container: this.$refs.modelContainer,
           canCancel: true,
           loader: 'bars'
        })

        axios.post('/models', this.model_form)
          .then(response => {
            if (response.status == 200) {
              this.modelDropdowndata();
              this.$snotify.success('Successfully created', 'Success');
              this.$modal.hide('modelModal');
              this.loader.hide();
            } else {
              this.$snotify.error('Something went worng', 'error');
            }
          })
          .catch( errors => {
            this.model_errors = errors.response.data.errors;
          })
          .finally(e => {
            loader.hide();
          })
      },
      brandModal()
      {
        this.brand_form.reset();
        this.brand_form.clear();
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
              this.brandDropdowndata();
              this.$snotify.success('Successfully created', 'Success');
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
      }      
    }    
  }
</script>