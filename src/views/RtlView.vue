<template>
  <html-dir />
  <!-- <css-dir />
  <rtl-css /> -->
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
