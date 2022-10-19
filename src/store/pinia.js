import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }

  return { count, increment };
});

export const useUserState = defineStore("user", {
  state: () => ({
    isLogin: !!sessionStorage.getItem("token"),
  }),
  actions: {
    setLogin() {
      this.isLogin = true;
    },
    setLogout() {
      this.isLogin = false;
    },
  },
});
