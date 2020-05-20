<template>
    <div>
        <div class="good-info">
            <span class="starts"></span>
            <span class="sexs">双人情趣</span>
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
                {src:require('assets/image/home/one.png'),texts:"双人共振"},
                {src:require('assets/image/home/two.png'),texts:"同性产品"},
                {src:require('assets/image/home/three.png'),texts:"头套眼罩"},
                {src:require('assets/image/home/four.png'),texts:"捆绑束缚"},
                {src:require('assets/image/home/five.png'),texts:"鞭打"},
                {src:require('assets/image/home/six.png'),texts:"更多>>>"}
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
    border: 1px solid #d40d0d;
}
.ends{
    display: inline-block;
    position: relative;
    width: 20px;
    border: 1px solid #d40d0d;
}
.sexs{
    display: inline-block;
    padding: 0 15px;
    color: #d40d0d;
    font-weight: bold;
    line-height: 20px;
}
</style>