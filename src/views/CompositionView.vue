<template>
  <article>
    <!-- Option -->
    <main>
      <h1>option</h1>
      <p>{{ count }}</p>
      <p>computed : {{ plusOne }}</p>
      <button @click="increase">add count</button>
      <p>{{ message }}</p>
      <p>{{ reversedMessage }}</p>
    </main>

    <!-- setup -->
    <main>
      <h1>setup</h1>
      <p>{{ setupCount }}</p>
      <p>computed : {{ setupPlusOne }}</p>
      <button @click="addCount">add count</button>
      <p>{{ setupMessage }}</p>
      <p>{{ setupReverse }}</p>
    </main>
  </article>
  <section>
    <h1>Composables</h1>
    <p>mouse Tracker</p>
    <p>x : {{ x }}</p>
    <p>y : {{ y }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      message: "this is option!",
    };
  },
  computed: {
    plusOne() {
      return this.count + 1;
    },
    reversedMessage() {
      return this.message.split("").reverse().join("");
    },
  },
  methods: {
    increase() {
      this.count++;
    },
  },
};
</script>

<script setup>
const { ref } = require("@vue/reactivity");
const { computed } = require("@vue/runtime-core");
import { useMouse } from "@/plugins/mouseTracker";

let setupCount = ref(0);
const addCount = () => {
  setupCount.value++;
};
const setupPlusOne = computed(() => setupCount.value + 1);

let setupMessage = ref("this is setup!");
const setupReverse = computed(() => {
  return setupMessage.value.split("").reverse().join("");
});

const { x, y } = useMouse();
</script>

<style lang="scss" scoped>
article {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
}

section {
  text-align: center;
}
main {
  margin: 50px;
}

p {
  margin: 10px;
}
</style>
