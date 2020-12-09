<template>
  <div class="content-wrapper">
    <div class="row justify-content-md-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Purchase Return</h4>
            <hr>
            <form class="forms-sample" @submit.prevent="">
              <div class="row p-2">                
                <div class="col-3">
                  <div class="form-group">
                    <label>Invoice No.</label> 
                    <div class="input-group col-xs-12">
                      <select v-model="form.invoice_id" @change="getPurchaseInvoiceDetails" class="form-control form-control-sm" :class="{ 'is-invalid': errors.invoice_no }">
                        <option value="">Please select an Invoice</option>
                        <option v-for="(invoice, key) in invoices" :value="invoice.id" :key="key">{{ invoice.purchase_invoice }}</option>
                      </select>  
                    </div>
                    <small class="text-danger" v-if="errors.invoice_no">{{ errors.invoice_no[0] }}</small>
                  </div> 
                </div>
              </div>
            </form>
              <hr>
              <div class="row">
                <table class="list-table table-bordered" v-if="purchase_detail_list.length">
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
                        <td class="text-left">
                          {{ purchase_product.supplier.name }}
                        </td>
                        <td class="text-left">
                          {{ purchase_product.product.name }}
                        </td>
                        <td class="text-left">
                          {{ purchase_product.product.code }}
                        </td>
                        <td class="text-right">
                          {{ purchase_product.quantity }}
                        </td>
                        <td class="text-right">
                          {{ purchase_product.product.purchase_price }}
                        </td>
                        <td class="text-right">
                          {{ purchase_product.discount_percentage }}
                        </td>
                        <td class="text-right">
                          {{ purchase_product.tax_value }}
                        </td>
                        <td class="text-right">
                          {{ purchase_product.product_wise_total }}
                        </td>
                        <td class="text-center" v-if="purchase_detail_list.length > 1">
                          <button type="button" class="btn btn-xs btn-primary btn-rounded btn-fw" @click="returnProduct('single', purchase_product.id)">Return</button>
                        </td>
                      </tr>
                      <tr class="font-weight-bold">
                        <td colspan="7" class="text-right">Total Product Cost</td>
                        <td>{{ purchase_invoice.total_product_cost }}</td>
                      </tr>
                      <tr class="font-weight-bold">
                        <td colspan="7" class="text-right">Shipping Cost</td>
                        <td>{{ purchase_invoice.shipping_cost }}</td>
                      </tr>
                      <tr class="font-weight-bold">
                        <td colspan="7" class="text-right">Others Cost</td>
                        <td>{{ purchase_invoice.others_cost }}</td>
                      </tr>
                      <tr class="font-weight-bold">
                        <td colspan="7" class="grand text-right">Grand Total</td>
                        <td class="grand">{{ purchase_invoice.total_cost }}</td>
                      </tr>
                    </tbody>
                  </table>                  
              </div>
              <div class="text-right">
                <button type="submit" v-if="purchase_detail_list.length" class="btn btn-sm btn-primary"                    
                    @click="returnProduct('invoice', purchase_invoice.id)">Return Invoice</button>               
              </div>
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
        purchase_detail_list: [],      
        form: new Form({
          return_type: 0,        
          invoice_id: ''
        })        
      }
    },   
    mounted() {
      this.getPurchaseinvoicesDropdown();
    },
    methods: {
      getPurchaseinvoicesDropdown() {      
        axios.get('/get-purchase-invoices-dropdown')
          .then((res) => {
            this.invoices = res.data;
          })
          .catch((error) => {
            console.log(error);
          })
      },
      getPurchaseInvoiceDetails() {
        this.purchase_invoice = '';
        this.purchase_detail_list = [];
        if (!this.form.invoice_id) {
          return false;
        }
        const loader = this.$loading.show({
          container: this.$refs.attendanceTable,
          canCancel: true,
          loader: 'bars'
        })        
        axios.get('get-invoice-details-for-return/', { params: { return_type: this.form.return_type, invoice_id: this.form.invoice_id }})
          .then((res) => {           
            this.purchase_invoice = res.data;
            this.purchase_detail_list = res.data.stock_ins;
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            loader.hide();
          });
      },    
      returnProduct(type, delete_id) {
        this.$snotify.confirm(
          "Do you want to return this product?",
          {
            closeOnClick: false,
            pauseOnHover: true,
            buttons: [
              {
                text: "Yes",
                action: toast => {                  
                  axios.get('purchase-return/', { params: { delete_id: delete_id }})
                    .then((res) => {
                      if (res.status) {                        
                        if (type == 'invoice') {
                          this.purchase_detail_list = [];
                          this.getPurchaseinvoicesDropdown();
                        } else {
                          this.getPurchaseInvoiceDetails();
                        }
                        this.$snotify.clear();
                        this.$snotify.success('Successfully Returned', 'Success');
                      } else {
                        this.$snotify.error('Something went worng', 'error');
                      }
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

<style>
  .text-right {
    padding-right: 7px !important
  }
  .text-left {
    padding-left: 5px !important
  }
</style>