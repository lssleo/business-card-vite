<template>
    <div>
        <div class="stage-cube-cont" :style="{ opacity: opacity0 }">
            <div class="cubespinner">
                <div class="face2">
                    <NFTIcon width="110" height="110" />
                </div>
                <div class="face1">
                    <REACTIcon width="110" height="110" />
                </div>
                <div class="face6">
                    <VUEIcon width="125" height="125" />
                </div>
                <div class="face3">
                    <JSIcon width="110" height="110" />
                </div>
                <div class="face4">
                    <SOLIcon width="110" height="110" />
                </div>
                <div class="face5">
                    <TSIcon width="110" height="110" />
                </div>
            </div>
        </div>
    </div>
    <div class="text-container">
        <h1 class="animated-text">
            <span class="letter" v-for="(letter, index) in line1" :key="index" @mouseover="animateLetter">
                {{ letter === ' ' ? '\u00A0' : letter }}
            </span>
        </h1>
    <br/>
        <p class="about-text" :style="{ opacity: opacity1 }">I am a skilled Full-Stack Blockchain Developer and Front-End Developer with a strong focus on delivering exceptional results. My proficiency extends to front-end development, making me a valuable asset for any project. </p>
        <br/>
        <p class="about-text" :style="{ opacity: opacity2 }">Throughout my career, I have excelled in collaborating with top global companies, demonstrating my exceptional skills and achieving notable accolades. I have secured first place in Solidity and third place in TypeScript, further validating my capabilities. Beyond technical expertise, I am also known for my exceptional teamwork skills, fostering successful collaboration within teams.
    </p>
    <br/>
        <p class="about-text" :style="{ opacity: opacity3 }">With a comprehensive skill set and extensive experience in full-stack DApp development, I am poised to make a remarkable impact on your project. Let's join forces and leverage my expertise to ensure the success of your initiatives.
    </p>
                <v-container>
                    <v-row justify="left">
                        <router-link to="/contact" class="link-button" :style="{ opacity: opacity4 }">
                            <v-btn>contact me</v-btn>
                        </router-link>
                    </v-row>
                </v-container>

        </div>
</template>

<script>

import NFTIcon from '../assets/nft-icon.svg?component';
import TSIcon from '../assets/ts-icon.svg?component';
import VUEIcon from '../assets/vue-icon.svg?component';
import SOLIcon from '../assets/solidity-icon.svg?component';
import JSIcon from '../assets/js-icon.svg?component';
import REACTIcon from '../assets/react-icon.svg?component'

export default {

    name: "About",
    components: {
        NFTIcon,
        TSIcon,
        VUEIcon,
        SOLIcon,
        JSIcon,
        REACTIcon
    },
    data() {
        return {
            line1: "About me",
            opacity0: 0,
            opacity1: 0,
            opacity2: 0,
            opacity3: 0,
            opacity4: 0
        };
    },
    mounted() {
        this.animateText();
        setTimeout(() => {
            this.opacity0 = 1;
        }, 100);
        setTimeout(() => {
            this.opacity1 = 1;
        }, 1000);
        setTimeout(() => {
            this.opacity2 = 1;
        }, 2500);
        setTimeout(() => {
            this.opacity3 = 1;
        }, 3500);
        setTimeout(() => {
            this.opacity4 = 1;
        }, 4500);
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
}
</script>
<style scoped>

.link-button {
    text-decoration: none;
    margin-top: 3%;
    transition: opacity 0.5s ease-in-out;

}
.text-container {
    text-align: left;
    margin-left: 10%;
    margin-top: 10%;
    margin-right: 10%;
    margin-bottom: 10%;
}

.about-text {
    font-size: 17px;
    color: #ffffff;
    margin-bottom: 10px;
    letter-spacing: 2px;
    font-weight: 300;
    transition: opacity 0.5s ease-in-out;
}

.animated-text {
    font-size: 42px;
    font-weight: bold;
    color: #ffffff;
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

.stage-cube-cont {
    margin-top: 11%;
    transition: opacity 0.5s ease-in-out;
}

.cubespinner {
    position: relative;
    width: 150px;
    height: 150px;
    margin: 0 auto;
    transform-style: preserve-3d;
    animation: spincube 12s infinite ease-in-out;
}

.cubespinner div {
    position: absolute;
    width: 150px;
    height: 150px;
    border: 1px solid #a4a4a4;
    background: rgba(193, 193, 193, 0.585);
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px 0px rgba(255, 255, 224, 0.737);
}



.cubespinner .face1 {
    transform: translateZ(75px);
}

.cubespinner .face2 {
    transform: rotateY(90deg) translateZ(75px);
}

.cubespinner .face3 {
    transform: rotateY(90deg) rotateX(90deg) translateZ(75px);
}

.cubespinner .face4 {
    transform: rotateY(180deg) rotateZ(90deg) translateZ(75px);
}

.cubespinner .face5 {
    transform: rotateY(-90deg) rotateZ(90deg) translateZ(75px);
}

.cubespinner .face6 {
    transform: rotateX(-90deg) translateZ(75px);
}

@keyframes spincube {

    from,
    to {
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }

    16% {
        transform: rotateY(-90deg);
    }

    33% {
        transform: rotateY(-90deg) rotateZ(90deg);
    }

    50% {
        transform: rotateY(-180deg) rotateZ(90deg);
    }

    66% {
        transform: rotateY(-270deg) rotateZ(90deg);
    }

    83% {
        transform: rotateX(90deg);
    }
}</style>
