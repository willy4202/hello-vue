<template>
  <todo-list-new />
  <todo-list-main />
</template>
<script>
import { readonly, ref, provide } from "vue";
import TodoListNew from "./TodoListNew.vue";

export default {
  components: { TodoListNew },

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
