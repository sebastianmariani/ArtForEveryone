import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import img1 from '../assets/painting1.jpg'
import img2 from '../assets/painting2.jpg'
import img3 from '../assets/painting3.jpg'
import img4 from '../assets/painting4.jpg'
import img5 from '../assets/painting5.jpg'
import img6 from '../assets/painting6.jpg'

export const store = new Vuex.Store({
    state: {
        products: [
            {id:1 , img: img1, name: '" Still life "', price:110, heigth:65, width:55 , type: 'oil on canvas' , creation: '2012', artist: 'Charley Woods', quantity:0},
            {id:2 , img: img2, name: '" Man in a dress "', price:120, heigth:70, width:50 , type: 'oil on canvas' , creation: '2000', artist: 'Connor Nash', quantity:0}, 
            {id:3 , img: img3, name: '" Abstract "', price:130, heigth:60, width:53 , type: 'oil on canvas' , creation: '1994', artist: 'Brian Morgan', quantity:0},
            {id:4 , img: img4, name: '" Gipsy woman "', price:140, heigth:80, width:52 , type: 'oil on canvas' , creation: '2015', artist: 'Ralph Dusk', quantity:0},
            {id:5 , img: img5, name: '" White horse "', price:150, heigth:77, width:50 , type: 'oil on canvas' , creation: '2012', artist: 'Allan Griffin', quantity:0},
            {id:6 , img: img6, name: '" Autumn "', price:160, heigth:120, width:90 , type: 'oil on canvas' , creation: '1989', artist: 'Frankie Parrish', quantity:0},
        ],
        cart:[],
        showPainting:[],
        totalCart: 0,
        itemInCart: 0
    },
    getters: {
        forSale: state => state.products,
        inCart: state => state.cart,
        showPainting: state => state.showPainting,
        total: state => state.totalCart,
        itemInCart: state => state.itemInCart,
        painting: state => {
            return state.showPainting.map((item) => {
                return state.products.find((forSaleItem) => {
                    return item === forSaleItem.id;
                })
            })
        },
        cartview: state => {
            return state.cart.map((item) => {
                return state.products.find((forSaleItem) => {
                    return item === forSaleItem;
                })
            })
        },
    },
    mutations: {
        addToCart(state, item) {
            if (item.quantity == 0) {
                state.cart.push(item);
                item.quantity++;
                state.itemInCart++
            } else if (item.quantity >= 1){
                item.quantity++
                state.itemInCart++
            }
            state.totalCart += item.price
        },
        viewPainting(state, painting) {
            if (state.showPainting.length > 0){
                state.showPainting.shift()
            }
            state.showPainting.push(painting.id);
        },
    }
})