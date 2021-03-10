<template>
  <div id="app">
    <Header :image="image" :profile="profile" />
    <router-view />
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
        footerLogo:footerLogo
      }
  },
  components: {
    Header,
    Footer
  }
  
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
