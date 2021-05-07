<template>
  <BaseHealthBar
    title="Alien Health"
    :value="alienHealth"
    :is-title-first="true"
    style="margin-top:20px"
  />
  <BattleArea />
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
  import BattleArea from "./BattleArea.vue";
  export default {
    name: "BattleDisplay",
    components: {
      BaseHealthBar,
      BattleArea,
    },
    computed: {
      ...mapGetters(["alienHealth", "playerHealth"]),
    },
  };
</script>
