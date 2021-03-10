<template>
  <div id="app">
    <Header :image="image" :profile="profile" />
    <Home :person="person"/>
  </div>
</template>

<script>
import Header from "./components/Header"
import logo from "./assets/bookshop2.png"
import profile from "./assets/profile.png"
import person from "./assets/personi.png"
import Home from "./pages/Home"

export default {
  name: 'App',
  data: function () {
      return {
          image: logo,
          profile: profile,
          person: person
      }
  },
  components: {
    Header,
    Home
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
