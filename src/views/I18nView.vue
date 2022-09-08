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
    // 언어를 1순위 쿠키, 2순위 유저가 선호하는 언어,
    // 3순위 basic 언어를 메인 언어로 설정한다.
    // setLocale?
    let browserLang = navigator.language.split("-")[0];

    this.$i18n.locale =
      this.$cookies.get("lang") ||
      this.$i18n.availableLocales.includes(browserLang)
        ? browserLang
        : this.$i18n.fallbackLocale;

    // this.$i18n.locale = this.$cookies.get("lang") || this.getLangInBroswer();

    // let browserLang = navigator.language.split("-")[0];
    // this.$i18n.availableLocales.includes(browserLang)
    //   ? browserLang
    //   : this.$i18n.fallbackLocale;
  },
  updated() {
    this.selectLocale();
  },

  methods: {
    selectLocale() {
      this.$cookies.set("lang", this.$i18n.locale);
    },
  },
};
</script>
