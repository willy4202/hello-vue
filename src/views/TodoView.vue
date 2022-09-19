<template>
  <main>
    <todo-header />
    <custom-button pill type="switch" sm v-model:active="active"
      >switch</custom-button
    >
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
import MouseTracker from "@/components/MouseTracker/MouseTracker.vue";
import CustomButton from "@/components/Todo/CustomButton.vue";

export default {
  provide: {
    notice: "공지",
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoLists,
    MouseTracker,
    CustomButton,
  },
  data() {
    return {
      active: false,
    };
  },
  watch: {
    active(new_val) {
      console.log(new_val);
    },
  },
  methods: {},
};
</script>

<style scoped></style>
