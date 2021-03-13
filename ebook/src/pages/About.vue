<template>
    <div class="main">
        
        <h2 style="text-align: center; margin-bottom:30px;">ABOUT US</h2>

        <AboutBannerFirst />

        <div class="meetourteam">
            <h1 style="text-align: center;">MEET OUR TEAM</h1>
            <p style="text-align:center;">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
        </div>

        <div class="people">
            <Employee />
        </div>
        
        <AboutBannerSecond />

    </div>
</template>

<script>
import Employee from "../components/Employee"
import AboutBannerFirst from "../components/AboutBannerFirst"
import AboutBannerSecond from "../components/AboutBannerSecond"

export default {
    name: "About",
    components:{
        Employee,
        AboutBannerFirst,
        AboutBannerSecond
    },
}
</script>

<style scoped>
.main {
    font-family: 'Segoe UI';
    width: 80%;
    margin: 0 auto;
}

.meetourteam{
    margin-top: 30px;
}
.meetourteam p{
    line-height: 30px;
}

.people{
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 50px;
}

.people img{
    border-radius: 50%;
}


</style>