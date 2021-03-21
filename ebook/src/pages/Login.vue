<template>
  <div class="backgroundNgjyra">
    <div class="main">
      <div class="login-img-div">
        <img src="../assets/loginpic.png" alt="" />
      </div>
      <div class="content">
        <div class="login-content" id="login">
          <p>Login</p>
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
              <a href="forget_password.php">Forgot password?</a>
            </div>
            <div class="butonat-div">
              <button @click="login()" id="loginButton">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {app} from "../../firebase";
export default {
    name:"Login",
    data(){
        return{
            email:"",
            password:""
        }
    },
    methods:{
        login(){
            app.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
                this.$emit("logged",true);
                this.$router.replace({path:'/Home'});
            }).catch(error => {
                alert(error.message);
            });
               
        }
    }
}
</script>

<style scoped>
.main {
  width: 50%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
}

.login-img-div {
  width: 50%;
  position: relative;
}
.signUpButton:nth-of-type(2) {
  display: none;
}
.signUpButton {
  position: absolute;
  top: 80%;
  left: 55%;
  transform: translate(-50%, -50%);
}
.signUpButton button {
  padding: 11px 30px;
  border: none;
  background-color: #e94c37;
  outline: none;
  color: white;
  cursor: pointer;
  border-radius: 50px;
}

.login-img-div img {
  width: 100%;
  height: 100%;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
}

.content {
  width: 50%;
  background-color: #f3f3f3;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  text-align: left;
}

.login-content {
  width: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 20px;
}
.regist-content {
  margin-left: 20px;
  margin-top: 30px;
}

.regist-content p {
  font-size: 30px;
  font-weight: bold;
  font-family: "Segoe UI";
  padding-bottom: 20px;
}
#signup {
  display: none;
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
  width: 80%;
  padding: 5px 0;
  font-size: 17px;
}

.login-form input:focus {
  border-bottom: 1.5px solid #e94c37;
}

.butonat-div {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

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
}
* {
  margin: 0;
  padding: 0;
}
.backgroundNgjyra {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(#e94c37, #9198e5);
}

.changePasswordDiv {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  padding: 100px 0;
  padding-left: 100px;
  border-radius: 50px;
  background-color: white;
}
</style>