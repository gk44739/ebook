<template>
    <div class="main">
        
        <h2 style="text-align: center; margin-bottom:30px;">ABOUT US</h2>

        <div class="ourmission">
            <img src="../assets/funnylaptop.jpg" />
            <div class="ourmissiontext">
                <h1>OUR MISSION</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                   Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incid
                </p>
            </div>
        </div>

        <div class="meetourteam">
            <h1 style="text-align: center;">MEET OUR TEAM</h1>
            <p style="text-align:center;">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
        </div>

        <div class="people">
            <Employee />
        </div>

        <div class="ourservice">
            <div class="ourservicetext">
            <h1> OUR SERVICE</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incid
            </p>
            </div>
            <img src="../assets/funnyphonecall.jpg" />
        </div>

    </div>
</template>

<script>
import Employee from "../components/Employee"

export default {
    name: "About",
    components:{
        Employee
    }
}
</script>

<style scoped>
.main {
    font-family: 'Segoe UI';
    width: 80%;
    margin: 0 auto;
}
.ourmission{
    display:flex;
    flex-direction: row;
}

.ourmissiontext{
    margin: 40px 20px 20px 20px;
    padding: 5px;
}
.ourmissiontext h1{
    margin-bottom: 40px;
}
.ourmissiontext p{
    line-height: 30px;
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

.ourservice{
    display: flex;
    margin-top: 30px;
    padding-top: 30px;
}
.ourservicetext{
    margin: 50px 20px 20px 20px;
    padding: 5px;
}
.ourservicetext p{
    line-height: 30px;
}
</style>