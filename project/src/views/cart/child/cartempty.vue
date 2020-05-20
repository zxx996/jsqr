<template>
    <div>
        <van-empty 
        description="购物车还是空的 现在就去选购吧"
        class="custom-image"
        image="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589883239644&di=26e3f5051654e30fb087fd09891d09f8&imgtype=0&src=http%3A%2F%2Fpic175.nipic.com%2Ffile%2F20180711%2F24144945_161401185031_2.jpg"
        >
            <van-button class="bottom-button" type="primary" to="category">去逛逛</van-button>
        </van-empty>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
.bottom-button {
    width: 160px;
    height: 35px;
  }
</style>