<template>
  <h2>now {{ currentMode }} mode</h2>
  <h3>server CORS setting is 'true'</h3>
  <h3>without Proxy</h3>

  <article>
    <section v-for="data in httpMethods" :key="data">
      <h4>{{ data }} Data</h4>
      <button @click="eventHandler(data)">{{ data }}</button>
    </section>
  </article>
  <h3>with Proxy</h3>
  <article>
    <section v-for="data in httpMethods" :key="data">
      <h4>{{ data }}Data</h4>
      <button @click="proxyEvnetHandler(data)">{{ data }}</button>
    </section>
  </article>
</template>
<script>
import { instance, proxyInstance } from "@/utils/apiController.js";
const URL = "/test/route?query=1&param=2&form=3";

export default {
  name: "AxiosView",
  components: {},
  data() {
    return {
      currentMode:
        process.env.NODE_ENV === "development" ? "dev" : "production",
      httpMethods: ["get", "post", "put", "patch", "delete"],
    };
  },

  methods: {
    eventHandler(name) {
      return instance({
        url: URL,
        method: name,
      });
    },

    proxyEvnetHandler(name) {
      return proxyInstance({
        url: URL,
        method: name,
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
