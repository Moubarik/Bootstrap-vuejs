<template>
<div class="login">
<h3>Login</h3>
<form @submit.prevent="Login"> 

 <div class="form-group">
  <label>Email</label>
  <input type="email" class="form-control" v-model="email" placeholder="Email"/>
  </div> <div class="form-group"> 
  <label>Password</label> 
  <input type="password" class="form-control" v-model="password" placeholder="Password"/> </div> 
  <button  type="submit" class="btn btn-primary btn-block">Login</button> <br>
  <p>Need an account? <router-link to="/register">Register Here</router-link> </p>
    <p>forgot password? <router-link to="/Forgot-password">click here</router-link> </p>

   </form> 
   </div>
</template>

<script>
import { ref } from 'vue';
import firebase from 'firebase';

export default {
setup() {

    const email = ref("");
    const password = ref("");

    const Login = () => {
        firebase 
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(data => console.log(data))
        .catch(err => alert(err.message));
    }

    return {
        Login,
        email,
        password
    }

}


}
</script>