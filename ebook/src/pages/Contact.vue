<template>
    <div class="main">
        <div class="foto">
            <img src="../assets/collection.png" alt="">
        </div>
        <div class="title">
            Contact Us
        </div>
        <ContactForm />
    </div>
</template>


<script>
import ContactForm from "../components/ContactForm"
export default{
    name:"Contact",
    components:{
        ContactForm
    }
}
</script>
<style >
.main {
    width: 80%;
    margin: 0 auto;
    height: auto;
    margin-bottom: 30px;
}
.row{
    width: 100%;
}
.row img{
    width: 70px;
    height: 70px;
}
.copyright{
    text-align: center;
    background-color: black;
    padding: 30px;
    color: #a7a8a8;
}
.copyright a{
    color: #a7a8a8;
    text-decoration: none;
}
.copyright a:hover{
    background-color: gray;
}

.foto img{
    width: 100%;
    height: 25%;
}

.search-icon button{
    cursor: pointer;
}
/*--------------------- Albani ------------------------*/
.title {
    margin: 20px 0;
    background-color: #f2f2f2;
    font-weight: bold;
    padding: 14px 40px 16px 20px;
    font-family: 'Segoe UI';
    font-size: 20px;
}
#content{
    color: #333333;
    font: 14px Arial, sans-serif;
    background: #FFFFFF;
    border: 1px solid #f2f2f2;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    box-shadow: 5px 5px 5px 5px #d3d3d3;
}


</style>

