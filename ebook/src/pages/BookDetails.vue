<template>
    <div class="main">
        <div class="shop__product">
                <div class="container">
                    <div class="shop__product__inner">
                        <div class="shop__product__text">
                            <div class="shop__product__tittle">
                                <h1>{{Book.titulli}}</h1>
                                <div class="shop__product__price">
                                    <span class="price">{{Book.cmimi}}</span>
                                </div>
                            </div>
                            <p class="text__description">
                                {{Book.autori}},{{Book.data}}
                            </p>
                            <form>
                                <label for="quantity">Quantity :</label>
                                <div class="costum__input">
                                    <input type="number" value="1">
                                    <div id="plus">
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div id="minus"><span></span></div>
                                </div>
                                <button>Buy Now</button>
                            </form>
                            <p>Availability : In Stock</p>
                            <p>Shipping Tax : Free</p>
                        </div>
                        <div class="shop__product__photos">
                            <div class="shop__product__img">
                                <img v-if="Book.foto !=null" :src="require(`../assets/${Book.foto}`)">
                            </div>
                            <div class="shop__product__img__nav">
                                <ul class="shop__thumbnails" v-if="Book.foto !=null">
                                    <li class="shop__thumbnails__li active"><img :src="require(`../assets/${Book.foto}`)" ></li>
                                    <li class="shop__thumbnails__li"><img :src="require(`../assets/${Book.foto}`)"></li>
                                    <li class="shop__thumbnails__li"><img :src="require(`../assets/${Book.foto}`)"></li>
                                    <li class="shop__thumbnails__li"><img :src="require(`../assets/${Book.foto}`)"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
import {db} from "../../firebase";
export default {
    name: "BookDetails",
    data(){
        return {
           Book: {}
        }
    },
    created(){
       let t = this.$route.params.titulli;
       db.collection("book").where("titulli", "==", t)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.Book = doc.data()
            });
        });
    }
}
</script>
<style scoped>
.shop__tittle__banner{
    background-color: #e5e6e8;
}
.shop__tittle__banner__inner{
    text-align: center;
    padding: 80px 0;
}
.shop__tittle__banner__inner h1,
.shop__tittle__banner__inner p{
    margin: 20px 0;
}
.shop__product__inner{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 150px 0;
}
.shop__product__text,
.shop__product__photos{
    width: 50%;
    padding: 0 15px;
}
.shop__product__text{
    text-align: left;
}
.shop__product__text h1{
    margin-bottom: 30px;
}
.shop__product__tittle{
    border-bottom: 1px solid #ebebeb;
}
.shop__product__price{
    margin-bottom: 30px;
}
.shop__product__price span{
    font-weight: bold;
    color: #e94c37;
    margin-bottom: 30px;
}
.shop__product__price span:after{
    content: '\20ac';
    padding: 0 10px;
}
.shop__product__price .price{
    font-size: 30px;
}
.shop__product__price .old__price{
    font-size: 20px;
    color: #000;
    text-decoration: line-through;
    padding-left: 0;
}
.text__description{
    margin: 30px 0 40px 0;
}
.shop__product__text p{
    margin: 15px 0;
}
.shop__product__text form{
    display: flex;
    align-items: center;
    margin: 50px 0;
}
.shop__product__text form input[type="number"]{
    width: 110px;
    height: 55px;
    border: 1px solid #e5e6e8;
    text-align: center;
    font-size: 20px;
    margin: 0 15px;
    outline: none;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.costum__input{
    position: relative;
}
#plus,
#minus{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:0;
    width: 20px;
    height: 100%;
    font-size: 20px;
    cursor: pointer;
    padding: 0 5px;
    font-size: 30px ;
    font-weight: lighter;
}
#minus{
    left: 15%;
}
#minus span{
    content: '';
    width: 13px;
    height: 1px;
    background-color: #000;
}
#plus{
    right: 15%;
}
#plus span{
    position: absolute;
    content: '';
    width: 13px;
    height: 1px;
    background-color: #000;
}
#plus span:first-child{
    transform: rotate(90deg);
}
.shop__product__text form input::placeholder{
    color: #000;
}
.shop__product__text form button{
    background-color: #e94c37;
    color: #ffff;
    padding: 20px 30px;
    border: none;
    cursor: pointer;
    border: 1px solid #e94c37;
    transition: ease-in-out .3s;
}
.shop__product__text form button:hover{
    background-color: #fff;
    color: #e94c37;
}
.shop__product__photos{
    display: flex;
    flex-direction: row;
}
.shop__product__img{
    width: 80%;
    border: 1px solid #e5e6e8;
    margin: 0 15px;
}
.shop__product__img__nav{
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 15px;
}
.shop__product__img__nav ul li{
    list-style: none;
    margin: 10px 0;
    border: 1px solid #e5e6e8;
    cursor: pointer;
    transition: ease-in-out .3s;
}
.shop__product__img__nav ul li:hover,
.shop__product__img__nav ul li.active{
    border: 1px solid #e94c37;
}
.shop__product__img__nav ul li img{
    width: 100%;
    object-fit: cover;
}
.shop__product__img__nav ul li:first-child{
    margin-top: 0;
}
.shop__product__img__nav ul li:last-child{
    margin-bottom: 0px;
}
.shop__product__img img{
    width: 100%;
    height: 500px;
    object-fit: contain;
}

</style>