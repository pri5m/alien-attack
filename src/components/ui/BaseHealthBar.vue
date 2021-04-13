<template>
  <section v-if="isTitleFirst">
    <div class="p-grid">
      <div class="p-col-12">
        <h2>{{ title }}</h2>
      </div>
      <div class="p-col-12" id="healthbar">
        <ProgressBar id="healthBar" :value="value" />
      </div>
    </div>
  </section>
  <section v-else>
    <div class="p-grid">
      <div class="p-col-12" id="healthbar">
        <ProgressBar id="healthBar" :value="value" />
      </div>
      <div class="p-col-12">
        <h2>{{ title }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
  import ProgressBar from "primevue/progressbar";
  export default {
    name: "BaseHealthBar",
    components: {
      ProgressBar,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      value: {
        type: Number,
        required: true,
      },
      isTitleFirst: {
        type: Boolean,
        default: true,
      },
    },
  };
</script>

<style scoped>
  h2 {
    margin: 0px;
  }
  .p-col-12 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #healthbar {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    padding: 0px;
  }
</style>
