<template>

 <h3>Register</h3>
 <form @submit.prevent="Register">
 <div class="form-group">
 <label>Full Name</label>
 <input type="text" class="form-control"  v-model="name" placeholder="First Name" />
</div>

 <div class="form-group">
 <label>Email</label>
 <input type="text" class="form-control"  v-model="email" placeholder="Email" />
</div>
<div class="form-group">
 <label>Password</label>
 <input type="Password" class="form-control" v-model="password"  placeholder="Password" />
</div>

  <input type="submit" class="btn btn-primary btn-block " value="Register"> 
    <div class="login-register">
  <p>Have an account? <router-link to="/Login">Login Here</router-link> </p>
</div>
 </form>
                       
</template>
<script>
import firebase from 'firebase';
import { ref } from 'vue';

export default {
	setup() {
		const email = ref("")
		const password = ref("");

		const Register = () => {
			firebase 
			.auth()
			.createUserWithEmailAndPassword(email.value, password.value)
			.then(user => {
				alert(user);
			})
			.catch(err => alert(err.message));
		}
		return {
			Register,
			email,
			password
		}
	}
}
 
</script>