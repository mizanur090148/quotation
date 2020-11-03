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
                    <label>Customer</label> 
                    <div class="input-group col-xs-12">
                      <select v-model="form.customer_id" class="form-control form-control-sm" :class="{ 'is-invalid': errors.customer_id }">
                        <option value="">Please select a customer</option>
                        <option v-for="(customer, key) in customers" :value="customer.id" :key="key">{{ customer.name }}</option>
                      </select>
                      <span class="input-group-append">
                        <button class="btn btn-sm btn-primary" type="button" @click="customerModal">+</button>
                      </span>
                    </div>
                    <small class="text-danger" v-if="errors.customer_id">{{ errors.customer_id[0] }}</small>
                  </div>
                </div>
                <div class="col-3">
                  <div class="form-group">
                    <label>Invoice Number</label>
                    <input type="text" v-model="form.invoice_number" class="form-control form-control-sm" disabled :class="{ 'is-invalid': errors.invoice_number }">
                    <small class="text-danger" v-if="errors.invoice_number">{{ errors.invoice_number[0] }}</small>
                  </div>
                </div>
                <div class="col-3">
                  <div class="form-group">
                    <label>Status</label>
                    <div class="input-group col-xs-12">
                      <select v-model="form.payment_status" class="form-control form-control-sm" :class="{ 'is-invalid': errors.payment_status }">                      
                        <option :value="0" :key="0">Due</option>
                        <option :value="1" :key="1">Cash</option>
                      </select>
                    </div>
                    <small class="text-danger" v-if="errors.payment_status">{{ errors.payment_status[0] }}</small>
                  </div>
                </div>
              </div>
              <hr>              
              <div class="row p-2">               
                <div class="col-6">
                  <div class="form-group">
                    Search & Select Product
                    <input type="text" v-model="search_product" v-on:keyup="autoComplete" class="form-control form-control-sm" :class="{ 'is-invalid': errors.product }">
                    <small class="text-danger" v-if="errors.product">{{ errors.product[0] }}</small>                    
                    <div class="panel-footer" v-if="products.length">
                      <ul class="list-group">
                        <a :key="key" href="#" class="list-group-item" v-for="(product, key) in products" @click="getProductInfo(product.id)">{{ product.name }}</a>
                      </ul>
                    </div>
                  </div>                 
                </div>
              </div>

              <div class="row">
                <table class="list-table">
                   <thead>
                     <tr>
                        <td colspan="9">Ordered Product Details</td>
                     </tr>
                      <tr>             
                        <td>Product Name</td>
                        <td>Product Code</td>
                        <td>Quantity</td>
                        <td>Unit Price</td>
                        <td>Discount</td>
                        <td>Tax(5%)</td>
                        <td>Total</td>
                        <td>Actions</td>
                      </tr>
                    </thead>
                    <tbody v-if="form.product_detail_list.length">
                      <tr v-for="(product_detail, index) in form.product_detail_list" :key="index">
                        <td>
                          {{ product_detail.name ? product_detail.name : product_detail.product.name }}
                        </td>
                        <td>
                          {{ product_detail.code ? product_detail.name : product_detail.product.code }}
                        </td>
                        <td class="text-center">
                          <div class="input-group col-xs-12">
                            <input type="number" style="width:70px !important;" v-model="product_detail.quantity" class="form-control form-control-sm" :class="{ 'is-invalid': errors.quantity }" placeholder="Enter quantity">
                            <span class="input-group-append">
                              <button class="btn btn-sm btn-primary" type="button">Pcs</button>
                            </span>
                            <small class="text-danger" v-if="errors.quantity">{{ errors.quantity[0] }}</small>
                          </div>
                        </td>
                        <td class="text-center">
                          {{ product_detail.sale_price }}
                        </td>
                        <td>
                          <div class="input-group col-xs-12">
                            <input type="number" style="width:60px !important;" v-model="product_detail.discount_percentage" class="form-control form-control-sm text-right" :class="{ 'is-invalid': errors.discount_percentage }" placeholder="Discount percentage">
                            <span class="input-group-append">
                                <button class="btn btn-sm btn-primary" type="button">%</button>
                              </span>
                            <small class="text-danger" v-if="errors.discount_percentage">{{ errors.discount_percentage[0] }}</small>
                          </div>
                        </td>
                        <td class="text-center">
                          {{ product_detail.tax_percentage }}%
                        </td>
                        <td class="text-center">
                          {{ product_detail.product_wise_total }}
                        </td>
                        <td class="text-center">
                          <button type="button" class="btn btn-xs btn-danger btn-rounded btn-fw" @click="deleteRow(index, product_detail)"><i class="mdi mdi-delete"></i></button>
                        </td>
                      </tr>
                      <tr class="font-weight-bold">
                        <td colspan="6" class="text-right">Grand Total</td>
                        <td class="text-center">{{ Math.round(total_cost) }}</td>
                      </tr>
                    </tbody>
                </table>
              </div>
              <div class="row p-4">
                <div class="col-3">
                  <div class="form-group">
                    <label>Delivery Cost</label>
                    <input type="number" v-model="form.delivery_cost" class="form-control form-control-sm" :class="{ 'is-invalid': errors.delivery_cost }">
                    <small class="text-danger" v-if="errors.delivery_cost">{{ errors.delivery_cost[0] }}</small>
                  </div>
                </div>
                <div class="col-3">
                  <div class="form-group">
                    <label>Other's Cost</label>
                    <input type="number" v-model="form.others_cost" class="form-control form-control-sm" :class="{ 'is-invalid': errors.others_cost }">
                    <small class="text-danger" v-if="errors.others_cost">{{ errors.others_cost[0] }}</small>
                  </div>
                </div>
                <div class="col-6">                  
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
                  <router-link to="/home">
                    <button class="btn btn-sm btn-danger mr-2">Cancel</button>
                  </router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>      
    </div>

    <!-- customer Modal -->
    <modal name="customerModal" :width="795" :height="375">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">New Customer</h5>
            <button type="button" class="close" @click="closeModal('customerModal')">
              <span aria-hidden="true" >&times;</span>
            </button>
          </div>
          <form @submit.prevent="customerStore()">
            <div class="modal-body">
              <div class="row p-2">
                <div class="col-4">
                  <div class="form-group">
                    <label>Customer Name</label>
                    <input type="text" v-model="customer_form.name" class="form-control form-control-sm" :class="{ 'is-invalid': customer_errors.name }" placeholder="Enter customer name">
                    <small class="text-danger" v-if="customer_errors.name">{{ customer_errors.name[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>TRN No.</label>
                    <input type="text" v-model="customer_form.trn_no" class="form-control form-control-sm" :class="{ 'is-invalid': customer_errors.trn_no }" placeholder="Enter mobile no">
                    <small class="text-danger" v-if="customer_errors.trn_no">{{ customer_errors.trn_no[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Attention Name</label>
                    <input type="text" v-model="customer_form.attention_name" class="form-control form-control-sm" :class="{ 'is-invalid': customer_errors.attention_name }" placeholder="Enter responsible person">
                    <small class="text-danger" v-if="customer_errors.attention_name">{{ customer_errors.attention_name[0] }}</small>
                  </div>
                </div>                
              </div>
              <div class="row p-2">
                <div class="col-4">
                  <div class="form-group">
                    <label>Telephone No.</label>
                    <input type="text" v-model="customer_form.telephone_no" class="form-control form-control-sm" :class="{ 'is-invalid': customer_errors.telephone_no }" placeholder="Enter telephone no">
                    <small class="text-danger" v-if="customer_errors.telephone_no">{{ customer_errors.telephone_no[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>E-mail</label>
                    <input type="text" v-model="customer_form.email" class="form-control form-control-sm" :class="{ 'is-invalid': customer_errors.email }" placeholder="Enter customer email">
                    <small class="text-danger" v-if="customer_errors.email">{{ customer_errors.email[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Address</label>
                    <input type="text" v-model="customer_form.address" class="form-control form-control-sm" :class="{ 'is-invalid': customer_errors.address }" placeholder="Enter customer address">
                    <small class="text-danger" v-if="customer_errors.address">{{ customer_errors.address[0] }}</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-md-center">           
              <div class="form-group">
                <button type="submit" class="btn btn-sm btn-primary mr-2">Submit</button>
                <button type="button" class="btn btn-sm btn-danger mr-2" @click="closeModal('customerModal')">Close</button>
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
/*   .btn i {
    font-size: 10px !important;
  } */
</style>
<script>
  
  import axios from '../../axios';
  import "vue-loading-overlay/dist/vue-loading.css";
  import Loading from 'vue-loading-overlay';
    
  export default {
    data() {
      return {
        errors: [],
        customers: [],
        form: new Form({  
          customer_id: '',        
          invoice_number: '',
          payment_status: 1,
          stock_in_document: '',
          delivery_cost: 0,
          others_cost: 0,
          note: '',
          created_by: 1,
          outlet_id: 1,
          product_detail_list: []
        }),
        customers: [],
        customer_errors: [],
        customer_form: new Form({
          name: '',
          address: '',
          mobile_no: '',
          telephone_no: '',
          attention_name: '',
          email: '',
        }),
        products: [],
        product: null,
        search_product: ''
      }
    },
    mounted() {
      this.customerDropdowndata();      
      if (this.$route.params.id) {
        this.getSaleInfo(this.$route.params.id);
      } else {
        this.getSaleInvoiceNo();
      }
    },
    watch: {
      'form.product_detail_list': {
        handler (newValue, oldValue) {
          newValue.forEach((product_detail) => {
            let tax_value = product_detail.tax_value * product_detail.quantity;
            let product_wise_total = product_detail.quantity * product_detail.sale_price;
            let discount_value = this.calculateDiscount (product_wise_total, product_detail.discount_percentage);           
            product_wise_total = product_wise_total + tax_value - discount_value;         
            product_detail.product_wise_total = Math.round(product_wise_total);
          })
        },
        deep: true
      }
    },
    computed: {
      total_cost: function() {
        var sum = 0;
        this.form.product_detail_list.forEach(product_detail => {
          sum += parseFloat(product_detail.product_wise_total);
        });
        return sum.toFixed(2);
      }      
    },
    methods: {
      getSaleInvoiceNo() {
        this.form.invoice_number = Date.now();
      },
      autoComplete() {
        this.products = [];
        if(this.search_product.length > 0) {
          axios.get('/search-product-in-purchase', { params: {search_product: this.search_product}})
            .then(response => {
              this.products = response.data;
            })
            .catch(e => {
              console.log(e);
            })
        }
      },      
      getProductInfo: function(productId) {
        this.search_product = '';
        this.products = [];

        axios.get('products/' + productId)
          .then((res) => {
            this.product = res.data;    
            this.form.product_detail_list.push({
              name: this.product.name,
              code: this.product.code,
              product_id: this.product.id,
              quantity: 1,
              sale_price: this.product.sale_price,
              tax_percentage: this.product.tax_percentage,
              tax_value: this.product.sale_tax_value,
              discount_percentage: 0,
              product_wise_total: this.product.sale_price * 1.
            });
          })
          .catch((error) => {
            console.log(error);
          })
      },      
      calculateDiscount(product_wise_total, discount_percentage) {
        return product_wise_total * (discount_percentage / 100);
      },
      closeModal(modalName) {
        this.$modal.hide(modalName);
      },     
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
           
      store() {
        this.errors = [];
        const loader = this.$loading.show({
          container: this.$refs.customerContainer,
          canCancel: true,
          loader: 'bars'
        }) 
        axios.post('/sales', this.form)
          .then(response => {
            if (response.status == 200) {
              this.$snotify.success('Successfully created', 'Success');
              this.$router.push({name: 'sales'});
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
      getSaleInfo(saleId) {
        axios.get('sales/' + saleId)
          .then((res) => {
            this.form = res.data;          
            this.form.product_detail_list = res.data.sales;
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            //loader.hide();
          });
      },
      customerDropdowndata() {
        axios.get('/customer-dropdown-data')
          .then((res) => {
              this.customers = res.data;
          })
          .catch((error) => {
              console.log(error);
          })
      },     
      customerModal()
      {
        this.customer_form.reset();
        this.customer_form.clear();
        this.$modal.show('customerModal');
      },
      customerStore() {
        this.customer_errors = [];
        const loader = this.$loading.show({
          container: this.$refs.customerContainer,
          canCancel: true,
          loader: 'bars'
        })
 
        axios.post('/customers', this.customer_form)
          .then(response => {
            if (response.status == 200) {
              this.customerDropdowndata();
              this.$snotify.success('Successfully created', 'Success');
              this.$modal.hide('customerModal');
              this.loader.hide();
            } else {
              this.$snotify.error('Something went worng', 'error');
            }
          })
          .catch( errors => {
            this.customer_errors = errors.response.data.errors;
          })
          .finally(e => {
            loader.hide();
          })
      }
    }    
  }
</script>