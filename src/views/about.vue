<template>
    <div class="about">
        <h1>Our Story</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae excepturi fugiat quo, incidunt quas voluptatibus dolorem quibusdam dicta praesentium suscipit esse maxime, at facilis. Pariatur, accusantium rerum, quasi eius necessitatibus dignissimos vero obcaecati cum eum similique dolorum facere alias maxime</p>
        <hr>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped> 
    .about {
        margin: 0 5%;
    }
    h1 {
        color:#FEC84D;
        font-size: 4em;
        font-weight: 400;
    }
    p {
        color:#324050;
        font-size: 3em;
        font-weight: 300;
    }
    hr {
        border: 2px solid #FEC84D;
    }
    @media only screen and (max-width: 1600px) {
        h1 {
            font-size: 3em;
        }
        p {
            font-size: 2em;
        }
    }
    @media only screen and (max-width: 1150px) {
        h1 {
            font-size: 2em;
        }
        p {
            font-size: 1em;
        }
    }
    @media only screen and (max-width: 750px) {
        h1 {
            font-size: 1.5em;
        }
        p {
            font-size: 1em;
        }
    }
    @media only screen and (max-width: 425px) {
        h1 {
            font-size: 1.2em;
        }
        p {
            font-size: 1em;
        }
    }
</style>