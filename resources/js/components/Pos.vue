<template>
  <div class="content-wrapper">
    <div class="row justify-content-md-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Line Chart Example in Vue</h4>
            <hr>
            <line-chart></line-chart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LineChart from './Charts/LineChart'

  export default {
    components: {
      LineChart
    }
  }
</script>