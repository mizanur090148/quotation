<template>
  <div class="content-wrapper">
    <div class="row" id="printArea">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title no-print text-center">Sale Invoice
            </h4>        
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <td colspan="5" class="text-center">
                      <b>Cool Way Building Materials L.L.C</b><br/>
                        Address : Musaffa, Sanaya M/10, Abu Dhabi, UAE.<br/>
                        Email : coolway2021@gmail.com<br/>
                        Phone : +971 566311501 & +971 562475259	
                    </td>
                  </tr>
                  <tr>
                    <td><b>Invoice No.:</b> {{ sale.invoice_number }} </td>
                    <td><b>Customer Name:</b> {{ sale.customer.name }} </td>
                    <td><b>Date:</b> {{ sale.sale_date_time }} </td>
                    <td><b>Payment:</b> {{ (sale.payment_status == 0) ? 'Due' : 'Cash' }}</td>
                    <td class="print-td"><a href="#" class="text-right" @click="printSection"><i class="mdi mdi-printer"></i></a></td>
                  </tr>                  
                </thead>
              </table>

              <table class="list-table table table-bordered">
                  <thead>
                    <tr>
                      <td colspan="8">Product Details</td>
                    </tr>
                    <tr class="text-center">             
                      <td>Product Name</td>
                      <td>Product Code</td>
                      <td>Quantity</td>
                      <td>Unit Price</td>
                      <td>Discount(%)</td>
                      <td>Tax</td>
                      <td>Total</td>       
                    </tr>
                  </thead>
                  <tbody v-if="product_detail_list.length">
                    <tr v-for="(product_detail, index) in product_detail_list" :key="index">                     
                      <td class="text-left">
                        {{ product_detail.product.name }}
                      </td>
                      <td class="text-left">                    
                        {{ product_detail.product.code }}
                      </td>
                      <td class="text-right">
                        {{ product_detail.quantity }}                        
                      </td>
                      <td class="text-right">
                        {{ product_detail.sale_price }}
                      </td>
                      <td class="text-right">
                        {{ product_detail.discount_percentage }}
                      </td>
                      <td class="text-right">
                        {{ product_detail.tax_value }}
                      </td>
                      <td class="text-right">
                        {{ Math.round(product_detail.product_wise_total) }}
                      </td>                      
                    </tr>
                    <tr class="font-weight-bold">
                      <td colspan="6" class="text-right">Total Product Cost</td>
                      <td class="text-right">{{ sale.total_product_price }}</td>
                    </tr>
                    <tr class="font-weight-bold">
                      <td colspan="6" class="text-right">Shipping Cost</td>
                      <td class="text-right">{{ sale.delivery_cost }}</td>
                    </tr>
                    <tr class="font-weight-bold">
                      <td colspan="6" class="text-right">Others Cost</td>
                      <td class="text-right">{{ sale.others_cost }}</td>
                    </tr>
                    <tr class="font-weight-bold">
                      <td colspan="6" class="text-right grand">Grand Total</td>
                      <td class="text-right grand">{{ sale.invoice_wise_total_price }}</td>
                    </tr>
                  </tbody>
              </table>
            </div>
            <div class="row p-2">
              <div class="col-md-12">
                <b> Note</b>
                <hr class="hr">
                <p>
                  {{ sale.note }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <vue-snotify></vue-snotify>
  </div>
</template>

<style>
  .grand {
    font-size: 17px !important;
  }
  hr {
    margin-top: 0rem !important;
    margin-bottom: 0.2rem !important;
  }
  .print-td {
    padding-right: 0px !important;
  }
</style>
<script>
  import axios from '../../axios';
  import "vue-loading-overlay/dist/vue-loading.css";
  import Loading from 'vue-loading-overlay';
  
  export default {
    data() {
      return {  
        sale: '',    
        product_detail_list: []
      }
    },     
    mounted() {
      this.getStockInChallanInfo(this.$route.params.id)
    },    
    methods: {
      printSection() {
        this.$htmlToPaper("printArea");
      },
      getStockInChallanInfo(saleId) {
        const loader = this.$loading.show({
          container: this.$refs.attendanceTable,
          canCancel: true,
          loader: 'bars'
        })

        axios.get('sale-invoice/' + saleId)
          .then((res) => {
            this.sale = res.data;
            this.product_detail_list = res.data.sales;
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            loader.hide();
          });
      }
    }    
  }
</script>