<template>
   <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">        
         <li class="nav-item">
            <router-link tag="a" class="nav-link" to="/home">
               <i class="mdi mdi-home menu-icon"></i>
    			   <span class="menu-title">Dashboard</span>
            </router-link>
         </li>
         <li class="nav-item">
            <router-link tag="a" class="nav-link" to="/quotations">
               <i class="mdi mdi-settings menu-icon"></i>
    			   <span class="menu-title">Quotations</span>
            </router-link>
         </li>         
         <!-- <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#sales" aria-expanded="false" aria-controls="sales">
               <i class="mdi mdi-settings menu-icon"></i>
               <span class="menu-title">Sales Manage</span>
               <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="sales">
               <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/store-info"> Store Info </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/inactive-items"> Inactive Items </router-link> 
                  </li>
               </ul>
            </div>
         </li> -->
         <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#reports" aria-expanded="false" aria-controls="reports">
               <i class="mdi mdi-settings menu-icon"></i>
               <span class="menu-title">Reports</span>
               <i class="menu-arrow"></i>
            </a>
            <!-- <div class="collapse" id="reports">
               <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/date-wise-inventory-report"> Date Wise Inventory Report </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/date-wise-sales-report"> Date Wise Sales Report </router-link> 
                  </li>
               </ul>
            </div> -->
         </li>
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
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/vendors"> Vendors </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/service-categories"> Service Categories </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/services"> Services </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/terms-and-conditions"> Terms & Conditions </router-link> 
                  </li>                 
               </ul>
            </div>
         </li>
      </ul>
   </nav>
</template>