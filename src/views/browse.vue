<template>
    <div>
        <br>
        <div v-for="painting in forSale" :key="painting.id" class="painting">
            <h1>{{ painting.name }}</h1>
            <img :src="painting.img">
            <p> {{ painting.price }} £</p>
            <router-link to="/painting"><button @click="viewPainting(painting)">View</button></router-link>
        </div>
        <br>
    </div>
</template>

<script>
import { mapGetters , mapMutations} from 'vuex'

export default {
    computed: mapGetters(['forSale', 'showPainting']),
    methods: mapMutations(['viewPainting']),
}
</script>

<style scoped>
    h1 {
        margin-bottom: 1%;
    }
    .painting {
        text-align: center;
        font-size: .5em;
        color: #243e36;
    }
    p {
        margin: 1%;
    }
    img{
        height: 50em;
    }
    hr {
        height: .2px;
        background-color: #243e36;
        border: 0;
        border-radius: 5px;
        margin-top: 2%;
        width: 50%;
    }
    button {
        border-radius: 5px;
        background-color: #eb5e55;
        color: #f1f7ed;
        padding:1% 4%;
        border-style: none;
        cursor: pointer;
        margin-bottom: 3%;
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