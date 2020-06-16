<template>
  <div>
    <h1 id="title">#ArtForEveryone</h1>
    <div class="header">
      <app-navbar></app-navbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/Navbar';
export default {
  components: {
    'app-navbar': navbar
  }
}
</script>

<style>
  #title {
    text-align: center;
    margin-bottom: 5%;
    color:#4a536b;
    font-size: 5em;
  }
  body {
    background-color: #aed6dc;
    font-size: 2em;
  }
  .header {
    margin-bottom: 10%;
  }
  
</style>
