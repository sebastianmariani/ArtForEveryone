<template>
    <div class="basket">
        <div id="emptyCart" v-if="inCart.length == 0">
            <h1>Your cart is empty</h1>
            <p>Please visit out stock</p>
            <router-link to="/browse"><button>Visit Shop</button></router-link>
        </div>
        <table v-if="cartview.length > 0" class="table">
            <tbody>
                <transition-group name="fadeOut">
                    <tr v-for="(item, index) in cartview" :key="index" class="basketItem">
                        <td>{{ item.quantity }}</td>
                        <td>{{ item.name }}</td>
                        <td><img :src="item.img"></td>
                        <td>{{ item.price }} £</td>
                        <td><i @click="removeFromCart(item, index)" class="fas fa-trash"></i></td>
                    </tr>
                </transition-group>    
                    <hr>
                    <tr class="basketItem">
                        <th>Total :</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>{{ total }} £</th>
                    </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

    computed: {
        ...mapGetters([
            'inCart',
            'total',
            'cartview',
        ]),
    },
    methods: {
        removeFromCart(item, index) {
            if (item.quantity == 1) {
                this.inCart.splice(index, 1);
            }
                this.$store.state.totalCart -= item.price
                item.quantity--;
                this.$store.state.itemInCart--
        }
    }
}
</script>

<style scoped>
#emptyCart {
    text-align: center;
    color: #243e36;
}
button {
    background-color: #eb5e55;
    border-radius: 5px;
    padding:1% 4%;
    border-style: none;
    cursor: pointer;
    color: #f1f7ed;
}
a {
    text-decoration: none;
}
.basket {
    margin: 5% 0;
}
.table {
    background-color: #243e36;
    color: #eb5e55;
    width: 100%;
    padding: 5%;
    font-size: 1.5em;
}
.fadeOut-leave-active {
    transition: opacity .5s;
    opacity: 0;
}
.basketItem {
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5%;
    width: 100%;
}
img {
    width: 4em;
}
hr {
    border: 1px solid #eb5e55;
    margin-bottom: 4%;
}
@media only screen and (max-width: 2100px) {
    img {
    width: 3em;
    }
    .table {
        font-size: 1.2em;
    }
}
@media only screen and (max-width: 1800px) {
    .table {
        font-size: 1em;
    }
}
@media only screen and (max-width: 1360px) {
    #emptyCart {   
        font-size: .5em;
    }
    button {
        padding:1% 3%;
    }
    .table {
        font-size: .8em;
    }
}
@media only screen and (max-width: 1050px) {
    .table {
        font-size: .5em;
    }
    img {
    width: 2.5em;
    }
}
@media only screen and (max-width: 550px) {
    .table {
        font-size: .3em;
    }
    img {
    width: 3em;
    }
    #emptyCart {   
        font-size: .3em;
    }
    button {
        padding:1% 1%;
        font-size: .3em;
    }
}
</style>