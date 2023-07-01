<template>
      <div class="text-container">
        <h1 class="animated-text">  
          <div class="social-icons-container">
            <span class="letter" v-for="(letter, index) in line1" :key="index" @mouseover="animateLetter">
              {{ letter === ' ' ? '\u00A0' : letter }}
            </span>
          </div>
        </h1>
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
      </div>


    <v-row class="contact-form" :style="{ opacity: opacity1 }">
        <v-col cols="12" sm="6">
            <v-form @submit.prevent="sendEmail" ref="refForm">
                <v-container>
                    <v-responsive>

                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-text-field variant="underlined" type="text" name="name" label="Name" required ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field variant="underlined" type="email" name="email" label="Email" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field variant="underlined" type="text" name="subject" label="Subject" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm='12'>
                                <v-textarea variant="underlined" name="message" label="Message" required></v-textarea>
                            </v-col>
                            <v-col cols="12">
                                <v-btn type="submit" color="primary" :loading="loading" required :disabled="loading">SEND</v-btn>
                            </v-col>
                        </v-row>
                    </v-responsive>
                </v-container>
            </v-form>
        </v-col>
    </v-row>
</template>

<script>

import emailjs from '@emailjs/browser'


export default {
    name: "Contact",
    data() {
        return {
            line1: "Contact me",
            opacity: 0,
            opacity1: 0,
            loading: false,
        }

    },
    mounted() {
        this.animateText();
        setTimeout(() => {
            this.opacity = 1;
        }, 1000);
        setTimeout(() => {
            this.opacity1 = 1;
        }, 2000);
    },
    methods: {
        sendEmail(e) {
            e.preventDefault();
            const refForm = this.$refs.refForm.$el;
            this.loading = true;


            emailjs
                .sendForm(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    refForm,
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                )
                .then(
                    () => {
                        this.loading = false;
                        alert('Message successfully sent!');
                        window.location.reload(false);
                    },
                    () => {
                        this.loading = false;
                        alert('Failed to send the message, please try again');
                    }
                );
        },

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

<style>
.contact-form {
    margin-left: 8%;
    margin-right: 10%;
    margin-bottom: 10%;
    margin-top: -5%;

    color: rgb(255, 255, 255);
    transition: opacity 0.5s ease-in-out;
}

.contact-form v-text-field,
.contact-form v-textarea {
    width: 100%;
}

.social-icons-container {
  display: flex;
  align-items: left;
  justify-content: left;
  margin-bottom: 10px;
}

.social-icons {
  display: flex;
  justify-content: left;
  gap: 20px; 
  margin-top: 20px;
  transition: opacity 0.5s ease-in-out;
}


.icon-link {
    text-decoration: none;
}



.text-container {
    text-align: left;
    margin-left: 10%;
    margin-top: 5%;
    margin-right: 10%;
    margin-bottom: 5%;
}

.contact-text {
    font-size: 17px;
    color: #ffffff;
    margin-bottom: 10px;
    margin-top: 40px;
    letter-spacing: 3px;
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
</style>