<template>
    <div class="about">
        <h1>Our Story</h1>
        <p>Since it's beginning back in 2013, Artopia has endeavoured to help foster and build a lively online arts scene, enabling artists to sell their artworks across the world. Not only this, we've worked tirelessly to  expand and build our range of affordable artworks, to enable more and more people to have artwork in their daily life , and spark interest and curiosity.</p>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped> 
    .about {
        margin: 5% 5%;
    }
    h1 {
        color:#eb5e55;
        font-size: 2em;
    }
    p {
        color:#243e36;
        font-size: 1.2em;
        font-weight: 300;
    }
    hr {
        border: 1px solid #eb5e55;
    }
    @media only screen and (max-width: 1600px) {
        h1 {
            font-size: 1.7em;
        }
        p {
            font-size: 1em;
        }
    }
    @media only screen and (max-width: 1000px) {
        h1 {
            font-size: 1.2em;
        }
        p {
            font-size: .6em;
        }
    }
    @media only screen and (max-width:600px ) {
        h1 {
            font-size: 1em;
        }
        p {
            font-size: .4em;
        }
    }
    @media only screen and (max-width:400px ) {
        h1 {
            font-size: .6em;
        }
    }
</style>








