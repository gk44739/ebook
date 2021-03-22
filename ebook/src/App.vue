<template>
  <div id="app">
    <Header :image="image" :profile="profile" :loggedIn="loggedIn" @logout="logout"/>
    <router-view @logged="logged" />
    <Footer :footerImg="footerLogo"/>
  </div>
</template>

<script>
// Images
import logo from "./assets/bookshop2.png"
import profile from "./assets/profile.png"
import footerLogo from "./assets/footerLogo.png"

// Components
import Header from "./components/Header"
import Footer from "./components/Footer"


export default {
  name: 'App',
  data: function () {
      return {
        image: logo,
        profile: profile,
        footerLogo:footerLogo,
        loggedIn: "false",
      }
  },
  components: {
    Header,
    Footer
  },
  methods:{
    logged(value){
      window.localStorage.setItem('logedIn',value);
      this.loggedIn=localStorage.getItem('logedIn',value);
    },
    logout(logout){
      window.localStorage.setItem('logedIn',logout);
      this.loggedIn=localStorage.getItem('logedIn');
    }
  },created(){
    this.loggedIn=localStorage.getItem("logedIn");
  }
  
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
