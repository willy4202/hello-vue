<template>
  <main class="container">
    <div class="wrapper">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="id" v-model="id" />
        <input type="password" placeholder="password" v-model="password" />
        <button type="submit" @click.prevent="setToken">submit</button>
      </form>
    </div>
  </main>
</template>

<script>
import router from "@/router";
import { ref } from "@vue/runtime-core";

export default {
  setup() {
    const id = ref("");
    const password = ref("");

    async function setToken() {
      if (this.id.length > 0 && this.password.length > 0) {
        sessionStorage.setItem(
          "token",
          JSON.stringify({
            id: this.id.replace(/ /gi, ""),
            password: this.password.replace(/ /gi, ""),
          })
        );
        alert("로그인 완료");
        router.push("/router");
      } else {
        alert("최소 1글자 이상 입력해주세요");
      }
    }

    return {
      id,
      password,
      setToken,
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  padding: 30px;
  width: 300px;
  margin: 0 auto;

  input,
  button {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
