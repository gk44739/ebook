<template>
    <div class="ourmission">
        <div class="ourMissionImg">
            <img src="../assets/funnylaptop.jpg" />
        </div>

        <div class="ourmissiontext">
            <h2>OUR MISSION</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incid
            </p>
        </div>
    </div>
</template>

<script>

export default {
    name:"AboutBannerFirst",
    props:{

    }
}
</script>

<style scoped>
.ourmission{
    display:flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
}
.ourmission .ourMissionImg{
    width: 50%;
}
.ourmission .ourMissionImg img{
    width: 100%;
}
.ourmissiontext{
    width: 50%;
    padding: 10px 40px;
}
.ourmissiontext h2{
    margin-bottom: 40px;
}
.ourmissiontext p{
    line-height: 30px;
}
@media only screen and (max-width: 1240px){
    .ourmission .ourMissionImg{
        width: 100%;
    }
    .ourmissiontext{
        width:100%;
       
    }   
}

</style>