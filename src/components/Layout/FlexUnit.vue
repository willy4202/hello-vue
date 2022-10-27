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
<script>
export default {};
</script>

<style lang="scss">
@mixin flex-dir-ali-just($dir, $align, $justify) {
  display: flex;
  flex-direction: $dir;
  align-items: $align;
  justify-content: $justify;
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
