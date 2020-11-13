<!--
<template>
    <div class="col-md-7 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
            <p class="card-title">Cash deposits</p>
            <p class="mb-4">To start a blog, think of a topic about and first brainstorm party is ways to write details</p>
            <div id="cash-deposits-chart-legend" class="d-flex justify-content-center pt-3"></div>
            <canvas id="cash-deposits-chart"></canvas>
            </div>
        </div>
    </div>
</template>
-->

<template>
  <div class="small">
      sdhif fdg jdfgfd gj
   <!--  <line-chart :chart-data="datacollection"></line-chart>
    <button @click="fillData()">Randomize</button> -->
  </div>
</template>

<script>
  //import Barchart1 from "./Partials/Barchart1.js";
  //import Barchart from "./Partials/Barchart";

  export default {
    /* components: {
      Barchart
    }, */
    data () {
      return {
        datacollection: null
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>