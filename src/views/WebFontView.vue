<template>
  <main :lang="documentLang">
    <article class="font-light">
      <h1>Web Font</h1>
      <p>
        {{ $t("hello") }}
      </p>
      <select @change="resolveFont">
        <option v-for="font in fontOptions" :key="font.id" :value="font.lang">
          {{ font.lang }}
        </option>
      </select>
    </article>
  </main>
</template>
<script>
import LangSelector from "@/components/LangSelector.vue";

export default {
  name: "font",
  components: { LangSelector },

  data() {
    return {
      documentLang: "en-US",
      fontOptions: [
        { id: 0, lang: "en-US", font: "Noto+Sans" },
        { id: 1, lang: "ar-AE", font: "Noto+Sans+Arabic" },
      ],
    };
  },
  created() {
    this.appendFontLink("Noto+Sans");
  },
  methods: {
    /**  font 교체 */
    resolveFont(e) {
      const optionIndex = e.target.selectedIndex;
      this.appendFontLink(this.fontOptions[optionIndex].font);
      this.removePrevFontLink(this.fontOptions[optionIndex].font);
      this.setLocale(this.fontOptions[optionIndex].lang);
      this.changeLangAttr(this.fontOptions[optionIndex].lang);
    },

    setLocale(lang) {
      this.$i18n.locale = lang;
    },
    /** article에 반영된 attr의 lang을 바꿔줌 */
    changeLangAttr(selected) {
      this.documentLang = selected;
    },

    /** selected된 option 값으로 폰트 링크를 head에 추가해주는 함수 */
    appendFontLink(font) {
      const head = document.getElementsByTagName("head")[0];
      const link = document.createElement("link");
      link.id = font;
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = `https://fonts.googleapis.com/css2?family=${font}:wght@300;400;600&display=swap`;
      head.appendChild(link);
    },

    /** lang 변경시, 이전에 로드한 폰트 링크를 삭제하는 함수 */
    removePrevFontLink(id) {
      const links = document.querySelectorAll("link[id]");
      Array.prototype.slice
        .call(links)
        .map((x) => (x.id !== id ? x.remove() : null));
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/font.scss";

.font-light {
  text-align: center;
}
</style>
