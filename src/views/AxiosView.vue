<template>
  <h2>in dev mode</h2>
  <h3>CORS setting is 'true'</h3>
  <h3>without Proxy</h3>
  <article>
    <section v-for="data in btnData" :key="data">
      <h4>{{ data.name }} Data</h4>
      <button @click="data.method">{{ data.name }}</button>
    </section>
  </article>
  <h3>with Proxy</h3>
  <article>
    <button @click="proxyGetData">hi</button>
  </article>
  <h3>use Proxy target</h3>
  <article>
    <button @click="testProxyGetData">hi</button>
  </article>
</template>
<script>
import apiController from "@/utils/apiController.js";
const URL = "/test/route?query=1&param=2&form=3";
const HIMEDI_CORS_SETTED_API =
  "https://dev.gateway.himedi.com/test/route?query=1&param=2&form=3";

export default {
  name: "AxiosView",
  components: {},
  data() {
    return {
      btnData: [
        {
          name: "get",
          method: () => {
            this.getData();
          },
        },
        {
          name: "post",
          method: () => {
            this.postData();
          },
        },
        {
          name: "put",
          method: () => {
            this.putData();
          },
        },
        {
          name: "patch",
          method: () => {
            this.patchData();
          },
        },
        {
          name: "delete",
          method: () => {
            this.deleteData();
          },
        },
      ],
    };
  },

  methods: {
    getData() {
      return apiController({
        url: URL,
        method: "get",
      });
    },

    postData() {
      return apiController({
        url: URL,
        method: "post",
      });
    },

    putData() {
      return apiController({
        url: URL,
        method: "put",
      });
    },

    patchData() {
      return apiController({
        url: URL,
        method: "patch",
      });
    },

    deleteData() {
      return apiController({
        url: URL,
        method: "delete",
      });
    },

    proxyGetData() {
      this.$axios
        .get(HIMEDI_CORS_SETTED_API)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },

    testProxyGetData() {
      this.$axios
        .get("/api" + URL)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
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
