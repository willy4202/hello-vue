<template>
  <nav class="container mb-4 mt-4">
    <div class="row">
      <div class="col-9"></div>
      <div class="col-3">
        <select v-model="$i18n.locale">
          <option
            v-for="locale in $i18n.availableLocales.reverse()"
            :key="locale"
            :value="locale"
          >
            {{ locale }}
          </option>
        </select>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
