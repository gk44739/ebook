<template>
    <form @submit.prevent>
        <div class="login-form">
            <label >Titulli</label><br>
            <input type="text" v-model="book.titulli" >
        </div>
        <div class="login-form">
            <label>Cmimi</label><br>
            <input type="number" v-model="book.cmimi" id="cmimiInput" >
        </div>
        <div class="login-form">
            <label>Photo</label><br>
            <input type="text" v-model="book.foto" id="photoInput" >
        </div>
        <div class="login-form">
            <label>Autori</label><br>
            <input type="text" v-model="book.autori" id="autoriInput" >
        </div>
        <div class="login-form">
            <label>Data</label><br>
            <input type="date" v-model="book.data" id="dataInput" >
        </div>
        <div class="butonat-div">                       
            <!-- <button type="submit" name="ndryshoButton">
                Ndrysho
            </button> -->

            <button @click="submit()">
                Ruaj
            </button>
                        
            <button name="anuloButton">
                Anulo
            </button>
        </div>
    </form>
</template>
<script>

import {db} from "../../firebase"
export default {
    name: "FormBook",
    data(){
        return{
            book:{
                autori: null,
                cmimi: null,
                data: null,
                foto: null,
                titulli: null
            }
            
        }
    },
    methods:{
        submit(){
            db.collection("book").add(this.book);
        }
    }
}
</script>


<style scoped>
    .libri-forma{
        width: 30%;
        padding: 0 15px;
        margin-top: 30px;
    }
    form{
        width: 100%;
    }
    .login-form label {
        color: gray;
        font-weight: bold;
        font-size: 14px;
        font-family: 'Segoe UI';
    }
    .login-form{
        width: 100%;
        margin-top: 30px;
        text-align: left;
    }

    .login-form input {
        text-align: left;
        background: none;
        border: none;
        outline: none;
        border-bottom: 1.5px solid lightgray;
        width: 100%;
        padding: 5px 0;
        font-size: 17px;
    }
    .login-form:first-child{
        margin-top: 0px;
    }
    .butonat-div{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .butonat-div button{
        margin: 20px;
        border: none;
        background-color: #e94c37;
        outline: none;
        padding: 10px 0;
        width: 100px;
        color: white;
        cursor: pointer;
        border-radius: 50px;
    }
</style>