<template>
  <main>
    <article class="font-light" :lang="selectedLang">
      <h1>Web Font</h1>
      <p>
        {{ $t("hello") }}
      </p>
      <select @change="resolveFont">
        <option v-for="data in fontOptions" :key="data.id" :value="data.locale">
          {{ data.locale }}
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
      selectedLang: "en",

      fontOptions: [
        { id: 0, locale: "en", font: "Oswald" },
        { id: 1, locale: "ar", font: "Noto+Sans+Arabic" },
      ],
    };
  },
  updated() {},
  methods: {
    /**  font 관련 함수를 처리하는 로직 */
    resolveFont(e) {
      const option = e.target;
      if (option.selectedIndex <= option.length) {
        this.appendFontLink(this.fontOptions[option.selectedIndex].font);
        this.changeLangAttr(this.fontOptions[option.selectedIndex].locale);
        this.removeFontLink(this.fontOptions[option.selectedIndex].font);
      }
    },

    /** article에 반영된 attr의 lang을 바꿔줌 */
    changeLangAttr(selected) {
      this.selectedLang = selected;
    },

    /** selected된 option의 id값을 바탕으로 폰트 링크를 head에 추가해주는 함수*/
    appendFontLink(font) {
      const head = document.getElementsByTagName("head")[0];
      const link = document.createElement("link");
      link.id = font;
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = `https://fonts.googleapis.com/css2?family=${font}:wght@300;400;600&display=swap`;
      head.appendChild(link);
    },

    /** locale 변경시, 이전에 로드한 폰트 링크를 삭제하는 함수 */
    removeFontLink(id) {
      console.log(id, "id");
      const link = document.getElementById(id);
      const links = document.querySelectorAll("link[id]");
      Array.prototype.slice
        .call(links)
        .filter((x) => (x.id !== id ? x.remove() : null));
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
