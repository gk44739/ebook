<template>
    <div class="ourmission">
            <img src="../assets/funnylaptop.jpg" />
            <div class="ourmissiontext">
                <h1>OUR MISSION</h1>
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

</style>