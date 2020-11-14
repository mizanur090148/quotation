<template>
  <div class="content-wrapper">
    <div class="row justify-content-md-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Purchase Return</h4>
            <hr>
            <form class="forms-sample" @submit.prevent="store">
              <div class="row p-2">
                <div class="col-3">
                  <div class="form-group">
                    <label>Return Type</label>
                    <div class="input-group col-xs-12">
                      <select v-model="form.return_type" class="form-control form-control-sm" :class="{ 'is-invalid': errors.return_type }">                      
                        <option value="">Select return type</option>
                        <option :value="0" :key="0">Purchase</option>
                        <option :value="1" :key="1">Sale</option>
                      </select>
                    </div>
                    <small class="text-danger" v-if="errors.return_type">{{ errors.return_type[0] }}</small>
                  </div>
                </div>
                <div class="col-3">
                  <div class="form-group">
                    <label>Invoice No.</label> 
                    <div class="input-group col-xs-12">
                      <select v-model="form.invoice_no" class="form-control form-control-sm" :class="{ 'is-invalid': errors.invoice_no }">
                        <option value="">Please select a Invoice</option>
                        <option v-for="(invoice, key) in invoices" :value="invoice.id" :key="key">{{ invoice.purchase_invoice ? invoice.purchase_invoice :  invoice.invoice_number }}</option>
                      </select>
                      <span class="input-group-append">
                        <button class="btn btn-sm btn-primary" type="button" @click="customerModal">+</button>
                      </span>
                    </div>
                    <small class="text-danger" v-if="errors.invoice_no">{{ errors.invoice_no[0] }}</small>
                  </div>
                </div>               
              </div>
              <hr>

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
                          {{ product_detail.code ? product_detail.code : product_detail.product.code }}
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
                        <td class="text-center">{{ total_cost }}</td>
                      </tr>
                    </tbody>
                </table>
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
          return_type: '',
          invoice_no: '',
          product_detail_list: []
        })        
      }
    },
    mounted() {
      this.invoiceDropdowndata();      
    },

    methods: {
      invoiceDropdowndata() {
        axios.get('/get-invoice-dropdown')
          .then((res) => {
              this.invoices = res.data;
          })
          .catch((error) => {
              console.log(error);
          })
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
      }      
    }    
  }
</script>