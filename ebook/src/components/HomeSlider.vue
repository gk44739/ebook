<template>
    <div class="homeSlickSlider">
        <VueSlickCarousel :arrows="true" :dots="true">
            <div><img :src="require(`../assets/funnylaptop.jpg`)" alt=""></div>
            <div><img :src="require(`../assets/foto1.png`)" alt=""></div>
            <div><img :src="require(`../assets/foto2.png`)" alt=""></div>
            <div><img :src="require(`../assets/foto3.png`)" alt=""></div>
        </VueSlickCarousel>
    </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
 import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    components:{
        VueSlickCarousel
    }
}
</script>
<style>
.homeSlickSlider div{
    height: calc(100vh - 193px);
    background: #000;
}
.homeSlickSlider .slick-arrow{
    z-index: 100;
}
.homeSlickSlider .slick-arrow.slick-prev{
    left: 25px;
}
.homeSlickSlider .slick-arrow.slick-next{
    right: 25px;
}
.homeSlickSlider .slick-dots{
    bottom:0px;
}
.homeSlickSlider .slick-dots li button::before{
    color: #ffffff;
}
.homeSlickSlider div img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>