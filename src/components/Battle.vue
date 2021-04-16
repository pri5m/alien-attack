<template>
  <section class="p-d-flex " style="height: 100vh" id="game">
    <Splitter style="height: 100%; width: 100%">
      <SplitterPanel :size="25" :minSize="15">
        <ControlPanel />
      </SplitterPanel>
      <SplitterPanel :size="45" :minSize="35">
        <BattleGround />
      </SplitterPanel>
      <SplitterPanel :size="30" :minSize="20">
        <BattleLog />
      </SplitterPanel>
    </Splitter>
  </section>
</template>

<script>
  import BattleGround from "./battle_ground/BattleGround.vue";
  import ControlPanel from "./control_panel/ControlPanel.vue";
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
