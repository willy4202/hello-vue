<template>
  <ul>
    <li>{{ notice }}</li>
    <li v-for="todo in todos" v-bind:key="todo">
      <slot :todo="todo"></slot>
    </li>
  </ul>
</template>
<script>
export default {
  inject: ["notice"],
  components: {},
  data() {
    return {
      todos: [1, 2, 3, 4],
    };
  },

  created() {},

  updated() {},

  methods: {},
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
