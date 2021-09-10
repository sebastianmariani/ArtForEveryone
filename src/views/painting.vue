<template>
  <div class="showPainting">
    <div v-for="item in painting" :key="item.id" class="paintDetails">
      <div id="info">
        <h3>{{ item.name }}</h3>
        <p><strong>artist:</strong> {{ item.artist }}</p>
        <p>
          {{ item.heigth }} x {{ item.width }} cm , {{ item.type }},
          {{ item.creation }}.
        </p>
        <p>
          <strong>price:</strong> {{ item.price }} £
          <button @click="addToCart(item)">add to cart</button>
        </p>
        <router-link to="/showroom" id="viewOnWall"
          ><h3>view on wall</h3></router-link
        >
        <br /><router-link to="/browse"
          ><i class="fas fa-arrow-left"></i
        ></router-link>
      </div>
      <img :src="item.img" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["showPainting", "forSale", "inCart", "painting"]),
  },
  methods: {
    ...mapMutations(["addToCart"]),
  },
};
</script>

<style scoped>
.showPainting {
  margin: auto;
}
.paintDetails {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 5%;
  font-size: 0.8em;
}
p {
  font-weight: 300;
  margin-bottom: 5%;
}
#info {
  color: #243e36;
  text-align: center;
}
button {
  padding: 2%;
  margin: 2%;
  background-color: #eb5e55;
  color: white;
  border-radius: 5px;
  border-style: none;
  cursor: pointer;
}
#viewOnWall {
  color: #243e36;
}
#viewOnWall h3 {
  margin-bottom: 0;
}
img {
  width: auto;
  height: 500px;
}
i {
  font-size: 15px;
  color: #243e36;
}
@media only screen and (max-width: 1200px) {
  .paintDetails {
    font-size: 0.8em;
  }
  img {
    height: 400px;
  }
}
@media only screen and (max-width: 900px) {
  .paintDetails {
    font-size: 0.6em;
  }
  img {
    height: 300px;
  }
}
@media only screen and (max-width: 550px) {
  .paintDetails {
    font-size: 0.4em;
  }
  button {
    margin: 2%;
  }
  img {
    height: 200px;
  }
}
</style>
