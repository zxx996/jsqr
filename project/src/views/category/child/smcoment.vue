<template>
    <div>
        <div class="good-info">
            <span class="starts"></span>
            <span class="sexs">SM产品</span>
            <span class="ends"></span>
        </div>
        <div class="bg">
            <img src="~assets/image/home/3.jpg" alt="">
        </div>
        <van-grid :column-num="3">
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
                {src:require('assets/image/home/one.png'),texts:"皮鞭"},
                {src:require('assets/image/home/two.png'),texts:"口塞"},
                {src:require('assets/image/home/three.png'),texts:"SM套装"},
                {src:require('assets/image/home/four.png'),texts:"手拍"},
                {src:require('assets/image/home/five.png'),texts:"乳夹"},
                {src:require('assets/image/home/six.png'),texts:"绑带"},
                {src:require('assets/image/home/five.png'),texts:"秋千"},
                {src:require('assets/image/home/six.png'),texts:"眼罩"},
                {src:require('assets/image/home/six.png'),texts:"情趣蜡烛"},
                {src:require('assets/image/home/five.png'),texts:"静电胶带"},
                {src:require('assets/image/home/six.png'),texts:"项圈"},
                {src:require('assets/image/home/six.png'),texts:"拉拉裤"}
            ]
        }
    },
}
</script>

<style scoped>
.bg{
    width: 250px;
    height: 120px;
}
.bg img{
    width: 100%;
    height: 100%;
}
.good-info{
    flex: 1;
    align-items: center;
    padding: 10px 0;
    text-align: center;
}
.starts{
    display: inline-block;
    position: relative;
    width: 20px;
    border: 1px solid #161616;
}
.ends{
    display: inline-block;
    position: relative;
    width: 20px;
    border: 1px solid #161616;
}
.sexs{
    display: inline-block;
    padding: 0 15px;
    color: #161616;
    font-weight: bold;
    line-height: 20px;
}
</style>