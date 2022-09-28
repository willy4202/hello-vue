<template></template>
<script>
import { readonly, ref, provide } from "vue";

export default {
  components: {},

  setup() {
    const todos = ref([]);
    const initTodos = (init_todos) => {
      todos.value = init_todos;
    };
    const addTodo = () => {};
    const removeTodo = () => {};
    const completeTodo = () => {};

    provide("todos", readonly(todos));
    provide("addTodo", addTodo);
    provide("removeTodo", removeTodo);
    provide("completeTodo", completeTodo);
  },
};
</script>
