<template>
  <h2>now {{ currentEnv }} Env</h2>
  <h2>Axios</h2>
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
import { axiosInstance, axiosProxyInstnace } from "@/utils/apiController.js";
const params = "/test/route?query=1&param=2&form=3";

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
      return axiosInstance({
        url: params,
        method: method,
      }).then((res) => console.log(res.data));
    },

    requestWithProxy(method) {
      return axiosProxyInstnace({
        url: params,
        method: method,
      }).then((res) => console.log(res.data));
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
