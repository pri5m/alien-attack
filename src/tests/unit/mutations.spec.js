import mutations from "../../store/mutations";

test('"attackAlien" decreases alienHealth', () => {
  // Decrease alien health from 8 to 3
  const state = {
    alienHealth: 8,
    specialAttackCountdown: 0,
  };
  const payload = {
    value: 5,
    isSpecialAttack: false,
  };
  mutations.attackAlien(state, payload);
  expect(state.alienHealth).toBe(3);
});
