<template>
    <footer>
        <div class="footer-content">
            <p><img :src="footerImg" alt=""></p>
            <div class="location">
                <div><i class="fa fa-map-marker"></i></div>
                <div>
                    123 Main Street, Anytown,CA 12345 USA
                </div>
            </div>
            <div class="location">
                <div><i class="fa fa-phone"></i></div>
                <div>
                    +383 44 307 373
                </div>
            </div>
            <div class="location">
                <div><i class="fa fa-envelope"></i></div>
                <div>
                    filanfisteku@gmail.com
                </div>
            </div>
        </div>
        <div class="footer-content">
            <h3>SHOPPING GUIDE</h3>
            <div class="list">
                <p>Delivery</p>
                <p>Legal Notice</p>
                <p>About Us</p>
                <p>Secure Payment</p>
                <p>New Products</p>
                <p>Sitemap</p>
            </div>
        </div>
        <div class="footer-content">
            <h3>YOUR INFORMATION</h3>
            <div class="list">
                <p>Personal info</p>
                <p>Orders</p>
                <p>Credit Slips</p>
                <p>Addresses</p>
                <p>My Wishlists</p>
                <p>Sitemap</p>
            </div>
        </div>
        
    </footer>
</template>

<script>
export default {
    name: "Footer",
    props:{
        footerImg:String
    }
}
</script>

<style  scoped>
footer {
    width: 100%;
    height: auto;
    background-color: #444444;
    color:#ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
}
.footer-content{
    margin: 40px 20px;
    width: 330px;
    height: auto;
    text-align: center;
    font-size: 12px;
}
.footer-content h3{
    text-align: center;
    margin-bottom: 20px;
}
footer .footer-content:nth-child(4){
    width: auto;
} 
.footer-content p{
    padding-bottom: 10px;
}
.footer-content img{
    width: 200px;
}
.list {
    text-align: center;
    color: #a7a8a8;
}
.insta-pic{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
}
.copyright a:hover{
    background-color: gray;
}   
</style>