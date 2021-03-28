<template>
<div v-if="auth == 'true'">
    <Header></Header>
    <div class="container-fluid page-body-wrapper">
        <Navbar></Navbar>
        <div class="main-panel">
            <router-view></router-view>
            <Footer></Footer>
        </div>
    </div>
</div>
<div v-else>
    <div class="container-fluid page-body-wrapper">
        <div style="width: 257px !important;"></div>
        <div class="main-panel"> <span></span>
            <router-view></router-view>
        </div>
    </div>
</div>
</template>

<script>
import Api from "../apis/Api";
import Header from './global/Header.vue';
import Navbar from './global/Navbar.vue';
import Footer from './global/Footer.vue';

export default {

    data() {
        return {
            loggedIn: false,
            auth: false
        }
    },
	mounted() {
		this.auth = localStorage.getItem('auth');
        this.getUser();
	},
    components: {
        Header,
        Navbar,
        Footer
    },
    methods: {
        getUser() {
            Api.get("user")
                .then((res) => {
                    localStorage.setItem('auth', true)
                })
                .catch((error) => {
                    localStorage.setItem('auth', false)
                    this.$router.push({name: 'login'});
                })
        }
    }
}
</script>
