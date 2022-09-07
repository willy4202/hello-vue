<template>
  <SelectLang />
  <h1>{{ $t("title") }}</h1>
  <p>{{ $t("hello") }}</p>
  <p>{{ $t("message.bye", { msg: "goodbye" }) }}</p>
  <p>{{ $t("message.go", ["lets'go"]) }}</p>
  <p>email : {{ $t("address", { account: "willy", domain: "naver.com" }) }}</p>
</template>

<script>
import SelectLang from "@/components/SelectLang.vue";

export default {
  name: "I18n",
  components: {
    SelectLang,
  },
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
    /**  쿠키 확인 후, 있으면 쿠키를 바탕으로 초기 언어를 세팅해주는 함수 */
    getLang() {
      this.$i18n.locale = this.$cookies.get("lang")
        ? this.$cookies.get("lang")
        : getLangInBroswer();
    },
    /** 
      유저가 선호하는 언어를 찾아서, 프로젝트 내에서 지원이 가능한 언어라면
      선호 언어를 기본 언어로 만들어주는 함수
     */
    getLangInBroswer() {
      let broswerLang = navigator.language.split("-")[0];
      if (this.$i18n.availableLocales.includes(broswerLang)) {
        return broswerLang;
      }
    },
    /** select에서 언어를 선택하면, 해당 언어를 key value로 가지는 cookie를 생성해주는 함수 */
    setLang() {
      this.$cookies.set("lang", this.$i18n.locale);
    },
  },
};
</script>
