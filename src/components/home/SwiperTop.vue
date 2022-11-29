<template>
  <div class="swiper-top">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image.imageUrl" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { api_home_banner } from "@/apis/http";
export default {
  data() {
    return {
      images: [],
    };
  },
  created() {
    this.getBanner();
  },
  methods: {
    async getBanner() {
      const result = await api_home_banner({ type: 2 });
      console.log(result);
      this.images = result.data.banners
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-top {
  width: 100%;
  padding: 0.2rem;
  .van-swipe {
    width: 100%;
    .van-swipe__track {
      .van-swipe-item {
        img {
          width: 100%;
          height: 3rem;
          border-radius: 10px;
        }
      }
    }

    /deep/.van-swipe__indicator--active {
      background-color: #db8282;
    }
  }
}
</style>