<template>
  <div class="carousel-wrapper">
    <Splide :has-track="false" :options="option" arrow="false">
      <SplideTrack>
        <SplideSlide v-for="movie in movies" :key="movie.id">
          <img
            class="carousel-img"
            :src="require(`@/assets/appleAssets/${movie.img}`)"
          />
        </SplideSlide>
      </SplideTrack>
    </Splide>
  </div>
  <button @click="switchDir">{{ option.direction }}</button>
</template>
<script>
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import { reactive } from "vue";
export default {
  components: {
    Splide,
    SplideSlide,
    SplideTrack,
  },

  setup() {
    const movies = [
      { id: 0, img: `movie.jpeg` },
      { id: 1, img: `movie2.jpeg` },
      { id: 2, img: `movie3.jpeg` },
    ];

    const option = reactive({
      arrows: false,
      direction: "ltr",
      page: "splide__pagination__page your-class-page",
    });

    const switchDir = () => {
      option.direction === "ltr"
        ? (option.direction = "rtl")
        : (option.direction = "ltr");
    };

    return { movies, switchDir, option };
  },
};
</script>
<style lang="scss">
button {
  border: none;
  margin-top: 20px;
}

.carousel-wrapper {
  max-width: 720px;
  margin: 5px;
  position: relative;

  .carousel-img {
    width: 100%;
  }

  .splide__pagination {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    position: absolute;
    bottom: 10px;
    width: 100%;
    padding: 0 10px;

    li {
      width: 100%;

      .splide__pagination__page {
        background-color: gray;
        width: 100%;
        height: 2px;
      }

      .is-active {
        background-color: white;
      }
    }
  }
}
</style>
