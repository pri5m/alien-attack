<template>
  <main>
    <router-view />
  </main>
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
</style>
