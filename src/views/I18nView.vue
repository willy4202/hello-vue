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
  <p>{{ $t("message.bye", { msg: "goodbye" }) }}</p>
  <p>{{ $t("message.go", ["lets'go"]) }}</p>
</template>

<script>
export default {
  name: "I18n",
  data() {
    return {};
  },
  created() {
    this.getLang();
  },
  updated() {
    this.setLang();
  },

  methods: {
    getLang() {
      this.$i18n.locale = this.$cookies.get("lang")
        ? this.$cookies.get("lang")
        : getLangInBroswer();
    },

    getLangInBroswer() {
      let broswerLang = navigator.language.split("-")[0];
      if (this.$i18n.availableLocales.includes(broswerLang)) {
        return broswerLang;
      } else {
        return this.$i18n.locale;
      }
    },

    setLang() {
      this.$cookies.set("lang", this.$i18n.locale);
    },
  },
};
</script>
