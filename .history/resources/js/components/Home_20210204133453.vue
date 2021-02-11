<template>
  <div class="content-wrapper">          
    <!-- <div class="row">
      <div class="col-md-12 grid-margin">
        <div class="d-flex justify-content-between flex-wrap">
          <div class="d-flex align-items-end flex-wrap">
            <div class="mr-md-3 mr-xl-5">
              <h2>Welcome back,</h2>
              <p class="mb-md-0">Your analytics dashboard template.</p>
            </div>
            <div class="d-flex">
              <i class="mdi mdi-home text-muted hover-cursor"></i>
              <p class="text-muted mb-0 hover-cursor">&nbsp;/&nbsp;Dashboard&nbsp;/&nbsp;</p>
              <p class="text-primary mb-0 hover-cursor">Analytics</p>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-end flex-wrap">
            <button type="button" class="btn btn-light bg-white btn-icon mr-3 d-none d-md-block ">
              <i class="mdi mdi-download text-muted"></i>
            </button>
            <button type="button" class="btn btn-light bg-white btn-icon mr-3 mt-2 mt-xl-0">
              <i class="mdi mdi-clock-outline text-muted"></i>
            </button>
            <button type="button" class="btn btn-light bg-white btn-icon mr-3 mt-2 mt-xl-0">
              <i class="mdi mdi-plus text-muted"></i>
            </button>
            <button class="btn btn-primary mt-2 mt-xl-0">Generate report</button>
          </div>
        </div>
      </div>
    </div> -->   
    <DashboardTopSummary></DashboardTopSummary>
   
    <div class="row mt-2">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <!-- <BarChart></BarChart> -->
              </div>
              <!-- <div class="col-md-12">
                <WeeklyBarChart></WeeklyBarChart>
              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="row">              
              <div class="col-md-12">
                <!-- <MonthlyBarChart></MonthlyBarChart> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="row">              
              <div class="col-md-12">
                <BestSaleProducts></BestSaleProducts>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="row">
      <div class="col-md-6">
        <BarChart></BarChart>
      </div>
      <div class="col-md-6">
        <BarChart></BarChart>         
      </div>
    </div> -->

    <!-- <div class="row mt-2">      
      <BestSaleProducts></BestSaleProducts>
      <BestPurchaseProducts></BestPurchaseProducts>
    </div>    
    <div class="row mt-2">
      <RecentSaleProducts></RecentSaleProducts>
      <RecentPurchaseProducts></RecentPurchaseProducts>
    </div> -->
  </div>
</template>

<script>
  import DashboardTopSummary from "./Partials/DashboardTopSummary";
  import BestPurchaseProducts from "./Partials/BestPurchaseProducts";
  import BestSaleProducts from "./Partials/BestSaleProducts";
  import RecentPurchaseProducts from "./Partials/RecentPurchaseProducts";
  import RecentSaleProducts from "./Partials/RecentSaleProducts";
  import BarChart from './Charts/BarChart';
  /* import WeeklyBarChart from './Charts/WeeklyBarChart'; */
  import MonthlyBarChart from './Charts/MonthlyBarChart'
  
  export default {
    components: {
      DashboardTopSummary,
      BestPurchaseProducts,
      BestSaleProducts,
      RecentPurchaseProducts,
      RecentSaleProducts,
      BarChart,
      /* WeeklyBarChart, */
      MonthlyBarChart
    }
  }
</script>

<style>
  .card .card-title {
    text-transform: none !important;
    margin-bottom: .2rem !important;
  }
  #bar-chart {
    height: 220px !important;
  }
</style>
