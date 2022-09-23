<template>
  <header>
    <h2>Welcome! CSS dir</h2>
    <button class="fixed-btn" @click="changeDirection">
      css dir = {{ direction }}
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
      <ul class="bullet-wrapper">
        <li
          :style="changeProperty(direction)"
          v-for="bullet in list"
          :key="bullet"
        >
          {{ bullet }}
        </li>
      </ul>
    </section>
    <section>
      <h4>Number List</h4>
      <ol :dir="direction">
        <li
          :style="changeProperty(direction)"
          v-for="number in list"
          :key="number"
        >
          {{ number }}
        </li>
      </ol>
    </section>
    <section>
      <h4>Div Box</h4>
      <div class="div-wrapper">
        <div :style="changeProperty(direction)">left</div>
        <div :style="changeProperty(direction)">right</div>
      </div>
    </section>
    <section>
      <h4>Image Text Box</h4>
      <div class="img-wrapper">
        <img
          :style="changeProperty(direction)"
          :src="himediLogo"
          alt="image-example"
        />
        <div :style="changeProperty(direction)">himedi</div>
      </div>
    </section>
    <section>
      <h4>DateTime Box</h4>
      <div class="button-wrapper">
        <span :style="changeProperty(direction)">DateTime :</span>
        <span :style="changeProperty(direction)">{{
          $d(new Date(), "dateTime")
        }}</span>
      </div>
    </section>
    <section>
      <h4>Button Box</h4>
      <div class="button-wrapper">
        <button :style="changeProperty(direction)">button1</button>
        <button :style="changeProperty(direction)">button2</button>
      </div>
    </section>
    <section>
      <h4>number Box</h4>
      <div class="row-div-wrapper">
        <div :style="changeProperty(direction)" v-for="num in 5" :key="num">
          {{ num }}
        </div>
      </div>
    </section>
    <section>
      <h4>Input Box</h4>
      <div class="input-wrapper">
        <input
          :style="changeProperty(direction)"
          v-for="e in 3"
          :key="e"
          :placeholder="e"
          class="input-element"
        />
      </div>
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
        "bidi-override",
        "isolate",
        "isolate-override",
        "plaintext",
      ],
      list: ["안녕하세요", "리스트를", "이용한 ", "dir 설정입니다."],
      direction: "ltr",
      himediLogo: require("@/assets/himediLogo.png"),
    };
  },

  methods: {
    changeDirection: function () {
      this.direction === "ltr"
        ? (this.direction = "rtl")
        : (this.direction = "ltr");
    },
    changeProperty: function (direction) {
      return { direction, unicodeBidi: this.selectedProperty };
    },
  },
};
</script>

<style lang="scss" scoped>
.fixed-btn {
  top: 80px;
  right: 50px;
  position: fixed;
}
.change-value {
  position: fixed;
  top: 120px;
  right: 50px;
}
.div-wrapper {
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
}

.img-wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  img {
    width: 200px;
  }
}
.button-wrapper {
  display: flex;
  justify-content: space-evenly;
}

.row-div-wrapper {
  display: flex;
  justify-content: space-evenly;
  & > * {
    border: 1px solid red;
    padding: 1rem;
  }
}

.input-wrapper {
  display: flex;
  justify-content: space-evenly;

  .input-element {
    width: 20%;
  }
}
</style>
