<template>
    <div>
        <HeaderUpper :image="image" @active="active"/>
        <Navigation :profile="profile" :loggedIn="loggedIn" :active="activeClass"/>
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
        loggedIn: Boolean
    },
    data(){
        return{
            activeClass:""
        }
    },
    methods:{
        active(){
            this.active="active";
        }
    }
}
</script>