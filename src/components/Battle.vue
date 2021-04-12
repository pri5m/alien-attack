<template>
  <section class="p-d-flex " style="height: 100vh" id="game" else>
    <Splitter
      stateKey="mykey"
      stateStorage="local"
      style="height: 100%; width: 100%"
    >
      <SplitterPanel :size="25">
        <ControlPanel />
      </SplitterPanel>
      <SplitterPanel :size="50">
        <BattleGround />
      </SplitterPanel>
      <SplitterPanel :size="25">
        <BattleLog />
      </SplitterPanel>
    </Splitter>
  </section>
</template>

<script>
  import BattleGround from "./BattleGround.vue";
  import ControlPanel from "./ControlPanel.vue";
  import BattleLog from "./BattleLog.vue";
  import Splitter from "primevue/splitter";
  import SplitterPanel from "primevue/splitterpanel";

  export default {
    name: "Battle",
    components: {
      BattleGround,
      ControlPanel,
      BattleLog,
      Splitter,
      SplitterPanel,
    },
  };
</script>
