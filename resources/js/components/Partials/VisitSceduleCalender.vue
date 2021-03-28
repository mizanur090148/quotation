<template>
<div class="row mt-2">
    <div class="col-md-12">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-2">
                        <select class="form-control form-control-sm" v-model="form.year" @change="getMonthlyDashboardDetails()">
                            <option v-for="(year, key) in years" :key="key" :value="year">{{ year }}</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <select class="form-control form-control-sm" v-model="form.month" @change="getVisitSchedules()">
                            <option v-for="(month, key) in months" :key="key" :value="key">{{ month }}</option>
                        </select>
                    </div>
                    <div class="col-md-4 text-center">
                        <h4>Month Wise Visit Schedule</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <full-calendar :config="config" :events="events" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Api from "../../apis/Api";
import 'fullcalendar/dist/fullcalendar.css'
import moment from 'moment'

export default {
    name: 'hello',
    data() {
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
                eventRender: function (event, element) {
                    console.log(event)
                }
            }
        }
    },
    mounted() {
        this.getVisitSchedules();
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
            Api.get('get-visit-schedule-data', {
                    params: {
                        year: this.form.year,
                        month: this.form.month
                    }
                })
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
select.form-control {
    color: #000000;
}

tr {
    height: 5px !important;
    width: 5px !important;
}

th,
td {
    height: 5px !important;
    width: 5px !important;
}

tr {
    height: 10px !important;
}

td {
    height: 10px !important;
}

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

.fc-basic-view .fc-body .fc-row {
    min-height: 32px !important;
}
.fc-row,
.fc-week,
.fc-widget-content {
    height: 32px !important;
}
td {
    text-align: center !important;
}

.fc-agendaDay-button, 
.fc-day-grid-container {
    height: auto !important;
}
</style>
