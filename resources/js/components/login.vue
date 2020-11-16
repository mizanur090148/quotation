<template>	
   <div class="main-panel">
	   <div class="content-wrapper">
		   <div class="row justify-content-md-center">
			   <div class="col-md-8 justify-content-md-center">
				   <div class="card">
						<div class="card-body">
							<h4 class="card-title">Sign In To Continue</h4> 
							<hr> 
							<form class="forms-sample" @submit.prevent="login">
								<div class="row p-2">
									<div class="col-8">
										<div class="form-group">
											<label>User Name</label> 
											<input type="text" v-model="form.email" placeholder="Enter user name" class="form-control form-control-sm">
										</div>
									</div>
								</div>
								<div class="row p-2">
									<div class="col-8">
										<div class="form-group">
											<label>Password</label>
											<input type="password" v-model="form.password" placeholder="Enter password" class="form-control form-control-sm">
										</div>
									</div>
								</div>								
								<div class="row p-2">
									<div class="col-8">
										<div class="form-group">
											<button type="button" @click="login" class="btn btn-block btn-primary font-weight-medium auth-form-btn">Login</button>											
										</div>
									</div>							
								</div>
							</form>
						</div>
				    </div>
				</div>
			</div>
		</div>
   </div>
</template>

<style scoped>
	.main-panel {
       min-height: 50% !important;
	}
</style>

<script>
  import axios from 'axios'
  axios.defaults.withCredentials = true
  axios.defaults.baseURL = 'http://dev-quotation/'
  axios.crossDomain = true;

  export default {
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
        loggedIn: false
      };
    },
    methods: {
      login() {
		  console.log(this.form.email);
        axios.get("airlock/csrf-cookie").then(response => {
		  axios.post("/api/login", this.form)
			.then(response2 => {				
				localStorage.setItem('loggedIn', 'true');
				this.loggedIn = true;
				this.$router.push({name: 'home'});
			})
			.catch(error => {
				console.log(error)
				this.$snotify.error('Something went worng', 'error');
			});
        });
      }
    }
  };
</script>