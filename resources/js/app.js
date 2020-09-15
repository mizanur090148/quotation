//require('./bootstrap');

import Vue from 'vue'
import VModal from 'vue-js-modal'
import Snotify, { SnotifyPosition } from 'vue-snotify'
import VueRouter from 'vue-router'
import { Form, HasError, AlertError } from 'vform'
import Loading from 'vue-loading-overlay'
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
import UserList from './components/UserList'
import UserForm from './components/UserForm'

import Outlets from './components/Outlets'
import Categories from './components/Categories'
import SubCategories from './components/SubCategories'
import Colors from './components/Colors'
//import Sizes from './components/Sizes'

const Sizes = () => import(/* webpackChunkName: "sizes" */ './components/Sizes.vue');

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
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
            component: UserList,
        },
        {
            path: '/users/create',
            name: 'users-create',
            component: UserForm,
        },
        {
            path: '/categories',
            name: 'categories',
            component: Categories,
        },
        {
            path: '/sub-categories',
            name: 'sub-categories',
            component: SubCategories,
        },
        {
            path: '/outlets',
            name: 'outlets',
            component: Outlets,
        },
        {
            path: '/colors',
            name: 'colors',
            component: Colors,
        },
        {
            path: '/sizes',
            name: 'sizes',
            component: Sizes,
        }        
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
