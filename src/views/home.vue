<template>
  <div class="home">
    <div class="split">
      <div class="text">
        <h3>
          We are changing the world of art <br />
          by making art accessible to everyone.
        </h3>
        <router-link to="/browse"><button>Start now</button></router-link>
      </div>
      <img src="../assets/homepageImg.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home {
  padding: 0 5%;
  font-size: 1.5em;
  color: #eb5e55;
}
.split {
  display: flex;
  justify-content: space-evenly;
  margin-top: 3rem;
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
}
h3 {
  margin-top: 0;
}
button {
  padding: 10px 30px;
  background-color: #243e36;
  color: #eb5e55;
  border-radius: 5px;
  border: none;
  font-size: inherit;
}
a {
  margin: 0 auto;
}
@media only screen and (max-width: 1480px) {
  .home {
    font-size: 1.4em;
  }
}
@media only screen and (max-width: 1250px) {
  .home {
    font-size: 1.2em;
  }
  img {
    width: 400px;
  }
}
@media only screen and (max-width: 1050px) {
  .home {
    font-size: 0.9em;
  }
  img {
    width: 300px;
  }
}
@media only screen and (max-width: 890px) {
  .home {
    font-size: 0.6em;
  }
  img {
    width: 200px;
  }
  button {
    padding: 8px 10px;
  }
}
@media only screen and (max-width: 625px) {
  .home {
    font-size: 0.4em;
  }
  img {
    width: 150px;
  }
  button {
    padding: 5px 8px;
  }
}
@media only screen and (max-width: 490px) {
  .home {
    font-size: 0.4em;
  }
  img {
    display: none;
  }
}
</style>
