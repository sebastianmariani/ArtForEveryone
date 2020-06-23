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