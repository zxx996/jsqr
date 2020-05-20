<template>
    <div class="menus">
        <van-grid :column-num="5">
            <van-grid-item v-for="(image,index) in  images" :key="index">
                <img :src="image.src" alt="">
                <span>{{image.texts}}</span>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images:[
                {src:require('assets/image/home/one.png'),texts:"男性用品"},
                {src:require('assets/image/home/two.png'),texts:"女性用品"},
                {src:require('assets/image/home/three.png'),texts:"助情保健"},
                {src:require('assets/image/home/four.png'),texts:"情趣内衣"},
                {src:require('assets/image/home/five.png'),texts:"仿真阳具"},
                {src:require('assets/image/home/six.png'),texts:"自慰飞机杯"},
                {src:require('assets/image/home/seven.png'),texts:"SM产品"},
                {src:require('assets/image/home/eight.png'),texts:"双人情趣"},
                {src:require('assets/image/home/nine.png'),texts:"安全套区"},
                {src:require('assets/image/home/ten.png'),texts:"所有商品"}
            ]
        }
    },
}
</script>

<style scoped>
.van-grid-item span{
    display: block;
    font-size: 12px;
    text-align: center;
}
.menus{
    box-shadow: 0 0 5px rgb(209, 209, 209);
}
</style>