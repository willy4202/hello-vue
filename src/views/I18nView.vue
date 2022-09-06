<template>
  <SelectLang />
  <h1>{{ $t("title") }}</h1>
  <p>{{ $t("hello") }}</p>
  <!-- Named를 활용해, {{}}안에서 msg를 할당해 보여줄 수 있다. -->
  <p>{{ $t("message.bye", { msg: "goodbye" }) }}</p>
  <!-- List의 index로 할당 가능 -->
  <p>{{ $t("message.go", ["lets'go"]) }}</p>
</template>

<script>
import SelectLang from "@/components/SelectLang.vue";
export default {
  name: "I18n",
  components: {
    SelectLang,
  },
  data() {
    return {
      lang: "",
    };
  },
  created() {
    console.log(this.$i18n.locale);
  },
  methods: {
    /**  쿠키 확인 후, 있으면 쿠키를 바탕으로 초기 언어를 세팅해주는 함수 */
    checkCookie() {},

    /** select에서 언어를 선택하면, 해당 언어를 key value로 가지는 cookie를 생성해주는 함수 */
    setCookie(key, value, expired) {},

    /** 브라우저상에서 유저가 선호하는 언어가,
     * i18n 프로젝트 내에서 지원이 가능한 언어라면
     * 해당 언어를 기본 세팅으로 만들어주는 함수
     */
    checkPreferLang() {},
  },
};
</script>
