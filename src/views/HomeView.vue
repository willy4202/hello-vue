<template>
  <div class="home">
    <Header />
    <img alt="Vue logo" src="../assets/logo.png" />
    <I18n />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import I18n from "@/components/I18n.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    I18n,
  },
  created() {},
};
</script>
