<template>
  <!-- <html-dir /> -->
  <css-dir />
  <!-- <rtl-css /> -->
</template>
<script>
import RtlCss from "@/components/RtlExamples/RtlCss.vue";
import HtmlDir from "@/components/RtlExamples/HtmlDir.vue";
import CssDir from "@/components/RtlExamples/CssDir.vue";
export default {
  name: "",
  components: { RtlCss, HtmlDir, CssDir },
  data() {
    return {
      example: "",
    };
  },
  methods: {},
};
</script>

<style lang="scss">
header {
  text-align: center;
}
article {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
section {
  border: 1px solid black;
  width: 500px;
  padding: 20px 0;

  h4 {
    text-align: center;
  }
}
</style>
