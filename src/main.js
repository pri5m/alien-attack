import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import VueAnime from "./plugins/anime";
import store from "./store/index.js";
import Battle from "./components/Battle.vue";
import GameOver from "./components/GameOver.vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";

import "primevue/resources/themes/arya-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/battle", component: Battle },
    { path: "/game-over", component: GameOver },
  ],
});

const app = createApp(App);

app
  .use(VueAnime)
  .use(PrimeVue, { ripple: true })
  .use(store)
  .use(router)
  .component("Button", Button)
  .mount("#app");
