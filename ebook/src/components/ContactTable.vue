<template>
<div class="main-div" style="display: flex;">
    <div class="tabela-forma">
    <div class="tableResponse" :class="[succesActive ? 'succesResponse' : errorActive ? 'errorResponse' : '']">{{responseMessage}}</div>
        <table id="tabelaLibri" class="tabelaUser">
            <tr>
                <th>Email</th>
                <th>Subject</th>
                <th>Created Date</th>
                <th>Message</th>
                <th colspan="2">Action</th>
            </tr>   
            <tr v-for="contact in Contacts" v-bind:key="contact.id">
                <td>{{contact.Email}}</td>
                <td>{{contact.Subject}}</td>
                <td>{{contact.updatedDate}}</td>
                <td>{{contact.Message}}</td>
                <td>
                    <a @click="GetMessage(contact._id)">View</a>
                    <a @click="deleteMessage(contact._id)">Delete</a>
                </td>
            </tr>   
        </table>
    </div>
    <div class="message-div">
        <label>Message:</label>
        <textarea style="text-align: center;" cols="30" rows="10" v-model="Message"></textarea>
    </div>
</div>
</template>
<script>
import axios from 'axios';
export default {
    name: "ContactTable",
    data(){
        return {
            Contacts: [],
            Message: "",
            responseMessage:"",
            succesActive:false,
            errorActive:false
        }
    },
    created(){
        axios.get(`http://localhost:4000/contacts`)
        .then(response =>{
            this.Contacts = response.data;
        });
    },
    beforeUpdate(){
        axios.get(`http://localhost:4000/contacts`)
        .then(response =>{
            this.Contacts = response.data;
        });
        
    },
    methods: {
        GetMessage(value){
            axios.get(`http://localhost:4000/contacts/${value}`)
            .then(response =>{
                this.Message = response.data.Message;
            });
        },
        deleteMessage(id){
            axios.delete(`http://localhost:4000/contacts/${id}`)
            .then(response => {
                if(response.status===200){
                    this.responseMessage="Succes !";
                    this.succesActive=true;
                    setTimeout(() => {
                        this.responseMessage="";
                        this.succesActive=false;
                    }, 3000);
                }else{
                    
                    this.responseMessage="Error !";
                    this.errorActive=true;
                    setTimeout(() => {
                        this.responseMessage="";
                        this.errorActive=false;
                    }, 3000);
                }
            });
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
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .tableResponse{
        text-align: center;
        transition: all .3s linear;
        border-radius: 20px;
        padding: 0px 40px;
        color: #ffff;
        height: 0px;
    }
    .tableResponse.succesResponse,
    .tableResponse.errorResponse{
        margin-bottom: 20px;
        padding: 10px 40px;
        height: auto;
    }
    .tableResponse.succesResponse{
        background: #82dd55;
    }
    .tableResponse.errorResponse{
        background: #e94c37;
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
        padding: 5px 10px;
        margin: 0 5px;
        color: white;
        border-radius: 5px;
    }
    td a:hover{
        cursor: pointer;
    }
    th:last-child,
    td:last-child{
        text-align: center;
    }
    td a:nth-child(1){
        background-color: #41a4c5;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    .tableResponse{
        transition: all .3s ease-in-out;
    }
    .message-div{
        width: 200px;
        margin: 100px auto;
    }
    @media only screen and (max-width: 767px) {
        .main-div{
            flex-direction: column;
        }
        .tabela-forma{
            height: auto;
            width: 100%;
        }
        .message-div{
            margin: 20px 0px;
            width: 100%;
            display: flex;
            flex-direction: column;
        }
    }
</style>