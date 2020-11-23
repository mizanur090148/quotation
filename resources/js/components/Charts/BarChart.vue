<script>
  import { Bar } from 'vue-chartjs'

  export default {
    extends: Bar,
    data() {
      return {        
        /* chartData: {
          labels: ["Jan", "2015-02", "2015-03", "2015-04", "2015-05", "2015-06", "2015-07", "2015-08", "2015-09",
            "2015-10", "2015-11", "2015-12"
          ],
          datasets: [{
            label: 'Purchase',
            borderWidth: 1,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            pointBorderColor: '#2554FF',
            data: [12, 19, 3, 5, 2, 30, 20, 3, 5, 6, 2, 1]
          }]
        },*/
        chartData: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep", "Oct", "Nov", "Dec"],
          datasets: [{
            label: "Sale",
            backgroundColor: "rgb(181, 204, 37)",
            data: [3, 7, 4,3,3, 4,3, 7, 4,3, 7, 4],
          }, {
            label: "Purchase",
            backgroundColor: "#01A3A5",
            data: [3, 7, 4,3, 7, 4,5, 7, 4,3, 7, 4]
          }, {
            label: "Balance",
            backgroundColor: "red",
            data: [3, 7, 4,3, 7, 4,3, 7, 4,3, 7, 4]
          }]
        },
        options: {
          scales: {
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Amount'
              },
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
              },
              /* ticks: {
                autoSkip: false,
                maxRotation: 90,
                minRotation: 90,
                fontSize: 10,
                fontColor:"Black",
                defaultFontFamily: "Arial, Helvetica, sans-serif"
              } */
            }]
          },
          title: {
            display: true,
            text: 'Month Wise Graph'
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
                      ctx.fillText(data, bar._model.x, bar._model.y - 5);
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
      this.renderChart(this.chartData, this.options)
    }
  }
</script>