<template>
<div>
    <div class="containerFull">
        <div class="rowSlider">
            <HomeSlider/>
        </div>
    </div>
    <div class="main">
        <div class="main-content">
            <div class="left-content">
                <div class="title">
                    HOT DEALS
                </div>
                <OfferBook v-if="OfferBook !=''" :OfferBook="OfferBook"/>
                <div class="title">
                    NEW ARRIVALS
                </div>
                <div class="arrival-div" v-for="book in arrivalBooks" v-bind:key="book.title">
                    <LatestBook :book="book"/>
                </div>
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
                    <div class="book" v-for="book in books" v-bind:key="book.title" >
                        <Book :book="book" />
                    </div>
                    
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
                    <div class="book" v-for="featuredBook in featuredBooks" v-bind:key="featuredBook.id">
                        <Book :book="featuredBook"/>
                    </div>  
                </div>
            </div>

        </div>
         <div class="photo-album">
            <div class="foto-1">
                <img :src="require(`../assets/library-1.jpg`)" alt="">
            </div>
            <div class="foto-2">
                <div class="foto1">
                    <img :src="require(`../assets/library-2.jpg`)" alt="">
                </div>
                <div class="foto2">
                    <img :src="require(`../assets/library-3.jpg`)" alt="">
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {db} from "../../firebase";
import HomeSlider from "../components/HomeSlider";
import Book from "../components/Book";
import OfferBook from "../components/OfferBook";
import LatestBook from "../components/LatestBook";
export default {
    name: "Home",
    components:{
        HomeSlider,
        Book,
        OfferBook,
        LatestBook
    },
    data(){
        return{
            ref:db.collection('book'),
            books: [],
            featuredBooks:[],
            OfferBook: "",
            arrivalBooks: []
        }
    },
    created(){
        this.ref.limit(6).onSnapshot((querySnapshot)=>{
            this.books=[];
            querySnapshot.forEach((doc)=>{
                this.books.push(doc.data());    
            });
        });

        this.ref.orderBy("data","desc").limit(8).onSnapshot((querySnapshot)=>{
            this.featuredBooks=[];
            querySnapshot.forEach((doc)=>{
                this.featuredBooks.push(doc.data());    
            });
        });
        
        this.ref.onSnapshot((querySnapshot)=>{
            this.OfferBook = "";
            querySnapshot.forEach((doc)=>{
                if(this.OfferBook != ""){
                    if(doc.data().cmimi < this.OfferBook.cmimi){
                        this.OfferBook = doc.data();
                    }
                }else{
                    this.OfferBook = doc.data();
                }
            });
        });

        this.ref.orderBy("data","desc").limit(4).onSnapshot((querySnapshot)=>{
            this.arrivalBooks=[];
            querySnapshot.forEach((doc)=>{
                this.arrivalBooks.push(doc.data());    
            });
        });
    }
}
</script>


<style>
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
    width: 100%;
    margin: 0 auto;
    border: 1px solid #f2f2f2;
}
.name-div:nth-of-type(2) {
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 5px;
}

.name-div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px;
    font-size: 12px;
    color: black;
}
.price {
    font-weight: bold;
    color: red;
    margin-top: 10px;
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
.three-books .book{
    width: 33.33%;
    padding: 20px;
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
    width: 80px;
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
.foto-1 img{
    width: 100%;
    height: 400px;
}
.foto-2{
    width: 50%;
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.foto1 img{
    width: 100%;
    height: 200px;
}
.foto2 img{
    width: 100%;
    height: 200px;
}
.name-div button{
    
    background-color: #e94c37;
    color: white;
    padding: 5px;
    outline: none;
    cursor: pointer;
    font-size: 12px;
}

.name-div a{
    text-decoration: none;
    border: 1px solid #e94c37;
    background-color: #e94c37;
    color: white;
    padding: 5px;
    outline: none;
    cursor: pointer;
    font-size: 12px;
    transition: .3s ease-in-out;
}
.name-div a:hover{
    color: #e94c37;
    background-color: #ffffff;
    border: 1px solid #e94c37;
}

.four-books .name-div button{
    padding: 3px;
    font-size: 10px;
}
.name-div button:hover{
    background-color: #444444;
}
.containerFull{
    max-width: 100%;
    padding: 0 15px;
    margin: 0 auto;
}
.rowSlider{
    margin: 0 -15px;
}


@media only screen and (max-width: 767px){
    .three-books{
        width: 100%;
        flex-direction: column;
    }

    .three-books .book{
        width: 100%;
    }

    .left-content{
        flex-direction: column;  
        width: 100%;      
    }

    .main-content{
        flex-direction: column;
    }
}

</style>