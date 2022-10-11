<template>
  <h2>now {{ currentMode }} mode</h2>
  <h3>server CORS setting is 'true'</h3>
  <h3>without Proxy</h3>
  <article>
    <section v-for="data in btnData" :key="data">
      <h4>{{ data.name }} Data</h4>
      <button @click="data.method">{{ data.name }}</button>
    </section>
  </article>
  <h3>with Proxy</h3>
  <article>
    <section v-for="data in useProxyBtnData" :key="data">
      <h4>{{ data.name }}Data</h4>
      <button @click="data.method">{{ data.name }}</button>
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
      useProxyBtnData: [
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
      return instance({
        url: URL,
        method: "get",
      });
    },

    postData() {
      return instance({
        url: URL,
        method: "post",
      });
    },

    putData() {
      return instance({
        url: URL,
        method: "put",
      });
    },

    patchData() {
      return instance({
        url: URL,
        method: "patch",
      });
    },

    deleteData() {
      return instance({
        url: URL,
        method: "delete",
      });
    },

    proxyGetData() {
      return proxyInstance({
        url: URL,
        method: "get",
      });
    },

    proxyPostData() {
      return proxyInstance({
        url: URL,
        method: "post",
      });
    },
    proxyPutData() {
      return proxyInstance({
        url: URL,
        method: "put",
      });
    },
    proxyPatchData() {
      return proxyInstance({
        url: URL,
        method: "patch",
      });
    },
    proxyDeleteData() {
      return proxyInstance({
        url: URL,
        method: "delete",
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
