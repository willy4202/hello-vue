<template>
  <h2>without Proxy</h2>

  <article>
    <section v-for="data in btnData" :key="data">
      <h3>{{ data.name }} Data</h3>
      <button @click="data.method">{{ data.name }}</button>
    </section>
  </article>
  <section>
    <h3>test Data</h3>
    <button @click="interceptGetData">test</button>
  </section>

  <h2>with Proxy</h2>
</template>
<script>
import apiController from "@/utils/apiController.js";

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
    getData: function () {
      this.$axios
        .get(
          "https://dev.gateway.himedi.com/test/route%20param?query=query%20param",
          {
            "Time-Zone": new Date().getTimezoneOffset(),
          }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    postData: function () {
      this.$axios
        .post(
          "https://dev.gateway.himedi.com/test/route?query=1&param=2&form=form",
          {
            "Time-Zone": new Date().getTimezoneOffset(),
          }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    putData: function () {
      this.$axios
        .put(
          "https://dev.gateway.himedi.com/test/route?query=1&param=2&form=form",
          {
            "Time-Zone": new Date().getTimezoneOffset(),
          }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    patchData: function () {
      this.$axios
        .patch(
          "https://dev.gateway.himedi.com/test/route?query=1&param=2&form=form",
          {
            "Time-Zone": new Date().getTimezoneOffset(),
          }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    deleteData: function () {
      this.$axios
        .delete(
          "https://dev.gateway.himedi.com/test/route?query=1&param=2&form=form",
          {
            "Time-Zone": new Date().getTimezoneOffset(),
          }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
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
