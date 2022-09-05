<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    {{ $t("text") }}
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "HomeView",
  components: {
    "app-header": Header,
  },
};
</script>
