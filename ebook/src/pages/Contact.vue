<template>
    <div class="contactPage">
        <div class="main">
            <div class="foto">
                <img :src="require(`../assets/books-1.jpg`)" alt="">
                <h1>Contact Us</h1>
            </div>
            <div class="title">
                Contact Us
            </div>
            <ContactForm />
        </div>
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
<style>
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
.foto{
    position: relative;
}
.foto h1{
    color: #FFFFFF;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.foto img{
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.search-icon button{
    cursor: pointer;
}
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
.contactPage{
    padding: 50px 0 200px 0;
}
.rightside button{
    padding: 10px 30px;
}
@media only screen and (max-width: 767px){
    #content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #content .leftside,
    #content .rightside{
        width: 100%;
    }
    .rightside button{
    }
}
</style>

