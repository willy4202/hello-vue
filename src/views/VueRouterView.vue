<template>
  <article>
    <h2>Auth</h2>
    <nav>
      <router-link to="/router/public">public</router-link> |
      <router-link to="/router/private">private</router-link> |
      <router-link v-if="!isToken" to="/router/login">login</router-link>
    </nav>
  </article>
</template>
<script>
import isToken from "@/auth";
import { useCounterStore } from "@/store/pinia.js";
import { storeToRefs } from "pinia";

const counter = useCounterStore();
export default {
  setup() {
    const { count } = storeToRefs(counter);

    const onClickAdd = () => {
      counter.increment();
    };

    return { count, onClickAdd, isToken };
  },
};
</script>

<style scoped lang="scss">
article {
  text-align: center;
}
h4 {
  margin-top: 20px;
}
</style>
