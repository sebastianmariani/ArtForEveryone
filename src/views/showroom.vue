<template>
    <div>
        <div v-for="item in painting" :key="item.id" class="showroom">
            <div class="setting">
                <h1>{{ item.name }}</h1>
                <h3>Choose a room:</h3>
                <div v-for=" (room, id) in rooms" :key="id" id="roomSelection">
                    <img id="roomSelector" :src="room.roomview" @click="showRoom(room)">
                    <p>{{ room.name }}</p>
                    <br>
                </div>
                <p>Choose a wall color:  <span id="colorPicker" :style="{backgroundColor: color}"><input type="color" id="base" v-model="color"></span></p>
                <router-link to="/painting"><i class="fas fa-arrow-left"></i></router-link>
            </div>
            <div  class="display">
                <div :style="{backgroundColor: color}" class="wall">
                    <img :src="item.img">
                </div>
                <div class="forniture">
                    <transition name="slideIn">
                    <div v-for=" room in roomToShow" :key="room" class="setForniture">
                        <img  class="left" :id="room.space1" :src="room.forniture1">
                        <img  class="left" :id="room.space2" :src="room.forniture2">
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
                { name: "lounge", space1: 'lounge1', space2: 'lounge2', forniture1: chair, forniture2:sidetable, roomview: lounge},
                { name: "livingroom" , space1: 'livingroom1', space2: 'livingroom2',  forniture1:sofa, forniture2:lamp, roomview: livingroom },
                { name: "diningroom" , space1: 'diningroom1', space2: 'diningroom2', forniture1: table, forniture2: cabinet, roomview: diningroom }
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
        }, 
    }
}
</script>

<style scoped>
    h1 {
        margin-bottom: 10%;
        margin-top: 0;
    }
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
        width: 70%;
        text-align: center;
        margin-right: 10%;
    }
    #roomSelection {
        text-decoration: underline;
    }
    #roomSelection img{
        width: 40%;
    }
    #roomSelection p{
        margin-top: 0;
    }
    .wall {
        padding-bottom: 20%;
        padding-top: 5%; 
    }
    .wall img {
        width: 10%;
    }
    .forniture {
        background-color: #d8cfcb;
        padding: 6%;
        position: relative;
    }
    .setForniture {
        position: absolute;
        bottom: 1px;
        left: 17%;
    }
    .slideIn-leave-active {
        transition: transform .8s ease ;
    }
    .slideIn-enter-active {
        transition: transform .8s ease;
    }
    .slideIn-enter, .slideIn-leave-to {
        opacity: 1;
        transform: translateX(6%);
    }
    .slideIn-enter-to, .slideIn-leave {
        opacity: 1;
        transform: translateX(0%);
    }
    #livingroom1 {
        width: 70% ;
        margin-left: 4%;
    }
    #livingroom2 {
        width: 25%;
    }
    #diningroom1 {
    width: 55%;
    margin-left: 8%;
    margin-bottom: -3%;
    }
    #diningroom2 {
        width: 30%;
        margin-bottom: 5%;
    }
    #lounge1 {
        width: 50%;
        margin-left: 15%;
    }
    #lounge2 {
        width: 30%;
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
    i {
        font-size: 12px;
        color: #243e36;
    }
    @media only screen and (max-width: 2400px){
        #lounge1 {
            width: 45%;
        }
        #lounge2 {
            width: 28%;
        }
    }
    @media only screen and (max-width: 2145px){
        .showroom {
            font-size:.5em;
        }
        #lounge1 {
            width: 40%;
            margin-left: 0%;
        }
        #lounge2 {
            width: 24%;
        }
    }
    @media only screen and (max-width: 1900px){
        #lounge1 {
            width: 38%;
            margin-left: -15%;
        }
        #lounge2 {
            width: 25%;
        }
    }
    @media only screen and (max-width: 1700px){
        #lounge1 {
            width: 35%;
            margin-left: -15%;
        }
        #lounge2 {
            width: 25%;
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
