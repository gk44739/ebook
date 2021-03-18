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
                <td>{{book.titulli}}</td>
                <td>{{book.cmimi}}</td>
                <td>{{book.foto}}</td>
                <td>{{book.autori}}</td>
                <td>{{book.data}}</td>
                <td>
                    <a>Edit</a>
                    <a>Delete</a>
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
            querySnapshot.forEach((doc)=>{
                this.books.push(doc.data());    
            });
        });
    }
}
</script>


<style scoped>
    .tabela-forma{
        width: 70%;
        background-color: white;
        padding: 0 15px;
        margin-top: 30px;
        overflow: auto;
        height: 450px;
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