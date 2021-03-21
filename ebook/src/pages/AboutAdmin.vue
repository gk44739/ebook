<template>
<div class="main">
    <div class="right-side">
            <AboutAdminTable />
            <AboutAdminBookInput />        
    </div>
</div>
</template>

<script>
import AboutAdminTable from "../components/AboutAdminTable"
import AboutAdminBookInput from "../components/AboutAdminBookInput"

export default {
    name:"AboutAdmin",
    components:{
        AboutAdminTable,
        AboutAdminBookInput
    },
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

</style>