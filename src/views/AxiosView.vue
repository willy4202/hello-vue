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
    <section v-for="data in proxyBtnData" :key="data">
      <h4>{{ data.name }}Data</h4>
      <button @click="data.method">{{ data.name }}</button>
    </section>
  </article>
</template>
<script>
import apiController from "@/utils/apiController.js";
const URL = "/test/route?query=1&param=2&form=3";
const PROXY_URL = "/api" + URL;

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
      proxyBtnData: [
        {
          name: "get",
          method: () => {
            this.proxyGetData();
          },
        },
        {
          name: "post",
          method: () => {
            this.proxyPostData();
          },
        },
        {
          name: "put",
          method: () => {
            this.proxyPutData();
          },
        },
        {
          name: "patch",
          method: () => {
            this.proxyPatchData();
          },
        },
        {
          name: "delete",
          method: () => {
            this.proxyDeleteData();
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
        .get(PROXY_URL)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },
    proxyPostData() {
      this.$axios
        .post(PROXY_URL)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },
    proxyPutData() {
      this.$axios
        .put(PROXY_URL)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },
    proxyPatchData() {
      this.$axios
        .patch(PROXY_URL)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },
    proxyDeleteData() {
      this.$axios
        .delete(PROXY_URL)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },
  },

  created() {
    console.log(process.env.NODE_ENV);
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
