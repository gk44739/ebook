<template>
<div style="display: flex;">
    <div class="tabela-forma">
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
                    <a>Delete</a>
                </td>
            </tr>   
        </table>
    </div>
    <div style="width: 200px;margin: 100px auto;">
        <label>Message:</label>
        <textarea cols="30" rows="10" v-model="Message"></textarea>
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
            Message: ""
        }
    },
    created(){
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
</style>