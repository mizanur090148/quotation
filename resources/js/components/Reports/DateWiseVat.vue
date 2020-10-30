<template>
  <div class="content-wrapper">
    <div class="row justify-content-md-center" id="printArea">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title text-center">Date Wise Vat Report</h4>
            <hr>
            <form class="forms-sample" @submit.prevent="getDateWiseVatReport">
              <div class="row p-2" v-if="print">
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
              <table align="center" v-if="print">               
                  <tr>
                    <td class="text-center">
                      <b>Company Name: Cool Way Building Materials L.L.C</b><br/>
                        TRN : 100471891000003<br/>
                        GIBAN : AE55868010047189000003<br/>
                        Period {{ this.form.from_date + ' To ' + this.form.to_date }}<br/>
                        Tax Year: 2020<br/><br/>
                    </td>
                  </tr>
              </table>
              <table class="list-table table table-bordered">
                <thead>
                  <tr>
                    <td>Datails</td>
                    <td>Taxable Amount(AED)</td>
                    <td>Vat</td>
                  </tr>
                </thead>
                <tbody>        
                </tbody>
                  <tbody>
                    <tr>
                      <td class="dashed text-left">
                        <b>Output Vat</b><br/>
                        Standard Rated Supplies<br/>
                        Sales-Dubai
                      </td>
                      <td class="text-center">
                        {{ total_data.total_sales_taxable }}
                      </td>
                      <td class="text-center">
                        {{ total_data.total_sales_tax_value }}
                      </td>
                    </tr>
                    <tr>
                      <td class="dashed text-left">
                        Total Standard Rated Spplies<br/>
                        Zero Rated Supplies<br/>
                        Exempt Supplies<br/>
                      </td>
                      <td class="text-center">
                        {{ total_data.total_sales_taxable }}<br/>
                        -<br/>
                        -
                      </td>
                      <td class="text-center">
                        {{ total_data.total_sales_tax_value }}<br/>
                        -<br/>
                        -
                      </td>
                    </tr>
                    <tr class="font-weight-bold">
                      <td class="dashed text-left">                        
                        Total Supplies
                      </td>
                      <td class="text-center">
                        {{ total_data.total_sales_taxable }}
                      </td>
                      <td class="text-center">
                        {{ total_data.total_sales_tax_value }}
                      </td>
                    </tr>
                    <tr>
                      <td class="dashed text-left">
                        <b>Input Vat</b><br/>
                        Purchases<br/>
                        Credit Notes
                      </td>
                      <td class="text-center">
                        {{ total_data.total_purchase_taxable }}
                      </td>
                      <td class="text-center">
                        {{ total_data.total_purchase_tax_value }}
                      </td>
                    </tr>
                    <tr class="font-weight-bold">
                      <td class="dashed text-left">
                        Net Purchase
                      </td>
                      <td class="text-center">
                        {{ total_data.total_purchase_taxable }}
                      </td>
                      <td class="text-center">
                        {{ total_data.total_purchase_tax_value }}
                      </td>
                    </tr>                  
                  </tbody>                  
              </table>

              <table class="list-table table table-bordered">   
                <tbody>       
                  <tr>
                    <td class="text-left font-weight-bold">Vat Payable/(Recoverable)</td>
                    <td>{{ total_data.total_sales_tax_value - total_data.total_purchase_tax_value }}</td>
                  </tr>
                  <tr>
                    <td class="text-left">B/F Balance</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td class="text-left">Reverse Charge Adjustment</td>
                    <td>-</td>
                  </tr>
                  <tr class="font-weight-bold">
                    <td class="text-left">Net Vat Payable/(Recoverable)</td>
                    <td>{{ total_data.total_sales_tax_value - total_data.total_purchase_tax_value }}</td>
                  </tr>
                </tbody>
              </table>              
            </div>
            <br/>
            <div class="row p-2">
              <div class="col-10"></div>
              <div class="col-2 text-right font-weight-bold dashed">
                Signature
              </div>
            </div>
            <div class="font-weight-bold dashed">
              Note
            </div>
            <span>All report are made according to invoices received from client</span>
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
  .dashed {
    text-decoration-line: underline;
    text-decoration-style: solid;
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
        print: true,
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
      this.getDateWiseVatReport(); 
    },    
    methods: {
      printSection() {
       // this.print = false;
        this.$htmlToPaper("printArea");
      },
      getDateWiseVatReport() {
        this.errors = [];
        const loader = this.$loading.show({
          container: this.$refs.customerContainer,
          canCancel: true,
          loader: 'bars'
        })
        axios.get('/date-wise-vat-report', { params: {from_date:this.form.from_date, to_date: this.form.to_date}})
          .then(response => {
            if (response.status == 200) {            
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