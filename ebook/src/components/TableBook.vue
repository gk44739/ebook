<template>
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
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
                <td>
                    <a >Edit</a>
                    <a >Delete</a>
                </td>
            </tr>   
        </table>
    </div>
</template>

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