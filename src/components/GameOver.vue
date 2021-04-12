<template>
  <section class="game-over-container">
    <div class="p-grid">
      <div class="p-col-12" style="height:10vh" />
      <div class="p-col-12">
        <Card>
          <template #title>
            <h2>Round Over!</h2>
          </template>
          <template #content>
            <h3 v-if="$store.state.winner === 'alien'">You lost!</h3>
            <h3 v-else-if="$store.state.winner === 'player'">You won!</h3>
            <h3 v-else>It's a draw!</h3>
            <h3>
              Player: {{ $store.state.rounds.player }} Alien:
              {{ $store.state.rounds.alien }}
            </h3>
          </template>
          <template #footer>
            <router-link to="/battle">
              <Button
                label="START NEW ROUND"
                icon="pi pi-refresh"
                @click="startRound"
              ></Button>
            </router-link>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script>
  import Card from "primevue/card";

  export default {
    name: "GameOver",
    components: {
      Card,
    },
    methods: {
      startRound() {
        this.$store.commit("newRound");
      },
    },
  };
</script>

<style scoped>
  h2 {
    margin-top: 0px;
  }
  .p-grid {
    width: 100vw;
  }
  .game-over-container {
    background: black;
    height: 100vh;
  }
</style>
