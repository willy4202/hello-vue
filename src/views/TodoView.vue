<template>
  <main>
    <todo-header />
    <todo-input>
      <template v-slot:button>추가</template>
    </todo-input>
    <todo-lists>
      <template v-slot="slotProps">✔️ {{ slotProps.todo }}</template>
    </todo-lists>
  </main>
</template>
<script>
import TodoHeader from "@/components/Todo/TodoHeader.vue";
import TodoInput from "@/components/Todo/TodoInput.vue";
import TodoLists from "@/components/Todo/TodoLists.vue";

export default {
  provide: {
    notice: "공지",
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoLists,
  },
  data() {
    return {};
  },
  created() {},
  updated() {},
  methods: {},
};
</script>

<style scoped></style>
