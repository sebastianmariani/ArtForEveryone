<template>
    <div>
        <div v-for="item in painting" :key="item.id" class="showroom">
            <div class="setting">
                <h4>You are viewing :</h4>
                <p>{{ item.name }}</p>
                <p>by :{{ item.artist }}</p>
                <p>Choose a wall color:  <span id="colorPicker" :style="{backgroundColor: color}"><input type="color" id="base" v-model="color"></span></p>
                <p>Choose a room:</p>
                <div v-for=" (room, idx) in rooms" :key="idx" id="roomSelection">
                    <p>{{ room.name }}</p>
                    <p>{{ room.space }}</p>
                    <img id="roomSelector" :src="room.roomview" @click="showRoom(room)">
                </div>
                <br>
                <router-link to="/painting"><button>go back</button></router-link>
            </div>
            <div  class="display">
                <div :style="{backgroundColor: color}" class="wall">
                    <img :src="item.img">
                </div>
                <div class="forniture">
                    <transition name="slideIn">
                       <div v-for=" room in roomToShow" :key="room">
                           <img  :id="room.space1" :src="room.forniture1">
                           <img  :id="room.space2" :src="room.forniture2">
                       </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import sofa from '../assets/sofa.png'
import lamp from '../assets/lamp.png'
import table from '../assets/table.png'
import cabinet from '../assets/cabinet.png'
import chair from '../assets/chair.png'
import sidetable from '../assets/sidetable.png'
import livingroom from '../assets/livingroom.png'
import diningroom from '../assets/diningroom.png'
import lounge from '../assets/lounge.png'

export default {
    data(){
        return{
            color: '#243E36',
            rooms: [
                { name: "livingroom" , space1: 'livingroom1', space2: 'livingroom2',  forniture1:sofa, forniture2:lamp, roomview: livingroom },
                { name: "diningroom" , space1: 'diningroom1', space2: 'diningroom2', forniture1: table, forniture2: cabinet, roomview: diningroom },
                { name: "lounge", space1: 'lounge1', space2: 'lounge2', forniture1: chair, forniture2:sidetable, roomview: lounge}
            ],
            roomToShow: [],
        }
    },
    computed: {
        ...mapGetters([
            'showPainting',
            'forSale',
            'painting'
        ]),
    },
    methods: {
        showRoom(room) {
            this.roomToShow.shift();
            this.roomToShow.push(room);
        }
    }
}
</script>

<style scoped>

.showroom {
    margin: 5%;
    display: flex;
    justify-content: space-between;
    font-weight: 300;
    font-size: 1em;
}
.setting {
    width: 20%;
    text-align: center;
    color: black;
}
.display {
    width: 80%;
    text-align: center;
    position: relative;
}
#roomSelection {
    text-decoration: underline;
}
#roomSelection img{
    width: 40%;
}
.wall {
    padding: 20%; 
}
.forniture {
    background-color: #d8cfcb;
    padding: 5%;
}
.forniture img {
    position: absolute;
}
.slideIn-enter-active, .slideIn-leave-active {
    transition: opacity .2s ease-in-out, transform .8s ease;
}
.slideIn-enter, .slideIn-leave-to {
    opacity: 1;
    transform: translateX(20%);
}
.slideIn-enter-to, .slideIn-leave {
    opacity: 1;
    transform: translateX(0%);
}
#livingroom1 {
    bottom: 3%;
    right: 25%;
    width: 50%;
}
#livingroom2 {
    bottom: 4%;
    right: 10%;
    width: 18%;
}
#diningroom1 {
  width: 40%;
  bottom: -2%;
  right: 30%;
}
#diningroom2 {
    width: 20%;
    bottom: 8%;
    right: 8%;
}
#lounge1 {
    bottom: 3%;
    width: 28%;
    right: 50%;
}
#lounge2 {
    width: 18%;
    bottom: 5%;
    right: 25%;
}
#roomSelector:hover {
    cursor: pointer;
}
button {
    padding: 2%;
    margin:0 2%;
    background-color: #eb5e55;
    border-radius: 5px;
    border-style: none;
    cursor: pointer;
    color: white;
    font-size:.8em;
}
input{
    opacity: 0;
    width:4%;
    height: 4%;
}
input:hover{
    cursor: pointer;
}
#colorPicker{
    border-radius: 2px;
}
img {
    width: 20%;
}
.wallColor {
    display: flex;
}
@media only screen and (max-width: 2145px){
    .showroom {
        font-size:.5em;
    }
}
@media only screen and (max-width: 1090px){
    .showroom {
        font-size:.3em;
    }
}
@media only screen and (max-width: 670px){
    .showroom {
        font-size:.2em;
    }
}
@media only screen and (max-width: 670px){
    .showroom {
        font-size:.1em;
    }
}
</style>