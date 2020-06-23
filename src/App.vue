<template>
  <div class="app">
    <h1 id="title">ArtForEveryone</h1>
      <app-navbar></app-navbar>
      <transition name="view">
        <router-view></router-view>
      </transition>
      <app-contacts></app-contacts>
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
    font-family: 'Alegreya Sans SC', sans-serif;
  }
  .view-enter-active, .view-leave-active {
    transition: opacity  0.5s ease-in-out, transform  0.5s ease; 
  }
  .view-enter-active {
    transition-delay: 0.5s ;
  }
  .view-enter {
    opacity: 0;
    transform: translateY(-100px);
  }
  .view-enter-to {
    opacity: 1;
    transform: translateY(0px);
  }
  .view-leave-to{
    opacity: 0;
    transform: translateY(0px);
  }
  .view-leave{
    opacity: 1;
    transform: translateY(100px);
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
