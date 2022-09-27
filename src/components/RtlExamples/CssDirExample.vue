<template>
  <header>
    <h2>Welcome! CSS dir</h2>
    <button class="fixed-btn" @click="changeDir">
      css dir = {{ currentDir }}
    </button>
    <select
      @change="directionStyle"
      class="change-value"
      v-model="selectedProperty"
    >
      <option
        v-for="property in unicodeProperties"
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
          :style="directionStyle(currentDir)"
          v-for="bullet in list"
          :key="bullet"
        >
          {{ bullet }}
        </li>
      </ul>
    </section>
    <section>
      <h4>Number List</h4>
      <ol>
        <li
          :style="directionStyle(currentDir)"
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
        <div
          :style="directionStyle(currentDir)"
          v-for="dir in ['left', 'right']"
          :key="dir"
        >
          {{ dir }}
        </div>
      </div>
    </section>
    <section>
      <h4>Image Text Box</h4>
      <div class="img-wrapper">
        <img
          :style="directionStyle(currentDir)"
          :src="himediLogo"
          alt="image-example"
        />
        <div :style="directionStyle(currentDir)">himedi</div>
      </div>
    </section>
    <section>
      <h4>DateTime Box</h4>
      <div class="button-wrapper">
        <span :style="directionStyle(currentDir)">DateTime :</span>
        <span :style="directionStyle(currentDir)">{{
          $d(new Date(), "dateTime")
        }}</span>
      </div>
    </section>
    <section>
      <h4>Button Box</h4>
      <div class="button-wrapper">
        <button
          :style="directionStyle(currentDir)"
          v-for="btn in ['button1', 'button2']"
          :key="btn"
        >
          {{ btn }}
        </button>
      </div>
    </section>
    <section>
      <h4>number Box</h4>
      <div class="row-div-wrapper">
        <div :style="directionStyle(currentDir)" v-for="num in 5" :key="num">
          {{ num }}
        </div>
      </div>
    </section>
    <section>
      <h4>Input Box</h4>
      <div class="input-wrapper">
        <input
          :style="directionStyle(currentDir)"
          v-for="e in 3"
          :key="e"
          :placeholder="e"
          class="input-element"
        />
      </div>
    </section>
    <section class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th :style="directionStyle(currentDir)">header1</th>
            <th :style="directionStyle(currentDir)">header2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td :style="directionStyle(currentDir)">1</td>
            <td :style="directionStyle(currentDir)">2</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section class="textarea-wrapper">
      <textarea :style="directionStyle(currentDir)" rows="5" cols="33">
        This statement is used for test This statement is used for test This statement is used for test
      </textarea>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      selectedProperty: "",
      unicodeProperties: [
        "normal",
        "embed",
        "bidi-override",
        "isolate",
        "isolate-override",
        "plaintext",
      ],
      list: ["안녕하세요", "리스트를", "이용한 ", "dir 설정입니다."],
      currentDir: "ltr",
      himediLogo: require("@/assets/himediLogo.png"),
    };
  },

  methods: {
    changeDir: function () {
      this.currentDir === "ltr"
        ? (this.currentDir = "rtl")
        : (this.currentDir = "ltr");
    },
    directionStyle: function (dir) {
      return { direction: dir, unicodeBidi: this.selectedProperty };
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

.table-wrapper {
  display: flex;
  justify-content: center;
}
.textarea-wrapper {
  display: flex;
  justify-content: center;
}
</style>
