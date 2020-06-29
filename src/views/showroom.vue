<template>
    <div>
        <div v-for="item in painting" :key="item.id" class="showroom">
            <div class="setting">
                <h4>You are viewing :</h4>
                <p>{{ item.name }}</p>
                <p>by :{{ item.artist }}</p>
                <p>WALL COLOR <input type="color" id="base" name="base" v-model="color"></p>
                <router-link to="/painting"><button>go back</button></router-link>
                <button @click="livingroom = !livingroom">Living room</button>
            </div>
            <div  class="display">
                <div :style="{backgroundColor: color}" class="wall">
                    <img :src="item.img">
                </div>
                <div class="forniture">
                    <transition-group name="slideIn">
                        <div class="view1" v-if="livingroom">
                            <img id="sofa" src="../assets/sofa.png">
                            <img id="lamp" src="../assets/lamp.png">
                        </div>
                    </transition-group>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data(){
        return{
            color: '#243E36',
            livingroom: false
        }
    },
    computed: {
        ...mapGetters([
            'showPainting',
            'forSale'
        ]),
        painting() {
            return this.showPainting.map((item) => {
                return this.forSale.find((forSaleItem) => {
                    return item === forSaleItem.id;
                })
            })
        },

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
    background-color: #89817d;
}
.display {
    width: 80%;
    text-align: center;
    position: relative;
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
#sofa {
    top: 65%;
    left: 31%;
    width: 40%;
}
#lamp {
    width: 18%;
    top: 40%;
    left: 70%;
}
img {
    width: 15%;
}
.wallColor {
    display: flex;
}
</style>