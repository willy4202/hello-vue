<template>
  <select-lang-nav />
  <h1>{{ $t("title") }}</h1>
  <p>{{ $t("hello") }}</p>
</template>

<script>
import SelectLangNav from "@/components/SelectLangNav.vue";
export default {
  components: { SelectLangNav },
  name: "I18n",
};
</script>
