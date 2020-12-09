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
                    <label>Purchase Invoice</label>
                    <input type="text" v-model="form.purchase_invoice" class="form-control form-control-sm" disabled :class="{ 'is-invalid': errors.purchase_invoice }">
                    <small class="text-danger" v-if="errors.purchase_invoice">{{ errors.purchase_invoice[0] }}</small>
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
                    <label>Supplier</label> 
                    <div></div>                     
                    <button class="btn btn-sm btn-primary" type="button" @click="supplierModal">Add Supplier</button>
                  </div>
                </div>
                <!-- <div class="col-3">
                  <div class="form-group">
                    <label>Stock In Document</label>
                      <input type="file" name="document" class="form-control form-control-sm" :class="{ 'is-invalid': errors.document }">
                      <small class="text-danger" v-if="errors.document">{{ errors.document[0] }}</small>
                  </div>
                </div> -->
              </div>
              <hr>              
              <div class="row p-2">               
                <div class="col-6">
                  <div class="form-group">
                    <label>&nbsp; Search & Select Product</label>
                    <input type="text" v-model="search_product" v-on:keyup="autoComplete" class="form-control form-control-sm product-seach" placeholder="Search product">
                    <small class="text-danger" v-if="errors.product">{{ errors.product[0] }}</small>                    
                    <div class="panel-footer" v-if="products.length">
                      <ul class="list-group">
                        <a :key="key" href="#" class="list-group-item" v-for="(product, key) in products" @click="getProductInfo(product.id)">{{ product.name }}</a>
                      </ul>
                    </div>
                  </div>                 
                </div>
              </div>

              <div class="row p-2">
                <div class="col-12">
                  <table class="list-table table-bordered">
                    <thead>
                      <tr>
                        <td colspan="9">Product Details Table</td>
                      </tr>
                      <tr>
                        <td>Supplier</td>
                        <td>Product Name</td>
                        <td>Product Code</td>
                        <td>Quantity</td>
                        <td>Unit Cost</td>
                        <td>Discount(%)</td>
                        <td>Tax(%)</td>
                        <td>Product Total</td>
                        <td>Actions</td>
                      </tr>
                    </thead>
                    <tbody v-if="form.product_detail_list.length">
                      <tr v-for="(product_detail, index) in form.product_detail_list" :key="index">
                        <td>
                          <select v-model="product_detail.supplier_id" required class="form-control form-control-sm" :class="{ 'is-invalid': errors.supplier_id }">
                            <option value="">Please select a supplier</option>
                            <option v-for="(supplier, key) in suppliers" :value="supplier.id" :key="key">{{ supplier.name }}</option>
                          </select>
                        </td>
                        <td class="text-left">
                          {{ product_detail.name ? product_detail.name : product_detail.product.name }}
                        </td>
                        <td class="text-left">                    
                          {{ product_detail.code ? product_detail.code : product_detail.product.code }}
                        </td>
                        <td class="text-center">
                          <div class="input-group col-xs-12">
                            <input type="number" style="width:70px !important;" v-model="product_detail.quantity" class="form-control form-control-sm text-right" :class="{ 'is-invalid': errors.quantity }" placeholder="Enter quantity">
                            <span class="input-group-append">
                              <button class="btn btn-sm btn-primary" type="button">
                                <span v-if="product_detail.product_unit">Pcs</span>
                                <span v-else>Dzn</span>
                              </button>
                            </span>
                            <small class="text-danger" v-if="errors.quantity">{{ errors.quantity[0] }}</small>
                          </div>
                        </td>
                        <td class="text-right">
                          {{ product_detail.purchase_price ? product_detail.purchase_price : product_detail.product.purchase_price }}
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
                        <td>                     
                          {{ product_detail.tax_percentage }}%
                        </td>
                        <td class="text-right">
                          {{ product_detail.product_wise_total }}
                        </td>
                        <td class="text-right">
                          <button type="button" class="btn btn-xs btn-danger btn-rounded btn-fw" @click="deleteRow(index, product_detail)"><i class="mdi mdi-delete"></i></button>
                        </td>
                      </tr>
                      <tr class="font-weight-bold">
                        <td colspan="7">Grand Total</td>
                        <td class="text-right">{{ total_cost }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="row p-2">
                <div class="col-3">
                  <div class="form-group">
                    <label>Shipping Cost</label>
                    <input type="text" v-model="form.shipping_cost" class="form-control form-control-sm text-right" :class="{ 'is-invalid': errors.shipping_cost }">
                    <small class="text-danger" v-if="errors.shipping_cost">{{ errors.shipping_cost[0] }}</small>
                  </div>
                </div>
                <div class="col-3">
                  <div class="form-group">
                    <label>Other's Cost</label>
                    <input type="text" v-model="form.others_cost" class="form-control form-control-sm text-right" :class="{ 'is-invalid': errors.others_cost }">
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

    <!-- supplier Modal -->
    <modal name="supplierModal" :width="795" :height="400">
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
                    <label>TRN No.</label>
                    <input type="text" v-model="supplier_form.trn_no" class="form-control form-control-sm" :class="{ 'is-invalid': supplier_errors.trn_no }" placeholder="Enter trn no">
                    <small class="text-danger" v-if="supplier_errors.trn_no">{{ supplier_errors.trn_no[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Attention Name</label>
                    <input type="text" v-model="supplier_form.responsible_person" class="form-control form-control-sm" :class="{ 'is-invalid': supplier_errors.responsible_person }" placeholder="Enter attention name">
                    <small class="text-danger" v-if="supplier_errors.responsible_person">{{ supplier_errors.responsible_person[0] }}</small>
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
                    <input type="text" v-model="supplier_form.email" class="form-control form-control-sm" :class="{ 'is-invalid': supplier_errors.email }" placeholder="Enter email">
                    <small class="text-danger" v-if="supplier_errors.email">{{ supplier_errors.email[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Address</label>
                    <input type="text" v-model="supplier_form.address" class="form-control form-control-sm" :class="{ 'is-invalid': supplier_errors.address }" placeholder="Enter address">
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

<script>  
  import axios from '../../axios';
  import "vue-loading-overlay/dist/vue-loading.css";
  import Loading from 'vue-loading-overlay';
    
  export default {
    data() {
      return {
        errors: [],
        form: new Form({          
          purchase_invoice: '',
          stock_in_status: 1,
          stock_in_document: '',
          shipping_cost: 0,
          others_cost: 0,
          note: '',
          created_by: 1,
          outlet_id: 1,
          product_detail_list: []
        }),

        suppliers: [],
        supplier_errors: [],
        supplier_form: new Form({
          name: '',
          trn_no: '',
          address: '',
          mobile_no: '',
          telephone_no: '',
          responsible_person: '',
          email: '',
        }),
        products: [],
        product: null,
        search_product: ''
      }
    },
    mounted() {
      this.supplierDropdowndata();      
      if (this.$route.params.id) {
        this.getStockInChallanInfo(this.$route.params.id);
      } else {
        this.getStockInChallan();
      }
    },
    watch: {
      'form.product_detail_list': {
        handler (newValue, oldValue) {
          newValue.forEach((product_detail) => {
            let tax_value = product_detail.tax_value * product_detail.quantity;
            let product_wise_total = product_detail.quantity * product_detail.purchase_price ? product_detail.purchase_price : product_detail.product.purchase_price;
            let discount_value = this.calculateDiscount (product_wise_total, product_detail.discount_percentage);            
            product_wise_total = product_wise_total + tax_value - discount_value;
            product_detail.product_wise_total = product_wise_total.toFixed(2);
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
      getStockInChallan() {
        this.form.purchase_invoice = Date.now();
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
        let lastSelectedSupplierId = this.lastSelectedSupplierId();

        axios.get('products/' + productId)
          .then((res) => {
            this.product = res.data;    
            this.form.product_detail_list.push({
              supplier_id: lastSelectedSupplierId,
              name: this.product.name,
              code: this.product.code,
              product_id: this.product.id,
              quantity: 1,            
              purchase_price: this.product.purchase_price,
              tax_percentage: this.product.tax_percentage,
              tax_value: this.product.purchase_tax_value,
              discount_percentage: 0,
              product_wise_total: this.product.purchase_price * 1.
            });
          })
          .catch((error) => {
            console.log(error);
          })
      },
      lastSelectedSupplierId() {
        let supplierId = '';
        let countLength = this.form.product_detail_list.length;
        if (countLength > 0) {
          --countLength;
          supplierId = this.form.product_detail_list[countLength].supplier_id;
        }
        return supplierId;
      },
      calculateDiscount(product_wise_total, discount_percentage) {
        var discount_value = product_wise_total * (discount_percentage / 100);
        return discount_value.toFixed(2);
      },
      closeModal(modalName) {
        this.$modal.hide(modalName);
      },     
      deleteRow(index, item) {
        if (this.form.product_detail_list.length > 1) {
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
          container: this.$refs.supplierContainer,
          canCancel: true,
          loader: 'bars'
        })
 
        axios.post('/stock-ins', this.form)
          .then(response => {
            if (response.status == 200) {
              this.$snotify.clear();
              this.$snotify.success('Successfully created', 'Success');
              this.$router.push({name: 'milons'});
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
      getStockInChallanInfo(stockInId) {
        axios.get('stock-ins/' + stockInId)
          .then((res) => {
            this.form = res.data;          
            this.form.product_detail_list = res.data.stock_ins;
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            //loader.hide();
          });
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
              this.$snotify.clear();
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
      }
    }    
  }
</script>



<style scoped>
  .modal-dialog {
    max-width: 750px !important;
  }
  .list-group-item {
    padding: 0.25rem 0.75rem;
    border-radius: 17px !important;
  }
  .text-right {
    padding-right: 6px !important
  }
  .text-left {
    padding-left: 5px !important
  }
</style>