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
            <a class="nav-link" data-toggle="collapse" href="#products" aria-expanded="false" aria-controls="products">
            <i class="mdi mdi-settings menu-icon"></i>
            <span class="menu-title">Products</span>
            <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="products">
               <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/product/create"> Add Product </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/products"> Product List </router-link> 
                  </li>
               </ul>
            </div>
         </li>
         <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#stock-in" aria-expanded="false" aria-controls="stock-in">
            <i class="mdi mdi-settings menu-icon"></i>
            <span class="menu-title">Stock In/Purchase</span>
            <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="stock-in">
               <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/stock-in/create"> Add Stock In</router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/stock-ins"> Stock In List </router-link> 
                  </li>
               </ul>
            </div>
         </li>
         <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#sales" aria-expanded="false" aria-controls="sales">
               <i class="mdi mdi-settings menu-icon"></i>
               <span class="menu-title">Sales</span>
               <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="sales">
               <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/sales/create"> Add Sales </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/sales"> Sales List </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/pos"> Pos </router-link> 
                  </li>
               </ul>
            </div>
         </li>
         <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#quotations" aria-expanded="false" aria-controls="quotations">
            <i class="mdi mdi-settings menu-icon"></i>
            <span class="menu-title">Quotations</span>
            <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="quotations">
               <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/quotations/create"> Add Quotation</router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/quotations"> Quotation List </router-link> 
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
                     <router-link tag="a" class="nav-link" to="/daily-inventory-report"> Daily Inventory report </router-link> 
                  </li>
                  <!-- <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/monthly-inventory-report"> Monthly Inventory report </router-link> 
                  </li> -->
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/date-wise-purchase-report"> Date Wise Purchase Report </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/date-wise-sales-report"> Date Wise Sales Report </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/date-wise-vat-report"> Date Wise Vat Report </router-link> 
                  </li>
               </ul>
            </div>
         </li>
         <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#return" aria-expanded="false" aria-controls="return">
               <i class="mdi mdi-settings menu-icon"></i>
               <span class="menu-title">Return</span>
               <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="return">
               <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/purchase-or-sale-return"> Purchase/Sale Return</router-link> 
                  </li>                                                
               </ul>
            </div>
         </li>
         <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#hrm" aria-expanded="false" aria-controls="hrm">
            <i class="mdi mdi-settings menu-icon"></i>
            <span class="menu-title">HRM</span>
            <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="hrm">
               <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/department"> Department </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/employee"> Employee List </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/attendence"> Attendence </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/payroll"> Payroll </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/holiday"> Holiday </router-link> 
                  </li>
               </ul>
            </div>
         </li>
         <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#accounting" aria-expanded="false" aria-controls="accounting">
            <i class="mdi mdi-settings menu-icon"></i>
            <span class="menu-title">Accounting</span>
            <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="accounting">
               <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/account/create"> Add Account</router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/account"> Account List </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/balance-sheet"> Balance Sheet </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/account-statement"> Account Statement </router-link> 
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
                     <router-link tag="a" class="nav-link" to="/suppliers"> Suppliers </router-link> 
                  </li>                  
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/categories"> Categories </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/models"> Models </router-link> 
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link" to="/brands"> Brands </router-link> 
                  </li>              
               </ul>
            </div>
         </li>
      </ul>
   </nav>
</template>