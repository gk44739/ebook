<template>
    <div class="header-size">
            <div class="header">

                <div class="header-list">
                    <ul>
                        <a href="home.php"><li>HOME</li></a>
                        <a href="about.php"><li>ABOUT US</li></a>
                        <a href="contact.php"><li>CONTACT US</li></a>
                        <a href="AllBooks.php"><li>BOOKS</li></a>
                        <!-- <a href="libriAdmin.php"><li>DASHBOARD</li></a> -->
                    </ul>
                </div>

                <div class="header-phone-div">
                    <div class="header-phone-div-content">
                        <div>
                            <img src="../assets/profile.png" style="width:40px; height:40px;" alt="">
                        </div>
                    </div>
                </div>
         </div>
    </div>
</template>

<script>
export default {
    name:"Navigation"
}
</script>

<style scoped>
.header-size {
    background-color: #444444;
    height: 50px;
    width: 100%;
}

.header {
    width: 80%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.header-list {
    color: white;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.header-list ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
}
.header-list ul li {
    font-size: 14px;
    padding: 0 20px;
}

.header-list ul a:nth-of-type(1) {
    color: #e94c37;
}

a {
    color: white;
    text-decoration: none;
}

.header-list ul li:hover {
    color: #e94c37;
}

.header-phone-div {
    width: 18%;
    background-color: #e94c37;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.header-phone-div-content {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.number{
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
}

.upper {
    width: 100%;
    position: fixed;
    top: 0;
    height: auto;
    background-color: white;
    z-index: 3;
}

.search-icon button:hover{
    color: #e94c37;
}

.search-icon button {
    background-color: white;
    border: none;
    width: 50px;
    font-size: 17px;
    color: black;
    outline: 0;
    cursor: pointer;
}
</style>