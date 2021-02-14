<template>
    <div v-if="this.$route.path != '/login' ">
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
	        <div class="main-panel">
		       <router-view></router-view>
		    </div>
	    </div>
    </div>
</template>

<script>	
	import Header from './global/Header.vue';	
	import Navbar from './global/Navbar.vue';
	import Footer from './global/Footer.vue';

    export default {

    	components: {	    
	      Header,
	      Navbar,
	      Footer	    
	    }
    }
</script>