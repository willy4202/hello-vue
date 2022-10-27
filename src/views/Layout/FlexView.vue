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
    <div class="unit-container">
      <div class="unit-wrapper">
        <div class="unit">
          <div class="unit-copy-wrapper">
            <h2>WATCH</h2>
            <p>모험을 위한 시간.</p>
          </div>
          <div class="unit-img-wrapper">
            <img :src="require(`@/assets/appleAssets/watch.jpeg`)" />
          </div>
        </div>
        <div class="unit theme-dark">
          <div class="unit-copy-wrapper">
            <h2>WATCH</h2>
            <p>건강하게 앞서 나아가다.</p>
          </div>
          <div class="unit-img-wrapper">
            <img :src="require(`@/assets/appleAssets/watch2.jpeg`)" />
          </div>
        </div>
      </div>
      <div class="unit-wrapper">
        <div class="unit theme-dark">
          <div class="unit-copy-wrapper">
            <h2>iPad Pro</h2>
            <p>막강한 성능의 M2칩 탑재</p>
            <p>출시일은 추후 공개됩니다</p>
          </div>

          <div class="unit-img-wrapper">
            <img :src="require(`@/assets/appleAssets/ipads.png`)" />
          </div>
        </div>
        <div class="unit">
          <div class="unit-copy-wrapper">
            <h2>WATCH</h2>
            <p>부담 없이 빠져들다</p>
          </div>
          <div class="unit-img-wrapper">
            <img :src="require(`@/assets/appleAssets/watchs3.jpeg`)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
</script>

<style lang="scss">
@mixin flex-dir-ali-just($dir, $align, $justify) {
  display: flex;
  flex-direction: $dir;
  align-items: $align;
  justify-content: $justify;
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

.unit-container {
  @include flex-dir-ali-just(column, center, flex-start);
  width: 100%;
  position: relative;

  .unit-wrapper {
    @include flex-dir-ali-just(row, center, space-around);
    width: 100%;

    .unit {
      @include flex-dir-ali-just(column, center, flex-end);
      height: 580px;
      width: 100%;
      position: relative;
      margin: 5px;
      text-align: center;

      .unit-copy-wrapper {
        position: absolute;
        top: 60px;
      }

      .unit-img-wrapper {
        @include flex-dir-ali-just(column, center, flex-end);
        max-width: 580px;
        img {
          max-width: 464px;
        }
      }
    }
  }

  @media screen and (max-width: 734px) {
    .unit-wrapper {
      @include flex-dir-ali-just(column, center, flex-start);

      .unit {
        @include flex-dir-ali-just(column, center, flex-end);
        height: 470px;
        width: 100%;
        position: relative;
        margin: 10px;

        .unit-copy-wrapper {
          position: absolute;
          top: 100px;
        }
        .unit-img-wrapper {
          img {
            max-width: 330px;
          }
        }
      }
    }
  }
}
</style>
