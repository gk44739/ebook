<template>
    <div>
        <HeaderUpper :image="image"/>
        <Navigation :profile="profile" />
    </div>
</template>

<script>
import HeaderUpper from "./HeaderUpper";
import Navigation from "./Navigation";
export default{
    name:"Header",
    props:{
        image: String,
        profile: String
    },
    components:{
        HeaderUpper,
        Navigation
    }

}
</script>