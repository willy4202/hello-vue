export default {
  data: () => ({
    reuseTitle: "Mixin",
    message: "Mixin data",
  }),
  methods: {
    reuseMethod() {
      console.log("Hello from mixin!");
    },
  },
};
