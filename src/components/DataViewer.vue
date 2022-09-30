<template>
  <article>
    <section>
      <h3>Get Data</h3>
      <button @click="getData">hi</button>
      <ul>
        <li>{{ method }}</li>
        <li>{{ route }}</li>
        <li>{{ query }}</li>
      </ul>
    </section>
  </article>
</template>
<script>
export default {
  name: "DataViewer",

  data() {
    return {
      method: "",
      route: "",
      query: "",
    };
  },

  methods: {},
};
</script>
