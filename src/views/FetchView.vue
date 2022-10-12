<template>
  <h2>now {{ currentEnv }} Env</h2>
  <h2>Fetch</h2>
  <h3>without Proxy</h3>
  <article>
    <section v-for="method in httpMethods" :key="method">
      <h4>{{ method }} Data</h4>
      <button @click="requestWithoutProxy(method)">{{ method }}</button>
    </section>
  </article>
  <h3>with Proxy</h3>
  <article>
    <section v-for="method in httpMethods" :key="method">
      <h4>{{ method }}Data</h4>
      <button @click="requestWithProxy(method)">{{ method }}</button>
    </section>
  </article>
</template>

<script>
const proxyURL = "/api/test/route?query=1&param=2&form=3";
const params = "/test/route?query=1&param=2&form=3";

import { fetchInstnace, fetchProxyInstnace } from "@/utils/apiController";

export default {
  name: "FetchView",
  data() {
    return {
      currentEnv: process.env.NODE_ENV === "development" ? "dev" : "production",
      httpMethods: ["get", "post", "put", "patch", "delete"],
    };
  },

  methods: {
    fetchWithProxy(method) {
      fetch(proxyURL, { method })
        .then((res) => res.json())
        .then((data) => console.log(data));
    },

    requestWithoutProxy(method) {
      fetchInstnace(params, method)
        .then((res) => res.json())
        .then((data) => console.log(data));
    },

    requestWithProxy(method) {
      fetchProxyInstnace(params, method)
        .then((res) => res.json())
        .then((data) => console.log(data));
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
