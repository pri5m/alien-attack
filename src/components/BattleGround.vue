<template>
  <div class="p-grid">
    <div class="p-col-12">
      <h2>Alien Health</h2>
    </div>
    <div class="p-col-12" id="healthbar">
      <ProgressBar id="alienHealthBar" :value="alienHealth" />
    </div>
    <div class="p-col-12">
      <h2>Your Health</h2>
    </div>
    <div class="p-col-12" id="healthbar">
      <ProgressBar id="playerHealthBar" :value="playerHealth"></ProgressBar>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import ProgressBar from "primevue/progressbar";
  export default {
    name: "BattleGround",
    components: {
      ProgressBar,
    },
    computed: {
      ...mapGetters(["alienHealth", "playerHealth"]),
    },
  };
</script>

<style scoped>
  .p-col-12 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #healthbar {
    display: block;
  }
  #playerHealthBar #monsterHealthBar {
    width: 80%;
  }
</style>
