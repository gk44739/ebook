<template>
    <div class="backgroundNgjyra">
    <div class="main">
      <div class="loginForm">
        <div class="login-img-div">
          <div class="backToHome">
            <router-link to="/" exact>Back Home</router-link>
          </div>
          <img src="../assets/loginpic.png" alt="" />
        </div>
        <div class="content">
          <div class="loginError" :class="[active ? 'active' : '']">{{errormessage}}</div>
          <div class="login-content" id="login">
            <p>Sign Up</p>
            <form @submit.prevent>
              <div class="login-form">
                <label for="">E-mail</label><br />
                <input type="text" v-model="email" id="emailLoginInput" />
              </div>
              <div class="login-form">
                <label for="">Password</label><br />
                <input type="password" v-model="password" id="passwordInput" />
              </div>
              <div class="login-form">
                <label for="">Confirm Password</label><br />
                <input type="password" v-model="confirmPassword" id="confirmPassword" />
              </div>
              <div class="butonat-div">
                <button @click="signUp()" id="loginButton">Sign Up</button>
                <router-link to="/Login">Login</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {app} from "../../firebase";
export default {
    name:'SignUp',
    data() {
        return {
            email:"",
            password:"",
            confirmPassword:"",
            active:false,
            errormessage:""
        }
    },
    methods:{
        signUp(){
          if(this.password === this.confirmPassword){
            app.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
              this.$router.replace({path:'/Login'});
            }).catch(error => {
              this.active=true;
              this.errormessage=error.message;
              setTimeout(()=>{
                this.active=false;
              },5000)
            });
          }else{
            this.active = true;
            this.errormessage="Your confirm password is not matching !";
            setTimeout(()=>{
              this.active = false;
            },5000)
          }
           
        }
    },
}
</script>
<style scoped>
.backgroundNgjyra {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(#e94c37, #9198e5);
  z-index: 9999;
  display: flex;
  align-items: center;
}
.main {
  width: 85%;
  padding: 0 15px;
}
.loginForm{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.login-img-div {
  position: relative;
  width: 50%;
  height: 100%;
}

.login-img-div img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
}
.content {
  position: relative;
  width: 50%;
  height: 100%;
  background-color: #f3f3f3;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
}
.content .loginError{
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  align-items: center;
  text-align: center;
  opacity: 0;
  background: #e94c37;
  color: #ffffff;
  width: 90%;
  border-radius: 20px;
  padding: 0px;
  transition: .3s ease-in-out;
  text-align: center;
  width: 90%;
}
.content .loginError.active{
  visibility: visible;
  opacity: 1;
  padding: 20px 40px;
}
.backToHome{
  position: absolute;
  bottom: 20px;
  right: 50%;
  transform: translateX(50%);
}
.backToHome a{
  color: #ffffff;
  background: #e94c37;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none;
}
.loginDescription{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  max-width: 500px;
  padding: 20px 10px;
  background-color: #e94c37;
  color: #ffffff;
}
.login-content {
  width: 100%;
}

.login-content p {
  font-size: 30px;
  font-weight: bold;
  font-family: "Segoe UI";
  padding-bottom: 20px;
}

.login-form label {
  color: gray;
  font-weight: bold;
  font-size: 14px;
  font-family: "Segoe UI";
}
.login-form {
  width: 100%;
  margin-top: 30px;
}

.login-form input {
  background: none;
  border: none;
  outline: none;
  border-bottom: 1.5px solid lightgray;
  width: 100%;
  padding: 5px 0;
  font-size: 17px;
}

.login-form input:focus {
  border-bottom: 1.5px solid #e94c37;
}

.butonat-div {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.butonat-div a,
.butonat-div button {
  margin: 20px;
  border: none;
  background-color: #e94c37;
  outline: none;
  padding: 10px 0;
  width: 100px;
  color: white;
  cursor: pointer;
  border-radius: 50px;
  text-decoration: none;
  font-size: 12px;
  text-align: center;
}
@media only screen and (max-width: 767px){
  .loginForm{
    flex-direction: column;
    height: auto;
  }
  .login-img-div{
    width: 100%;
    height: 200px;
  }
  .login-img-div img{
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    border-bottom-left-radius:unset;
  }

  .content{
    width: 100%;
    padding: 0 50px;
    text-align: center;
    border-top-right-radius: unset;
    border-bottom-right-radius: 40px;
    border-bottom-left-radius: 40px;
  }
  .content .loginError{
    top: -35%;
  }
  .loginDescription h1{
    font-size: 25px;
  }
}
</style>