import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";

import DefaultLayout from "../layouts/default/Default.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        component: Home,
        meta: { title: "Home" },
      },
      {
        path: "/about",
        component: About,
        meta: { title: "About" },
      },
      {
        path: "/contact",
        component: Contact,
        meta: { title: "Contact" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
