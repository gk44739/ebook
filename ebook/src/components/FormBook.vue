<template>
    <div class="libri-forma">
        <form @submit.prevent>
            <div class="login-form">
                <label >Titulli</label><br>
                <input type="text" v-model="BookToEdit.titulli" >
            </div>
            <div class="login-form">
                <label>Cmimi</label><br>
                <input type="number" step="any" v-model="BookToEdit.cmimi" id="cmimiInput" >
            </div>
            <div class="login-form">
                <label>Photo</label><br>
                <input type="text" v-model="BookToEdit.foto" id="photoInput" >
            </div>
            <div class="login-form">
                <label>Autori</label><br>
                <input type="text" v-model="BookToEdit.autori" id="autoriInput" >
            </div>
            <div class="login-form">
                <label>Data</label><br>
                <input type="date" v-model="BookToEdit.data" id="dataInput" >
            </div>
            <div class="butonat-div">                       
                <!-- <button type="submit" name="ndryshoButton">
                    Ndrysho
                </button> -->

                <button @click="submit()">
                    Ruaj
                </button>
                            
                <button @click="clear()" name="anuloButton">
                    Anulo
                </button>
            </div>
        </form>
    </div>
</template>
<script>

import {db} from "../../firebase"
export default {
    name: "FormBook",
    props:{
        BookToEdit: Object,
        bookId: String
    },
    methods:{
        submit(){
            let ref = db.collection("book");
            if(this.bookId != ""){
                ref.doc(this.bookId).set(this.BookToEdit);
            }else{
                ref.add(this.BookToEdit);
            }
           this. clear();
        },
        clear(){
            this.$emit('clear');
        }
    }
}
</script>


<style scoped>
    .libri-forma{
        width: 100%;
        padding: 0 15px;
        margin-top: 30px;
        padding-left: 50px;
    }
    form{
        width: 100%;
        margin-top: 25px;
    }
    .login-form label {
        color: gray;
        font-weight: bold;
        font-size: 14px;
        font-family: 'Segoe UI';
    }
    .login-form{
        width: 100%;
        margin-top: 20px;
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