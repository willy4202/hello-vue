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
  <h1>{{ $t("title") }}</h1>
  <p>{{ $t("hello") }}</p>
</template>

<script>
export default {
  name: "I18n",
  data() {
    return {};
  },
  created() {
    this.setLang();
  },
  updated() {
    this.selectLang();
  },

  methods: {
    setLang() {
      this.$i18n.locale =
        this.getLangFromCookie() ||
        this.getLangFromBroswer() ||
        this.$i18n.fallbackLocale;
    },

    getLangFromCookie() {
      return this.$cookies.get("lang");
    },

    getLangFromBroswer() {
      const browserLang = navigator.language.split("-")[0];
      return this.$i18n.availableLocales.includes(browserLang)
        ? browserLang
        : null;
    },

    selectLang() {
      this.$cookies.set("lang", this.$i18n.locale);
    },
  },
};
</script>
