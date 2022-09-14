<template>
  <select-lang-nav />
  <div>
    <h2 class="title">this is L10n!</h2>
    <div>currency</div>
    <div>plural</div>
  </div>
  <main>
    <h2>Banana:</h2>
    <p>{{ $tc("banana", 0) }}</p>
    <p>{{ $tc("banana", 4) }}</p>
    <p>{{ $tc("banana", 11) }}</p>
    <p>{{ $tc("banana", 31) }}</p>
  </main>
</template>

<script>
import SelectLangNav from "@/components/SelectLangNav.vue";
export default {
  components: { SelectLangNav },
  data() {
    return {
      example: "",
    };
  },

  created() {},

  updated() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
