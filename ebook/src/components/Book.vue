<template>
    <div class="book">
        <img src="../assets/book2.png" alt="Photo">
        <div class="name-price">
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
                <p>
                    <a href="book.php?book=">Buy now</a>
                </p>
                <p class="price">
                    {{book.cmimi}}
                </p>
            </div>
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
