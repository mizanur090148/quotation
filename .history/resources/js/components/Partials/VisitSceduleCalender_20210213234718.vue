<template>
<div class="row mt-2">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-2">
                            <select class="form-control form-control-sm" v-model="form.year" @change="getMonthlyDashboardDetails">
                                <option v-for="(year, key) in years" :key="key" :value="year">{{ year }}</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <select class="form-control form-control-sm" v-model="form.month" @change="getMonthlyDashboardDetails">
                                <option v-for="(month, key) in months" :key="key" :value="key">{{ month }}</option>
                            </select>
                        </div>
                        <div class="col-md-4 text-center">
                            <h4>Month Wise Visit Schedule</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            	<full-calendar :config="config" :events="events"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '../../axios'
import 'fullcalendar/dist/fullcalendar.css'
import moment from 'moment'

export default {
  name: 'hello',
  data () {
    return {
      years: [],
      months: null,
      form: {
        year: 2021,
        month: new Date().getMonth() + 1
      },
      events: [],
      config: {
        defaultView: 'month',
        eventRender: function(event, element) {
          console.log(event)
        }
      }
    }
  },
  mounted() {
    this. getVisitSchedules();
    this.getYears();
    this.getMonths();
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
    },
    getVisitSchedules() {
      const loader = this.$loading.show({
        container: this.$refs.attendanceTable,
        canCancel: true,
        loader: 'bars'
      })
      axios.get('get-visit-schedule-data')
        .then((res) => {
          this.events = res.data;
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

<style>
  tr {
    height: 5px !important;
    width: 5px !important;
  }
  th, td {
    height: 5px !important;
    width: 5px !important;
  }
</style>