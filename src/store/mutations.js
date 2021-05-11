import { randomValue } from "../utils/utils";

export default {
  newRound(state) {
    state.playerHealth = 100;
    state.alienHealth = 100;
    state.winner = null;
    state.turnCount = 0;
    state.logMessages = [];
    state.healCount = 3;
    state.specialAttackCountdown = 0;
  },
  addLogMessage(state, payload) {
    state.logMessages.unshift({
      actionBy: payload.who,
      actionType: payload.what,
      actionValue: payload.value,
    });
  },
  attackAlien(state, payload) {
    state.isOngoingRound = true;
    state.alienHealth -= payload.value;
    if (payload.isSpecialAttack) {
      state.specialAttackCountdown = randomValue(4, 6);
    }
  },
  healPlayer(state, value) {
    state.isOngoingRound = true;
    if (state.playerHealth + value > 100) {
      state.playerHealth = 100;
    } else {
      state.playerHealth += value;
    }
    state.healCount--;
  },
  attackPlayer(state, value) {
    state.playerHealth -= value;
    if (state.specialAttackCountdown > 0) {
      state.specialAttackCountdown--;
    }
  },
  finishRound(state) {
    state.isOngoingRound = false;
  },
  winner(state, value) {
    state.winner = value;
    if (value === "alien") {
      state.rounds.alien++;
    } else if (value === "player") {
      state.rounds.player++;
    } else {
      state.rounds.alien++;
      state.rounds.player++;
    }
  },
};
