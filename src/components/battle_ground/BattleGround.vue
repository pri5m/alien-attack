<template>
  <BaseHealthBar
    title="Alien Health"
    :value="alienHealth"
    :is-title-first="true"
    style="margin-top:20px"
  />
  <BattleDisplay />
  <BaseHealthBar
    title="Your Health"
    :value="playerHealth"
    :is-title-first="false"
  />
  <div />
</template>

<script>
  import { mapGetters } from "vuex";
  import BaseHealthBar from "../ui/BaseHealthBar.vue";
  import BattleDisplay from "./BattleDisplay.vue";
  export default {
    name: "BattleGround",
    components: {
      BaseHealthBar,
      BattleDisplay,
    },
    computed: {
      ...mapGetters(["alienHealth", "playerHealth"]),
    },
  };
</script>
