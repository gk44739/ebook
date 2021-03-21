<template>
    <div class="header-size">
        <div class="main">
            <div class="header">
                <div class="header-list">
                    <ul style="padding: 15px 0px 15px 0px;">
                        <li><router-link to="/Home" exact>HOME</router-link></li>
                        <li><router-link to="/About" exact>ABOUT US</router-link></li>
                        <li><router-link to="/Contact" exact>CONTACT</router-link></li>
                        <li><router-link to="/AllBooks" exact>BOOKS</router-link></li>
                        <li v-if="loggedIn"><router-link to="/libriAdmin" exact>LIBRI ADMIN</router-link></li>
                        <li v-if="loggedIn"><router-link to="/AboutAdmin" exact>ABOUT ADMIN</router-link></li>
                    </ul>
                </div>

                <div class="header-phone-div">
                    <div class="header-phone-div-content">
                        <button v-if="loggedIn" @click="logout()">
                            <!-- <img :src="profile" style="width:40px; height:40px;" alt=""> -->
                            Logout
                        </button>
                        <button v-else @click="login()">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {app} from "../../firebase"

export default {
    name:"Navigation",
    props:{
        profile: String,
        loggedIn: Boolean
    },methods:{
        logout(){
            app.auth().signOut().then(() => {
                this.loggedIn = false;
                this.$router.replace({path:'/'});
            })
            .catch(error => {
                alert(error.message);
            });
        },
        login(){
            this.$router.replace({path:'/'});
        }
    }
}
</script>

<style scoped>
.router-link-exact-active{
    color: #e94c37;
}

.header-size {
    background-color: #444444;
    width: 100%;
}

.header {
    width: 80%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.header-list {
    color: white;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.header-list ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
}
.header-list ul li {
    font-size: 14px;
    padding: 0 20px;
}

/* .header-list ul a:nth-of-type(1) {
    color: #e94c37;
} */

a {
    color: white;
    text-decoration: none;
}

.header-list ul li:hover {
    color: #e94c37;
}

.header-phone-div {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.header-phone-div-content {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.header-phone-div-content button{
    width: 100%;
    padding: 20px 0px;
    background-color: #e94c37;
    border: 1px solid #e94c37;
    color: #ffffff;
    font-weight: bold;
}

.number{
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
}

.upper {
    width: 100%;
    position: fixed;
    top: 0;
    height: auto;
    background-color: white;
    z-index: 3;
}

.search-icon button:hover{
    color: #e94c37;
}

.search-icon button {
    background-color: white;
    border: none;
    width: 50px;
    font-size: 17px;
    color: black;
    outline: 0;
    cursor: pointer;
}
</style>