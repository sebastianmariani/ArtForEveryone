<template>
    <div class="home">
        <h1 id="top">We are Changing the World of Art by...</h1>
        <img src="../assets/museum.jpg" alt="">
        <h1 id="main">Making Art Accessible to Everyone</h1>
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
img {
    width: 50%;
    position: absolute;
}
#top {
    text-align: center;
    padding:0 10%;
}
#main {
    position: relative;
    left: 50%;
    top:8em;
    width: 40%;
}
@media only screen and (max-width: 2299px) {
    #main {
    width: 50%;
    }
}
@media only screen and (max-width: 1960px) {
    #main {
    left: 50%;
    top:7em;
    }
    .home {
    font-size: 2em;
    }
}
@media only screen and (max-width: 1960px) {
    .home {
    font-size: 1.5em;
    }
}
@media only screen and (max-width: 1111px) {
    .home {
    font-size: 1.2em;
    }
    #main {
    top:7em;
    }
}
@media only screen and (max-width: 892px) {
    .home {
    font-size: 1em;
    }
    #main {
    top:6em;
    }
}
@media only screen and (max-width: 746px) {
    .home {
    font-size: .8em;
    }
    #main {
    top:5em;
    }
}
@media only screen and (max-width: 600px) {
    .home {
    font-size: .7em;
    }
    #main {
    top:5em;
    }
}
@media only screen and (max-width: 516px) {
    .home {
    font-size: .5em;
    }
    #main {
    top:7em;
    }
}
@media only screen and (max-width: 374px) {
    .home {
    font-size: .4em;
    }
    #main {
    top:7em;
    }
}
</style>