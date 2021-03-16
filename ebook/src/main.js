import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from "./routers/routes"
import firebase from "firebase/app"



Vue.config.productionTip = false

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnvkeRTHdwjx9JuvDnEX1b7DeFZO1ku_c",
  authDomain: "ebook-cba5f.firebaseapp.com",
  databaseURL: "https://ebook-cba5f-default-rtdb.firebaseio.com",
  projectId: "ebook-cba5f",
  storageBucket: "ebook-cba5f.appspot.com",
  messagingSenderId: "802485317478",
  appId: "1:802485317478:web:4257c30f281e6d57b9e2a7",
  measurementId: "G-74ECFM5NNC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.use(VueRouter);
const router = new VueRouter ({
  mode:"history",
  routes
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
