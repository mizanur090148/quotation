<template>
  <div class="content-wrapper">
    <div class="row justify-content-md-center" id="printArea">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title text-center">Daily Inventory Report</h4>
            <hr>
            <form class="forms-sample" @submit.prevent="getDailyInventoryReport">
              <div class="row p-2">
                <div class="col-3">
                  <div class="form-group">
                    <label class="no-print">Report Date</label>
                    <input type="date" v-model="form.report_date" @change="getDailyInventoryReport" class="form-control form-control-sm no-print">                    
                  </div>
                </div>
                <div class="col-7"></div>
                <div class="col-2 text-right">
                  <a href="#" class="text-right" @click="printSection"><i class="mdi mdi-printer"></i></a>
                </div>
              </div>
            </form>
       
            <div class="row">
              <table class="list-table table table-bordered">
                <thead>
                  <tr>
                    <td colspan="9" class="text-center font-weight-bold">Daily Inventory Report <!-- {{ this.form.from_date + ' To ' + this.form.to_date }} --></td>
                  </tr>
                  <tr>
                    <td>SL.</td>
                    <td>Product Name</td>
                    <td>Product Code</td>
                    <td>Total Stock In Qty</td>
                    <td>Total Sales Qty</td>
                    <td>Inventory Qty</td>
                  </tr>
                </thead>
                <tbody>
                  <tr></tr>
                </tbody>
                  <tbody v-if="reports.length">
                    <tr v-for="(report, index) in reports" :key="index" v-if="index != reports.length - 1">
                      <td>
                        {{ ++index }}
                      </td>
                      <td>
                        {{ report.product.name }}
                      </td>
                      <td>
                        {{ report.product.code }}
                      </td>                      
                      <td>
                        {{ report.stock_qty }}
                      </td>
                      <td class="text-center">
                        {{ report.sale_qty }}
                      </td>
                      <td class="text-center">
                        {{ report.inventory_qty }}
                      </td>                     
                    </tr> 
                    <tr v-else class="font-weight-bold">
                      <td colspan="3">
                        Total
                      </td>
                      <td>
                        {{ report.stock_qty }}
                      </td>
                      <td class="text-center">
                        {{ report.sale_qty }}
                      </td>
                      <td class="text-center">
                        {{ report.inventory_qty }}
                      </td>  
                    </tr>                  
                  </tbody>
                  <tbody v-else>
                    <tr class="not-found">
                      <td colspan="9" class="text-danger">Not Found</td>
                    </tr>
                  </tbody>
              </table>
            </div>            
          </div>
        </div>
      </div>      
    </div>    
    <vue-snotify></vue-snotify>
  </div>
</template>

<style scoped>
  hr {
    margin-top: 0rem !important;
    margin-bottom: 0.2rem !important;
  }  
</style>
<style>
  @media print {
    /* All your print styles go here */
    .no-print {
      display: none !important; 
    } 
  }
</style>
<script>  
  import axios from '../../axios';
  import "vue-loading-overlay/dist/vue-loading.css";
  import Loading from 'vue-loading-overlay';
    
  export default {
    data() {
      return {       
        reports: [],      
        form: new Form({
          report_date: new Date().toISOString().split('T')[0]        
        })
      }
    },
    mounted() {     
      this.getDailyInventoryReport(); 
    },    
    methods: {
      printSection() {
        this.$htmlToPaper("printArea");
      },      
      getDailyInventoryReport() {       
        const loader = this.$loading.show({
          container: this.$refs.customerContainer,
          canCancel: true,
          loader: 'bars'
        })
        axios.get('/daily-inventory-report', { params: { report_date: this.form.report_date}})
          .then(response => {
            if (response.status == 200) {
              this.reports = response.data;             
              this.loader.hide();
            } else {
              this.$snotify.error('Something went worng', 'error');
            }
          })
          .catch( errors => {
            loader.hide();            
          })
          .finally(e => {
            loader.hide();
          })
      }
    }    
  }
</script>