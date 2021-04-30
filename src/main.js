import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import VueAnime from "./plugins/anime";
import PrimeVue from "primevue/config";
import Button from "primevue/button";

import "primevue/resources/themes/arya-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const app = createApp(App);

app
  .use(VueAnime)
  .use(PrimeVue)
  .use(store)
  .use(router)
  .component("Button", Button)
  .mount("#app");
