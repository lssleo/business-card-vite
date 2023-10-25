<template>
    <div class="home">

        <div class="text-container">
            <h1 class="animated-text">
                <span class="letter" v-for="(letter, index) in line1" :key="index" @mouseover="animateLetter">
                    {{ letter === ' ' ? '\u00A0' : letter }}
                </span>
                <br />
                <span class="letter" v-for="(letter, index) in line2" :key="index" @mouseover="animateLetter">
                    {{ letter === ' ' ? '\u00A0' : letter }}
                </span>
                <br />
                <span class="letter" v-for="(letter, index) in line3" :key="index" @mouseover="animateLetter">
                    {{ letter === ' ' ? '\u00A0' : letter }}
                </span>
                <br />
                <span class="letter" v-for="(letter, index) in line4" :key="index" @mouseover="animateLetter">
                    {{ letter === ' ' ? '\u00A0' : letter }}
                </span>
            </h1>
            <br />
            <p class="under-text" :style="{ opacity: opacity }" >CHIEF TECHNOLOGY OFFICER | HEAD OF WEB3 EDUCATION </p>
            <br />
            <v-container>
                <v-row justify="left">
                    <router-link to="/about" class="link-button" :style="{ opacity: opacity }">
                        <v-btn>about me</v-btn>
                    </router-link>

                    <div class="social-icons" :style="{ opacity: opacity }">
                        <a href="https://www.linkedin.com/in/lssleo/" target="_blank" class="icon-link">
                            <v-icon color="#FFD700" size="30">mdi-linkedin</v-icon>
                        </a>
                        <a href="https://github.com/lssleo" target="_blank" class="icon-link">
                            <v-icon color="#FFD700" size="30">mdi-github</v-icon>
                        </a>
                        <a href="https://t.me/lssleo" target="_blank" class="icon-link">
                            <v-icon color="#FFD700" size="30">mdi-send</v-icon>
                        </a>
                    </div>
                </v-row>
            </v-container>
        </div>

        <div v-if="!$vuetify.display.smAndDown" class="logo-container">
            <img src="../assets/logo.png" alt="Logo" class="logo" :style="{ opacity: opacity }" />
        </div>


    </div>
</template>

<script>
import vuetify from '@/plugins/vuetify';

export default {
    name: "Home",
    data() {
        return {
            line1: "Hi,",
            line2: "I'm Leonid S.",
            line3: "SUPERCHARGED",
            line4: "Expert",
            opacity: 0,
        };
    },
    mounted() {
        this.animateText();
        setTimeout(() => {
            this.opacity = 1;
        }, 4000);


    },
    methods: {
        animateText() {
            const letters = document.querySelectorAll(".letter");
            letters.forEach((letter, index) => {
                setTimeout(() => {
                    letter.classList.add("show");
                }, 100 * index);
            });
        },
        animateLetter(event) {
            const letter = event.target;
            letter.classList.add("animated");
            setTimeout(() => {
                letter.classList.remove("animated");
            }, 500);
        },
    },
};
</script>

<style scoped>
.home {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
}

.social-icons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-left: 35px;
    margin-top: 3px;
    transition: opacity 0.5s ease-in-out;
}

.icon-link {
    text-decoration: none;
}

.under-text {
    font-size: 12px;
    color: #d3d3d3;
    margin-bottom: 10px;
    letter-spacing: 3px;
    transition: opacity 0.5s ease-in-out;
}

.icon-link:hover {
    text-decoration: none;
}

.logo-container {
    position: relative;
    /* margin-left: 17%; */
    margin-right: 15%;
    margin-bottom: 5%;
    left: 10%;

}

.logo {
    height: 500px;
    transition: opacity 0.5s ease-in-out;
}


.link-button {
    text-decoration: none;
    transition: opacity 0.5s ease-in-out;

}

.text-container {
    text-align: left;
    margin-left: 10%;
    margin-bottom: 15%;
    margin-top: 10%;
}

.animated-text {
    font-size: 38px;
    font-weight: bold;
    color: white;
}

.letter {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    display: inline-block;
}

.letter.show {
    opacity: 1;
}

.letter.animated {
    color: #FFD700;
    animation: letterAnimation 1s;
}

@keyframes letterAnimation {
    0% {
        transform: rotate(0);
        color: white;

    }

    50% {
        transform: rotate(360deg);
        color: #FFD700;

    }

    100% {
        transform: rotate(0);
        color: white;

    }
}
</style>
