<template>
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
</template>
<script>

export default {
    name:"AboutAdminBookInput",
    props:{

    }
}
</script>
<style scoped>
.libri-forma{
    width: 30%;
    margin-top: 30px;
    padding: 0 15px;
}
form{
    text-align: left;
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
.login-form:first-child{
    margin-top: 0px;
}
.login-form input {
    background: none;
    border: none;
    outline: none;
    border-bottom: 1.5px solid lightgray;
    width: 100%;
    padding: 5px 0;
    font-size: 17px;
}
.login-form input:focus{
    border-bottom:1.5px solid #e94c37;
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