<template>
    <div class="name-price">
        <img :src="require(`../assets/${book.foto}`)" alt="Photo">
        <div class="name-div">
            <div class="name">
                {{book.titulli}}
            </div>
            <div class="rating">
                <i>Autori:</i>   
                {{book.autori}}
            </div>
        </div>
        <div class="name-div">
            <router-link to="/BookDetails">Show Details</router-link>
            <p class="price">
                {{book.cmimi}} €
            </p>
        </div>
    </div>
</template>

<script>
export default{
    name: 'Book',
    props:{
        book: Object
    }
}
</script>

<style scoped>

</style>