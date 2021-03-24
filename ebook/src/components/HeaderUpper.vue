<template>
    <div class="upper" id="upp">
        <div class="main">
            <div id="up">
                <div class="logo">
                    <router-link to="/">
                        <img :src="image" alt="">
                    </router-link>
                </div>
                <div class="cart">
                    <div class="search">
                        <div class="all">
                            <div class="search-input">
                                <input type="text" placeholder="Search Books" @focus="focus" @blur="blur" @keyup="search">
                            </div>
                            <div class="search-icon" @click="searchClick">
                                <div class="click">
                                </div>

                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                    <g>
                                        <path d="M225.474,0C101.151,0,0,101.151,0,225.474c0,124.33,101.151,225.474,225.474,225.474
                                            c124.33,0,225.474-101.144,225.474-225.474C450.948,101.151,349.804,0,225.474,0z M225.474,409.323
                                            c-101.373,0-183.848-82.475-183.848-183.848S124.101,41.626,225.474,41.626s183.848,82.475,183.848,183.848
                                            S326.847,409.323,225.474,409.323z"/>
                                    </g>
                                    <g>
                                        <path d="M505.902,476.472L386.574,357.144c-8.131-8.131-21.299-8.131-29.43,0c-8.131,8.124-8.131,21.306,0,29.43l119.328,119.328
                                            c4.065,4.065,9.387,6.098,14.715,6.098c5.321,0,10.649-2.033,14.715-6.098C514.033,497.778,514.033,484.596,505.902,476.472z"/>
                                    </g>
                                </svg>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderUpper',
  props:{
    image: String,
    activeClass:Boolean
  },
  methods:{
    focus(){
        if(this.$router.currentRoute.path === "/AllBooks"){
            return;
        }else{
            this.$router.replace({path:"/AllBooks"})
        }
    },
    blur(){
        
    },
    search(e){
        if(e.keyCode===13){
            document.querySelectorAll(".book .name-price .name-div .name").forEach((element)=>{
                if(element.innerText.toString().toLowerCase() === e.target.value.toString().toLowerCase()){
                    document.querySelectorAll(".book .name-price .name-div .name").forEach((elementNone)=>{
                        elementNone.parentNode.parentNode.parentNode.style.display="none";
                    });
                    element.parentNode.parentNode.parentNode.style.display="block";
                }else{
                    if(e.target.value.toString().toLowerCase() == ""){
                        document.querySelectorAll(".book .name-price .name-div .name").forEach((elementBlock)=>{
                            elementBlock.parentNode.parentNode.parentNode.style.display="block";
                        });
                    }
                }
            });
        } 
        if(e.target.value.toString().toLowerCase() == ""){
            document.querySelectorAll(".book .name-price .name-div .name").forEach((element)=>{
                element.parentNode.parentNode.parentNode.style.display="block";
            });
        }
    },
    searchClick(e){
        document.querySelectorAll(".book .name-price .name-div .name").forEach((element)=>{
            if(element.innerText.toString().toLowerCase() === e.target.parentNode.previousSibling.children[0].value.toString().toLowerCase()){
                document.querySelectorAll(".book .name-price .name-div .name").forEach((elementNone)=>{
                    elementNone.parentNode.parentNode.parentNode.style.display="none";
                });
                element.parentNode.parentNode.parentNode.style.display="block";
            }else{
                if(e.target.parentNode.previousSibling.children[0].value == ""){
                    document.querySelectorAll(".book .name-price .name-div .name").forEach((elementBlock)=>{
                        elementBlock.parentNode.parentNode.parentNode.style.display="block";
                    });
                }
            }
        });
    }

  }
  
}
</script>

<style scoped>
#up {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
}

.logo {
    padding: 34px 15px;
}

.cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    height: auto;
}

.categories {
    width: 15%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.categories-content {
    background-color: #e94c37;
    height: 40%;
}

.categories-content:hover {
    background-color: #444444;
}
.all {
    position: relative;
    display: flex;
    flex-direction: row;
}
.all-cat {
    height: 100%;
    border-right: 1px solid lightgray;
    padding-left: 10px;
    padding-right: 25px;
    font-size: 16px;
}

.search {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
}

.search-input {
    width: 100%;
}

.search-input input {
    padding: 10px 15px;
    width: 100%;
    border: 1px solid lightgray;
    font-size: 20px;
    outline: 0;
}
.search-icon:hover{
    fill: #e94c37;
}
.search-icon .click{
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
}
.search-icon{
    position: absolute;
    top: 12px;
    right: 12px;
    display: flex;
    align-items: center;
    border: none;
    width: 20px;
    font-size: 17px;
    color: black;
    outline: 0;
    cursor: pointer;
    transition: .2s ease-in-out;
}

.categories-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: white;
    font-size: 15px;
}
.categories-content i{
    padding-right: 16px;
}
@media only screen and (max-width: 767px){
    .logo{
        width: 50%;
        padding: 20px 0;
        text-align: left;
    }
    .logo img{
        max-width: 180px;
    }
    .cart{
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px 15px;
    }
    .hamburgerButton{
        display: block;
    }
}
</style>