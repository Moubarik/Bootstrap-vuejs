import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBvCfEV6CoxfiH9VZs04xXlu4SaPxtEthg",
    authDomain: "vue-auth-yt-5d272.firebaseapp.com",
    projectId: "vue-auth-yt-5d272",
    storageBucket: "vue-auth-yt-5d272.appspot.com",
    messagingSenderId: "56175397068",
    appId: "1:56175397068:web:c25595378beb03feaeda69"
  };

  firebase.initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
