<template>
    <div>
        <div v-for="painting in forSale" :key="painting" class="painting">
            <h1>{{ painting.name }}</h1>
            <img :src="painting.img">
            <p> {{ painting.price }} £</p>
            <button>Buy</button>
            <hr>
        </div>
        {{ inCart }}
    </div>
</template>

<script>
export default {
    computed: {
        forSale() { return this.$store.getters.forSale },
        inCart() { return this.$store.getters.inCart },
    }
}
</script>

<style scoped>
    .painting {
        text-align: center;
        font-size: 1.5em;
        padding: 5% 0;
    }
    img{
        width: 50%;
    }
    hr {
        border: 1px solid #324050;
        margin-top: 5%;
        width: 80%;
    }
    button {
        border-radius: 5px;
    }
    @media only screen and (max-width: 1900px) {
       .painting {
        font-size: 1em;
        } 
    }
    @media only screen and (max-width: 1140px) {
       .painting {
        font-size: .8em;
        } 
    }
    @media only screen and (max-width: 850px) {
       .painting {
        font-size: .5em;
        } 
    }
    @media only screen and (max-width: 450px) {
       .painting {
        font-size: .3em;
        } 
    }
</style>