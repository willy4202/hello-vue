<template>
  <header>
    <h2>Welcome! <slot></slot></h2>
    <button class="fixed-btn" @click="changeDir">
      RTLCSS = {{ currentDir }}
    </button>
  </header>
  <article>
    <main class="rtl-wrapper">
      <section>
        <h4>bullet List</h4>
        <ul class="bullet-list">
          <li v-for="bullet in List" :key="bullet">{{ bullet }}</li>
        </ul>
      </section>
      <section>
        <h4>Number List</h4>
        <ol class="number-list">
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
        <div class="img-div-wrapper">
          <img :src="himediLogo" alt="image-example" />
          <div>himedi</div>
        </div>
      </section>

      <section>
        <h4>Date Box</h4>
        <div class="date-wrapper">
          <span>DateTime : </span>
          <span>
            {{ $d(new Date(), "dateTime") }}
          </span>
        </div>
      </section>
      <section>
        <h4>Button Box</h4>
        <div class="button-wrapper">
          <button>button1</button>
          <button>button2</button>
        </div>
      </section>
      <section>
        <h4>number Box</h4>
        <div class="row-div-wrapper">
          <div v-for="num in 5" :key="num">{{ num }}</div>
        </div>
      </section>
      <section>
        <h4>Input Box</h4>
        <div class="input-wrapper">
          <input
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
        <textarea rows="5" cols="33">
        This statement is used for test This statement is used for test This statement is used for test
      </textarea
        >
      </section>
    </main>
  </article>
</template>
<script>
export default {
  data() {
    return {
      List: ["안녕하세요", "리스트를", "이용한 ", "RTL입니다."],
      himediLogo: require("@/assets/himediLogo.png"),
      currentDir: "ltr",
    };
  },

  updated() {
    this.swapStlyeSheet(this.currentDir);
  },

  methods: {
    changeDir() {
      this.currentDir === "ltr"
        ? (this.currentDir = "rtl")
        : (this.currentDir = "ltr");
    },

    swapStlyeSheet(dir) {
      if (dir === "rtl") {
        document.querySelectorAll("link[rel=stylesheet]").forEach((e) => {
          e.remove();
          this.addStyleSheet(e.href.replace(".css", ".rtl.css"));
        });
      } else {
        document.querySelectorAll("link[rel=stylesheet]").forEach((e) => {
          e.remove();
          this.addStyleSheet(e.href.replace(".rtl.css", ".css"));
        });
      }
    },

    addStyleSheet(path) {
      let link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.type = "text/css";
      link.href = path;
      document.head.appendChild(link);
    },
  },
};
</script>

<style lang="scss" scoped>
.fixed-btn {
  top: 30px;
  left: 50px;
  position: fixed;
}

/*rtl:rename*/
.ltr-wrapper {
  direction: ltr;
}
/*rtl:rename*/

.div-wrapper {
  display: flex;
  justify-content: space-evenly;
}

.img-div-wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    width: 200px;
  }
}

.date-wrapper {
  display: flex;
  justify-content: space-evenly;
}
.button-wrapper {
  display: flex;
  justify-content: space-evenly;
}
.row-div-wrapper {
  display: flex;
  justify-content: space-evenly;
  & > * {
    border: 1px solid $signature-color;
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
