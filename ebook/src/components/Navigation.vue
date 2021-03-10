<template>
    <div class="header-size">
            <div class="header">

                <div class="header-list">
                    <ul>
                        <li><router-link to="/">HOME</router-link></li>
                        <li><router-link to="/About">ABOUT US</router-link></li>
                        <li><router-link to="/Contact">CONTACT</router-link></li>
                    </ul>
                </div>

                <div class="header-phone-div">
                    <div class="header-phone-div-content">
                        <div>
                            <img :src="profile" style="width:40px; height:40px;" alt="">
                        </div>
                    </div>
                </div>
         </div>
    </div>
</template>

<script>
export default {
    name:"Navigation",
    props:{
        profile: String
    }
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