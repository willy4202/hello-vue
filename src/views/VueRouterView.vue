<template>
  <article>
    <h2>Router</h2>
    <nav>
      <router-link to="/router/public">public</router-link> |
      <router-link to="/router/private">private</router-link> |
      <router-link v-if="!isToken" to="/router/login">login</router-link>
    </nav>
  </article>
</template>
<script setup>
const isToken = !!sessionStorage.getItem("token");
</script>

<style scoped lang="scss">
article {
  text-align: center;
}
h4 {
  margin-top: 20px;
}
</style>
