<template>
  <BaseHealthBar title="Alien Health" :value="alienHealth" />
  <section style="height: 60vh"></section>
  <BaseHealthBar title="Your Health" :value="playerHealth" />
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
