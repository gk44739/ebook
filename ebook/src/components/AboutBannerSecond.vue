<template>
    <div class="ourservice">
        <div class="ourservicetext">
            <h1> OUR SERVICE</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incid
            </p>
        </div>
        <div class="ourServicesImg">
            <img src="../assets/funnyphonecall.jpg" />
        </div>
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
    justify-content: row;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 30px;
    padding-top: 30px;
}
.ourServicesImg{
    width: 50%;
}
.ourServicesImg img{
    width: 100%;
}
.ourservicetext{
    width: 50%;
    padding: 10px 40px;
}
.ourservicetext p{
    line-height: 30px;
}

@media only screen and (max-width: 1240px){
    .ourservice .ourServicesImg{
        order: 1;
        width: 100%;
    }
    .ourservicetext{
        order: 2;
        width:100%;
       
    }   
}
</style>