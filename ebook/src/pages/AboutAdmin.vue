<template>
<div class="main">
    <div class="right-side">
            <div class="tabela-forma">
                <table id="tabelaAbout" class="tabelaUser">
                    <tr>
                  
                        <th>Emri</th>
                        <th>Mbiemri</th>
                        <th>Profesioni</th>
                        <th>Foto</th>
                        <th colspan="2">Action</th>
                    </tr>   
                        <tr><td>". $row["emri"] ."</td><td>". $row["mbiemri"]  ."</td><td>". $row["profesioni"] ."</td><td>". $row["foto"] ."</td>";
                        
                        <td>
                            <a href="aboutAdmin.php?edit=">Edit</a>
                            <a href="../Controller/AdminAbout.php?delete">Delete</a>
                        </td>
                        </tr>
                </table>
            </div>
            <div class="libri-forma">
                <form action="../Controller/AdminAbout.php" method="POST" onsubmit="return aboutAdmin()">
                        <div class="login-form">
                            <label for="">Emri</label><br>
                            <input type="text" name="Emri" id="emriAboutInput" value = "<?php echo $emri; ?>">
                            <input type="hidden" name="idHidden" id="" value = "<?php echo $id; ?>">
                        </div>
                        <div class="login-form">
                            <label for="">Mbiemri</label><br>
                            <input type="text" name="mbiemri" id="mbiemriAboutInput" value = "<?php echo $mbiemri; ?>">
                        </div>
                        <div class="login-form">
                            <label for="">Profesioni</label><br>
                            <input type="text" name="profesioni" id="profesioniAboutInput" value ="<?php echo $profesioni; ?>">
                        </div>
                        <div class="login-form">
                            <label for="">Foto</label><br>
                            <input type="text" name="foto" id="fotoAboutInput" value ="<?php echo $foto; ?>">
                        </div>
                        <div class="butonat-div">
                                        <button type="submit" name="ndryshoButton">
                                            Ndrysho
                                        </button>
                                        <button name="createWorker">
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
    
}

</script>

<style>
.main{
    display: flex;
    flex-direction: row;
}

.right-side{
    height: 100vh;
    width: 80%;
    background-color: white;
    display: flex;
    flex-direction: row;
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

.login-form input:focus{
    border-bottom:1.5px solid #e94c37;
}
.butonat-div{
    width: 80%;
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

.combobox{
    margin-top: 20px;
}

.combobox h4{
    padding-top: 5px;
}

.combobox select {
    margin-top: 10px;
}

.tabela-forma{
    overflow: auto;
    height: 450px;
    margin-top: 10%;
}
</style>