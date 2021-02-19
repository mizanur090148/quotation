<template>
  <div class="col-md-6 stretch-card">
    <div class="card">
      <div class="card-body">
        <p class="card-title">Most 5 Visited Locations</p>
        <div class="table-responsive">
          <table id="recent-purchases-listing" class="list-table table-bordered">
            <thead>
              <tr>
                <td>SL.</td>
                <td>Location Name</td>
                <td>No of Visit</td>
              </tr>
            </thead>
            <tbody v-if="locations.length">
              <tr v-for="(data, index) in locations" :key="index">  
                <td>{{ ++index }}</td>
                <td>{{data.location}}</td>
                <td>{{data.count }}</td>
              </tr>
            </tbody>
          </table>
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
        locations: [
          { location: 'Gazipur', count: 20 },
          { location: 'Comilla', count: 17 }, 
          { location: 'Pabna', count: 17 },
          { location: 'Sirajganj', count: 15 },
          { location: 'Patuakhali', count: 10}
        ]
      }
    },
    mounted() {
      //this.getRecentSaleProducts()
    },    
    methods: {      
      getRecentSaleProducts() {
        axios.get('get-recent-sale-products')
          .then((res) => {
            this.recent_sale_products = res.data;           
          })
          .catch((error) => {
          })
      }
    }
  }
</script>