<template>  
  <div class="row mb-2">
    <div class="col-md-12 stretch-card">
      <div class="card">
        <div class="card-body dashboard-tabs p-0">          
          <div class="tab-content py-0 px-0">
            <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
              <div class="d-flex flex-wrap justify-content-xl-between">
                <div class="d-none d-xl-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                  <i class="mdi mdi-calendar-heart icon-lg mr-3 text-primary"></i>
                  <div class="d-flex flex-column justify-content-around">
                    <!-- <small class="mb-1 text-muted">Year</small> -->
                    <select class="form-control form-control-sm" v-model="form.year" @change="getMonthlyDashboardDetails">                     
                      <option v-for="(year, key) in years" :key="key" :value="year">{{ year }}</option>
                    </select>
                  </div>
                </div>
                <div class="d-none d-xl-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                  <i class="mdi mdi-calendar-heart icon-lg mr-3 text-primary"></i>
                  <div class="d-flex flex-column justify-content-around">
                    <!-- <small class="mb-1 text-muted">Month</small> -->
                    <select class="form-control form-control-sm" v-model="form.month" @change="getMonthlyDashboardDetails">                     
                      <option v-for="(month, key) in months" :key="key" :value="key">{{ month }}</option>
                    </select>
                  </div>
                </div>
                <div class="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                  <i class="mdi mdi-currency-usd mr-3 icon-lg text-danger"></i>
                  <div class="d-flex flex-column justify-content-around">
                    <small class="mb-1 text-muted">Sale</small>
                    <h5 class="mr-2 mb-0">{{ this.sale_amount }}</h5>
                  </div>
                </div>
                <div class="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                  <i class="mdi mdi-currency-usd mr-3 icon-lg text-danger"></i>
                  <div class="d-flex flex-column justify-content-around">
                    <small class="mb-1 text-muted">Purchase</small>
                    <h5 class="mr-2 mb-0">{{ this.purchase_amount }}</h5>
                  </div>
                </div>               
                <div class="d-flex py-3 border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                  <i class="mdi mdi-currency-usd mr-3 icon-lg text-danger"></i>
                  <div class="d-flex flex-column justify-content-around">
                    <small class="mb-1 text-muted">Balance</small>
                    <h5 class="mr-2 mb-0">{{ this.balance }}</h5>
                  </div>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from '../../axios';
  
  export default {
    data() {
      return {
        years: [],
        months: null,
        monthly_details: null,
        sale_amount: null,
        purchase_amount: null,
        balance: null,
        form: {
          year: 2020,
          month: new Date().getMonth() + 1
        }
      }
    },
    mounted() {     
      this.getYears();
      this.getMonths();
      this.getMonthlyDashboardDetails();
    },    
    methods: {
      getYears() {       
        for (let index = 0; index < 10; index++) {
          this.years.push('202' + index);
        }
      },
      getMonths() {       
        let months = {
          1 : 'January',
          2 : 'February',
          3 : 'March',
          4 : 'April',
          5 : 'May',
          6 : 'June',
          7 : 'July',
          8 : 'August',
          9 : 'September',
          10 : 'October',
          11 : 'November',
          12 : 'December'
        };
        this.months = months;
      },
      getMonthlyDashboardDetails() {
        axios.get('get-monthly-dashboard-details', { params: { year: this.form.year, month: this.form.month}})
          .then((res) => {
            //this.monthly_details = res.data;
            let result = res.data;
            this.sale_amount = result.sale_amount;
            this.purchase_amount = result.purchase_amount;
            this.balance = result.sale_amount - result.purchase_amount;
           // this.day_wise_purchases = res.data;
           // this.day_wise_sales = res.data;
          })
          .catch((error) => {
          })
      }
    }
  }
</script>

<style>
  select.form-control {
    color: #000000;
  }
  .fc-widget-content {
    height: 13px !important;
  }
</style>