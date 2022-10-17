<template>
  <nav>
    <router-link to="/">I18n</router-link> |
    <router-link to="/l10n">L10N</router-link> |
    <router-link to="/date">DateTime</router-link> |
    <router-link to="/rtl">rtl</router-link> |
    <router-link to="/axios">axios</router-link> |
    <router-link to="/fetch">fetch</router-link> |
    <router-link to="/router">vueRouter</router-link> |
    <router-link to="/todo">TodoList</router-link> |
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

nav {
  padding: 30px;
  margin-left: 20px;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
