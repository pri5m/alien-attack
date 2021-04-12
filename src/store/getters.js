export default {
  isSpecialAttack(state) {
    return state.turnCount % 3 !== 0;
  },
  playerHealth(state) {
    if (state.playerHealth < 0) {
      return 0;
    }
    return state.playerHealth;
  },
  alienHealth(state) {
    if (state.alienHealth < 0) {
      return 0;
    }
    return state.alienHealth;
  },
};
