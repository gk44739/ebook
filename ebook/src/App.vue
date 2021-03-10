<template>
  <div id="app">
    <Header :image="image" :profile="profile" />
<<<<<<< HEAD
    <Home :person="person"/>
    <Footer :footerImg="footerLogo"/>
=======
    <Home :person="person" :arrival="arrival" />
>>>>>>> 734c4aec889f1cad7fdd0e592bd5fa910df78039
  </div>
</template>

<script>
<<<<<<< HEAD
// Images
import Header from "./components/Header"
import logo from "./assets/bookshop2.png"
import profile from "./assets/profile.png"
import person from "./assets/personi.png"
import footerLogo from "./assets/footerLogo.png"

// Components
import Home from "./pages/Home"
import Footer from "./components/Footer"
=======
// Image imports
import logo from "./assets/bookshop2.png"
import profile from "./assets/profile.png"
import person from "./assets/personi.png"
import arrival from "./assets/arrival.png"
//--------------

// Component imports
import Header from "./components/Header"
import Home from "./pages/Home"
// -----------------
>>>>>>> 734c4aec889f1cad7fdd0e592bd5fa910df78039

export default {
  name: 'App',
  data: function () {
      return {
          image: logo,
          profile: profile,
          person: person,
<<<<<<< HEAD
          footerLogo:footerLogo
=======
          arrival: arrival
>>>>>>> 734c4aec889f1cad7fdd0e592bd5fa910df78039
      }
  },
  components: {
    Header,
    Footer,
    Home,
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
