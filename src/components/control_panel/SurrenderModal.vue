<template>
  <Dialog
    v-model:visible="open"
    :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
    :style="{ width: '50vw' }"
    :modal="open"
    @click="closeModal"
  >
    <template #header>
      <h1>Surrender</h1>
    </template>
    <p>
      Are you sure that you want to surrender? This will cause the round to end
      and the alien to be decared the winner.
    </p>
    <Button
      id="link-button"
      label="YES, SURRENDER"
      icon="pi pi-check"
      autofocus
      @click="surrender"
    />
    <Button
      label="No"
      icon="pi pi-times"
      class="p-button-text"
      @click="closeModal"
    />
  </Dialog>
</template>

<script>
  import Dialog from "primevue/dialog";
  export default {
    name: "SurrenderModal",
    props: ["open"],
    emits: ["close"],
    components: {
      Dialog,
    },
    methods: {
      closeModal() {
        this.$emit("close");
      },
      surrender() {
        this.$store.commit("winner", "alien");
      },
    },
  };
</script>

<style>
  .p-dialog-header {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }
</style>

<!--.p-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background-color: rgba(43, 43, 43, 0.75);
  }

  .p-dialog {
    position: fixed;
    top: 30vh;
    width: 30rem;
    left: calc(50% - 15rem);
    margin: 0;
    border-radius: 12px;
    padding: 1rem;
    background-color: white;
    z-index: 100;
    border: none;
  }-->
