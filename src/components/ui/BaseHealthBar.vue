<template>
  <div class="p-grid">
    <div class="p-col-12">
      <h2>{{ title }}</h2>
    </div>
    <div class="p-col-12" id="healthbar">
      <ProgressBar id="healthBar" :value="value" />
    </div>
  </div>
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
    },
  };
</script>

<style scoped>
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
  }
</style>
