<template>
  <article>
    <h2>Default.vue</h2>
    <button type="button" @click="$router.push('/life/target')">target</button>
  </article>
</template>
<script>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
} from "@vue/runtime-core";
const component = "Default ";
const setup = " setup API";

export default {
  name: "Life",
  components: {},
  setup() {
    console.log("[Default]");
    console.log(component + setup);

    onBeforeMount(() => {
      console.log(component + "onBeforeMount" + setup);
    });

    onMounted(() => {
      console.log(component + "onMounted" + setup);
    });

    onBeforeUpdate(() => {
      console.log(component + "onBeforeUpdate" + setup);
    });

    onUpdated(() => {
      console.log(component + "onUpdated" + setup);
    });

    onBeforeUnmount(() => {
      console.log(component + "onBeforeUnmount" + setup);
    });

    onUnmounted(() => {
      console.log(component + "onUnmounted" + setup);
    });

    return { setup };
  },
  beforeCreate() {
    console.log(component + "beforeCreated");
  },
  created() {
    console.log(component + "created");
  },
  beforeMount() {
    console.log(component + "beforeMount");
  },
  mounted() {
    console.log(component + "mounted");
  },
  beforeUpdate() {
    console.log(component + "beforeUpdate");
  },
  updated() {
    console.log(component + "updated");
  },
  beforeUnmount() {
    console.log(component + "beforeUnmount");
  },
  unmounted() {
    console.log(component + "unmounted");
  },

  /**  router Lifecycle*/
  beforeRouteLeave() {
    console.log(component + "beforeRouteLeave");
  },

  beforeRouteEnter() {
    console.log(component + "beforeRouteEnter");
  },

  beforeRouteUpdate() {
    console.log(component + "beforeRouteUpdate");
  },
};
</script>
<style lang="scss" scoped>
article {
  text-align: center;
}
</style>
