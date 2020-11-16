<template>
  <div class="content-wrapper">
    <div class="row justify-content-md-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Purchase/Sale Return</h4>
            <hr>
            <form class="forms-sample" @submit.prevent="">
              <div class="row p-2">
                <div class="col-3">
                  <div class="form-group">
                    <label>Return Type</label>
                    <div class="input-group col-xs-12">
                      <select v-model="form.return_type" @change="invoiceDropdowndata" class="form-control form-control-sm" :class="{ 'is-invalid': errors.return_type }">                      
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
                      <select v-model="form.invoice_id" @change="getInvoiceWiseDetails" class="form-control form-control-sm" :class="{ 'is-invalid': errors.invoice_no }">
                        <option value="">Please select a Invoice</option>
                        <option v-for="(invoice, key) in invoices" :value="invoice.id" :key="key">{{ invoice.purchase_invoice ? invoice.purchase_invoice : invoice.invoice_number }}</option>
                      </select>  
                    </div>
                    <small class="text-danger" v-if="errors.invoice_no">{{ errors.invoice_no[0] }}</small>
                  </div> 
                </div>
              </div>
            </form>
              <hr>
              <div class="row">
                <table class="list-table" v-if="purchase_detail_list.length">
                   <thead>
                      <tr>
                        <td colspan="9">Ordered Product Details</td>
                      </tr>
                      <tr>
                        <td>Supplier Name</td>
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
                    <tbody>
                      <tr v-for="(purchase_product, index) in purchase_detail_list" :key="index">
                        <td>
                          {{ purchase_product.supplier.name }}
                        </td>
                        <td class="text-left">
                          {{ purchase_product.product.name }}
                        </td>
                        <td class="text-left">
                          {{ purchase_product.product.code }}
                        </td>
                        <td>
                          {{ purchase_product.quantity }}
                        </td>
                        <td>
                          {{ purchase_product.product.purchase_price }}
                        </td>
                        <td>
                          {{ purchase_product.discount_percentage }}
                        </td>
                        <td>
                          {{ purchase_product.tax_value }}
                        </td>
                        <td>
                          {{ purchase_product.product_wise_total }}
                        </td>
                        <td class="text-center">
                          <button type="button" class="btn btn-xs btn-primary btn-rounded btn-fw" @click="returnProduct('single', purchase_product.id)">Return</button>
                        </td>
                      </tr>
                      <tr class="font-weight-bold">
                        <td colspan="7">Total Product Cost</td>
                        <td>{{ purchase_invoice.total_product_cost }}</td>
                      </tr>
                      <tr class="font-weight-bold">
                        <td colspan="7">Shipping Cost</td>
                        <td>{{ purchase_invoice.shipping_cost }}</td>
                      </tr>
                      <tr class="font-weight-bold">
                        <td colspan="7">Others Cost</td>
                        <td>{{ purchase_invoice.others_cost }}</td>
                      </tr>
                      <tr class="font-weight-bold">
                        <td colspan="7" class="grand">Grand Total</td>
                        <td class="grand">{{ purchase_invoice.total_cost }}</td>
                      </tr>
                    </tbody>
                  </table>
                  <table class="list-table" v-if="sale_detail_list.length">
                   <thead>
                      <tr>
                        <td colspan="8">Ordered Product Details</td>
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
                    <tbody>
                      <tr v-for="(sale_product, index) in sale_detail_list" :key="index">
                        <td class="text-left">
                          {{ sale_product.product.name }}
                        </td>
                        <td class="text-left">
                          {{ sale_product.product.code }}
                        </td>
                        <td class="text-right">
                          {{ sale_product.quantity }}
                        </td>
                        <td class="text-right">
                          {{ sale_product.sale_price }}
                        </td>
                        <td class="text-right">
                          {{ sale_product.discount_percentage }}
                        </td>
                        <td class="text-right">
                          {{ sale_product.tax_value }}
                        </td>
                        <td class="text-right">
                          {{ Math.round(sale_product.product_wise_total) }}
                        </td> 
                        <td class="text-center">
                          <button type="button" class="btn btn-xs btn-primary btn-rounded btn-fw" @click="returnProduct('single', sale_product.id)">Return</button>
                        </td>
                      </tr>
                      <tr class="font-weight-bold">
                        <td colspan="6" class="text-right">Total Product Cost</td>
                        <td class="text-right">{{ sale_invoice.total_product_price }}</td>
                      </tr>
                      <tr class="font-weight-bold">
                        <td colspan="6" class="text-right">Shipping Cost</td>
                        <td class="text-right">{{ sale_invoice.delivery_cost }}</td>
                      </tr>
                      <tr class="font-weight-bold">
                        <td colspan="6" class="text-right">Others Cost</td>
                        <td class="text-right">{{ sale_invoice.others_cost }}</td>
                      </tr>
                      <tr class="font-weight-bold">
                        <td colspan="6" class="text-right grand">Grand Total</td>
                        <td class="text-right grand">{{ sale_invoice.invoice_wise_total_price }}</td>
                      </tr>
                  </tbody>
                </table>
              </div>
             
              <div class="row p-2 col-sm-2 offset-sm-10">
                <div class="form-group text-right">
                  <button type="submit" v-if="purchase_invoice" class="btn btn-sm btn-primary mr-2 text-right"                    
                    @click="returnProduct('invoice', purchase_invoice.id)">Return All</button>
                  <button type="submit" v-if="sale_invoice" class="btn btn-sm btn-primary mr-2 text-right"                    
                    @click="returnProduct('invoice', sale_invoice.id)">Return All</button>
                  <!-- <router-link to="/home">
                    <button class="btn btn-sm btn-danger mr-2">Cancel</button>
                  </router-link> -->
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
        invoices: [],
        purchase_invoice: '',
        sale_invoice: '',
        purchase_detail_list: [],
        sale_detail_list: [],
        form: new Form({ 
          return_type: '',
          invoice_id: ''          
        })        
      }
    },   
    methods: {
      invoiceDropdowndata() {
        axios.get('/get-invoice-dropdown', { params: { return_type: this.form.return_type }})
          .then((res) => {
            this.purchase_detail_list = [];
            this.sale_detail_list = [];
            this.purchase_invoice = '';
            this.sale_invoice = '';
            this.invoices = [];
            this.invoices = res.data;           
          })
          .catch((error) => {
              console.log(error);
          })
      },
      getInvoiceWiseDetails() {
        const loader = this.$loading.show({
          container: this.$refs.attendanceTable,
          canCancel: true,
          loader: 'bars'
        })
        
        axios.get('get-invoice-details-for-return/', { params: { return_type: this.form.return_type, invoice_id: this.form.invoice_id }})
          .then((res) => {
            this.purchase_invoice = '';
            this.sale_invoice = '';
            this.purchase_detail_list = [];
            this.sale_detail_list = [];
            if (this.form.return_type == 0) {
              this.purchase_invoice = res.data;
              this.purchase_detail_list = res.data.stock_ins;
            } else {
              this.sale_invoice = res.data;          
              this.sale_detail_list = res.data.sales;
            }
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            loader.hide();
          });
      },    
      returnProduct(type, productId) {
        this.$snotify.confirm(
          "Do you want to return this product?",
          {
            closeOnClick: false,
            pauseOnHover: true,
            buttons: [
              {
                text: "Yes",
                action: toast => {                  
                  axios.get('purchase-or-sale-return-product/', { params: { return_type: this.form.return_type, type: type, product_id: productId }})
                    .then((res) => {
                      if (type == 'invoice') {
                        this.purchase_invoice = '';
                        this.sale_invoice = '';
                      }
                      this.purchase_detail_list = [];
                      this.sale_detail_list = [];
                      this.$snotify.clear();
                      this.$snotify.success('Successfully Returned', 'Success');
                      this.getInvoiceWiseDetails();
                    })
                    .catch((error) => {                     
                      this.$snotify.error('Something went worng', 'error');
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
      }
    }    
  }
</script>