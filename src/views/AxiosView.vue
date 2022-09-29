<template>
  <h2>without Proxy</h2>

  <article>
    <section v-for="data in btnData" :key="data">
      <h3>{{ data.name }} Data</h3>
      <button @click="data.method">{{ data.name }}</button>
    </section>
  </article>
  <h2>with Proxy</h2>
  <article></article>
</template>
<script>
import apiController from "@/utils/apiController.js";
const URL = "/route?query=1&param=2&form=form";

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
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin: 30px;
}

article {
  display: flex;
  justify-content: space-evenly;
}
</style>
