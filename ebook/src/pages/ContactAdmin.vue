<template>
     <div class="main">
        <div class="right-side"> 
            <!-- tablebook -->
            <ContactTable />
            
        </div>
    </div>
</template>

<script>
import ContactTable from "../components/ContactTable"

export default{
    name:"ContactAdmin",
    components:{
        ContactTable
    },
}
</script>
