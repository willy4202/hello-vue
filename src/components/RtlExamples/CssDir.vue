<template>
  <header>
    <h2>Welcome! CSS dir</h2>
    <button class="fixed-btn" @click="changeDirection">
      current dir = {{ direction }}
    </button>
    <select
      @change="changeProperty"
      class="change-value"
      v-model="selectedProperty"
    >
      <option
        v-for="property in unicodeProperty"
        :key="property"
        :value="property"
      >
        {{ property }}
      </option>
    </select>
  </header>
  <article>
    <section>
      <h4>bullet List</h4>
      <ul class="bullet-wrapper" :style="changeProperty(direction)">
        <li v-for="bullet in list" :key="bullet">{{ bullet }}</li>
      </ul>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      selectedProperty: "",
      unicodeProperty: [
        "normal",
        "embed",
        "isolate",
        "bidi-override",
        "isolate-override",
        "plaintext",
      ],
      list: ["안녕하세요", "리스트를", "이용한 ", "dir 설정입니다."],
      direction: "ltr",
    };
  },

  methods: {
    changeDirection: function () {
      if (this.direction === "ltr") {
        this.direction = "rtl";
      } else {
        this.direction = "ltr";
      }
    },
    changeProperty: function (direction) {
      return { direction, unicodeBidi: this.selectedProperty };
    },
  },
};
</script>

<style lang="scss" scoped>
.fixed-btn {
  top: 30px;
  right: 50px;
  position: fixed;
}
.change-value {
  position: fixed;
  top: 80px;
  right: 50px;
}

.bullet-wrapper {
  /* direction: rtl;
  li {
    unicode-bidi: isolate-override;
  } */
}
</style>
