<template>
  <h2>now {{ currentEnv }} Env</h2>
  <h2>server CORS setting is 'true'</h2>
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
import { instance, proxyInstance } from "@/utils/apiController.js";
const URL = "/test/route?query=1&param=2&form=3";

export default {
  name: "AxiosView",

  data() {
    return {
      currentEnv: process.env.NODE_ENV === "development" ? "dev" : "production",
      httpMethods: ["get", "post", "put", "patch", "delete"],
    };
  },

  methods: {
    requestWithoutProxy(method) {
      return instance({
        url: URL,
        method: method,
      });
    },

    requestWithProxy(method) {
      return proxyInstance({
        url: URL,
        method: method,
      });
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
