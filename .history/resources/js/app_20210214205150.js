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
//import VCalendar from 'v-calendar';
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import FullCalendar from 'vue-full-calendar'

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
Vue.use(FullCalendar);
//Vue.component('v-models', modelModal)
/* Vue.use(VCalendar, {
    componentPrefix: 'vc',
});
   */
Vue.component('v-calendar', Calendar)
Vue.component('v-date-picker', DatePicker)

import App from './components/App'
import Login from './components/Login'
import Dashboard from './components/Home'

const Outlets = () =>
    import ( /* webpackChunkName: "outlets" */ './components/lists/Outlets.vue');
const Users = () =>
    import ( /* webpackChunkName: "users" */ './components/lists/Users.vue');
const User = () =>
    import ( /* webpackChunkName: "user" */ './components/forms/User.vue');
const VisitSchedule = () =>
    import ( /* webpackChunkName: "VisitSchedule" */ './components/forms/VisitSchedule.vue');
const ReviewVisitSchedule = () =>
    import ( /* webpackChunkName: "ReviewSchedule" */ './components/forms/ReviewVisitSchedule.vue');
const VisitSchedules = () =>
    import ( /* webpackChunkName: "VisitSchedules" */ './components/lists/VisitSchedules.vue');

// inventory report
const DailyInventoryReport = () =>
    import ( /* webpackChunkName: "dateWiseInventory" */ './components/Reports/DailyInventoryReport.vue');
// reports area
const DateWisePurchaseAndSaleReport = () =>
    import ( /* webpackChunkName: "dateWisePurchaseAndSaleReport" */ './components/Reports/DateWisePurchaseAndSaleReport.vue');
const DateWiseSalesReport = () =>
    import ( /* webpackChunkName: "dateWiseSales" */ './components/Reports/DateWiseSales.vue');
const DateWisePurchaseReport = () =>
    import ( /* webpackChunkName: "dateWisePurchase" */ './components/Reports/DateWisePurchase.vue');
const DateWiseVatReport = () =>
    import ( /* webpackChunkName: "dateWiseVat" */ './components/Reports/DateWiseVat.vue');

const router = new VueRouter({
    mode: 'history',
    routes: [
        /* {
            path: '/login',
            name: 'login',
            component: Login,
            meta: { guestOnly: true }
        }, */
        {
            path: '/',
            name: 'login',
            component: Login,
            meta: { guestOnly: true }
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
            meta: { authOnly: true }
        },
        {
            path: '/user/create',
            name: 'users-create',
            component: User,
            meta: { authOnly: true }
        },
        {
            path: '/user/:id',
            name: 'user',
            component: User,
            meta: { authOnly: true }
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: { authOnly: true }
        },
        {
            path: '/visit-schedules/create',
            name: 'Visit Schedule',
            component: VisitSchedule,
            meta: { authOnly: true }
        },
        {
            path: '/visit-schedules/:id',
            name: 'Visit Schedule',
            component: VisitSchedule,
            meta: { authOnly: true }
        },
        {
            path: '/review-visit-schedules/:id',
            name: 'Review Schedule',
            component: ReviewVisitSchedule,
            meta: { authOnly: true }
        },
        {
            path: '/visit-schedules',
            name: 'VisitSchedules',
            component: VisitSchedules,
            meta: { authOnly: true }
        }
    ]
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});

function isLoggedIn() {
    let auth = localStorage.getItem("auth");
    alert(auth);
}

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authOnly)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (isLoggedIn() == 'false') {
            next({
                path: '/',
                query: { redirect: to.fullPath }
            })
        } else {

            next()
        }
    } else if (to.matched.some(record => record.meta.guestOnly)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (isLoggedIn()) {
            next({
                path: '/dasboard',
                query: { redirect: to.fullPath }
            })
        } else {
            next({
                path: '/',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        // next() // make sure to always call next()!
    }
})