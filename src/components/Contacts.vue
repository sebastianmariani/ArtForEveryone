<template>
    <div class="contacts">
        <div>
            <p><a>Carrers</a></p>
            <p><a>Privacy</a></p>
            <p><a>Security</a></p>
            <p><a>Who we support</a></p>
        </div>
        <div class="numbers">
            <p>UK: 020 1234 5678</p>
            <p>USA: 020 1234 5678</p>
            <p>CANADA: 020 1234 5678</p>
            <p>JAPAN: 020 1234 5678</p>
        </div>
        <div class="icons">
            <a><i class="fab fa-twitter"></i></a>
            <a><i class="fab fa-facebook"></i></a>
            <a><i class="fab fa-instagram"></i></a>
            <a><i class="fas fa-envelope"></i></a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .contacts {
        background-color: #243e36;
        padding: 4%;
        color: #eb5e55;
        font-size: .5em;
        display: flex;
        justify-content: space-evenly;
    }
    .icons {
        padding: 1%;
        font-size: 3em;
        display: flex
    }
    .icons a {
        padding: 5%;
    }
    @media only screen and (max-width: 1500px) {
       .icons {
        font-size: 2em;
        } 
    }
    @media only screen and (max-width: 1000px) {
       .icons {
        font-size: 1.5em;
        } 
    }
    @media only screen and (max-width: 768px) {
       .icons {
        font-size: 1.5em;
        }
        .contacts {
            font-size: .2em;
        }
    }
</style>