<template>
  <nav class="container mb-4 mt-4">
    <div class="col-3">
      <select v-model="$i18n.locale">
        <option
          v-for="locale in $i18n.availableLocales"
          :key="locale"
          :value="locale"
        >
          {{ locale }}
        </option>
      </select>
    </div>
  </nav>
</template>
<script>
export default {
  created() {
    this.$i18n.locale = this.resolveLang();
  },

  updated() {
    this.setLangInCookie();
  },

  methods: {
    resolveLang() {
      let lang = this.getCookie("lang") ?? this.getDefaultLang();
      return this.$i18n.availableLocales.includes(lang)
        ? lang
        : this.$i18n.fallbackLocale;
    },

    getCookie(key) {
      return this.$cookies.get(key);
    },

    getDefaultLang() {
      return navigator.language.split("-")[0];
    },

    setLangInCookie() {
      this.$cookies.set("lang", this.$i18n.locale);
    },
  },
};
</script>
