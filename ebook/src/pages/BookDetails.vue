<template>
    <div>
        
    </div>
</template>
<script>
import {db} from "../../firebase";
export default {
   name: "BookDetails",
   data(){
       return {
           Book: {}
       }
   },created(){
       let t = this.$route.params.titulli;
       db.collection("book").where("titulli", "==", t)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.Book = doc.data()
            });
        });
       
   }
}
</script>
