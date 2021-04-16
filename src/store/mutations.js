export default {
  newRound(state) {
    state.playerHealth = 100;
    state.alienHealth = 100;
    state.winner = null;
    state.turnCount = 0;
    state.logMessages = [];
    state.healCount = 3;
  },
  incrementTurn(state) {
    state.turnCount++;
  },
  addLogMessage(state, payload) {
    state.logMessages.unshift({
      actionBy: payload.who,
      actionType: payload.what,
      actionValue: payload.value,
    });
  },
  attackAlien(state, value) {
    state.alienHealth -= value;
  },
  attackPlayer(state, value) {
    state.playerHealth -= value;
  },
  healPlayer(state, value) {
    if (state.playerHealth + value > 100) {
      state.playerHealth = 100;
    } else {
      state.playerHealth += value;
    }
    state.healCount--;
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
