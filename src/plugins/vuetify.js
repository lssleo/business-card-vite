/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "@/styles/settings.scss";


// Composables
import { createVuetify } from "vuetify";
import { VBtn } from "vuetify/components";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults: {
    VBtn: {
      color: "primary",
      variant: "outlined",
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#FFD700",
          secondary: "#FFFFFF",
        },
      },
    },
  },
});
