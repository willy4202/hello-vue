<template>
  <header>
    <div class="my-5">
      <h1>ToDo List</h1>
      {{ today }}
    </div>
  </header>
  <todo-list-container />
</template>
<script>
import TodoListContainer from "@/components/Todo/TodoListContainer.vue";
import { inject } from "@vue/runtime-core";

export default {
  name: "app",
  components: { TodoListContainer },
  setup() {
    const today = inject("today");
    return { today };
  },
};
</script>

<style scoped>
div {
  text-align: center;
  font-family: "Arial Bold";
}
div,
h1 {
  font-weight: bolder;
}
</style>
