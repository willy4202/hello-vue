<template>
  <div class="contain">
    <div class="module-contnet">
      <img src="@/assets/appleAssets/ipad.jpeg" />
      <article>
        <h1>
          <strong>iPad</strong>
        </h1>
        <h5>쓰다. 그리다. 빠져들다.</h5>
        <div>출시일은 추후 공개됩니다.</div>
        <span>
          <div>더 알아보기 ></div>
          <div>가격 보기 ></div>
        </span>
      </article>
    </div>

    <div class="module-contnet theme-dark">
      <article class="copy-wrapper">
        <h1>
          <strong>iPhone 14 Pro</strong>
        </h1>
        <h5>프로 그 이상.</h5>

        <span>
          <div>더 알아보기</div>
          <div>구입하기</div>
        </span>
      </article>
      <img src="@/assets/appleAssets/iphone.jpeg" />
    </div>

    <div class="module-contnet background-color">
      <figure class="img-wrapper">
        <img src="@/assets/appleAssets/iphone14.jpeg" />
      </figure>
      <article class="copy-wrapper">
        <h1>
          <strong>iPhone 14</strong>
        </h1>
        <h5>크게. 더 크게.</h5>
        <span>
          <div>더 알아보기 ></div>
          <div>가격 보기 ></div>
        </span>
      </article>
    </div>
    <flex-unit />

    <splide-carousel></splide-carousel>
  </div>
</template>

<script>
import LtrCarousel from "@/components/Carousel/LtrCarousel.vue";
import SplideCarousel from "@/components/Carousel/SplideCarousel.vue";
import FlexUnit from "@/components/Layout/FlexUnit.vue";

export default {
  components: { LtrCarousel, SplideCarousel, FlexUnit },
  data() {
    const products = [
      {
        id: 1,
        name: "WATCH",
        description: "모험을 위한 시간",
        img: "watch.jpeg",
        isDark: false,
      },
      {
        id: 2,
        name: "WATCH",
        description: "모험을 위한 시간",
        img: "watch2.jpeg",
        isDark: true,
      },
      {
        id: 3,
        name: "iPad Pro",
        description: "막강한 성능의 M2 탑재",
        img: "ipads.png",
        isDark: true,
      },
      {
        id: 4,
        name: "Apple tv 4K",
        description: "보다 장대하게 경험하는 Apple의 모든 것.",
        img: "ipads.png",
        isDark: false,
      },
    ];

    return { products };
  },
};
</script>

<style lang="scss">
@mixin flex-dir-ali-just($dir, $align, $justify) {
  display: flex;
  flex-direction: $dir;
  align-items: $align;
  justify-content: $justify;
}

body {
  overflow-x: hidden;
}

.contain {
  @include flex-dir-ali-just(column, center, flex-start);
}

.module-contnet {
  @include flex-dir-ali-just(row, center, center);
  position: relative;
  width: 100%;
  height: 692px;
  img {
    height: 70%;
  }

  article {
    @include flex-dir-ali-just(column, center, flex-start);
    flex-shrink: 0;

    h1 {
      font-size: 3rem;
    }
    span {
      display: flex;

      div {
        color: #2997ff;
        padding: 10px;
      }
    }
  }

  @media screen and (max-width: 734px) {
    flex-direction: column-reverse;
    width: 100%;
    height: 600px;

    img {
      height: 50%;
      margin-top: 20px;
    }
    article {
      h1 {
        font-size: 2rem;
      }
    }
  }
}

.theme-dark {
  @include flex-dir-ali-just(column, center, flex-end);
  background: black;
  color: white;
}

.background-color {
  background-color: #fbfbfd;
  z-index: -3;
}

.img-wrapper {
  height: 100%;
  z-index: -1;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.copy-wrapper {
  text-align: center;
  position: absolute;
  top: 8%;
  @media screen and (max-width: 734px) {
    top: 15%;
  }
}
</style>
