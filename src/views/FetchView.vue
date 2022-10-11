<template>
  <h2>now {{ currentEnv }} Env</h2>
  <h2>Fetch</h2>
  <h3>without Proxy</h3>
  <article>
    <section v-for="method in httpMethods" :key="method">
      <h4>{{ method }} Data</h4>
      <button @click="fetchData(method)">{{ method }}</button>
    </section>
  </article>
  <h3>with Proxy</h3>
  <article>
    <section v-for="method in httpMethods" :key="method">
      <h4>{{ method }}Data</h4>
      <button @click="fetchWithProxy(method)">{{ method }}</button>
    </section>
  </article>
</template>

<script>
const URL = "https://dev.gateway.himedi.com/test/route?query=1&param=2&form=3";

export default {
  name: "FetchView",
  data() {
    return {
      currentEnv: process.env.NODE_ENV === "development" ? "dev" : "production",
      httpMethods: ["get", "post", "put", "patch", "delete"],
    };
  },

  methods: {
    fetchData(method) {
      fetch(URL, { method })
        .then((res) => res.json())
        .then((data) => console.log(data));
    },
    fetchWithProxy(mehod) {
      console.log(mehod);
    },
  },
};
</script>

<style scoped>
h2,
h3 {
  text-align: center;
  margin: 30px;
}

article {
  display: flex;
  justify-content: space-evenly;
}
</style>
