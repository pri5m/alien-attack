import { createWebHistory, createRouter } from "vue-router";
import Battle from "@/views/Battle.vue";
import GameOver from "@/views/GameOver.vue";

const routes = [
  { path: "/battle", component: Battle },
  { path: "/game-over", component: GameOver },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
