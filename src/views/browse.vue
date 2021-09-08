<template>
  <div class="showcase">
    <div v-for="painting in forSale" :key="painting.id" class="painting">
      <img :src="painting.img" :alt="painting.name" />
      <h1>{{ painting.name }}</h1>
      <p>{{ painting.price }} £</p>
      <router-link to="/painting"
        ><button @click="viewPainting(painting)">View</button></router-link
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: mapGetters(["forSale", "showPainting"]),
  methods: mapMutations(["viewPainting"]),
};
</script>

<style scoped>
h1 {
  margin-bottom: 1%;
}
.showcase {
  column-count: 3;
  column-width: 400px;
  column-gap: 2rem;
}
.painting {
  text-align: center;
  color: #243e36;
  font-size: 0.4em;
  padding: 20px 0;
}
p {
  margin: 1%;
}
img {
  object-fit: cover;
  max-height: 100%;
  max-width: 100%;
  height: 40em;
}
button {
  border-radius: 5px;
  background-color: #eb5e55;
  color: #f1f7ed;
  padding: 1% 4%;
  border-style: none;
  cursor: pointer;
  margin-bottom: 3%;
}
@media only screen and (max-width: 850px) {
  img {
    height: 30em;
  }
}
@media only screen and (max-width: 450px) {
  .painting {
    font-size: 0.4em;
  }
  img {
    height: 20em;
  }
}
</style>
