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
            {id:1 , img: img1, name: 'painting1', price:110},
            {id:2 , img: img2, name: 'painting2', price:120},
            {id:3 , img: img3, name: 'painting3', price:130},
            {id:4 , img: img4, name: 'painting4', price:140},
            {id:5 , img: img5, name: 'painting5', price:150},
            {id:6 , img: img6, name: 'painting6', price:160},
        ],
        cart:[]
    }
})