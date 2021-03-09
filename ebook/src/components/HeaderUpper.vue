<template>
    <div class="upper" id="upp">
        <div id="up">
            <div class="logo">
                <img src="../assets/bookshop2.png" alt="">
            </div>
            <div class="cart">
                <div class="search">
                    <div class="all">
                        <div class="all-cat">
                            CATEGORIES
                        </div>
                        <div class="search-input">
                            <input  type="text" placeholder="Search for your book" id="searchBook">
                        </div>
                        <div class="search-icon">
                            <!-- <button id="searchButton" :onclick="search()" type="submit">
                                <i class="fa fa-search"></i>
                            </button> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderUpper'
  
}
</script>

<style scoped>
#up {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.logo {
    padding: 34px 15px;
    width: 25%;
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

.search {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 40%;
    border: 1px solid lightgray;
    padding-left: 18px;
}

.all {
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

.search-input {
    width: 100%;
    padding-left: 25px;
    padding-right: 25px;
}

.search-input input {
    border: none;
    width: 95%;
    outline: 0;
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
</style>