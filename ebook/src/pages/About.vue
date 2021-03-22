<template>
    <div class="aboutPage">
        <div class="main">
            
            <h2 style="text-align: center; margin-bottom:30px;">ABOUT US</h2>

            <AboutBannerFirst />

            <div class="meetourteam">
                <h1 style="text-align: center;">MEET OUR TEAM</h1>
                <p style="text-align:center;">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
            </div>

            <div class="people">
                <div class="guy1"  v-for="Employee in employees" v-bind:key="Employee.id">
                    <Employee :Employee="Employee" />
                </div>
            </div>
            
            <AboutBannerSecond />

        </div>
    </div>
</template>

<script>
import Employee from "../components/Employee"
import AboutBannerFirst from "../components/AboutBannerFirst"
import AboutBannerSecond from "../components/AboutBannerSecond"
import {db} from "../../firebase";

export default {
    name: "About",
    components:{
        Employee,
        AboutBannerFirst,
        AboutBannerSecond
    },
    data(){
        return{
            ref:db.collection('Employee'),
            employees: []
        }
    },
    created(){
        this.ref.onSnapshot((querySnapshot)=>{
            this.employees=[];
            querySnapshot.forEach((doc)=>{
                this.employees.push(doc.data());    
            });
        });
    }
}
</script>

<style scoped>
.aboutPage{
    padding: 100px 0 200px 0;
}
.main {
    font-family: 'Segoe UI';
    width: 80%;
    margin: 0 auto;
}
.aboutPage .main h1{
    margin: 10px 0 50px;
}
.meetourteam{
    margin: 100px 0;
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

@media only screen and (max-width: 1240px){
    
}
</style>