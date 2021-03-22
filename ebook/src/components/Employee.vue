<template>
    <div class="employeeInner">
        <img :src="require(`../assets/${Employee.Foto}`)" alt="Photo">
        <h2> {{Employee.Emri}} {{Employee.Mbiemri}} </h2>
        <p> {{Employee.Profesioni}} </p>
    </div>
</template>

<script>
export default {
    name: "Employee",
    props:{
        Employee: Object
    }
}
</script>
<style scoped>
    .employeeInner img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
</style>
