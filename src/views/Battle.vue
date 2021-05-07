<template>
  <section class="p-d-flex " style="height: 100vh" id="game">
    <Splitter style="height: 100%; width: 100%">
      <SplitterPanel :size="25" :minSize="15">
        <ControlPanel />
      </SplitterPanel>
      <SplitterPanel :size="45" :minSize="35">
        <BattleDisplay />
      </SplitterPanel>
      <SplitterPanel :size="30" :minSize="20">
        <BattleLog />
      </SplitterPanel>
    </Splitter>
  </section>
</template>

<script>
  import BattleDisplay from "../components/battle_ground/BattleDisplay.vue";
  import ControlPanel from "../components/control_panel/ControlPanel.vue";
  import BattleLog from "../components/BattleLog.vue";
  import Splitter from "primevue/splitter";
  import SplitterPanel from "primevue/splitterpanel";

  export default {
    name: "Battle",
    components: {
      BattleDisplay,
      ControlPanel,
      BattleLog,
      Splitter,
      SplitterPanel,
    },
  };
</script>
