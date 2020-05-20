<template>
    <div>
        <div class="good-info">
            <span class="starts"></span>
            <span class="sexs">仿真阳具</span>
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
                {src:require('assets/image/home/one.png'),texts:"震动抽插"},
                {src:require('assets/image/home/two.png'),texts:"仿真射精"},
                {src:require('assets/image/home/three.png'),texts:"可穿戴阳具"},
                {src:require('assets/image/home/four.png'),texts:"加长加粗"},
                {src:require('assets/image/home/five.png'),texts:"高端材质"},
                {src:require('assets/image/home/six.png'),texts:"更多"}
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