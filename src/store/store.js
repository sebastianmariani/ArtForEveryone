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
            {id:1 , img: img1, name: 'painting1', price:110, heigth:65, width:55 , type: 'oil on canvas' , creation: '2012', artist: 'Charley Woods'},
            {id:2 , img: img2, name: 'painting2', price:120, heigth:70, width:50 , type: 'oil on canvas' , creation: '2000', artist: 'Connor Nash'}, 
            {id:3 , img: img3, name: 'painting3', price:130, heigth:60, width:53 , type: 'oil on canvas' , creation: '1994', artist: 'Brian Morgan'},
            {id:4 , img: img4, name: 'painting4', price:140, heigth:80, width:52 , type: 'oil on canvas' , creation: '2015', artist: 'Ralph Dusk'},
            {id:5 , img: img5, name: 'painting5', price:150, heigth:77, width:50 , type: 'oil on canvas' , creation: '2012', artist: 'Allan Griffin'},
            {id:6 , img: img6, name: 'painting6', price:160, heigth:120, width:90 , type: 'oil on canvas' , creation: '1989', artist: 'Frankie Parrish'},
        ],
        cart:[],
        showPainting:[],
    },
    getters: {
        forSale: state => state.products,
        inCart: state => state.cart,
        showPainting: state => state.showPainting,
        
    },
})