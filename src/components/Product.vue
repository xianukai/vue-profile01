<template>
  <div 
    class="product"
  >
    <div :class="'product-inner ' + product.color">
      <div class="product-text-wrap">
        <h2 class="bg-text">{{ product.bgtext }}</h2>
      </div>
      <div class="product-image-wrap">
        <img :src="product.src" class="image" />
      </div>
      <div class="product-detail">
        <h2>{{ product.title }}</h2>

        <div class="percentage-bar">
          <div 
            class="fill"
            :class='`fill__${product.percentage}`'
          >
          </div>
          <p>
            {{ product.percentage }}%
          </p>
        </div>

        <p>
          {{ product.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'product',
  props: ['product'],
}
</script>

<style lang="scss">
  .product {
    // flex: 1 1 33.333%;
    // width: 100%;
    width: calc((100% / 3) - 0px);
    padding: 16px;
  }

  .product-inner {
    position: relative;
    padding: 25px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    perspective: 1000px;

    &.green {
      // background-image: linear-gradient(to bottom right, #24D484, #116432);
      background-image: linear-gradient(to bottom right, #fff, #116432);
    }
    &.blue {
      // background-image: linear-gradient(to bottom left, #24D484, #2474C4 70%);
      background-image: linear-gradient(to bottom left, #fff, #2474C4 70%);
    }
    &.pink {
      // background-image: linear-gradient(to bottom right, #F444A4, #1168D4);
      background-image: linear-gradient(to bottom right, #fff, #F444A4);
    }
    &.yellow {
      background-image: linear-gradient(to bottom left, #fff, yellow 80%);
    }
    &.black {
      background-image: linear-gradient(to bottom right, #fff, black 80%);
    }
    &.red {
      background-image: linear-gradient(to bottom right, #fff, red 90%);
    }
    &.skyblue {
      background-image: linear-gradient(to bottom right, #fff, skyblue);
    }
    &.lime {
      background-image: linear-gradient(to bottom right, #fff, lime);
    }
    &.purple {
      background-image: linear-gradient(to bottom right, #000, purple);
    }
    &.orange {
      background-image: linear-gradient(to bottom right, orange, #eee);
    }
    &.grey {
      background-image: linear-gradient(to bottom right, #fff, gray);
    }
  }

  .product-text-wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    overflow: hidden;
    perspective: 1000px;

    h2 {
      color: #313131;
      font-size: 84px;
      font-weight: 900;
      opacity: 0.2;
      transform-origin: center;
    }
  }

  .product-image-wrap {
    position: relative;
    z-index: 1;
    transform-origin: center;

    .image {
      width: auto;
      max-height: 120px;
      filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
      max-width: 100%;
    }
  }

  .product-detail {
    background-color: #FFF;
    padding: 25px;
    margin: 0px -25px -25px;

    h2 {
      font-size: 24px;
      font-weight: 700;
      color: #676767;
      margin-bottom: 15px;
    }
    p {
      font-size: 14px;
      line-height: 1.5;
      font-weight: 300;
      color: #676767;
    }
  }

  // bar
  .percentage-bar {
    position: relative;
    height: 25px;
    margin: 0 auto;
    width: 100%;
    background-color: #171717;
    margin-bottom: 20px;
    border-radius: 4px;

    .fill {
      position: absolute;
      
      top: 0;
      left: 0;
      bottom: 0;
      background-color: #17a2b8;
      z-index: 0;

      &.fill__10 {
        width: 10%;
      }
      &.fill__20 {
        width: 20%;
      }
      &.fill__30 {
        width: 30%;
      }
      &.fill__40 {
        width: 40%;
      }
      &.fill__50 {
        width: 50%;
      }
      &.fill__60 {
        width: 60%;
      }
      &.fill__60 {
        width: 60%;
      }
      &.fill__70 {
        width: 70%;
      }
      &.fill__90 {
        width: 90%;
      }
      &.fill__100 {
        width: 100%;
      }
    }

    p {
      position: absolute;
      width: 100%;
      font-size: 18px;
      text-align: center;
      line-height: 25px;
      color: #F3F3F3;
      margin: 0;
      z-index: 1;
    }
  }

  @media screen and(max-width: 767px) {
    // .products {
    //   flex-direction: row;
    // }
    .product {
      width: 100%;
    }
  }
</style>