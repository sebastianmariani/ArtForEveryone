<template>
    <div class="basket">
        <div id="emptyCart" v-if="cart.length == 0">
            <h1>Your Cart Is Empty</h1>
            <p>Please visit out Stock</p>
            <button><router-link to="/browse">Visit Shop</router-link></button>
        </div>
        <table v-if="cart.length > 0" class="table">
            <tbody>
                <tr v-for="(item, index) in cart" :key="item" class="basketItem">
                    <td>{{ item.name }}</td>
                    <td><img :src="item.img"></td>
                    <td>{{ item.price }} £</td>
                    <td><i @click="removeFromCart(index)" class="fas fa-trash"></i></td>
                </tr>
                <hr>
                <tr class="basketItem">
                    <th>Total :</th>
                    <th></th>
                    <th></th>
                    <th>{{ total }} £</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    computed: {
        cart() {
            return this.$store.getters.inCart.map((cartItem) => {
                return this.$store.getters.forSale.find((forSaleItem) => {
                    return cartItem === forSaleItem.id;
                })
            })
        },
        total() {
            return this.cart.reduce((acc, cur) => acc + cur.price, 0);
        },
        inCart() { return this.$store.getters.inCart },
    },
    methods: {
        removeFromCart(index) {
            this.inCart.splice(index, 1);
        },
    }

}
</script>

<style scoped>
#emptyCart {
    text-align: center;
    color: #324050;
}
button {
    background-color: #324050;
    border-radius: 5px;
    padding:1% 4%;
}
a {
    text-decoration: none;
    color: white;
}
.basket {
    margin: 5% 0;
}
.table {
    background-color: #324050;
    color: #FEC84D;
    width: 100%;
    padding: 5%;
    font-size: 2em;
}
.basketItem {
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5%;
    width: 100%;
}
img {
    width: 8em;
}
hr {
    border: 1px solid #FEC84D;
    margin-bottom: 4%;
}
@media only screen and (max-width: 2100px) {
    img {
    width: 5em;
    }
}
@media only screen and (max-width: 1560px) {
    .table {
        font-size: 1.5em;
    }
}
@media only screen and (max-width: 1200px) {
    .table {
        font-size: 1em;
    }
}
@media only screen and (max-width: 850px) {
    .table {
        font-size: .5em;
    }
    img {
    width: 3em;
    }
}
@media only screen and (max-width: 550px) {
    .table {
        font-size: .3em;
    }
    img {
    width: 3em;
    }
}
</style>