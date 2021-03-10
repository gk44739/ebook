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
                        <p>asdasd@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="rightside">
                <h1>SEND US A MESSAGE</h1>
                <form action="../Controller/contact_report.php" method="POST" onsubmit="return kontakto()">
                    <div class="rightside-content">
                        <input class="form-control" id="inputEmail" name="inputEmail" type="text" placeholder="Your Email">
                    </div>
                    <input class="subject" name="inputSubject" type="text" placeholder="Subject">
                    
                    <textarea class="message-content" name="inputMessage" placeholder="Your Message" rows="5" style="margin-top: 0px; margin-bottom: 0px; height: 131px;"></textarea>

                    <button name="submitContact">CONTACT US</button>
                </form>
            </div>
        </div> 
</template>

<script>
export default{
    name:"ContactForm"
}
</script>
