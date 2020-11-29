<script>
  import axios from '../../axios';
  import { Bar } from 'vue-chartjs'

  export default {
    extends: Bar,
    data() {
      return {        
        yearly_sale_amount: null,
        yearly_purchase_amount: null,
        yearly_balance: null,
        form: {
          year: 2020          
        },       
        chartData: {
          labels: [
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
          ],
          datasets: [{
            label: "Sale",
            backgroundColor: "rgb(181, 204, 37)",
            data: [121,234,234,234],
          }, {
            label: "Purchase",
            backgroundColor: "#01A3A5",
            data: [121,234,234,234],
          }, {
            label: "Balance",
            backgroundColor: "red",
            data: [121,234,234,2341]
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
            text: 'Monthly Graph'
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
      this.getYearlyDashboardDetails()
    },
    methods: {      
      getYearlyDashboardDetails() {
        axios.get('get-yearly-dashboard-details', { params: { year: this.form.year }})
          .then((res) => {
            let result = res.data;            
            this.yearly_sale_amount = result.yearly_sale_amount;
            this.yearly_purchase_amount = result.yearly_purchase_amount;
            this.yearly_balance = result.yearly_balance;

            this.chartData.datasets[0].data = result.month_wise_sales;
            this.chartData.datasets[1].data = result.month_wise_purchases;
            this.chartData.datasets[2].data = result.month_wise_balance;

            this.renderChart(this.chartData, this.options);
          })
          .catch((error) => {
          })        
      }
    }
  }
</script>>