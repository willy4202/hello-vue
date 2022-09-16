<template>
  <form>
    <input type="text" placeholder="뭐할래" />
    <button @click="addTodo">
      <slot name="button"></slot>
    </button>
  </form>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      example: "",
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    addTodo(e) {
      console.log(e);
    },
  },
};
</script>

<style scoped>
input {
  width: 200px;
}
</style>
