<template>
    <div class="main">

        <div class="main-content">

            <div class="left-content">
                <div class="title">
                    HOT DEALS
                </div>
                <OfferBook/>
                <div class="title">
                    NEW ARRIVALS
                </div>
                <LatestBook/>
                <div class="title">
                    TESTIMONIALS
                </div>
                <div class="personi">
                    <div class="personi-foto">
                        <img src="../assets/personi.png" alt="">
                    </div>
                    <div class="personi-name">
                        JANE DOE <br>
                        <span>Web Designer</span>
                    </div>
                    <div class="personi-content">
                        <span>&#8220;</span> <br>
                        Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. 
                        Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, 
                        when an unknown printer took Lorem Ipsum is simply...
                        <br><span>&#8221;</span>
                    </div>
                </div>
            </div>

            <div class="right-content">
                <div class="title">
                    <div>
                        BEST SELLER
                    </div>
                    <div>
                        <a href="AllBooks.php">SEE MORE</a>
                    </div>
                </div>
                
                <div class="three-books">
                    <!-- Book component -->
                    <Book />
                </div>
                
                <div class="new-arrival">
                    <img src="../assets/arrival.png" alt="">
                    <div>
                        <h2>
                            <span>NEW</span><br>ARRIVALS
                        </h2>
                        <p>
                            Lorem Ipsum is simply <br>dummy text
                        </p>
                    </div>
                </div>
                <div class="title">
                    <div>
                    FEATURED PRODUCTS
                    </div>
                    <div>
                        <a href="AllBooks.php">SEE MORE</a>
                    </div>
                </div>
                <div class="four-books">
                    <div class="book">
                        <img src="Images/test" alt="Photo">
                        <div class="name-price">
                            <div class="name-div">
                                <div class="name">
                                    Title 
                                </div>
                                <div class="rating">
                                    <!-- <i>Autori:</i>    -->
                                    Autori
                                </div>
                            </div>
                            <div class="name-div">
                                <p>
                                    <a href="book.php">Buy now</a>
                                </p>
                                <p class="price">
                                    Price
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
         <div class="photo-album">
            <div class="foto-1">
                <img src="../assets/foto1.png" alt="">
            </div>
            <div class="foto-2">
                <div class="foto1">
                    <img src="../assets/foto2.png" alt="">
                </div>
                <div class="foto2">
                    <img src="../assets/foto3.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Book from "../components/Book"
import OfferBook from "../components/OfferBook"
import LatestBook from "../components/LatestBook"
export default {
    name: "Home",
    components:{
        Book,
        OfferBook,
        LatestBook
    }
}
</script>


<style>
.main {
    width: 80%;
    margin: 0 auto;
    height: auto;
}

.sliderFull{
    width: 100%;
    height: auto;
    position: relative;
}

.sliderFull img{
    width: 100%;
    height: 100%;
}
.show-slide{
    display: block;
    animation: fade_in_show 0.2s
}
.remove-slide{
    display: none;
}

@keyframes fade_in_show {
    0% {
         opacity: 0;
    }
    50%{
        opacity: 0.5;
    }
    100% {
         opacity: 1;
    }
}

.button-slideshow{
    width: 80px;
    height: 80px;
    cursor: pointer;
}

.button-slideshow:hover{
    width: 100px;
}

.button-slideshow img{
    width: 100%;
    height: 100%;
}
.left-content-slidershow{
    display: flex;
    flex-direction: row;
    height: 80px;
}

.slidershow-text{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10%;
    color: white;
}

.slidershow-text p{
    padding-top: 10px;
    font-style: italic;
}

.slidershow-content{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
}

.learn {
    height: 45px;
    width: 150px;
    background-color: #e94c37;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    font-size: 15px;
}
.learn:hover{ 
    background-color: #444444;
}
.main-content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.left-content {
    width: 22%;
    height: auto;
}

.right-content {
    width: 75%;
    height: auto;
}

.title {
    margin-top: 30px;
    background-color: #f2f2f2;
    font-weight: bold;
    padding: 14px 40px 16px 20px;
    font-family: 'Segoe UI';
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.title a{
    text-decoration: none;
    color: black;
}

.title a:hover{
    color: red;
}

.first-offer {
    margin-top: 20px;
    width: 100%;
    height: auto;
    border: 1px solid #f2f2f2;
}
.offer-pic img {
    width: 100%;
}
.offer-pic {
    border-bottom: 1px solid #f2f2f2;
}

.name-price {
    width: 90%;
    margin: 0 auto;
}
.name-div:nth-of-type(2) {
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 5px;
}

.name-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
    font-size: 12px;
    color: black;
}
.price {
    font-weight: bold;
    color: red;
}
.offer-time {
    padding: 10px 0;
    font-size: 17px;
    color: red;
}

.three-books {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
.four-books{
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
.four-books .book{
    width: 22%;
    margin-bottom: 30px;
}
.right-content img {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #f2f2f2;
}

.book {
    border: 1px solid #f2f2f2;
    margin-bottom: 15px;
}
.right-content .name-div {
    border: none;
}

.new-arrival {
    width: 100%;
    height: auto;
    margin-top: 40px;
    position: relative;
}
.new-arrival div {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 50px;
    color: white;
}
.new-arrival div span {
    font-weight: normal;
    font-style: italic;
}
.new-arrival p {
    padding-top: 10px;
    font-style: italic;
}
.checked{
    color: #ffd559;
}
.arrival-div{
    width: 100%;
    height: auto;
    margin-top: 30px;
    border: 1px solid #f2f2f2;
}

.arrival-book{
    width: 85%;
    margin: 20px auto;
    padding-bottom: 35px;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #f2f2f2;
}
.arrival-book:nth-of-type(4){
    border: none;
    padding-bottom: 13px;
}
.arrival-img img {
    width: 100px;
    height: auto;
    border: 1px solid #f2f2f2;
}
.arrival-book-content {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 13px;
}
.arrival-book-content div:nth-child(2){
    padding: 5px 0;
}
.personi{
    margin-top: 30px;
    width: 100%;
    border: 1px solid #f2f2f2;
    display: flex;
    flex-direction: column;
    text-align: center;
}
.personi-foto img{
    border-radius: 50px;
}
.personi-foto {
    padding-top: 30px;
    padding-bottom: 15px;
}
.personi-name{
    font-size: 18px;
}
.personi-name span{
    font-size: 15px;
    color: gray;
}
.personi-content{
    text-align: justify;
    margin: 20px;
    font-size: 15.5px;
}
.personi-content span{
    font-size: 40px;
    font-weight: bold;
}
.photo-album{
    margin-top: 30px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.photo-album img {
    width: 100%;
}
.foto-1{
    width: 50%;
    margin-right: 16px;
}
.foto-2{
    width: 50%;
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.name-div button{
    border: none;
    background-color: #e94c37;
    color: white;
    padding: 5px;
    outline: none;
    cursor: pointer;
    font-size: 12px;
}

.name-div a{
    border: none;
    background-color: #e94c37;
    color: white;
    padding: 5px;
    outline: none;
    cursor: pointer;
    font-size: 12px;
}

.four-books .name-div button{
    padding: 3px;
    font-size: 10px;
}
.name-div button:hover{
    background-color: #444444;
}
</style>