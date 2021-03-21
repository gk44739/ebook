<template>
     <div class="main">
        <div class="right-side"> 
            <!-- tablebook -->
            <TableBook @EditBook="EditBook" />
            <div class="libri-forma">
                <!-- formbook -->
                <FormBook @clear="clear" :BookToEdit="BookToEdit" :bookId="bookId"/>
            </div>
        </div>
    </div>
</template>


<script>
import TableBook from "../components/TableBook"
import FormBook from "../components/FormBook"
export default{
    name:"LibriAdmin",
    components:{
        TableBook,
        FormBook
    },
    data() {
        return {
            BookToEdit: {},
            bookId: ""
        }
    },
    methods:{
        EditBook(book,bookId){
            this.BookToEdit = book;
            this.bookId = bookId;
        },
        clear(){
            this.BookToEdit = {},
            this.bookId = ""
        }

    }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }


    .main{
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        height: auto;
        margin-top: 50px;
        margin-left: 50px;
    }
  
    .right-side{
        height: 100vh;
        width: 80%;
        background-color: white;
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        height: auto;
        
    }
</style>