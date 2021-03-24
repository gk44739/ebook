<template>
    <div class="tabela-forma">
        <table id="tabelaLibri" class="tabelaUser">
            <tr>
                <th>Email</th>
                <th>Subject</th>
                <th>Created Date</th>
                <th>Message</th>
                <th colspan="2">Action</th>
            </tr>   
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <a>View</a>
                    <a>Delete</a>
                </td>
            </tr>   
        </table>
    </div>
</template>

<style scoped>
    .tabela-forma{
        width: 100%;
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