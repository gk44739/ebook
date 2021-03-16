<template>
     <div class="main">
        <div class="right-side"> 
            <!-- tablebook -->
            <TableBook/>
            <div class="libri-forma">
                <!-- formbook -->
                <FormBook/>
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