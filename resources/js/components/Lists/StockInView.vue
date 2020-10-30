<template>
  <div class="content-wrapper">
    <div class="row" id="printArea">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title text-center">Stock In Challan</h4>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <td><b>Purchase Invoice:</b> {{ stock_challan.purchase_invoice }} </td>
                    <td><b>Purchase Date:</b> {{ stock_challan.purchase_date }} </td>
                    <td><b>Status:</b> {{ (stock_challan.stock_in_status == 0) ? 'Pending' : 'Received' }}</td>
                    <td class="print-td"><a href="#" class="text-right" @click="printSection"><i class="mdi mdi-printer"></i></a></td>
                  </tr>
                </thead>
              </table>
               
              <table class="list-table table table-bordered">
                  <thead>
                    <tr>
                      <td colspan="9">Product Details</td>
                    </tr>
                    <tr>                       
                      <td>Supplier</td>                   
                      <td>Product Name</td>
                      <td>Product Code</td>
                      <td>Quantity</td>
                      <td>Unit Cost</td>
                      <td>Discount%</td>
                      <td>Tax</td>
                      <td>Total</td>       
                    </tr>
                  </thead>
                  <tbody v-if="product_detail_list.length">
                    <tr v-for="(product_detail, index) in product_detail_list" :key="index">
                      <td>
                        {{ product_detail.supplier.name }}
                      </td>
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
                        {{ product_detail.purchase_price }}
                      </td>
                      <td class="text-right">
                        {{ product_detail.discount_percentage }}
                      </td>
                      <td class="text-right">
                        {{ product_detail.tax_value }}
                      </td>
                      <td class="text-right">
                        {{ product_detail.product_wise_total }}
                      </td>                      
                    </tr>
                    <tr class="font-weight-bold">
                      <td colspan="7" class="text-right">Total Product Cost</td>
                      <td class="text-right">{{ stock_challan.total_product_cost }}</td>
                    </tr>
                    <tr class="font-weight-bold">
                      <td colspan="7" class="text-right">Shipping Cost</td>
                      <td class="text-right">{{ stock_challan.shipping_cost }}</td>
                    </tr>
                    <tr class="font-weight-bold">
                      <td colspan="7" class="text-right">Others Cost</td>
                      <td class="text-right">{{ stock_challan.others_cost }}</td>
                    </tr>
                    <tr class="font-weight-bold">
                      <td colspan="7" class="text-right grand">Grand Total</td>
                      <td class="text-right grand">{{ stock_challan.total_cost }}</td>
                    </tr>
                  </tbody>
              </table>
            </div>
            <div class="row p-2">
              <div class="col-md-12">
                <b> Note</b>
                <hr class="hr">
                <p>
                  {{ stock_challan.note }}
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
        stock_challan: '',    
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
      getStockInChallanInfo(stockInId) {
        const loader = this.$loading.show({
          container: this.$refs.attendanceTable,
          canCancel: true,
          loader: 'bars'
        })

        axios.get('stock-in-view/' + stockInId)
          .then((res) => {
            this.stock_challan = res.data;          
            this.product_detail_list = res.data.stock_ins;
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