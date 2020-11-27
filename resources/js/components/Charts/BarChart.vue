<script>
  import axios from '../../axios';
  import { Bar } from 'vue-chartjs'

  export default {
    extends: Bar,
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
        },       
        chartData: {
          labels: [],
          datasets: [{
            label: "Sale",
            backgroundColor: "rgb(181, 204, 37)",
            data: [],
          }, {
            label: "Purchase",
            backgroundColor: "#01A3A5",
            data: [],
          }, {
            label: "Balance",
            backgroundColor: "red",
            data: []
          }]
        },
        options: {
          scales: {
            yAxes: [{
              display: true,
              /* scaleLabel: {
                display: true,
                labelString: 'Amount'
              }, */
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [{
              gridLines: {
                display: false
              }               
            }]
          },
          title: {
            display: true,
            text: 'Day Wise Graph'
          },
          hover: {
            animationDuration: 0
          },
          legend: {
            display: true
          },
          animation: {
            onComplete: function () {
              var chartInstance = this.chart,
                  ctx = chartInstance.ctx;

              ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
              ctx.textAlign = 'center';
              ctx.textBaseline = 'bottom';
              this.data.datasets.forEach(function (dataset, i) {
                  var meta = chartInstance.controller.getDatasetMeta(i);
                  meta.data.forEach(function (bar, index) {
                     var data = dataset.data[index];                     
                    //  ctx.fillText(data, bar._model.x, bar._model.y - 5);
                    //  ctx.rotate(0.9 * Math.PI);
                    //  ctx.restore();
                  });
              });
            }
          },
          tooltips: {
            enabled: true
          },
          responsive: true,
          maintainAspectRatio: false,
        }
      }
    },
    mounted() {  
      this.getYears();
      this.getMonths();    
      this.getMonthlyDashboardDetails()
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
            let result = res.data;
           /*  this.sale_amount = result.sale_amount;
            this.purchase_amount = result.purchase_amount;
            this.balance = result.sale_amount - result.purchase_amount; */

            this.sale_amount = result.sale_amount;
            this.purchase_amount = result.purchase_amount;
            this.balance = result.sale_amount - result.purchase_amount;

            this.chartData.labels = result.days_no;
            this.chartData.datasets[0].data = result.date_wise_sales;
            this.chartData.datasets[1].data = result.date_wise_purchases;
            this.chartData.datasets[2].data = result.date_wise_balance;

            this.renderChart(this.chartData, this.options);
          })
          .catch((error) => {
          })        
      }
    }
  }
</script>