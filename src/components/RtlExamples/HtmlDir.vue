<template>
  <header>
    <h2>Welcome! HTML dir</h2>
    <h4>current dir => {{ direction }}</h4>
  </header>
  <article>
    <button class="fixed-btn" @click="changeDir">
      html dir = {{ direction }}
    </button>
    <section>
      <h4>bullet List</h4>
      <ul :dir="direction">
        <li v-for="bullet in List" :key="bullet">{{ bullet }}</li>
      </ul>
    </section>
    <section>
      <h4>Number List</h4>
      <ol :dir="direction">
        <li v-for="number in List" :key="number">{{ number }}</li>
      </ol>
    </section>
    <section>
      <h4>Div Box</h4>
      <div :dir="direction" class="div-wrapper">
        <div>left</div>
        <div>right</div>
      </div>
    </section>
    <section>
      <h4>Image Text Box</h4>
      <div :dir="direction" class="div-wrapper">
        <img :src="himediLogo" alt="image-example" />
        <div>himedi</div>
      </div>
    </section>
    <section>
      <h4>DateTime Box</h4>
      <div class="button-wrapper" :dir="direction">
        <span>DateTime :</span>
        <span>{{ $d(new Date(), "dateTime") }}</span>
      </div>
    </section>
    <section>
      <h4>Button Box</h4>
      <div class="button-wrapper" :dir="direction">
        <button>button1</button>
        <button>button2</button>
      </div>
    </section>

    <section>
      <h4>number Box</h4>
      <div class="row-div-wrapper" :dir="direction">
        <div v-for="num in 5" :key="num">{{ num }}</div>
      </div>
    </section>
    <section>
      <h4>Input Box</h4>
      <div class="input-wrapper" :dir="direction">
        <input v-for="e in 3" :key="e" :placeholder="e" class="input-element" />
      </div>
    </section>
    <section class="table-wrapper">
      <table :dir="direction">
        <thead>
          <tr>
            <th>header1</th>
            <th>header2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section class="textarea-wrapper">
      <textarea :dir="direction" rows="5" cols="33">
        This statement is used for test This statement is used for test This statement is used for test
      </textarea>
    </section>
  </article>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
export default {
  setup() {
    const direction = ref("ltr");

    const changeDir = () => {
      direction.value === "ltr"
        ? (direction.value = "rtl")
        : (direction.value = "ltr");
    };

    const List = reactive(["안녕하세요", "리스트를", "이용한 ", "RTl입니다."]);

    const himediLogo = require("@/assets/himediLogo.png");

    return {
      direction,
      changeDir,
      List,
      himediLogo,
    };
  },
};
</script>

<style lang="scss" scoped>
.fixed-btn {
  top: 30px;
  right: 50px;
  position: fixed;
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
