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

.leftside{
    width: 50%;
    padding: 10px;
    padding-top: 10px;
}

.leftside h1{
    margin-bottom: 20px;
    margin-top: 20px;
}

.home-content{
    display: flex;
    flex-direction: row;
}


.paragraf{
    margin-top: 15px;
    width: 80%;
}


.leftside p{
    line-height: 25px;
}

.icon{
    width: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.envelope-content{
    display: flex;
    flex-direction: row;
}

.icon {
    font-size: 22.5px;
    padding-right: 10px;
}

.rightside{
    width: 50%;
}

.rightside h1{
    margin-bottom: 20px;
    margin-top: 30px;
}

.form-control{
    background: #f5f5f5;
    color: #666;
    font: 14px Arial, sans-serif;
    border: 1px solid #ebebeb;
    width: 40%;
    padding: 8px 16px;
    display: block;
    line-height: 1.25;
    margin-right: 20px;
}

.rightside-content{
    display: flex;
    flex-direction: row;
}

.subject{
    background: #f5f5f5;
    color: #666;
    font: 14px Arial, sans-serif;
    border: 1px solid #ebebeb;
    width: 84%;
    padding: 8px 16px;
    display: block;
    line-height: 1.25;
    margin-top: 20px;
    margin-block-end: 20px;
}

.message-content{
    background: #f5f5f5;
    color: #666;
    font: 14px Arial, sans-serif;
    border: 1px solid #ebebeb;
    width: 84%;
    height: 100px;
    padding: 8px 16px;
    display: block;
    line-height: 1.25;
}

.rightside button{
    margin-top: 20px;
    color: white;
    background-color: #333333;
    width: 20%;
    border: none;
    height: 30px;
    margin-bottom: 20px;
    outline: none;
    cursor: pointer;
    
}

.rightside button:hover{
    background: #e94c37;
    color: white;
    box-shadow: none;
}

.rightside textarea{
    resize: vertical;
}

.title {
    margin: 20px 0;
    background-color: #f2f2f2;
    font-weight: bold;
    padding: 14px 40px 16px 20px;
    font-family: 'Segoe UI';
    font-size: 20px;
}
.dropbtn {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
  }
  
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
.dropdown-content a:hover {background-color: #ddd;}
  
.header-phone-div-content:hover .dropdown-content {display: block;}
  
.dropdown:hover .dropbtn {background-color: #3e8e41};
</style>

