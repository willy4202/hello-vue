<script setup></script>
<template>
  <div class="contain">
    <div class="section">
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

    <div class="section theme-dark">
      <article>
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

    <div class="section">
      <div class="img-wrapper">
        <img src="@/assets/appleAssets/iphone14.jpeg" />
      </div>
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

    <div>grid</div>
    <div>grid</div>
    <div>grid</div>
    <div>grid</div>
    <div>grid</div>
  </div>
</template>

<style lang="scss">
@mixin flex-direction-align($dir, $align) {
  display: flex;
  flex-direction: $dir;
  align-items: $align;
}

.contain {
  @include flex-direction-align(column, center);
}

.section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 692px;
  padding: 50px;

  img {
    width: 500px;
  }

  article {
    @include flex-direction-align(column, center);
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
    height: 100%;

    img {
      width: 240px;
    }
    article {
      h1 {
        font-size: 2rem;
      }
    }
  }
}

.theme-dark {
  @include flex-direction-align(column, center);
  background: black;
  color: white;
  img {
    flex-grow: 1;
  }
}

.img-wrapper {
  width: 100%;

  position: absolute;
  z-index: -2;
  img {
    width: 100%;
  }
}
</style>
