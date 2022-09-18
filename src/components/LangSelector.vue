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
    // resolveLang() {
    //   const cookieLang = this.getCookie("lang");
    //   const defaultLang = this.getDefaultLang();

    //   return (
    //     this.resolveAvailableLang(cookieLang) ??
    //     this.resolveAvailableLang(defaultLang) ??
    //     this.$i18n.fallbackLocale
    //   );
    // },

    resolveLang() {
      if (this.resolveAvailableLang(this.getCookie("lang"))) {
        return this.getCookie("lang");
      }
      if (this.resolveAvailableLang(this.getDefaultLang())) {
        return this.getDefaultLang();
      } else {
        this.$i18n.fallbackLocale;
      }
    },

    resolveAvailableLang(lang) {
      return this.$i18n.availableLocales.find((v) => v == lang);
    },

    getCookie(key) {
      return this.$cookies.get(key);
    },

    getDefaultLang() {
      return navigator.language;
    },

    setLangInCookie() {
      this.$cookies.set("lang", this.$i18n.locale);
    },
  },
};
</script>
