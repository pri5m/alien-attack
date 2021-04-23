import { createStore } from "vuex";
import rootGetters from "./getters.js";
import rootMutations from "./mutations.js";

const store = createStore({
  state() {
    return {
      playerHealth: 100,
      alienHealth: 100,
      winner: null,
      logMessages: [],
      rounds: { player: 0, alien: 0 },
      healCount: 3,
      specialAttackCountdown: 0,
    };
  },
  getters: rootGetters,
  mutations: rootMutations,
});

export default store;
