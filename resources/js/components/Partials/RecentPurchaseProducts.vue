<template>
  <div class="col-md-6 stretch-card">
    <div class="card">
      <div class="card-body">
        <p class="card-title">Recent 5 Visits</p>
        <div class="table-responsive">
          <table id="recent-purchases-listing" class="list-table table-bordered">
            <thead>
              <tr>
                <td>SL.</td>
                <td>Location Name</td>
                <td>Visited By</td>
              </tr>
            </thead>
            <tbody v-if="locations.length">
              <tr v-for="(data, index) in locations" :key="index">  
                <td>{{ ++index }}</td>
                <td>{{data.location}}</td>
                <td>{{data.name }}</td>
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
          { location: 'Gazipur', name: 'Mr Kalam' },
          { location: 'Comilla', name: 'Mr Anisur'}, 
          { location: 'Pabna', name: 'Mr Tareq'},
          { location: 'Sirajganj', name: 'Mr Noman'},
          { location: 'Patuakhali', name: 'Mr Sajib'}
        ]
      }
    },
    mounted() {
     // this.getRecentPurchaseProducts()
    },    
    methods: {      
      getRecentPurchaseProducts() {
        axios.get('get-recent-purchase-products')
          .then((res) => {
            this.recent_purchase_products = res.data;         
          })
          .catch((error) => {
          })
      }
    }
  }
</script>