<template>
  <SelectLang />
  <h1>{{ $t("title") }}</h1>
  <p>{{ $t("hello") }}</p>
  <!-- Named를 활용해, {{}}안에서 msg를 할당해 보여줄 수 있다. -->
  <p>{{ $t("message.bye", { msg: "goodbye" }) }}</p>
  <!-- List의 index로 할당 가능 -->
  <p>{{ $t("message.go", ["lets'go"]) }}</p>
  <!-- 리터럴 string 적용 -->
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
    let isCookie = this.$cookies.isKey("lang");
    isCookie ? this.checkCookie() : this.checkUserLang();
  },
  updated() {
    this.setCookie();
  },

  methods: {
    /**  쿠키 확인 후, 있으면 쿠키를 바탕으로 초기 언어를 세팅해주는 함수 */
    checkCookie() {
      this.$i18n.locale = this.$cookies.get("lang");
    },

    /** select에서 언어를 선택하면, 해당 언어를 key value로 가지는 cookie를 생성해주는 함수 */
    setCookie() {
      let selectedLang = this.$i18n.locale;
      this.$cookies.set("lang", selectedLang);
    },

    /** 
      유저가 선호하는 언어를 찾아서, 프로젝트 내에서 지원이 가능한 언어라면
      선호 언어를 기본 언어로 만들어주는 함수
     */
    checkUserLang() {
      let userLang = navigator.language.split("-")[0];
      let supportLang = this.$i18n.availableLocales;
      if (supportLang.includes(userLang)) {
        this.$i18n.locale = userLang;
      }
    },
  },
};
</script>
