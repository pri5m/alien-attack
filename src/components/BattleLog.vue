<template>
  <div class="p-grid" style="margin-right: 0px;">
    <div class="p-col-12">
      <h2>Battle Log</h2>
    </div>
    <div class="p-col-12">
      <h3>
        <span class="log--player">Player</span>:
        {{ $store.state.rounds.player }}
        <span class="log--alien">Alien</span>:
        {{ $store.state.rounds.alien }}
      </h3>
    </div>
  </div>
  <ScrollPanel class="log" style="height:75vh; background-color: #251a36;">
    <ul>
      <li v-for="(logMessage, index) in $store.state.logMessages" :key="index">
        <span
          :class="{
            'log--player': logMessage.actionBy === 'player',
            'log--alien': logMessage.actionBy === 'alien',
          }"
          >{{ logMessage.actionBy === "player" ? "Player" : "Alien" }}
        </span>
        <span v-if="logMessage.actionType === 'heal'">
          heals themselves for
          <span class="log--heal">{{ logMessage.actionValue }}</span>
        </span>
        <span v-else>
          attacks and deals
          <span class="log--damage">{{ logMessage.actionValue }}</span>
        </span>
        <span v-if="logMessage.actionBy === 'player'">
          <hr class="dashed"
        /></span>
      </li>
    </ul>
  </ScrollPanel>
</template>

<script>
  import ScrollPanel from "primevue/scrollpanel";
  export default {
    name: "BattleLog",
    components: {
      ScrollPanel,
    },
  };
</script>

<style scoped>
  ul {
    list-style: none;
    margin-left: 20px;
    margin-right: 20px;
    padding: 0;
    font-family: "Courier New", monospace;
  }
  li {
    margin: 0.5rem 0;
  }
  hr.dashed {
    border-top: 3px dashed #bbb;
  }
  .log--player {
    color: #a854e0;
    font-weight: bold;
  }
  .log--alien {
    color: #54e05b;
    font-weight: bold;
  }
  .log--damage {
    color: red;
    font-weight: bold;
  }
  .log--heal {
    color: #24a02a;
    font-weight: bold;
  }
</style>
