export default {
  alienHealth(state) {
    return state.alienHealth < 0 ? 0 : state.alienHealth;
  },
  playerHealth(state) {
    return state.playerHealth < 0 ? 0 : state.playerHealth;
  },
  winner(state) {
    return state.winner;
  },
  logMessages(state) {
    return state.logMessages;
  },
  rounds(state) {
    return state.rounds;
  },
  healCount(state) {
    return state.healCount;
  },
  specialAttackCountdown(state) {
    return state.specialAttackCountdown;
  },
  ongoingRound(state) {
    return state.ongoingRound;
  },
  isSpecialAttack(state) {
    return state.specialAttackCountdown == 0 ? true : false;
  },
  isHealingEnabled(state) {
    return state.healCount > 0 ? true : false;
  },
};
