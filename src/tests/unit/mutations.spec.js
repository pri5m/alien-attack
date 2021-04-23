import mutations from "../../store/mutations";

test('"addLogMessage" adds a log message', () => {
  //Given
  const state = {
    logMessages: [],
  };
  const payload = {
    who: "player",
    what: "attack",
    value: 3,
  };
  //When
  mutations.addLogMessage(state, payload);
  //Then
  const message = state.logMessages[0];
  expect(message.actionBy).toBe("player");
  expect(message.actionType).toBe("attack");
  expect(message.actionValue).toBe(3);
  expect(state.logMessages.length).toBe(1);
});

test('"attackAlien" decreases alienHealth', () => {
  // Decrease alien health from 8 to 3
  //Given
  const state = {
    alienHealth: 8,
  };
  const payload = {
    value: 5,
    isSpecialAttack: false,
  };
  //When
  mutations.attackAlien(state, payload);
  //Then
  expect(state.alienHealth).toBe(3);
});

test('"attackPlayer" decreases playerHealth', () => {
  // Decrease player health from 8 to 3 and decrement specialAttackCountdown
  //Given
  const state = {
    playerHealth: 8,
    specialAttackCountdown: 3,
  };
  const value = 5;
  //When
  mutations.attackPlayer(state, value);
  //Then
  expect(state.playerHealth).toBe(3);
  expect(state.specialAttackCountdown).toBe(2);
});

test('"healPlayer" increases playerHealth', () => {
  // Max playerHealth is 100 so should not heal to a value of more than 100
  //Given
  const state = {
    playerHealth: 94,
    healCount: 3,
  };
  const value = 10;
  //When
  mutations.healPlayer(state, value);
  //Then
  expect(state.playerHealth).toBe(100);
  expect(state.healCount).toBe(2);
});

test('"winner" determines winner and sets round score', () => {
  // Declare player as the winner
  //Given
  const state = {
    winner: null,
    rounds: { player: 0, alien: 0 },
  };
  const value = "player";
  //When
  mutations.winner(state, value);
  //Then
  expect(state.winner).toBe("player");
  expect(state.rounds.player).toBe(1);
  expect(state.rounds.alien).toBe(0);
});
