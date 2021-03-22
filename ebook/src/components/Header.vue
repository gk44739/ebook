<template>
    <div class="header">
        <div class="hamburgerButton" :class="[this.activeClass ? 'active' : '']"  @click="openNavigationHandler()">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <HeaderUpper :image="image" />
        <Navigation :profile="profile" :loggedIn="loggedIn" @logout="logout" :activeClass="activeClass" @closeNavHandler="closeNavHandler"/>
    </div>
</template>

<script>
import HeaderUpper from "./HeaderUpper";
import Navigation from "./Navigation";

export default {
    name:"Header",
    components:{
        HeaderUpper,
        Navigation
    },
    props:{
        image: String,
        profile: String,
        loggedIn: String
    },
    data(){
        return{
            activeClass:false,
        }
    },
    methods:{
        openNavigationHandler(){
            this.activeClass=!this.activeClass;
        },
        closeNavHandler(){
           this.activeClass = !this.activeClass
        },
        logout(logout){
            this.$emit('logout',logout);
        }
    },
}
</script>
<style scoped>
    .header{
        position: relative;
    }
    .header .hamburgerButton.active span:nth-child(1){
        transform: rotate(45deg);
        margin-bottom: -10px;
    }
    .header .hamburgerButton.active span:nth-child(2){
        visibility: hidden;
        opacity: 0;
        height: 0px;
    }
    .header .hamburgerButton.active span:nth-child(3){
        transform: rotate(-45deg);
    }
    .header .hamburgerButton span{
        display: block;
        width: 35px;
        height: 5px;
        background: #000;
        margin: 5px 0;
        border-radius:20px;
        transition: .3s linear;
    }
    .header .hamburgerButton{
        display: none;
        cursor: pointer;
        position: absolute;
        top: 50px;
        right: 0;
        transform: translate(-50%,-50%);
        z-index: 1;
    }
    @media only screen and (max-width: 767px){
    .header .hamburgerButton{
        display: block;
    }
}
</style>