<template>
   <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">        
         <li class="nav-item">
            <router-link tag="a" class="nav-link" to="/">
               <i class="mdi mdi-home menu-icon"></i>
    			   <span class="menu-title">Dashboard</span>
            </router-link>
         </li>        
         <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#inventory" aria-expanded="false" aria-controls="inventory">
            <i class="mdi mdi-settings menu-icon"></i>
            <span class="menu-title">Inventory Manage</span>
            <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="inventory">
               <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/store-info"> Store Info </router-link>
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/inactive-items"> Inactive Items </router-link> 
                  </li>
               </ul>
            </div>
         </li>
         <li class="nav-item">
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
         </li>
         <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#reports" aria-expanded="false" aria-controls="reports">
               <i class="mdi mdi-settings menu-icon"></i>
               <span class="menu-title">Reports</span>
               <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="reports">
               <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/date-wise-inventory-report"> Date Wise Inventory Report </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/date-wise-sales-report"> Date Wise Sales Report </router-link> 
                  </li>
               </ul>
            </div>
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
                     <router-link tag="a" class="nav-link" to="/outlets"> Outlets </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/categories"> Categories </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/sub-categories"> Sub Categories </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/colors"> Colors </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/sizes"> Sizes </router-link> 
                  </li>
               </ul>
            </div>
         </li>
      </ul>
   </nav>
</template>