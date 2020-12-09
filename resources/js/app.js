//require('./bootstrap');

import Vue from 'vue'
import VModal from 'vue-js-modal'
import Snotify, { SnotifyPosition } from 'vue-snotify'
import VueRouter from 'vue-router'
import { Form, HasError, AlertError } from 'vform'
import Loading from 'vue-loading-overlay';
import Toasted from 'vue-toasted';
import vSelect from "vue-select";
import 'vue-snotify/styles/material.css';
import VuePagination from "./components/global/PaginationComponent";
import VueHtmlToPaper from "vue-html-to-paper";
//import modelModal from "./components/forms/modals/Model";

window.Form = Form
const Snotifyoptions = {
  toast: {
    position: SnotifyPosition.rightTop
  }
}
const options = {
    name: "_blank",
    specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
    styles: [
      "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
      "https://unpkg.com/kidlat-css/css/kidlat.css"
    ]
};

Vue.use(VueRouter)
Vue.use(Loading)
Vue.use(VModal)
Vue.use(Toasted)
Vue.use(Snotify, Snotifyoptions);
Vue.component("v-select", vSelect);
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
Vue.component('v-pagination', VuePagination);
Vue.use(VueHtmlToPaper, options);
//Vue.component('v-models', modelModal)

import App from './components/App'
import Login from './components/Login'
import Home from './components/Home'

const Outlets = () => import(/* webpackChunkName: "outlets" */ './components/lists/Outlets.vue');
const Users = () => import(/* webpackChunkName: "users" */ './components/lists/Users.vue');
const User = () => import(/* webpackChunkName: "user" */ './components/forms/User.vue');
const Product = () => import(/* webpackChunkName: "product" */ './components/forms/Product.vue');
const Products = () => import(/* webpackChunkName: "products" */ './components/lists/Products.vue');

const Models = () => import(/* webpackChunkName: "models" */ './components/lists/Models.vue');
const Categories = () => import(/* webpackChunkName: "categories" */ './components/lists/Categories.vue');
const Brands = () => import(/* webpackChunkName: "brands" */ './components/lists/Brands.vue');
//const Supplier = () => import(/* webpackChunkName: "supplier" */ './components/forms/Supplier.vue');
const Suppliers = () => import(/* webpackChunkName: "suppliers" */ './components/lists/Suppliers.vue');

const Milons = () => import(/* webpackChunkName: "Milons" */ './components/lists/StockIns.vue');
const Milon = () => import(/* webpackChunkName: "Milon" */ './components/forms/StockIn.vue');
const MilonView = () => import(/* webpackChunkName: "MilonView" */ './components/lists/StockInView.vue');

const Sale = () => import(/* webpackChunkName: "Sale" */ './components/forms/Sale.vue');
const Sales = () => import(/* webpackChunkName: "Sales" */ './components/Lists/Sales.vue');
const SumonView = () => import(/* webpackChunkName: "SumonView" */ './components/Lists/SaleInvoice.vue');

const AvailableProducts = () => import(/* webpackChunkName: "suppliers" */ './components/lists/AvailableProducts.vue');
const PurchaseRetun = () => import(/* webpackChunkName: "purchaseOrSaleRetun" */ './components/forms/PurchaseRetun.vue');
const SaleRetun = () => import(/* webpackChunkName: "purchaseOrSaleRetun" */ './components/forms/SaleRetun.vue');

// inventory report
const DailyInventoryReport = () => import(/* webpackChunkName: "dateWiseInventory" */ './components/Reports/DailyInventoryReport.vue');
// reports area
const DateWiseSalesReport = () => import(/* webpackChunkName: "dateWiseSales" */ './components/Reports/DateWiseSales.vue');
const DateWisePurchaseReport = () => import(/* webpackChunkName: "dateWisePurchase" */ './components/Reports/DateWisePurchase.vue');
const DateWiseVatReport = () => import(/* webpackChunkName: "dateWiseVat" */ './components/Reports/DateWiseVat.vue');


const Pos = () => import(/* webpackChunkName: "pos" */ './components/Pos.vue');

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/outlets',
            name: 'outlets',
            component: Outlets,
        },
        {
            path: '/users',
            name: 'users',
            component: Users,
        },
        {
            path: '/user/create',
            name: 'users-create',
            component: User,
        }, 
        {
            path: '/user/:id',
            name: 'user',
            component: User,
        },
        {
            path: '/pos',
            name: 'pos',
            component: Pos
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/product/create',
            name: 'Product',
            component: Product,
        },  
        {
            path: '/products',
            name: 'products',
            component: Products,
        },
        {
            path: '/product/:id',
            name: 'product',
            component: Product,
        },
        {
            path: '/stock-in/create',
            name: 'milon',
            component: Milon,
        },
        {
            path: '/stock-ins',
            name: 'milons',
            component: Milons,
        },
        {
            path: '/stock-ins/:id',
            name: 'milon',
            component: Milon,
        },
        {
            path: '/stock-in-view/:id',
            name: 'milonView',
            component: MilonView,
        },
        {
            path: '/sales',
            name: 'sales',
            component: Sales,
        },
        {
            path: '/sales/create',
            name: 'sale',
            component: Sale,
        },
        {
            path: '/sales/:id',
            name: 'sale',
            component: Sale,
        },
        {
            path: '/sale-invoice/:id',
            name: 'sumonView',
            component: SumonView,
        },
        {
            path: '/available-products',
            name: 'AvailableProducts',
            component: AvailableProducts,
        },
        {
            path: '/suppliers',
            name: 'suppliers',
            component: Suppliers,
        },
        /* {
            path: '/supplier/create',
            name: 'supplier',
            component: Supplier,
        }, */
        {
            path: '/categories',
            name: 'Categories',
            component: Categories,
        },
        {
            path: '/models',
            name: 'Models',
            component: Models,
        },
        {
            path: '/brands',
            name: 'Brands',
            component: Brands,
        },
        {
            path: '/purchase-return',
            name: 'purchasRetun',
            component: PurchaseRetun,
        },
        {
            path: '/sale-return',
            name: 'saleRetun',
            component: SaleRetun,
        },
        /**Report Route**/
        {
            path: '/daily-inventory-report',
            name: 'DailyInventoryReport',
            component: DailyInventoryReport,
        },
        {
            path: '/date-wise-purchase-report',
            name: 'DateWisePurchaseReport',
            component: DateWisePurchaseReport,
        },
        {
            path: '/date-wise-sales-report',
            name: 'DateWiseSalesReport',
            component: DateWiseSalesReport,
        },
        {
            path: '/date-wise-vat-report',
            name: 'DateWiseVatReport',
            component: DateWiseVatReport,
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
