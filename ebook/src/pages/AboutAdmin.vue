<template>
<div class="main">
    <div class="right-side">
        <AboutAdminTable @EditEmployee="EditEmployee" />
        <AboutAdminBookInput :Employee="Employee" :EmployeeId="EmployeeId" @anulo="anulo" />        
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
    },data(){
        return {
            Employee: {},
            EmployeeId: ""
        }
    },methods:{
        EditEmployee(Employee,EmployeeId){
            this.Employee = Employee;
            this.EmployeeId = EmployeeId;
        },anulo(){
            this.Employee = {},
            this.EmployeeId = ""
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

</style>