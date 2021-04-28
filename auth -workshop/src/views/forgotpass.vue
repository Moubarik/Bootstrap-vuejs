<template>
<div class="login">
<h3>Reset Your Password</h3>
<form @submit.prevent="forgot"> 

 <div class="form-group">
  <label>Email</label>
  <input type="email" class="form-control" v-model="email" placeholder="Email"/>
  </div>  
  <button  type="submit" class="btn btn-primary btn-block">reset</button> <br>
 

   </form> 
   </div>
</template>

<script>
import { ref } from 'vue';
import firebase from 'firebase';

export default {
setup() {

    const email = ref("");
 
    const forgot = () => {
        firebase 
        .auth()
        .sendPasswordResetEmail(email.value)
        .then( alert('Check Your mail adresse'))
        .catch(err => alert(err.message));
    }
    return {
        forgot,
        email,
         
    }

}


}
</script>