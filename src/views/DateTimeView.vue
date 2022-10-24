<template>
  <lang-selector />
  <main>
    <p>
      Date : <span dir="auto">{{ $d(new Date(), "date") }}</span>
    </p>
    <p>
      Time : <span dir="auto">{{ $d(new Date(), "time") }}</span>
    </p>
    <p>
      DateTime : <span dir="auto">{{ $d(new Date(), "dateTime") }}</span>
    </p>
  </main>
</template>
<script setup>
import LangSelector from "@/components/LangSelector.vue";
</script>

<style scoped>
main {
  text-align: center;
}
</style>
