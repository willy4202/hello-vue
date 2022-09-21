<template>
  <div>{{ hi }}</div>
  <span>{{ rtl }} </span>
  <span>{{ test }} </span>

  <p>
    <span>hi </span>
    <span class="isolate">my name is. </span>
    <span>vue3</span>
  </p>
</template>

<script>
export default {
  data() {
    return {
      hi: "안녕하세요? ",
      rtl: "rtl.vue ",
      test: "테스트입니다. ",
    };
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
p {
  direction: rtl;
  unicode-bidi: bidi-override;
}
</style>
