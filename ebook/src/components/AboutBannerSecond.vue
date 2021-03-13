<template>
    <div class="ourservice">
            <div class="ourservicetext">
            <h1> OUR SERVICE</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incid
            </p>
            </div>
            <img src="../assets/funnyphonecall.jpg" />
        </div>
</template>

<script>

export default {
    name:"AboutBannerSecond",
    props:{

    }
}
</script>

<style scoped>
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