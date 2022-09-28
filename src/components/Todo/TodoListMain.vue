<template>
  <todo-list-menu v-on:change-filter="onChangeFilter" class="p-0" />
  <div v-for="key in Object.keys(filtered_todos)" :key="key" class="mb-3">
    <div v-if="use_category">
      <em>{{ key }}</em>
    </div>
    <todo-list :data="filtered_todos[key]" />
  </div>
  <div class="my-2 mt-5">
    <span style="background-color: red"> &nbsp;</span>
    <strong>미완료 작업</strong>
  </div>
  <todo-list :data="pending_todos" />
</template>

<script>
import { useFilter } from "@/compositions/filter";
import TodoList from "./TodoList.vue";
import TodoListMenu from "./TodoListMenu.vue";
import { ref } from "@vue/reactivity";
import { provide } from "@vue/runtime-core";

export default {
  name: "TodoListMenu",
  components: { TodoListMenu, TodoList },
  setup(props) {
    const {
      getPendingTodos,
      getActiveTodayTodos,
      getCompletedTodayTodos,
      getAllTodayTodos,
      getAllTodos,
    } = useFilter();

    const filter = ref(0);
    const filtered_todos = ref([]);
    const pending_todos = ref([]);
    const use_category = ref(false);
    const todos = inject("todos");

    const filter = {
      0: {
        str: "해야 할 작업들",
        func: getCompletedTodayTodos,
        category: false,
      },
      1: {
        str: "완료한 작업들",
        func: getActiveTodayTodos,
        category: false,
      },
      2: {
        str: "오늘의 모든 기록",
        func: getAllTodayTodos,
        category: false,
      },
      3: {
        str: "모든 작업",
        func: getAllTodos,
        category: false,
      },
    };

    provide("filters", filters);

    const groupBy = (todos) => {
      return todos.reduce((acc, cur) => {});
    };

    return {};
  },
};
</script>
