<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
  export default {
    name: "App",
    watch: {
      "$store.state.winner"() {
        //When there is a winner, switch to the game over page
        this.$router.push({ path: "/game-over" });
      },
    },
  };
</script>

<style>
  body {
    margin: 0px;
  }
  h2,
  h3 {
    margin-bottom: 0px;
  }
  a {
    text-decoration: none;
  }
  .p-col-12 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
