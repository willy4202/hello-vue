<template>
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
</template>
<script></script>

<style lang="scss">
@import "@/assets/scss/layoutAbstract/_mixins.scss";

.unit-container {
  @include flex-dir-ali-just(column, center, flex-start);
  position: relative;
  width: 100%;

  .unit-wrapper {
    @include flex-dir-ali-just(row, center, space-around);
    width: 100%;

    .unit {
      @include flex-dir-ali-just(column, center, flex-end);
      position: relative;
      text-align: center;
      height: $category-unit-height;
      width: 100%;
      min-width: 0;
      margin: 5px;

      .unit-copy-wrapper {
        position: absolute;
        top: 60px;
      }

      .unit-img-wrapper {
        @include flex-dir-ali-just(column, center, flex-end);
        max-width: 580px;
        min-width: 0;
        img {
          max-width: 80%;
        }
      }
    }
  }

  @media screen and (max-width: $responsive-max-width) {
    .unit-wrapper {
      @include flex-dir-ali-just(column, center, flex-start);

      .unit {
        @include flex-dir-ali-just(column, center, flex-end);
        position: relative;
        height: 470px;
        width: 100%;
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
