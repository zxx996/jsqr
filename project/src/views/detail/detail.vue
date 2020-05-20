<template>
    <div class="detail">
        <!-- 头部导航 -->
        <detailnav></detailnav>
        <!-- 轮播图 -->
        <swiper></swiper>
        <!-- 商品信息 -->
        <detailinfo></detailinfo>
    </div>
</template>

<script>
import detailnav from 'views/detail/child/detailnav'
import swiper from 'views/detail/child/swiper'
import detailinfo from '../detail/child/detailinfo'
export default {
    components:{
        detailnav,
        swiper,
        detailinfo
    }
}
</script>

<style scoped>
.detail{
    padding-bottom: 50px;
}
</style>