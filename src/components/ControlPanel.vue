<template>
  <div class="p-grid">
    <div class="p-col-12">
      <h2>Control Panel</h2>
    </div>
    <div class="p-col-12">
      <Button
        id="action-button"
        icon="pi pi-play"
        label="ATTACK"
        @click="attackAlien"
      />
    </div>
    <div class="p-col-12">
      <Button
        id="action-button"
        :label="isSpecialAttack ? 'COOL DOWN' : 'SPECIAL ATTACK'"
        :icon="isSpecialAttack ? 'pi pi-lock' : 'pi pi-forward'"
        :disabled="isSpecialAttack"
        @click="specialAttackAlien"
      />
    </div>
    <div class="p-col-12">
      <Button
        id="action-button"
        label="HEAL"
        icon="pi pi-user-plus"
        @click="healPlayer"
      />
    </div>
    <div class="p-col-12">
      <router-link to="/game-over"
        ><Button
          id="link-button"
          label="SURRENDER"
          icon="pi pi-ban"
          @click="surrender"
      /></router-link>
    </div>
    <div class="p-col-12">
      <h3 v-if="playerHealth < 15">
        <i
          class="pi pi-exclamation-triangle"
          style="font-size: 1.2rem; color: red"
        />
        Player health low
      </h3>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  export default {
    name: "ControlPanel",
    computed: {
      ...mapGetters(["isSpecialAttack", "playerHealth"]),
    },
    watch: {
      "$store.state.playerHealth"(value) {
        if (value <= 0 && this.$store.getters.alienHealth <= 0) {
          this.$store.commit("winner", "draw");
        } else if (value <= 0) {
          this.$store.commit("winner", "alien");
        }
      },
      "$store.state.alienHealth"(value) {
        if (value <= 0 && this.$store.getters.playerHealth <= 0) {
          this.$store.commit("winner", "draw");
        } else if (value <= 0) {
          this.$store.commit("winner", "player");
        }
      },
    },
    methods: {
      attackAlien() {
        const attackValue = getRandomValue(5, 12);
        this.$store.commit("incrementTurn");
        this.$store.commit("attackAlien", attackValue);
        this.$store.commit({
          type: "addLogMessage",
          who: "player",
          what: "attack",
          value: attackValue,
        });
        this.attackPlayer();
      },
      attackPlayer() {
        const attackValue = getRandomValue(8, 15);
        this.$store.commit("incrementTurn");
        this.$store.commit("attackPlayer", attackValue);
        this.$store.commit({
          type: "addLogMessage",
          who: "alien",
          what: "attack",
          value: attackValue,
        });
      },
      specialAttackAlien() {
        const attackValue = getRandomValue(10, 25);
        this.$store.commit("incrementTurn");
        this.$store.commit("attackAlien", attackValue);
        this.$store.commit({
          type: "addLogMessage",
          who: "player",
          what: "attack",
          value: attackValue,
        });
        this.attackPlayer();
      },
      healPlayer() {
        const healValue = getRandomValue(8, 20);
        this.$store.commit("incrementTurn");
        this.$store.commit("healPlayer", healValue);
        this.$store.commit({
          type: "addLogMessage",
          who: "player",
          what: "heal",
          value: healValue,
        });
        this.attackPlayer();
      },
      surrender() {
        this.$store.commit("winner", "alien");
      },
    },
  };
</script>

<style scoped>
  a,
  #action-button {
    width: 70%;
  }
  #link-button {
    width: 100%;
  }
</style>
