<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(image,index) in images" :key="index">
                <img :src="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    data() {
    return {
      images: [
          require("../../../assets/image/home/1.jpg"),
          require("../../../assets/image/home/2.jpg"),
          require("../../../assets/image/home/3.jpg")
      ]
    }
  },
  methods: {
      
  },
}
</script>

<style scoped>
.van-swipe-item{
    width: 375px;
    height: 220px;
}
.van-swipe-item img{
    width: 100%;
    height: 100%;
}
</style>