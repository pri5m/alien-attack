<template>
  <div class="p-grid">
    <div class="p-col-12">
      <h2>Control Panel</h2>
    </div>
    <div class="p-col-12">
      <Button
        icon="pi pi-play"
        label="ATTACK"
        @click="attackAlien"
        :disabled="isOngoingRound"
      />
    </div>
    <div class="p-col-12">
      <Button
        :label="
          isSpecialAttack
            ? 'SPECIAL ATTACK'
            : 'COOLDOWN (' + specialAttackCountdown + ')'
        "
        :icon="isSpecialAttack ? 'pi pi-forward' : 'pi pi-lock'"
        :disabled="!isSpecialAttack || isOngoingRound"
        @click="specialAttackAlien"
      />
    </div>
    <div class="p-col-12">
      <Button
        :label="
          isHealingEnabled ? 'HEAL (' + healCount + ')' : 'OUT OF SUPPLIES'
        "
        :icon="isHealingEnabled ? 'pi pi-user-plus' : 'pi pi-lock'"
        :disabled="!isHealingEnabled || isOngoingRound"
        @click="healPlayer"
      />
    </div>
    <div class="p-col-12">
      <Button
        label="SURRENDER"
        icon="pi pi-ban"
        @click="showModal"
        :disabled="isOngoingRound"
      />
    </div>
    <SurrenderModal :open="isModalVisible" @close="closeModal" />
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
  import { randomValue } from "../../utils/utils";
  import SurrenderModal from "./SurrenderModal.vue";

  const attackInterval = 800;

  export default {
    name: "ControlPanel",
    data() {
      return {
        isModalVisible: false,
      };
    },
    components: {
      SurrenderModal,
    },
    computed: {
      ...mapGetters([
        "isSpecialAttack",
        "specialAttackCountdown",
        "alienHealth",
        "playerHealth",
        "healCount",
        "isHealingEnabled",
        "isOngoingRound",
      ]),
    },
    watch: {
      playerHealth(value) {
        if (value <= 0 && this.alienHealth <= 0) {
          this.$store.commit("winner", "draw");
        } else if (value <= 0) {
          this.$store.commit("winner", "alien");
        }
      },
      alienHealth(value) {
        if (value <= 0 && this.playerHealth <= 0) {
          this.$store.commit("winner", "draw");
        } else if (value <= 0) {
          this.$store.commit("winner", "player");
        }
      },
    },
    methods: {
      attackPlayer() {
        const attackValue = randomValue(8, 15);
        this.$store.commit("attackPlayer", attackValue);
        this.$store.commit({
          type: "addLogMessage",
          who: "alien",
          what: "attack",
          value: attackValue,
        });
      },
      attackAlien() {
        const attackValue = randomValue(5, 12);
        this.$store.commit({
          type: "attackAlien",
          value: attackValue,
          isSpecialAttack: false,
        });
        this.$store.commit({
          type: "addLogMessage",
          who: "player",
          what: "attack",
          value: attackValue,
        });
        setTimeout(() => {
          this.attackPlayer();
          setTimeout(() => {
            // Timeout added to finish round after player's healthbar animation completes
            this.$store.commit("finishRound");
          }, attackInterval);
        }, attackInterval);
      },
      specialAttackAlien() {
        const attackValue = randomValue(12, 22);
        this.$store.commit({
          type: "attackAlien",
          value: attackValue,
          isSpecialAttack: true,
        });
        this.$store.commit({
          type: "addLogMessage",
          who: "player",
          what: "attack",
          value: attackValue,
        });
        setTimeout(() => {
          this.attackPlayer();
          setTimeout(() => {
            this.$store.commit("finishRound");
          }, attackInterval);
        }, attackInterval);
      },
      healPlayer() {
        const healValue = randomValue(15, 25);
        this.$store.commit("healPlayer", healValue);
        this.$store.commit({
          type: "addLogMessage",
          who: "player",
          what: "heal",
          value: healValue,
        });
        setTimeout(() => {
          this.attackPlayer();
          setTimeout(() => {
            this.$store.commit("finishRound");
          }, attackInterval);
        }, attackInterval);
      },
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
    },
  };
</script>

<style scoped>
  .p-button {
    width: 70%;
  }
</style>
