<template>
    <div>
        <div v-for="painting in forSale" :key="painting" class="painting">
            <h1>{{ painting.name }}</h1>
            <img :src="painting.img">
            <p> {{ painting.price }} £</p>
            <button @click="addToCart(painting)" >Buy</button>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        forSale() { return this.$store.getters.forSale },
        inCart() { return this.$store.getters.inCart },
    },
    methods: {
        addToCart(painting) {
            this.inCart.push(painting.id);

        }
    }
}
</script>

<style scoped>
    .painting {
        text-align: center;
        font-size: .5em;
        color: #243e36;
    }
    img{
        height: 50em;
    }
    hr {
        border: 1px solid #243e36;
        margin-top: 5%;
        width: 80%;
    }
    button {
        border-radius: 5px;
        background-color: #eb5e55;
        color: #f1f7ed;
        padding:1% 4%;
    }
    @media only screen and (max-width: 1140px) {
       img{
        height: 30em;
        }
    }
    @media only screen and (max-width: 850px) {
        img{
        height: 20em;
        }
    }
    @media only screen and (max-width: 450px) {
       .painting {
        font-size: .3em;
        } 
    }
</style>