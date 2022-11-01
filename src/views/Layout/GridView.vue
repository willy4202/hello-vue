<template>
  <div class="contain">
    <div class="module-content">
      <img src="@/assets/appleAssets/ipad.jpeg" />
      <article>
        <h1>
          <strong>iPad</strong>
        </h1>
        <h5>쓰다. 그리다. 빠져들다.</h5>
        <div>출시일은 추후 공개됩니다.</div>
        <span>
          <div>더 알아보기</div>
          <div>가격 보기</div>
        </span>
      </article>
    </div>
    <div class="module-content theme-iphonePro theme-dark">
      <article class="copy-wrapper align-article">
        <h1>
          <strong>iPhone 14 Pro</strong>
        </h1>
        <h5>프로 그 이상.</h5>

        <span>
          <div>더 알아보기</div>
          <div>구입하기</div>
        </span>
      </article>
      <img class="align-img" src="@/assets/appleAssets/iphone.jpeg" />
    </div>
    <div class="module-content theme-iphone14">
      <article>
        <h1>
          <strong>iPhone 14</strong>
        </h1>
        <h5>크게. 더 크게.</h5>
        <span>
          <div>더 알아보기</div>
          <div>가격 보기</div>
        </span>
      </article>
      <img src="@/assets/appleAssets/iphone14.jpeg" />
    </div>
    <div class="unit-container">
      <div
        v-for="item in unitProducts"
        :key="item.id"
        class="unit-wrapper"
        :class="item.isDark"
      >
        <div class="unit-copy-wrapper">
          <h2>{{ item.name }}</h2>
          <p>{{ item.description }}</p>
        </div>
        <img :src="require(`@/assets/appleAssets/${item.img}`)" />
      </div>
    </div>
    <div class="carousel-container">
      <SplideCarousel></SplideCarousel>
    </div>
  </div>
</template>

<script>
import SplideCarousel from "@/components/Carousel/SplideCarousel.vue";

export default {
  data() {
    return {
      unitProducts: [
        {
          id: 1,
          name: "WATCH",
          description: "모험을 위한 시간",
          img: "watch.jpeg",
          isDark: null,
        },
        {
          id: 2,
          name: "WATCH",
          description: "건강하게 앞서 나아가다.",
          img: "watch2.jpeg",
          isDark: "theme-dark",
        },
        {
          id: 3,
          name: "iPad Pro",
          description: "막강한 성능의 M2 탑재",
          img: "ipads.png",
          isDark: "theme-dark",
        },
        {
          id: 4,
          name: "WATCH",
          description: "부담 없이 빠져들다.",
          img: "watchs3.jpeg",
          isDark: null,
        },
      ],
    };
  },
  components: { SplideCarousel },
};
</script>

<style lang="scss">
body {
  overflow-x: hidden;
}

.contain {
  grid-auto-rows: auto;
}

.module-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  height: $module-height;
  width: auto;

  img {
    height: $module-img-height;
    grid-column: 2/3;
  }
  article {
    text-align: center;
    grid-column: 3/4;
    white-space: nowrap;
    h1 {
      font-size: 3rem;
    }
    span {
      display: flex;
      justify-content: center;
      div {
        color: #2997ff;
        padding: 10px;
      }
    }
  }
  @media screen and (max-width: $responsive-max-width) {
    height: $module-height-mobile;

    img {
      height: $module-img-height-mobile;
      grid-column: 2/4;
      grid-row: 2/3;
      justify-content: center;
    }

    article {
      grid-column: 2/4;
    }
  }
}

.theme-iphonePro {
  grid-template-rows: repeat(2, 1fr);

  .align-img,
  .align-article {
    grid-column: 2/4;
    justify-self: auto;
  }
}

.theme-iphone14 {
  grid-template-rows: repeat(2, 1fr);
  background-color: #fbfbfd;
  article {
    grid-column: 2/4;
    grid-row: 1/2;
    justify-self: center;
    align-items: center;
    z-index: 3;
    transform: translateY(-25%);
  }
  img {
    z-index: 2;
    justify-self: center;
    grid-column: 1/5;
    grid-row: 1/3;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: $responsive-max-width) {
    img {
      width: 100%;
      object-fit: cover;
    }
  }
}

.unit-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
  padding: 10px;
  .unit-wrapper {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    height: $category-unit-height;
    text-align: center;
    min-width: 0;

    .unit-copy-wrapper {
      margin-top: 60px;
    }

    img {
      max-width: $unit-img-height;
      width: 100%;
      align-self: end;
      justify-self: center;
      object-fit: contain;
      min-width: 0;
    }
  }
  @media screen and (max-width: $responsive-max-width) {
    grid-template-columns: 1fr;
    padding: 0;
  }
}

.theme-dark {
  background-color: black;
  color: white;
}

.carousel-container {
  display: grid;
  justify-items: center;
}
</style>
