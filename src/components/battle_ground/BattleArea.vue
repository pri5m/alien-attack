<template>
  <section id="battle-area" style="display: flex">
    <div id="alien" ref="alien" />
    <div id="player" ref="player" />
  </section>
</template>

<script>
  export default {
    name: "BattleArea",
    methods: {
      playerMovement() {
        this.$anime({
          targets: this.$refs.player,
          translateY: -40,
          direction: "alternate",
          easing: "easeInOutQuad",
          duration: 1800,
          loop: true,
        });
      },
      randomTranslate(min, max) {
        return this.$anime.random(min, max);
      },
      alienMovement() {
        this.$anime({
          targets: this.$refs.alien,
          direction: "alternate",
          loop: true,
          easing: "easeInOutQuad",
          duration: 1200,
          translateX: this.randomTranslate(30, 300),
          translateY: this.randomTranslate(0, 40),
          //complete: this.alienMovement(),
        });
      },
    },
    mounted() {
      this.alienMovement();
      this.playerMovement();
    },
  };
</script>

<style scoped>
  #battle-area {
    height: 60vh;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    background-color: black;
    border: 2px solid #6bbfd8;
    margin-top: 20px;
    margin-bottom: 30px;
    position: relative;
  }

  #alien {
    position: absolute;
    height: 15px;
    width: 15px;
    left: 20%;
    background-color: #54e05b;
  }

  #player {
    position: absolute;
    height: 15px;
    width: 15px;
    bottom: 10%;
    left: 50%;
    background-color: #a854e0;
  }
</style>
