<template>
    <div class="showPainting">
        <div v-for="item in painting" :key="item.id" class="paintDetails">
            <div id="info">
                <h3>{{ item.name }}</h3>
                <p><strong>artist:</strong> {{ item.artist }}</p>
                <p><strong>price:</strong> {{ item.price }} £   <button @click="addToCart(item)" > add to cart </button> </p>
                <p><strong>size:</strong> {{ item.heigth}} x {{ item.width }} cm</p>
                <p><strong>type:</strong> {{ item.type }}</p>
                <p><strong>created in:</strong> {{ item.creation }}</p>
                <router-link to="/showroom"><button> view on wall </button></router-link><router-link to="/browse"><button>go back</button></router-link>
            </div>
            <img :src="item.img">
        </div>
    </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'

export default {
    computed: {
        
        ...mapGetters([
            'showPainting',
            'forSale',
            'inCart',
            'painting'
        ]),
    },
    methods: {
        ...mapMutations([
            'addToCart',
        ]),
    }
}
</script>

<style scoped>
.showPainting {
    margin: auto;
}
.paintDetails {
    display: flex;
    justify-content: space-around;
    margin: 5%;
    font-size: 1em;
}
p {
    font-weight: 300;
}
#info {
    color: #243e36;
}
button {
    padding: 2%;
    margin:0 2%;
    background-color: #eb5e55;
    color: white;
    border-radius: 5px;
    border-style: none;
    cursor: pointer;
}
img {
    width: 50%;
}
@media only screen and (max-width: 1200px){
    .paintDetails{
        font-size: .8em;
    }
}
@media only screen and (max-width: 900px){
    .paintDetails{
        font-size: .6em;
    }
}
@media only screen and (max-width: 550px){
    .paintDetails{
        font-size: .4em;
    }
    button {
        margin: 2%
    }
}
</style>