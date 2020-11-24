<template>  
  <div class="row mb-2">
    <div class="col-md-12 stretch-card">
      <div class="card">
        <div class="card-body dashboard-tabs p-0">
          <!-- <ul class="nav nav-tabs px-4" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="sales-tab" data-toggle="tab" href="#sales" role="tab" aria-controls="sales" aria-selected="false">Sales</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="purchases-tab" data-toggle="tab" href="#purchases" role="tab" aria-controls="purchases" aria-selected="false">Purchases</a>
            </li>
          </ul> -->
          <div class="tab-content py-0 px-0">
            <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
              <div class="d-flex flex-wrap justify-content-xl-between">
                <div class="d-none d-xl-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                  <i class="mdi mdi-calendar-heart icon-lg mr-3 text-primary"></i>
                  <div class="d-flex flex-column justify-content-around">
                    <small class="mb-1 text-muted">Year</small>
                    <!-- <div class="dropdown">
                      <a class="btn btn-secondary dropdown-toggle p-0 bg-transparent border-0 text-dark shadow-none font-weight-medium" href="#" role="button" id="dropdownMenuLinkA" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <h5 class="mb-0 d-inline-block">2020</h5>
                      </a>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuLinkA">
                        <a class="dropdown-item" href="#">2018</a>
                        <a class="dropdown-item" href="#">2019</a>
                        <a class="dropdown-item" href="#">2020</a>
                      </div>
                    </div> -->
                    <select class="form-control form-control-sm" v-model="form.year" @change="getMonthlyDashboardDetails">                     
                      <option v-for="(year, key) in years" :key="key" :value="year">{{ year }}</option>
                    </select>
                  </div>
                </div>
                <div class="d-none d-xl-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                  <i class="mdi mdi-calendar-heart icon-lg mr-3 text-primary"></i>
                  <div class="d-flex flex-column justify-content-around">
                    <small class="mb-1 text-muted">Month</small>
                    <!-- <div class="dropdown">
                      <a class="btn btn-secondary dropdown-toggle p-0 bg-transparent border-0 text-dark shadow-none font-weight-medium" href="#" role="button" id="dropdownMenuLinkA" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         <h5 class="mb-0 d-inline-block">November</h5> 
                      </a>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuLinkA">
                        <a v-for="(month, key) in months" :key="key" class="dropdown-item" href="#">{{ month }}</a>                        
                      </div>
                    </div> -->
                    <select class="form-control form-control-sm" v-model="form.month" @change="getMonthlyDashboardDetails">                     
                      <option v-for="(month, key) in months" :key="key" :value="key">{{ month }}</option>
                    </select>
                  </div>
                </div>
                <div class="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                  <i class="mdi mdi-currency-usd mr-3 icon-lg text-danger"></i>
                  <div class="d-flex flex-column justify-content-around">
                    <small class="mb-1 text-muted">Sale</small>
                    <h5 class="mr-2 mb-0">{{ monthly_details ? monthly_details.sale_amount : '' }}</h5>
                  </div>
                </div>
                <div class="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                  <i class="mdi mdi-currency-usd mr-3 icon-lg text-danger"></i>
                  <div class="d-flex flex-column justify-content-around">
                    <small class="mb-1 text-muted">Purchase</small>
                    <h5 class="mr-2 mb-0">{{ monthly_details ? monthly_details.purchase_amount : '' }}</h5>
                  </div>
                </div>
                <!-- <div class="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                  <i class="mdi mdi-download mr-3 icon-lg text-warning"></i>
                  <div class="d-flex flex-column justify-content-around">
                    <small class="mb-1 text-muted">Downloads</small>
                    <h5 class="mr-2 mb-0">2233783</h5>
                  </div>
                </div> -->
                <div class="d-flex py-3 border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                  <i class="mdi mdi-currency-usd mr-3 icon-lg text-danger"></i>
                  <div class="d-flex flex-column justify-content-around">
                    <small class="mb-1 text-muted">Balance</small>
                    <h5 class="mr-2 mb-0">{{ monthly_details ? monthly_details.balance : '' }}</h5>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="tab-pane fade" id="sales" role="tabpanel" aria-labelledby="sales-tab">
              <div class="d-flex flex-wrap justify-content-xl-between">
                <div class="d-none d-xl-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                  <i class="mdi mdi-calendar-heart icon-lg mr-3 text-primary"></i>
                  <div class="d-flex flex-column justify-content-around">
                    <small class="mb-1 text-muted">Sale</small>
                    <div class="dropdown">
                      <a class="btn btn-secondary dropdown-toggle p-0 bg-transparent border-0 text-dark shadow-none font-weight-medium" href="#" role="button" id="dropdownMenuLinkA" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <h5 class="mb-0 d-inline-block">26 Jul 2018</h5>
                      </a>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuLinkA">
                        <a class="dropdown-item" href="#">12 Aug 2018</a>
                        <a class="dropdown-item" href="#">22 Sep 2018</a>
                        <a class="dropdown-item" href="#">21 Oct 2018</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                  <i class="mdi mdi-download mr-3 icon-lg text-warning"></i>
                  <div class="d-flex flex-column justify-content-around">
                    <small class="mb-1 text-muted">Revenue</small>
                    <h5 class="mr-2 mb-0">2233783</h5>
                  </div>
                </div>
                <div class="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                  <i class="mdi mdi-eye mr-3 icon-lg text-success"></i>
                  <div class="d-flex flex-column justify-content-around">
                    <small class="mb-1 text-muted">Total views</small>
                    <h5 class="mr-2 mb-0">9833550</h5>
                  </div>
                </div>
                <div class="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                  <i class="mdi mdi-currency-usd mr-3 icon-lg text-danger"></i>
                  <div class="d-flex flex-column justify-content-around">
                    <small class="mb-1 text-muted">Revenue</small>
                    <h5 class="mr-2 mb-0">$577545</h5>
                  </div>
                </div>
                <div class="d-flex py-3 border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                  <i class="mdi mdi-flag mr-3 icon-lg text-danger"></i>
                  <div class="d-flex flex-column justify-content-around">
                    <small class="mb-1 text-muted">Flagged</small>
                    <h5 class="mr-2 mb-0">3497843</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="purchases" role="tabpanel" aria-labelledby="purchases-tab">
              <div class="d-flex flex-wrap justify-content-xl-between">
                <div class="d-none d-xl-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                  <i class="mdi mdi-calendar-heart icon-lg mr-3 text-primary"></i>
                  <div class="d-flex flex-column justify-content-around">
                    <small class="mb-1 text-muted">Start date</small>
                    <div class="dropdown">
                      <a class="btn btn-secondary dropdown-toggle p-0 bg-transparent border-0 text-dark shadow-none font-weight-medium" href="#" role="button" id="dropdownMenuLinkA" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <h5 class="mb-0 d-inline-block">26 Jul 2018</h5>
                      </a>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuLinkA">
                        <a class="dropdown-item" href="#">12 Aug 2018</a>
                        <a class="dropdown-item" href="#">22 Sep 2018</a>
                        <a class="dropdown-item" href="#">21 Oct 2018</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                  <i class="mdi mdi-currency-usd mr-3 icon-lg text-danger"></i>
                  <div class="d-flex flex-column justify-content-around">
                    <small class="mb-1 text-muted">Revenue</small>
                    <h5 class="mr-2 mb-0">$577545</h5>
                  </div>
                </div>
                <div class="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                  <i class="mdi mdi-eye mr-3 icon-lg text-success"></i>
                  <div class="d-flex flex-column justify-content-around">
                    <small class="mb-1 text-muted">Total views</small>
                    <h5 class="mr-2 mb-0">9833550</h5>
                  </div>
                </div>
                <div class="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                  <i class="mdi mdi-download mr-3 icon-lg text-warning"></i>
                  <div class="d-flex flex-column justify-content-around">
                    <small class="mb-1 text-muted">Downloads</small>
                    <h5 class="mr-2 mb-0">2233783</h5>
                  </div>
                </div> 
                <div class="d-flex py-3 border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                  <i class="mdi mdi-flag mr-3 icon-lg text-danger"></i>
                  <div class="d-flex flex-column justify-content-around">
                    <small class="mb-1 text-muted">Flagged</small>
                    <h5 class="mr-2 mb-0">3497843</h5>
                  </div>
                </div>
              </div>
            </div> -->
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
        months: [],
        monthly_details: null,
        form: {
          year: 2020,
          month: new Date().getMonth() 
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
        let months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ];
        this.months = months;
      },
      getMonthlyDashboardDetails() {
        axios.get('get-monthly-dashboard-details', { params: { year: this.form.year, month: this.form.month}})
          .then((res) => {
            this.monthly_details = res.data;
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
</style>