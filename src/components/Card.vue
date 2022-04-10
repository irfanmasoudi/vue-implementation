<template>
  <div class="card" >
    <p :style="`color: ${color}`">{{ tittle }}</p>
  </div>
</template>

<style scoped>
p {
  color: red;
}
</style>

<script>
export default {
  props: ["tittle", "color"],
  name: "CardComponent",
  mounted(){
      this.$store.dispatch("waitAndIncrement")
  }
};
</script>
