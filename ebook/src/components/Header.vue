<template>
    <div>
        <HeaderUpper/>
        <Navigation/>
    </div>
</template>

<script>
import HeaderUpper from "./HeaderUpper";
import Navigation from "./Navigation";
export default{
    name:"Header",
    components:{
        HeaderUpper,
        Navigation
    }

}
</script>