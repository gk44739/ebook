<template>
     <div class="main">
        <div class="right-side"> 
            <!-- tablebook -->
            <TableBook/>
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
import TableBook from "../components/TableBook"
export default{
    name:"LibriAdmin",
    components:{
        TableBook
    }
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

</style>