<template>
   <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">        
         <li class="nav-item">
            <router-link tag="a" class="nav-link" to="/dashboard">
               <i class="mdi mdi-home menu-icon"></i>
    			   <span class="menu-title">Dashboard</span>
            </router-link>
         </li>
         <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#products" aria-expanded="false" aria-controls="products">
            <i class="mdi mdi-settings menu-icon"></i>
            <span class="menu-title">Visit Schedules</span>
            <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="products">
               <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/visit-schedules/create"> Add Visit Schedule </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/visit-schedules"> Visit Schedule List </router-link> 
                  </li>
               </ul>
            </div>
         </li>
        <!--  <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#reports" aria-expanded="false" aria-controls="reports">
               <i class="mdi mdi-settings menu-icon"></i>
               <span class="menu-title">Reports</span>
               <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="reports">
               <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/daily-inventory-report"> Daily report </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/date-wise-purchase-and-sale-report"> Date Wise report </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/date-wise-purchase-report"> Date Wise Report </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/date-wise-sales-report"> Date Wise Report </router-link> 
                  </li>
               </ul>
            </div>
         </li>   -->
         <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#settings" aria-expanded="false" aria-controls="settings">
               <i class="mdi mdi-settings menu-icon"></i>
               <span class="menu-title">Settings</span>
               <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="settings">
               <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/users"> Users </router-link> 
                  </li>
               </ul>
            </div>
         </li>
         <li class="nav-item">
            <a href="#" @click="logout" class="nav-link">
               <i class="mdi mdi-settings menu-icon"></i>
               <span class="menu-title">Logout</span>
            </a>
         </li>
      </ul>
   </nav>
</template>

<script>
	import User from "../../apis/User";

	export default {	
      data() {
         return {
            loggedIn: false
         }
      },
      /* mounted() {
         this.loggedIn = !!this.localStorage.getItem('auth');
      }, */
		methods: {
			logout() {
				User.logout()
            .then(response => {	
               localStorage.removeItem('auth');
               localStorage.removeItem('user');	
               this.loggedIn = false;
               this.$router.push({name: '/login'});
            })
            .catch(error => {
               this.loggedIn = false;
               this.$router.push({name: '/login'});
            })
			}
		}
	};
</script>