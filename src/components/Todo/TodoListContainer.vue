<template>
  <todo-list data="h" />
</template>
<script>
import { readonly, ref, provide } from "vue";
import TodoList from "./TodoList.vue";

export default {
  components: { TodoList },

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
