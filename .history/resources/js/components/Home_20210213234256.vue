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
    <VisitSceduleCalender></VisitSceduleCalender>
</div>
</template>

<script>
import VisitSceduleCalender from "./Partials/VisitSceduleCalender";
/* 
import DashboardTopSummary from "./Partials/DashboardTopSummary";
import BestSaleProducts from "./Partials/BestSaleProducts";
import RecentPurchaseProducts from "./Partials/RecentPurchaseProducts";
import RecentSaleProducts from "./Partials/RecentSaleProducts";
import BarChart from './Charts/BarChart';
import WeeklyBarChart from './Charts/WeeklyBarChart';
import MonthlyBarChart from './Charts/MonthlyBarChart' */

export default {
    data() {
        return {
            years: [],
            months: null,
            form: {
                year: 2021,
                month: new Date().getMonth() + 1
            }
        }
    },
    components: {
        DashboardTopSummary,
        VisitSceduleCalender
    },
    mounted() {
        this.getYears();
        this.getMonths();
        //this.getMonthlyDashboardDetails();
    },
    methods: {
        getYears() {
            for (let index = 0; index < 10; index++) {
                this.years.push('202' + index);
            }
        },
        getMonths() {
            let months = {
                1: 'January',
                2: 'February',
                3: 'March',
                4: 'April',
                5: 'May',
                6: 'June',
                7: 'July',
                8: 'August',
                9: 'September',
                10: 'October',
                11: 'November',
                12: 'December'
            };
            this.months = months;
        }
    }
}
</script>

<style>
/* .fc-widget-content {
    height: 5px !important;
  } */
tr {
    height: 10px !important;
}

td {
    height: 10px !important;
}

/*   tbody>tr>td>div {
    height: 400px !important;
  } */
/* .fc-state-default {
    display: none;
  } */
.fc-today-button,
.fc-month-button,
.fc-agendaWeek-button,
.fc-agendaDay-button,
.fc-prev-button,
.fc-next-button,
h2 {
    display: none;
}

h4 {
    font-size: 18px !important;
    font-weight: bold;
    margin-top: 15px;
}
</style>
