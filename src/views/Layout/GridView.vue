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
    <div class="module-content theme-dark">
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
  </div>
</template>

<script>
import ModuleContent from "@/components/Layout/ModuleContent.vue";
export default {
  components: { ModuleContent },
};
</script>

<style lang="scss">
.contain {
  display: grid;
  grid-auto-rows: 1fr;
}

.module-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  position: relative;
  height: $apple-module-height;

  img {
    height: 400px;
    grid-column: 2/3;
    justify-self: end;
  }
  article {
    text-align: center;
    grid-column: 3/4;
    justify-self: start;
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
}

.theme-dark {
  grid-template-rows: repeat(2, 1fr);
  background-color: black;
  color: white;

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
  }
}
</style>
