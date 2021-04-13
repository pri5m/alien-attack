<template>
  <BaseHealthBar
    title="Alien Health"
    :value="alienHealth"
    :is-title-first="true"
    style="margin-top:20px"
  />
  <section id="battle-display"></section>
  <BaseHealthBar
    title="Your Health"
    :value="playerHealth"
    :is-title-first="false"
  />
</template>

<script>
  import { mapGetters } from "vuex";
  import BaseHealthBar from "./ui/BaseHealthBar.vue";
  export default {
    name: "BattleGround",
    components: {
      BaseHealthBar,
    },
    computed: {
      ...mapGetters(["alienHealth", "playerHealth"]),
    },
  };
</script>

<style scoped>
  #battle-display {
    height: 60vh;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    background-color: black;
    border: 2px solid #6bbfd8;
    margin-top: 20px;
    margin-bottom: 30px;
  }
</style>
