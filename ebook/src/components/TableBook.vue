<template>
    <div class="tabela-forma">
        <table id="tabelaLibri" class="tabelaUser">
            <tr>
                <th>Titulli</th>
                <th>Cmimi</th>
                <th>Foto</th>
                <th>Autori</th>
                <th>Data</th>
                <th colspan="2">Action</th>
            </tr>   
            <tr v-for="book in books" v-bind:key="book.id">
                <td>{{book.data().titulli}}</td>
                <td>{{book.data().cmimi}} €</td>
                <td>{{book.data().foto}}</td>
                <td>{{book.data().autori}}</td>
                <td>{{book.data().data}}</td>
                <td>
                    <a @click="EditBook(book.data(),book.id)">Edit</a>
                    <a @click="DeleteBook(book.id)">Delete</a>
                </td>
            </tr>   
        </table>
    </div>
</template>
<script>
import {db} from "../../firebase"
export default {
    name: "TableBook",
    data(){
        return {
            ref:db.collection('book'),
            books: []
            
        }
    },
    created(){
        this.ref.onSnapshot((querySnapshot)=>{
            this.books = [];
            querySnapshot.forEach((doc)=>{
                this.books.push(doc);
            });
        });
    },
    methods: {
        EditBook(book,bookId){
            this.$emit('EditBook', book,bookId);
        },
        DeleteBook(bookId){
            this.ref.doc(bookId).delete();
        }
    }
}
</script>


<style scoped>
    .tabela-forma{
        width: 70%;
        overflow: auto;
        height: 450px;
        margin-top: 30px;
        padding: 0 15px;
        
    }

    .tabelaUser{
        border-collapse: collapse;
        width: 100%;
        font-size: 13px;
        text-align: left;
    }

     th{
        background-color: #e94c37;
        color: white;
        padding: 5px;
    }
    td{
        padding: 10px;
        font-family: Arial;
    }

    td a{
        text-decoration: none;
        background-color: #e2343f;
        font-size: 13px;
        padding: 6px;
        color: white;
        border-radius: 5px;
    }

    td a:nth-child(1){
        background-color: #41a4c5;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
</style>