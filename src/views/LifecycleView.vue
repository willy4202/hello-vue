<template>
  <div>{{ hi }}</div>
</template>
<script>
export default {
  name: "life",
  components: {},
  setup() {
    const hi = "test";
    return { hi };
  },
};
</script>
