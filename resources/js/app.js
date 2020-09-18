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

import App from './components/App'
import Hello from './components/Hello'
import Login from './components/Login'
import Home from './components/Home'
import Table from './components/Table'
import Forms from './components/Forms'
import StoreInfo from './components/StoreInfo'
import StoreInfoForm from './components/StoreInfoForm'
import Users from './components/Users'
import UserForm from './components/UserForm'

const Vendors = () => import(/* webpackChunkName: "vendors" */ './components/Vendors.vue');
const Services = () => import(/* webpackChunkName: "services" */ './components/Services.vue');
const Quotations = () => import(/* webpackChunkName: "quotations" */ './components/Quotations.vue');
const QuotationForm = () => import(/* webpackChunkName: "quotationform" */ './components/QuotationForm.vue');
const ServiceCategories = () => import(/* webpackChunkName: "servicecategories" */ './components/ServiceCategories.vue');
const TermsAndConditions = () => import(/* webpackChunkName: "termsandconditions" */ './components/TermsAndConditions.vue');

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
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
        {
            path: '/table',
            name: 'table',
            component: Table,
        },
        {
            path: '/form',
            name: 'form',
            component: Forms,
        },
        {
            path: '/store-info',
            name: 'store-info',
            component: StoreInfo,
        },
        {
            path: '/store-info/create',
            name: 'store-info-create',
            component: StoreInfoForm,
        },
        {
            path: '/users',
            name: 'users',
            component: Users,
        },
        {
            path: '/users/create',
            name: 'users-create',
            component: UserForm,
        },
        {
            path: '/quotations',
            name: 'quotations',
            component: Quotations,
        },
        {
            path: '/quotations/create',
            name: 'quotationform',
            component: QuotationForm,
        },
        {
            path: '/service-categories',
            name: 'service-categories',
            component: ServiceCategories,
        },
        {
            path: '/services',
            name: 'services',
            component: Services,
        },
        {
            path: '/vendors',
            name: 'vendors',
            component: Vendors,
        },
        {
            path: '/terms-and-conditions',
            name: 'terms-and-conditions',
            component: TermsAndConditions,
        }        
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
