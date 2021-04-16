export default {
  alienHealth(state) {
    return state.alienHealth < 0 ? 0 : state.alienHealth;
  },
  playerHealth(state) {
    return state.playerHealth < 0 ? 0 : state.playerHealth;
  },
  specialAttackCountdown(state) {
    return state.specialAttackCountdown;
  },
  isSpecialAttack(state) {
    return state.specialAttackCountdown == 0 ? true : false;
  },
  healCount(state) {
    return state.healCount;
  },
  isHealingEnabled(state) {
    return state.healCount > 0 ? true : false;
  },
};
