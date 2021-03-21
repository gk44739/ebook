<template>
    <div class="main">
        <div class="main-content">
            <div class="right-content" style="width: 100%;">
                <div class="title" style="margin-top: 0px;">
                    <div>
                        ALL BOOKS
                    </div>
                </div>
                
                <div class="three-books">
                    <div class="book" v-for="book in books" v-bind:key="book.title">
                        <Book :book="book" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {db} from "../../firebase";
import Book from "../components/Book";

export default{
    name:"AllBooks",
    components:{
        Book
    },
    data(){
        return{
            ref:db.collection('book'),
            books: []
        }
    },
    created(){
        this.ref.limit(6).onSnapshot((querySnapshot)=>{
            this.books=[];
            querySnapshot.forEach((doc)=>{
                this.books.push(doc.data());    
            });
        });
    }
}
</script>
<style scoped>
.main {
    width: 80%;
    margin: 0 auto;
    height: auto;
}
.main-content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.right-content {
    width: 75%;
    height: auto;
}
.right-content img {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #f2f2f2;
}
.right-content .name-div {
    border: none;
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
.three-books {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
.book{
    width: 22%;
    margin-bottom: 30px;
}
.book {
    border: 1px solid #f2f2f2;
    margin-bottom: 15px;
}
</style>