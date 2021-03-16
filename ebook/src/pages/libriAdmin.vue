<template>
     <div class="main">
        <div class="right-side"> 
            <div class="tabela-forma">
                <table id="tabelaLibri" class="tabelaUser">
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Photo</th>
                        <th>Author</th>
                        <th>Date</th>
                        <th colspan="2">Action</th>
                    </tr>   
                    <tr>
                        <td>
                            <a >Edit</a>
                            <a >Delete</a>
                        </td>
                    </tr>   
                </table>
            </div>
            <div class="libri-forma">
                <form >
                    <div class="login-form">
                        <label for="">Titulli</label><br>
                        <input type="text" name="titulli" id="titulliInput" >
                        <input type="hidden" name="idHidden" id="" value = "<?php echo $id; ?>">
                    </div>
                    <div class="login-form">
                        <label for="">Cmimi</label><br>
                        <input type="text" name="cmimi" id="cmimiInput" >
                    </div>
                    <div class="login-form">
                        <label for="">Photo</label><br>
                        <input type="text" name="photo" id="photoInput" >
                    </div>
                    <div class="login-form">
                        <label for="">Autori</label><br>
                        <input type="text" name="autori" id="autoriInput" >
                    </div>
                    <div class="login-form">
                        <label for="">Data</label><br>
                        <input type="date" name="data" id="dataInput" >
                    </div>
                    <div class="butonat-div">                       
                                    <button type="submit" name="ndryshoButton">
                                        Ndrysho
                                    </button>
                            
                                    <button name="createLiber">
                                        Ruaj
                                    </button>
                                
                        <button name="anuloButton">
                            Anulo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "libriAdmin",
       
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }


    .main{
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        height: auto;
    }
    .right-side{
        height: 100vh;
        width: 80%;
        background-color: white;
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        height: auto;
    }
    .tabela-forma{
        width: 50%;
        background-color: white;
        margin-left: 20px;
    }
    .libri-forma{
        width: 50%;
    }
    form{
        margin-top: 20%;
        margin-left: 15%;
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
    }

    .login-form input {
        background: none;
        border: none;
        outline: none;
        border-bottom: 1.5px solid lightgray;
        width: 80%;
        padding: 5px 0;
        font-size: 17px;
    }

    .butonat-div{
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-left: 50px;
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



    .tabela-forma{
        overflow: auto;
        height: 450px;
        margin-top: 10%;
    }

</style>