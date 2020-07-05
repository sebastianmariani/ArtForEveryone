<template>
    <div class="navbar">
        <router-link to="/browse">Shop</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/basket">Basket<span  v-if="itemInCart > 0">({{ itemInCart }})</span></router-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'itemInCart',
      'inCart'
    ])
  },
}
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-around;
    font-size: 1em;
    margin: 0 25%;
}
.router-link-exact-active {
  color: #eb5e55;
}
a {
text-decoration: none;
color:#243e36;
margin: 2%;
}
  @media only screen and (max-width: 1200px) {
    .navbar {
      font-size: .8em;
    }
  }
   @media only screen and (max-width: 900px) {
    .navbar {
      font-size: .5em;
    }
  }
</style>