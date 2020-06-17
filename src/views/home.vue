<template>
    <div class="home">
        <h1 id="top">We are Changing the World of Art by...</h1>
        <div class="img-with-text">
            <img src="../assets/museum.jpg" alt="">
            <h1 id="main">Making Art Accessible to Everyone</h1> 
        </div>
        <hr>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.home {
    padding:0 5%;
    font-size: 2.5em;
    color:#FEC84D;
    text-shadow:2px 1px 2px #324050;
}
#top {
    text-align: center;
    padding:0 10%;
}
.img-with-text{
    position: relative;
    margin-bottom:4%;
}
.img-with-text h1 {
    position: absolute;
    top:8em;
    left: 55%;
}
.img-with-text img {
    width: 60%;
}
hr {
        border: 2px solid #FEC84D;
        margin-bottom: 4%;
    }
@media only screen and (max-width: 2299px) {
    .img-with-text h1 {
        top:6em;
        left: 55%;
    }
}
@media only screen and (max-width: 2045px) {
    .img-with-text h1 {
        top:5em;
        left: 50%;
    }
}
@media only screen and (max-width: 1960px) {
    .home {
    font-size: 2em;
    }
}
@media only screen and (max-width: 1478px) {
    .img-with-text h1 {
        top:5em;
        left: 50%;
    }
    .home {
    font-size: 1.5em;
    }
}
@media only screen and (max-width: 1111px) {
    .home {
    font-size: 1em;
    }
}
@media only screen and (max-width: 746px) {
    .home {
    font-size: .8em;
    }
    .img-with-text h1 {
        top:5em;
        left: 50%;
    }
}
@media only screen and (max-width: 600px) {
    .home {
    font-size: .7em;
    }
}
@media only screen and (max-width: 527px) {
    .home {
    font-size: .5em;
    }
    .img-with-text h1 {
        top:6em;
        left: 50%;
    }
}
@media only screen and (max-width: 410px) {
    .img-with-text h1 {
        top:5em;
        left: 50%;
    }
}
@media only screen and (max-width: 379px) {
    .home {
    font-size: .4em;
    }
    .img-with-text h1 {
        top:4em;
        left: 50%;
    }
}
</style>