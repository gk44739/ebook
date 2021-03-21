<template>
    <div class="arrival-book">
        <div class="arrival-img">
            <img :src="require(`../assets/${book.foto}`)" alt="Photo">
        </div>  
        <div class="arrival-book-content">
            <div>
                {{book.titulli}}
            </div>
            <div>
                <i>Autori:</i>
                {{book.autori}}
            </div>
            <div class="price">
                {{book.cmimi}} €
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "LatestBook",
    props:{
        book: Object
    }
}
</script>
