<template>
    <div class="home">
        <h2 id="top">We are changing <br> the world of art by...</h2>
        <div class="img-with-text">
            <img src="../assets/museum.jpg" alt="">
            <h2 id="main">Making art <br> accessible to <br> everyone.</h2> 
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.home {
    padding:0 5%;
    font-size: 2em;
    color:#eb5e55;
}
#top {
    text-align: center;
    padding:0 10%;
}
.img-with-text{
    position: relative;
    margin-bottom:4%;
}
.img-with-text h2 {
    position: absolute;
    top:7em;
    left: 65%;
}
.img-with-text img {
    width: 60%;
    height: 100%;
}
hr {
        border: 1px solid #eb5e55;
        margin-bottom: 4%;
    }
@media only screen and (max-width: 1982px) {
     .home {
        font-size: 1.5em;
    }
}
@media only screen and (max-width: 1480px) {
    .home {
    font-size: 1.3em;
    }
}
@media only screen and (max-width: 1250px) {
    .home {
    font-size: 1em;
    }
}
@media only screen and (max-width: 1050px) {
    .home {
    font-size: .7em;
    }
}
@media only screen and (max-width: 625px) {
    .home {
    font-size: .4em;
    }
}
@media only screen and (max-width: 490px) {
    .home {
    font-size: .4em;
    }
}
@media only screen and (max-width: 391px) {
    .img-with-text h2 {
        top:2em;
    }
}
</style>