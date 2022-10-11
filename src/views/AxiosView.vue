<template>
  <h2>now {{ currentMode }} mode</h2>
  <h3>server CORS setting is 'true'</h3>
  <h3>without Proxy</h3>

  <article>
    <section v-for="data in btnHandler" :key="data">
      <h4>{{ data.name }} Data</h4>
      <button @click="btnEventHandler(data.name)">{{ data.name }}</button>
    </section>
  </article>
  <h3>with Proxy</h3>
  <article>
    <section v-for="data in btnHandler" :key="data">
      <h4>{{ data.name }}Data</h4>
      <button @click="proxyBtnEvnetHandler(data.name)">{{ data.name }}</button>
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

      btnHandler: [
        {
          name: "get",
        },
        {
          name: "post",
        },
        {
          name: "put",
        },
        {
          name: "patch",
        },
        {
          name: "delete",
        },
      ],
    };
  },

  methods: {
    btnEventHandler(name) {
      return instance({
        url: URL,
        method: name,
      });
    },

    proxyBtnEvnetHandler(name) {
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
