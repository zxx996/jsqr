<template>
    <div class="home">
        <!-- 头部导航 -->
        <navbar></navbar>
        <scroll class="scroll">
            <!-- 轮播图 -->
            <swiper></swiper>
            <!-- 菜单工具 -->
            <menus></menus>
            <!-- 推荐 -->
            <recomd></recomd>
            <!-- 专区 -->
            <feature></feature>
            <!-- 商品列表女性 -->
            <goodone></goodone>
            <!-- 商品列表男性 -->
            <goodtwo></goodtwo>
            <!-- 双人情趣 -->
            <goodthree></goodthree>
            <!-- 品牌专区 -->
            <goodfour></goodfour>
            <!-- 热卖商品 -->
            <goodfive></goodfive>
            <!-- 热门分类 -->
            <category></category>
        </scroll>
    </div>
</template>

<script>
import navbar from 'views/home/child/navbar'
import swiper from 'views/home/child/swiper'
import menus from 'views/home/child/menus'
import recomd from 'views/home/child/recomd'
import feature from 'views/home/child/feature'
import goodone from 'views/home/child/goodone'
import goodtwo from 'views/home/child/goodtwo'
import goodthree from 'views/home/child/goodthree'
import goodfour from 'views/home/child/goodfour'
import goodfive from 'views/home/child/goodfive'
import category from 'views/home/child/category'
import scroll from 'components/common/tabbar/scroll/scroll'
export default {
    components:{
        navbar,
        swiper,
        menus,
        recomd,
        feature,
        goodone,
        goodtwo,
        goodthree,
        goodfour,
        goodfive,
        category,
        scroll
    }
}
</script>

<style scoped>
.home{
    height: 100vh;
}
.scroll{
    height: calc(100% - 46px - 49px);
    overflow: hidden;
}
</style>