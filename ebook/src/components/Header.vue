<template>
    <div>
        <HeaderUpper :image="image"/>
        <Navigation :profile="profile" :loggedIn="loggedIn"/>
    </div>
</template>

<script>
import HeaderUpper from "./HeaderUpper";
import Navigation from "./Navigation";
export default{
    name:"Header",
    props:{
        image: String,
        profile: String,
        loggedIn: Boolean
    },
    components:{
        HeaderUpper,
        Navigation
    }

}
</script>