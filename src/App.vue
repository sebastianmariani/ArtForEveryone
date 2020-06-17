<template>
  <div class="app">
    <h1 id="title">ArtForEveryone</h1>
    <div class="header">
      <app-navbar></app-navbar>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
    <div class="footer">
      <app-contacts></app-contacts>
    </div>
  </div>
</template>

<script>
import navbar from './components/Navbar';
import contacts from './components/Contacts'

export default {
  components: {
    'app-navbar': navbar,
    'app-contacts': contacts,
  }
}
</script>

<style>
  #title {
    text-align: center;
    margin-bottom: 5%;
    color:#324050;
    font-size: 4em;
  }
  body {
    background-color:#C0CACB;
    font-size: 2em;
  }
  @media only screen and (max-width: 1900px) {
    #title {
      font-size: 3em;
    }
  }
  @media only screen and (max-width: 1350px) {
    #title {
      font-size: 2em;
    }
  }
  @media only screen and (max-width: 1000px) {
    #title {
      font-size: 1.8em;
    }
  }
  @media only screen and (max-width: 600px) {
    #title {
      font-size: 1em;
    }
  }
</style>
