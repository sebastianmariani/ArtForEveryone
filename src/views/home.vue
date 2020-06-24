<template>
    <div class="home">
        <h1 id="top">We are changing the world of art by...</h1>
        <div class="img-with-text">
            <img src="../assets/museum.jpg" alt="">
            <h1 id="main">Making art accessible to everyone</h1> 
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
.img-with-text h1 {
    position: absolute;
    top:10em;
    left: 65%;
}
.img-with-text img {
    width: 60%;
}
hr {
        border: 1px solid #eb5e55;
        margin-bottom: 4%;
    }
@media only screen and (max-width: 2309px) {
    .img-with-text h1 {
        top:9em;
    }
}
@media only screen and (max-width: 2045px) {
    .img-with-text h1 {
        top:8em;
    }
}
@media only screen and (max-width: 1982px) {
    .img-with-text h1 {
        top:9em;
    }
     .home {
        font-size: 1.5em;
    }
}

@media only screen and (max-width: 1800px) {
    .img-with-text h1 {
        top:8em;
    }
}
@media only screen and (max-width: 1480px) {
    .home {
    font-size: 1.3em;
    }
    .img-with-text h1 {
        top:6em;
    }
}
@media only screen and (max-width: 1250px) {
    .home {
    font-size: 1em;
    }
    .img-with-text h1 {
        top:8em;
    }
}
@media only screen and (max-width: 1050px) {
    .home {
    font-size: .7em;
    }
    .img-with-text h1 {
        top:13em;
    }
}
@media only screen and (max-width: 956px) {
    .img-with-text h1 {
        top:10em;
    }
}
@media only screen and (max-width: 790px) {
    .img-with-text h1 {
        top:5em;
    }
}
@media only screen and (max-width: 625px) {
    .home {
    font-size: .4em;
    }
    .img-with-text h1 {
        top:8em;
    }
}
@media only screen and (max-width: 490px) {
    .home {
    font-size: .4em;
    }
    .img-with-text h1 {
        top:7em;
    }
}
@media only screen and (max-width: 391px) {
    .img-with-text h1 {
        top:3em;
    }
}
</style>