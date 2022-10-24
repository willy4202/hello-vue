<template>
  <html-dir-example>HTML dir</html-dir-example>
  <css-dir-example>CSS dir</css-dir-example>
  <rtl-example>RTLCSS</rtl-example>
</template>
<script setup>
import RtlExample from "@/components/RtlExamples/RtlExample.vue";
import HtmlDirExample from "@/components/RtlExamples/HtmlDirExample.vue";
import CssDirExample from "@/components/RtlExamples/CssDirExample.vue";
</script>

<style lang="scss">
header {
  text-align: center;
  margin: 20px 0;
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
