<template>
  <LangSelector />
  <div class="body">
    <main :lang="$i18n.locale">
      <article>
        <h2>web fonts</h2>
        <p>
          {{ $t("hello") }}
        </p>
        <p>
          {{ $t("title") }}
        </p>
      </article>
    </main>
    <main>
      <article>
        <h2>safe fonts</h2>
        <p>
          {{ $t("hello") }}
        </p>
        <p>
          {{ $t("title") }}
        </p>
      </article>
    </main>
  </div>
</template>
<script>
import LangSelector from "@/components/LangSelector.vue";

export default {
  name: "font",
  components: { LangSelector },
  data() {
    return {
      documentLang: "en-US",
    };
  },

  created() {
    // this.resolveFontLink("Noto+Sans");
  },

  updated() {
    // this.changeFont();
  },

  methods: {
    /** locale 코드에 맞춰 폰트 설정 */
    changeFont() {
      const locale = this.$i18n.locale;
      switch (locale) {
        case "en-US":
          this.resolveFontLink("Noto+Sans");
          break;
        case "ar-AE":
          this.resolveFontLink("Noto+Sans+Arabic");
          break;
        default:
          return;
      }
    },
    resolveFontLink(font) {
      this.removePrevFontLink(font);
      this.appendFontLink(font);
    },
    appendFontLink(font) {
      const head = document.getElementsByTagName("head")[0];
      const link = document.createElement("link");
      link.id = font;
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = `https://fonts.googleapis.com/css2?family=${font}:wght@300;400;600&display=swap`;
      head.appendChild(link);
    },
    removePrevFontLink(id) {
      const links = document.querySelectorAll("link[id]");
      Array.from(links).map((link) => (link.id !== id ? link.remove() : null));
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/font.scss";

.body {
  display: grid;
  grid-template-columns: 1fr 1fr;

  article {
    text-align: center;
  }

  form {
    display: flex;
    justify-content: space-around;
  }
}
</style>
