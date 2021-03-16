<template>
    <form >
        <div class="login-form">
            <label >Titulli</label><br>
            <input type="text" name="titulli" id="titulliInput" >
            <input type="hidden" name="idHidden" id="" value = "<?php echo $id; ?>">
        </div>
        <div class="login-form">
            <label>Cmimi</label><br>
            <input type="text" name="cmimi" id="cmimiInput" >
        </div>
        <div class="login-form">
            <label>Photo</label><br>
            <input type="text" name="photo" id="photoInput" >
        </div>
        <div class="login-form">
            <label>Autori</label><br>
            <input type="text" name="autori" id="autoriInput" >
        </div>
        <div class="login-form">
            <label>Data</label><br>
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
</template>

<style scoped>
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
        text-align: left;
    }

    .login-form input {
        text-align: left;
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