<template>
  <lang-selector />
  <h1>{{ $t("title") }}</h1>
  <p>{{ $t("hello") }}</p>
</template>

<script>
import LangSelector from "@/components/LangSelector.vue";
export default {
  components: { LangSelector },
  name: "I18n",
};
</script>
