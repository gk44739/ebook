<template>
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
</template>
<script>

export default {
    name:"AboutAdminTable",
    props:{

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
