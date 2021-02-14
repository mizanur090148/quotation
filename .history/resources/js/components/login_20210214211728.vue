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
											<label>Email</label> 
											<input type="text" v-model="form.email" placeholder="Enter user name" class="form-control form-control-sm">
											<small class="text-danger" v-if="errors.email">{{ errors.email[0] }}</small>
										</div>
									</div>
								</div>
								<div class="row p-2">
									<div class="col-8">
										<div class="form-group">
											<label>Password</label>
											<input type="password" v-model="form.password" placeholder="Enter password" class="form-control form-control-sm">
											<small class="text-danger" v-if="errors.password">{{ errors.password[0] }}</small>
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

<script>
	import User from "../apis/User";

	export default {
		data() {
			return {
				form: {
					email: '',
					password: ''
				},
				loggedIn: false,
				errors: []
			}
		},
		methods: {
			login() {
				User.login(this.form)
					.then(response => {
						this.loggedIn = true;
						localStorage.setItem('auth', true);
 						localStorage.setItem('user', response.data.user);
						//this.$router.push({name: 'dashboard'});
						window.location.href = '/dashboard';
					})
					.catch(error => {
						if (error.response.status === 422) {
							this.errors = error.response.data.errors;
						}
					});
			}
		}
	};
</script>


<style scoped>
	.main-panel {
       min-height: 50% !important;
	}
</style>