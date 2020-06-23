<template>
    <div class="navbar">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/browse">Browse</router-link>
        <router-link to="/basket">Basket <span v-if="inCart.length > 0">({{ inCart.length }})</span></router-link>
    </div>
</template>

<script>
export default {
  computed: {
    inCart() { return this.$store.getters.inCart },
  }
}
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-evenly;
    font-size: 1.5em;
}
a {
text-decoration: none;
color:#324050;
}
 @media only screen and (max-width: 1600px) {
    .navbar {
      font-size: 1em;
    }
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