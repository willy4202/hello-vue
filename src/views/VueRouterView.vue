<template>
  <article>
    <h2>Vue</h2>
    <nav>
      <router-link to="/router/public">public</router-link> |
      <router-link to="/router/private">private</router-link> |
      <router-link v-if="!isToken" to="/router/login">login</router-link>
    </nav>
  </article>
</template>
<script>
export default {
  setup() {
    const isToken = !!sessionStorage.getItem("token");

    return { isToken };
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
