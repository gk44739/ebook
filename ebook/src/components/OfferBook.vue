<template>
    <div class="first-offer">
        <div class="offer-pic">
            <img :src="require(`../assets/${OfferBook.foto}`)" alt="Photo">
        </div>
        <div class="name-price">
            <div class="name-div">
                <div class="name">
                    {{OfferBook.titulli}}
                </div>
                <div class="rating">
                    <i>Autori:</i>
                    {{OfferBook.autori}}
                </div>
            </div>
            <div class="name-div">
                <p>
                    <s>$40.48</s>
                </p>
                <p class="price">
                    {{OfferBook.cmimi}}
                </p>
            </div>
            <div class="name-div">
                <div class="offer-time">
                    <i class="fa fa-clock-o"></i> 1969 Days
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "OfferBook",
    props:{
        OfferBook: Object
    }
}
</script>
