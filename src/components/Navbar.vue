<template>
    <div class="navbar">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/browse">Browse</router-link>
        <router-link to="/basket">Basket</router-link>
    </div>
</template>

<script>
export default {
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