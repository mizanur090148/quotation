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
//import modelModal from "./components/forms/modals/Model";

window.Form = Form
const Snotifyoptions = {
  toast: {
    position: SnotifyPosition.rightTop
  }
}

Vue.use(VueRouter)
Vue.use(Loading)
Vue.use(VModal)
Vue.use(Toasted)
Vue.use(Snotify, Snotifyoptions);
Vue.component("v-select", vSelect);
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component('v-pagination', VuePagination)
//Vue.component('v-models', modelModal)

import App from './components/App'
import Login from './components/Login'
import Home from './components/Home'

const Users = () => import(/* webpackChunkName: "users" */ './components/lists/Users.vue');
const User = () => import(/* webpackChunkName: "user" */ './components/forms/User.vue');
const Vendors = () => import(/* webpackChunkName: "vendors" */ './components/Vendors.vue');
const Product = () => import(/* webpackChunkName: "product" */ './components/forms/Product.vue');
const Products = () => import(/* webpackChunkName: "products" */ './components/lists/Products.vue');

const Models = () => import(/* webpackChunkName: "models" */ './components/lists/Models.vue');
const Categories = () => import(/* webpackChunkName: "categories" */ './components/lists/Categories.vue');
const Brands = () => import(/* webpackChunkName: "brands" */ './components/lists/Brands.vue');
const Supplier = () => import(/* webpackChunkName: "supplier" */ './components/forms/Supplier.vue');
const Suppliers = () => import(/* webpackChunkName: "suppliers" */ './components/lists/Suppliers.vue');

const StockIns = () => import(/* webpackChunkName: "stockIns" */ './components/lists/StockIns.vue');
const StockIn = () => import(/* webpackChunkName: "StockIn" */ './components/forms/StockIn.vue');
/*  */

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        /* {
            path: '/',
            name: 'home',
            component: Home
        }, */
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
            name: 'StockIn',
            component: StockIn,
        },
        {
            path: '/stock-in',
            name: 'stock-in',
            component: StockIns,
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
            path: '/suppliers',
            name: 'suppliers',
            component: Suppliers,
        },
        {
            path: '/supplier/create',
            name: 'supplier',
            component: Supplier,
        },
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
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
