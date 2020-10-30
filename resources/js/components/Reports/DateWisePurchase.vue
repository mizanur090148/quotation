<template>
  <div class="content-wrapper">
    <div class="row justify-content-md-center" id="printArea">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title text-center">Date Wise Purchase Report</h4>
            <hr>
            <form class="forms-sample" @submit.prevent="getDateWiseSlaesReport">
              <div class="row p-2">
                <div class="col-3">
                  <div class="form-group">
                    <label class="no-print">From Date</label>
                    <input type="date" v-model="form.from_date" class="form-control form-control-sm no-print" :class="{ 'is-invalid': errors.from_date }">
                    <small class="text-danger" v-if="errors.from_date">{{ errors.from_date[0] }}</small>
                  </div>
                </div>
                <div class="col-3">
                  <div class="form-group">
                    <label>To Date</label>
                    <input type="date" v-model="form.to_date" class="form-control form-control-sm" :class="{ 'is-invalid': errors.to_date }">
                    <small class="text-danger" v-if="errors.to_date">{{ errors.to_date[0] }}</small>
                  </div>
                </div>
                <div class="col-2">
                  <div class="form-group">
                    <label for="">&nbsp;</label>
                    <button type="submit" class="form-control form-control-sm btn btn-sm btn-primary">Search</button>                 
                  </div>
                </div>
                <div class="col-2"></div>
                <div class="col-2 text-right">
                  <a href="#" class="text-right" @click="printSection"><i class="mdi mdi-printer"></i></a>
                </div>
              </div>
            </form>
       
            <div class="row">
              <table class="list-table table table-bordered">
                <thead>
                  <tr>
                    <td colspan="9" class="text-center font-weight-bold">Report From <!-- {{ this.form.from_date + ' To ' + this.form.to_date }} --></td>
                  </tr>
                  <tr>
                    <td>SL.</td>
                    <td>Date</td>
                    <td>Invoice Number</td>
                    <td>Supplier With TRN</td>                   
                    <td>Taxable Amount</td>
                    <td>Vat(5%)</td>
                    <td>Total Amount</td>
                    <td>Comment</td>
                  </tr>
                </thead>
                <tbody>
                  <tr></tr>
                </tbody>
                  <tbody v-if="reports.length">
                    <tr v-for="(report, index) in reports" :key="index">                        
                      <td>
                        {{ ++index }}
                      </td>
                      <td>
                        {{ report.purchase_date }}
                      </td>
                      <td>
                        {{ report.purchase_invoice }}
                      </td>
                      <td>
                        {{ report.suppliers.join(', ') }}
                      </td>
                      <td class="text-center">
                        {{ report.total_product_cost }}
                      </td>
                      <td class="text-center">
                        {{ report.total_tax_value }}
                      </td>
                      <td class="text-center">
                        {{ report.total_product_cost + report.total_tax_value }}
                      </td>
                      <td></td>
                    </tr>
                    <tr class="font-weight-bold">
                      <td colspan="4">Total</td>
                      <td>{{ total_data.total_taxable }}</td>
                      <td>{{ total_data.total_tax_value }}</td>
                      <td>{{ total_data.total_amount }}</td>
                      <td></td>
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
        errors: [],
        reports: [],
        total_data: null,
        form: new Form({
          from_date: new Date().toISOString().split('T')[0],
          to_date: new Date().toISOString().split('T')[0],
        })
      }
    },
    mounted() {     
      this.getDateWiseSlaesReport(); 
    },    
    methods: {
      printSection() {
        this.$htmlToPaper("printArea");
      },
      getDateWiseSlaesReport() {
        this.errors = [];
        const loader = this.$loading.show({
          container: this.$refs.customerContainer,
          canCancel: true,
          loader: 'bars'
        })
        axios.get('/date-wise-purchase-report', { params: {from_date:this.form.from_date, to_date: this.form.to_date}})
          .then(response => {
            if (response.status == 200) {
              this.reports = response.data.reports;
              this.total_data = response.data;
              this.loader.hide();
            } else {
              this.$snotify.error('Something went worng', 'error');
            }
          })
          .catch( errors => {
            loader.hide();
            this.errors = errors.response.errors;
          })
          .finally(e => {
            loader.hide();
          })
      }
    }    
  }
</script>