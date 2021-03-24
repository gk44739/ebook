<template>
    <div id="content" class="page-content card card-block">
            <div class="leftside">
                <h1>CONTACT US</h1> 
                <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.</p>
                <div class="home-content">
                    <div class="icon">
                        <i class="fa fa-home"></i>
                    </div>
                    <div class="paragraf">
                        <p>Bookshop|Home1</p>
                        <p>United States</p>
                    </div>    
                </div> 
                <div class="envelope-content">
                    <div class="icon">
                        <i class="fa fa-envelope"></i>
                    </div>
                    <div class="paragraf">
                        <p>infobookshop@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="rightside">
                <h1>SEND US A MESSAGE</h1>
                <div class="contactFromError" :class="[activeClass ? 'active' : succesResponse ? 'activeSucces' : '']">{{responseMessage}}</div>
                <form @submit.prevent="Submit">
                    <div class="rightside-content">
                        <input class="form-control" v-model="Contact.Email" placeholder="Your Email">
                        <input class="subject" v-model="Contact.Subject" placeholder="Subject">
                        
                        <textarea class="message-content" v-model="Contact.Message" placeholder="Your Message" rows="5" style="margin-top: 0px; margin-bottom: 0px; height: 131px;"></textarea>

                        <button name="submitContact">CONTACT US</button>
                    </div>
                    
                </form>
            </div>
        </div> 
</template>

<script>
import axios from 'axios';
export default{
    name:"ContactForm",
    data(){
        return{
            Contact: {
                Email:"",
                Subject:"",
                Message:"",
            },
            responseMessage:"",
            activeClass:false,
            succesResponse:false,
        }
    },
    methods:{
        Submit(){
            if(this.Contact.Email !== "" && this.Contact.Email !== null && this.Contact.Subject !== "" && this.Contact.Subject !== null && this.Contact.Message !== "" && this.Contact.Message !== null){
                axios.post(`http://localhost:4000/contacts`,this.Contact)
                .then(response =>{
                    if(response.status === 200){
                        this.responseMessage="Thank you for the message !";
                        this.succesResponse=true;
                        this.clear();
                        setTimeout(()=>{
                            this.responseMessage="";
                            this.succesResponse=false;
                        },3000)
                    }else{
                        this.responseMessage="Your contact was not sent !"
                    }
                });
            }else{
                if(this.Contact.Email === "" || this.Contact.Email === null){
                    this.responseMessage="Please check your email !";
                    this.activeClass=true;
                    setTimeout(()=>{
                        this.responseMessage="";
                        this.activeClass=false;
                    },3000)
                }else if(this.Contact.Subject === "" || this.Contact.Subject === null){
                    this.responseMessage="Please check your subject !";
                    this.activeClass=true;
                    setTimeout(()=>{
                        this.responseMessage="";
                        this.activeClass=false;
                    },3000)
                }else{
                    this.responseMessage="Please type something!";
                    this.activeClass=true;
                    setTimeout(()=>{
                        this.responseMessage="";
                        this.activeClass=false;
                    },3000)
                }
               
            }
            
        },
        clear(){
            this.Contact.Email = "";
            this.Contact.Subject = "";
            this.Contact.Message = "";
           
        }
    }
}
</script>

<style scoped>
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
    padding: 0 15px;
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
}

.rightside-content input,
.rightside-content textarea{
    width: 100%;
}
.rightside .contactFromError{
    color: #fff;
    background: #e94c37;
    border-radius: 20px;
    visibility: hidden;
    opacity: 0;
    transition: 200ms ease-in-out;
}
.rightside .contactFromError.activeSucces,
.rightside .contactFromError.active{
    padding: 10px 40px;
    margin-bottom: 20px;
    visibility: visible;
    opacity: 1;
}
.rightside .contactFromError.activeSucces{
    background-color: #82dd55;
}
.form-control{
    width: 100%;
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
    display: flex;
    align-self: start;
    margin-top: 20px;
    color: white;
    background-color: #333333;
    border: none;
    margin-bottom: 20px;
    outline: none;
    cursor: pointer;
    transition: all .3s linear;
    
}

.rightside button:hover{
    background: #e94c37;
    color: white;
    box-shadow: none;
}

.rightside textarea{
    resize: vertical;
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
