<template>
  <header>
    <h2>RTLCss</h2>
    <button @click="changeDir">
      current dir is {{ isLtr ? "ltr" : "rtl" }}
    </button>
  </header>
  <article class="rtlcss-sample">
    <section>
      <h4>bullet List</h4>
      <ul>
        <li v-for="bullet in List" :key="bullet">{{ bullet }}</li>
      </ul>
    </section>
    <section>
      <h4>Number List</h4>
      <ol>
        <li v-for="number in List" :key="number">{{ number }}</li>
      </ol>
    </section>
    <section>
      <h4>Div Box</h4>
      <div class="div-wrapper">
        <div>left</div>
        <div>right</div>
      </div>
    </section>
    <section>
      <h4>Image Text Box</h4>
      <div class="div-wrapper">
        <img :src="himediLogo" alt="image-example" />
        <div>himedi</div>
      </div>
    </section>
  </article>
</template>
<script>
export default {
  data() {
    return {
      List: ["안녕하세요", "리스트를", "이용한 ", "RTl입니다."],
      himediLogo: require("@/assets/himediLogo.png"),
      isLtr: true,
    };
  },

  created() {
    this.setStyleSheet("date.rtl.css");
  },

  updated() {
    if (this.isLtr) {
      document
        .querySelectorAll("link[rel=stylesheet]")
        .forEach((e) => e.remove());
      this.setStyleSheet("date.rtl.css");
    } else {
      document
        .querySelectorAll("link[rel=stylesheet]")
        .forEach((e) => e.remove());
      this.setStyleSheet("date.css");
    }
  },

  methods: {
    changeDir() {
      this.isLtr ? (this.isLtr = false) : (this.isLtr = true);
    },

    setStyleSheet(path) {
      let link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.type = "text/css";
      link.href = "/css/" + path;
      console.log(link);
    },
  },
};
</script>

<style lang="scss" scoped>
.rtlcss-sample {
}

.div-wrapper {
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
}

.div-wrapper {
  align-items: center;
  img {
    width: 200px;
  }
}
</style>
