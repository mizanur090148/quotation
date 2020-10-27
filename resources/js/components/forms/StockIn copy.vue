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
                <div class="col-3">
                  <div class="form-group">
                    <label>Supplier</label> 
                    <div></div>                     
                    <button class="btn btn-sm btn-primary" type="button" @click="supplierModal">Add Supplier</button>
                  </div>
                </div>
                <div class="col-3">
                  <div class="form-group">
                    <label>Stock In Challan</label>
                    <input type="text" v-model="stock_in_challan" class="form-control form-control-sm" disabled :class="{ 'is-invalid': errors.stock_in_challan }">
                    <small class="text-danger" v-if="errors.stock_in_challan">{{ errors.stock_in_challan[0] }}</small>
                  </div>
                </div>
                <div class="col-3">
                  <div class="form-group">
                    <label>Status</label>
                    <div class="input-group col-xs-12">
                      <select v-model="form.stock_in_status" class="form-control form-control-sm" :class="{ 'is-invalid': errors.stock_in_status }">                      
                        <option :value="0" :key="0">Pending</option>
                        <option :value="1" :key="1">Received</option>
                      </select>
                    </div>
                    <small class="text-danger" v-if="errors.stock_in_status">{{ errors.stock_in_status[0] }}</small>
                  </div>
                </div>
                <div class="col-3">
                  <div class="form-group">
                    <label>Stock In Document</label>                   
                      <input type="file" name="document" class="form-control form-control-sm" :class="{ 'is-invalid': errors.document }">
                      <small class="text-danger" v-if="errors.supplier_id">{{ errors.supplier_id[0] }}</small>
                  </div>
                </div>
              </div>
              <hr>
              
              <div class="row p-2">               
                <div class="col-6">
                  <div class="form-group">
                    Select Product
                    <input type="text" v-model="stock_in_challan" class="form-control form-control-sm" :class="{ 'is-invalid': errors.stock_in_challan }">
                    <small class="text-danger" v-if="errors.stock_in_challan">{{ errors.stock_in_challan[0] }}</small>
                  </div>
                </div>
              </div>

              <div class="row">
                <table class="list-table">
                   <thead>
                     <tr>
                        <td colspan="9">Product Details Table</td>
                     </tr>
                      <tr>                       
                        <td>Supplier</td>                   
                        <td>Product Name</td>
                        <td>Quantity</td>
                        <td>Net Unit Cost</td>
                        <td>Discount%</td>
                        <td>Discount Value</td>
                        <td>Total</td>
                        <td>Actions</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(product_detail, index) in form.product_detail_list" :key="index">
                        <td>
                          <select v-model="product_detail.supplier_id" class="form-control form-control-sm" :class="{ 'is-invalid': errors.supplier_id }">
                            <option value="">Please select a supplier</option>
                            <option v-for="(supplier, key) in suppliers" :value="supplier.id" :key="key">{{ supplier.name }}</option>
                          </select>
                        </td>
                        <td>
                          <input type="text" v-model="product_detail.quantity" class="form-control form-control-sm text-right" :class="{ 'is-invalid': errors.quantity }" placeholder="Enter quantity">
                          <small class="text-danger" v-if="errors.quantity">{{ errors.quantity[0] }}</small>
                          <!-- <select v-model="product_detail.product_id" @change="getProductInfo($event)" class="form-control form-control-sm" :class="{ 'is-invalid': errors.product_id }">
                            <option value="">Please select a product</option>
                            <option v-for="(product, key) in product_detail.products" :value="product.id" :key="key">{{ product.name }}</option>
                          </select> -->
                        </td>
                        <td class="text-center">
                          <input type="number" v-model="product_detail.quantity" class="form-control form-control-sm text-right" :class="{ 'is-invalid': errors.quantity }" placeholder="Enter quantity">
                          <small class="text-danger" v-if="errors.quantity">{{ errors.quantity[0] }}</small>
                        </td>
                        <td class="text-center">
                          <!-- {{ product_detail.net_unit_cost }} -->
                          <input type="number" v-model="product_detail.net_unit_cost" class="form-control form-control-sm text-right" :class="{ 'is-invalid': errors.net_unit_cost }" placeholder="Enter net unit cost">
                          <small class="text-danger" v-if="errors.net_unit_cost">{{ errors.net_unit_cost[0] }}</small>
                        </td>
                        <td>
                          <div class="input-group col-xs-12">
                            <input type="number" v-model="product_detail.discount_percentage" class="form-control form-control-sm text-right" :class="{ 'is-invalid': errors.discount_percentage }" placeholder="Discount percentage">
                            <span class="input-group-append">
                                <button class="btn btn-sm btn-primary" type="button">%</button>
                              </span>
                            <small class="text-danger" v-if="errors.discount_percentage">{{ errors.discount_percentage[0] }}</small>
                          </div>
                        </td>
                        <td class="text-right">
                          <!-- {{ product_detail.discount_value }} -->
                          <input type="number" v-model="product_detail.discount_value" disabled class="form-control form-control-sm text-right" :class="{ 'is-invalid': errors.discount_value }" placeholder="Discount value">
                          <small class="text-danger" v-if="errors.discount_value">{{ errors.discount_value[0] }}</small>
                        </td>
                        <td class="text-right">
                          <!-- {{ product_detail.product_wise_total }} -->
                          <input type="number" v-model="product_detail.product_wise_total" disabled class="form-control form-control-sm text-right" :class="{ 'is-invalid': errors.product_wise_total }" placeholder="Enter product_wise_total">
                          <small class="text-danger" v-if="errors.product_wise_total">{{ errors.product_wise_total[0] }}</small>
                        </td>
                        <td class="text-center">
                          <button type="button" class="btn btn-xs btn-success btn-rounded btn-fw" @click="addNewRow(product_detail)"><i class="mdi mdi-plus"></i></button>
                          <button type="button" class="btn btn-xs btn-danger btn-rounded btn-fw" @click="deleteRow(index, product_detail)"><i class="mdi mdi-delete"></i></button>
                        </td>
                      </tr>
                      <!-- 
                      <tr class="font-weight-bold">
                        <td colspan="6" class="text-right">Total Cost Without Tax</td>
                        <td class="text-right">{{ total_cost_without_tax }}</td>
                      </tr>  
                      <tr>
                        <td colspan="5" class="text-right">
                          Tax 
                        </td>
                        <td>
                          <div class="input-group col-xs-12">
                            <input type="number" v-model="form.tax_percentage" class="form-control form-control-sm text-right" :class="{ 'is-invalid': errors.tax_percentage }" placeholder="Tax Percentage">
                            <span class="input-group-append">
                              <button class="btn btn-sm btn-primary" type="button">%</button>
                            </span>
                            <small class="text-danger" v-if="errors.tax_percentage">{{ errors.tax_percentage[0] }}</small>
                          </div>
                        </td>
                        <td class="text-right">{{ total_value }}</td>
                      </tr>  -->
                      <tr class="font-weight-bold">
                        <td colspan="6" class="text-right">Grand Total</td>
                        <td class="text-right">{{ total_cost_with_tax }}</td>
                      </tr>
                    </tbody>
                </table>
              </div>
              <div class="row p-2">               
                <div class="col-12">                  
                  <div class="form-group">
                    <label>Note</label>
                    <textarea v-model="form.note" class="form-control form-control-sm" :class="{ 'is-invalid': errors.note }" placeholder="Enter note"></textarea>
                  </div>
                  <small class="text-danger" v-if="errors.note">{{ errors.note[0] }}</small>
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

    <!-- supplier Modal -->
    <modal name="supplierModal" :width="795" :height="375">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">New supplier</h5>
            <button type="button" class="close" @click="closeModal('supplierModal')">
              <span aria-hidden="true" >&times;</span>
            </button>
          </div>
          <form @submit.prevent="supplierStore()">
            <div class="modal-body">
              <div class="row p-2">
                <div class="col-4">
                  <div class="form-group">
                    <label>Supplier Name</label>
                    <input type="text" v-model="supplier_form.name" class="form-control form-control-sm" :class="{ 'is-invalid': supplier_errors.name }" placeholder="Enter supplier name">
                    <small class="text-danger" v-if="supplier_errors.name">{{ supplier_errors.name[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Responsible Person</label>
                    <input type="text" v-model="supplier_form.responsible_person" class="form-control form-control-sm" :class="{ 'is-invalid': supplier_errors.responsible_person }" placeholder="Enter responsible person">
                    <small class="text-danger" v-if="supplier_errors.responsible_person">{{ supplier_errors.responsible_person[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Mobile No.</label>
                    <input type="text" v-model="supplier_form.mobile_no" class="form-control form-control-sm" :class="{ 'is-invalid': supplier_errors.mobile_no }" placeholder="Enter mobile no">
                    <small class="text-danger" v-if="supplier_errors.mobile_no">{{ supplier_errors.mobile_no[0] }}</small>
                  </div>
                </div>
              </div>
              <div class="row p-2">
                <div class="col-4">
                  <div class="form-group">
                    <label>Telephone No.</label>
                    <input type="text" v-model="supplier_form.telephone_no" class="form-control form-control-sm" :class="{ 'is-invalid': supplier_errors.telephone_no }" placeholder="Enter telephone no">
                    <small class="text-danger" v-if="supplier_errors.telephone_no">{{ supplier_errors.telephone_no[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>E-mail</label>
                    <input type="text" v-model="supplier_form.email" class="form-control form-control-sm" :class="{ 'is-invalid': supplier_errors.email }" placeholder="Enter supplier email">
                    <small class="text-danger" v-if="supplier_errors.email">{{ supplier_errors.email[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Address</label>
                    <input type="text" v-model="supplier_form.address" class="form-control form-control-sm" :class="{ 'is-invalid': supplier_errors.address }" placeholder="Enter supplier address">
                    <small class="text-danger" v-if="supplier_errors.address">{{ supplier_errors.address[0] }}</small>
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
</template>

<style scoped>
  .modal-dialog {
    max-width: 750px !important;
  }
  .btn i {
    font-size: 10px !important;
  }
</style>
<script>
  import axios from '../../axios';
  import "vue-loading-overlay/dist/vue-loading.css";
  import Loading from 'vue-loading-overlay';
  
  export default {
    data() {
      return {
        errors: [],
        form: new Form({
          name: '',
          code: '',
          unit: '',
          tax: '',
          sale_unit: '',
          total_cost_without_tax: '',
          stock_in_status: 1,
          product_detail_list: [{
            supplier_id: '',
           // category_id: '',
            product_id: '',           
            quantity: 0,
            product_wise_total: 0,
            net_unit_cost: 0,
            discount_percentage: '',
            discount_value: 0,
          }],
          tax_percentage: '',
          percentage_value: '',
          profit_margin: '',
          sale_value: '',
          note: ''
        }),        
        suppliers: [],
        supplier_errors: [],
        supplier_form: new Form({
          name: '',
          address: '',
          mobile_no: '',
          telephone_no: '',
          responsible_person: '',
          email: '',
        }),
        categories: [],
        products: [],
        percentage_dropdowns: []
      }
    },
    mounted() {
      this.supplierDropdowndata();
      this.productDropdowndata();
      this.getPrcentageValueDropdownData();

      if (this.$route.params.id) {
        this.getProductInfo(this.$route.params.id);
      }
    },
    watch: {     
      search_key: function() {
        this.searchProducts();
      },
      'form.product_detail_list': {
        handler (newValue, oldValue) {
          newValue.forEach((product_detail) => {
            var product_wise_total = product_detail.quantity * product_detail.net_unit_cost;
            var discount_value = this.calculateDiscount (product_wise_total, product_detail.discount_percentage);
            product_detail.discount_value = discount_value;
            product_detail.product_wise_total = product_wise_total - discount_value;

           // product_detail.product_id = product_detail.product_id;
          })
        },
        deep: true
      }
    },
    computed: {      
      total_cost_without_tax: function() {
        var sum = 0;
        this.form.product_detail_list.forEach(product_detail => {
          sum += product_detail.product_wise_total;
        });
        return sum;
      },
      total_value: function() {
        return this.total_cost_without_tax * (this.form.tax_percentage / 100);
      },
      total_cost_with_tax: function() {
        return this.total_value + this.total_cost_without_tax;
      }
    },
    methods: {
      getPrcentageValueDropdownData() {
        let percentage_dropdowns = new Array();
        for (let index = 0; index <= 100; index++) {
          percentage_dropdowns.push(index);
        }
        this.percentage_dropdowns = percentage_dropdowns;
      },
      calculateDiscount(product_wise_total, discount_percentage) {
        var discount_value = product_wise_total * (discount_percentage / 100);
        return discount_value.toFixed(2);
      },
      closeModal(modalName) {
        this.$modal.hide(modalName);
      },
      addNewRow() {
        this.form.product_detail_list.push({
          supplier_id: '',
          category_id: '',         
          product_id: '',
          products: [],
          quantity: 0,
          net_unit_cost: 0,
          discount: 0,
        });
      },
      /* addNewRow(product_detail) {
        console.log(this.form.product_detail_list);
        this.form.product_detail_list.push(product_detail);
      }, */
      deleteRow(index, item) {             
        if (this.form.product_detail_list.length > 1) {
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
                    var idx = this.form.product_detail_list.indexOf(index);
                    this.form.product_detail_list.splice(idx, 1);
                  //  this.calculateTotal();
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
        } else {
          alert('You can not delete this')
        }
      },      
      getProductInfo(event) {
        /* const loader = this.$loading.show({
          container: this.$refs.attendanceTable,
          canCancel: true,
          loader: 'bars'
        })
        axios.get('products/' + event.target.value)
          .then((res) => {
            this.product_detail_list.product = res.data;
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            loader.hide();
          }); */
      },      
      store() {
        this.errors = [];
        const loader = this.$loading.show({
          container: this.$refs.supplierContainer,
          canCancel: true,
          loader: 'bars'
        })
 
        axios.post('/stock-ins', this.form)
          .then(response => {           
            if (response.status == 200) {           
              this.$snotify.success('Successfully created', 'Success');
              this.$router.push({name: 'stock-ins'});
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
      supplierDropdowndata() {
        axios.get('/supplier-dropdown-data')
          .then((res) => {
              this.suppliers = res.data;
          })
          .catch((error) => {
              console.log(error);
          })
      },
      productDropdowndata() {
        axios.get('/product-dropdown-data')
          .then((res) => {
            this.products = res.data;
          })
          .catch((error) => {
              console.log(error);
          })
      },
      supplierModal()
      {
        this.supplier_form.reset();
        this.supplier_form.clear();
        this.$modal.show('supplierModal');
      },
      supplierStore() {
        this.supplier_errors = [];
        const loader = this.$loading.show({
           container: this.$refs.supplierContainer,
           canCancel: true,
           loader: 'bars'
        })
 
        axios.post('/suppliers', this.supplier_form)
          .then(response => {
            if (response.status == 200) {
              this.supplierDropdowndata();
              this.$snotify.success('Successfully created', 'Success');
              this.$modal.hide('supplierModal');
              this.loader.hide();
            } else {
              this.$snotify.error('Something went worng', 'error');
            }
          })
          .catch( errors => {
            this.supplier_errors = errors.response.data.errors;
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