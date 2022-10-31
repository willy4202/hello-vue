<template>
  <div class="carousel-wrapper">
    <Splide :options="option" arrow="false">
      <SplideSlide>
        <img
          class="carousel"
          :src="require(`@/assets/appleAssets/movie.jpeg`)"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          class="carousel"
          :src="require(`@/assets/appleAssets/movie2.jpeg`)"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          class="carousel"
          :src="require(`@/assets/appleAssets/movie3.jpeg`)"
        />
      </SplideSlide>
    </Splide>
    <div class="my-carousel-progress">
      <div class="my-carousel-progress-bar"></div>
    </div>
  </div>
</template>
<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { ref } from "vue";
export default {
  components: {
    Splide,
    SplideSlide,
  },

  setup() {
    const currentDir = ref("rtl");
    const switchDir = () => {
      currentDir.value === "ltr"
        ? (currentDir.value = "rtl")
        : (currentDir.value = "ltr");
    };

    const option = {
      arrows: false,
      direction: "ltr",
    };

    return { currentDir, switchDir, option };
  },
};
</script>
<style lang="scss">
.carousel-wrapper {
  max-width: 90%;
}

.carousel {
  width: 100%;
  height: 100%;
}

.my-carousel-progress {
  background: #ccc;
}

.my-carousel-progress-bar {
  background: greenyellow;
  height: 2px;
  transition: width 400ms ease;
  width: 0;
}
</style>
