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
.right-side{
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: row;
}
.combobox{
    margin-top: 20px;
}

.combobox h4{
    padding-top: 5px;
}

.combobox select {
    margin-top: 10px;
}

@media only screen and (max-width: 767px){
    .right-side{
        display:flex;
        flex-direction: column-reverse;
        align-items: center;
    }

    .libri-forma{
        width: 100%;
        padding: 0;
    }

    .tabela-forma{
        width: 100%;
        padding: 0;
    }
}
</style>