<template>
    <div class="pageNotFound">
        <div class="pageNotFoundHeading">
            <h1>404</h1>
        </div>
        <div class="pageNotFoundContent">
            <p>This page is not found in our website !</p>
        </div>
        <div class="pageNotFoundButtons">
            <router-link to="/Home">Back to Home</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"NotFound",
    props:{

    }
}
</script>

<style scoped>
    .pageNotFound{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: #e94c37;
        color: #ffff;
    }
    .pageNotFound .pageNotFoundHeading{
        margin-bottom: 20px;
    }
    .pageNotFound .pageNotFoundHeading h1{
        font-size:100px;
    }
    .pageNotFound .pageNotFoundContent {
        color: #ffff;
        font-size: 20px;
        margin-bottom: 50px;
    }
    .pageNotFound .pageNotFoundButtons a{
        padding: 10px 60px;
        background-color: transparent;
        border: 1px solid #fff;
        border-radius: 5px;
        text-decoration: none;
        color: #ffff;
        transition: .3s ease-in-out;
    }
    .pageNotFound .pageNotFoundButtons a:hover{
        background: #ffff;
        color: #e94c37;

    }
</style>