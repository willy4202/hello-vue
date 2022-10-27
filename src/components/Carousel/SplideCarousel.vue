<template>
  <div class="carousel-wrapper">
    <Splide :options="{ rewind: false }">
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
    </Splide>
  </div>
</template>
<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
export default {
  components: {
    Splide,
    SplideSlide,
  },
};
</script>
<style lang="scss">
.carousel-wrapper {
  max-width: 1080px;
  height: 523px;

  @media screen and (max-width: 734px) {
    max-width: 245px;
    height: 495px;
  }
}

.carousel {
  width: 100%;
  height: 100%;
}
</style>
