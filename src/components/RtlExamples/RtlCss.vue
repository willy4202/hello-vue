<template>
  <main>
    <h2>RTL Examples</h2>
    <h4>Current direction: {{ dir }}</h4>
    <form>
      <button @click="changeDir">change dir</button>
    </form>
    <div className="float">
      I float right if we are ltr, and left if we are rtl
    </div>
  </main>
</template>

<script>
import { ref, reactive, toRefs } from "@vue/reactivity";
export default {
  setup() {
    const state = reactive({
      hi: "안녕하세요? ",
      rtl: "rtl.vue ",
      test: "테스트입니다. ",
    });
    const dir = ref("ltr");

    const changeDir = () => {
      console.log("hi");
    };

    return {
      ...toRefs(state),
      dir,
      changeDir,
    };
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
div {
  margin-top: 60px;
  float: right;
}
</style>
