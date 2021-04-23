import getters from "../../store/getters";

test('positive "alienHealth" returns value', () => {
  const state = {
    alienHealth: 12,
  };
  expect(getters.alienHealth(state)).toBe(12);
});

test('negative "alienHealth" returns 0', () => {
  const state = {
    alienHealth: -4,
  };
  expect(getters.alienHealth(state)).toBe(0);
});

test('positive "playerHealth" returns value', () => {
  const state = {
    playerHealth: 12,
  };
  expect(getters.playerHealth(state)).toBe(12);
});

test('negative "playerHealth" returns 0', () => {
  const state = {
    playerHealth: -4,
  };
  expect(getters.playerHealth(state)).toBe(0);
});

test('"isSpecialAttack" returns true if specialAttackCountdown is 0', () => {
  const state = {
    specialAttackCountdown: 0,
  };
  expect(getters.isSpecialAttack(state)).toBe(true);
});

test('"isSpecialAttack" returns false if specialAttackCountdown is > 0', () => {
  const state = {
    specialAttackCountdown: 2,
  };
  expect(getters.isSpecialAttack(state)).toBe(false);
});

test('"isHealingEnabled" returns true if healCount is > 0', () => {
  const state = {
    healCount: 2,
  };
  expect(getters.isHealingEnabled(state)).toBe(true);
});

test('"isHealingEnabled" returns false if healCount is 0', () => {
  const state = {
    healCount: 0,
  };
  expect(getters.isHealingEnabled(state)).toBe(false);
});
