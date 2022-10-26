<template>
  <div class="main">
    <div class="container">
      <div v-for="element in arr" :key="element">
        {{ element }}
      </div>
    </div>
  </div>
</template>
<script setup>
const arr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "d",
  "e",
  "f",
  "g",
  "d",
  "e",
  "f",
  "g",
];
</script>
<style lang="scss">
/* .main {
  width: 750px;
  margin: 0 auto;
} */

.container {
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  grid-template-areas:
    "header header header"
    "   a    main    b   "
    "   .     .      .   "
    "footer footer footer";
}
</style>
