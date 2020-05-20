<template>
    <div class="menus">
        <div class="good-info">
            <div class="good-title">
                <span class="starts"></span>
                <span class="sexs">热门分类</span>
                <span class="ends"></span>
            </div>
            <span class="more">更多</span>
        </div>
        <van-grid :column-num="2">
            <van-grid-item v-for="(one,index) in rows" :key="index">
                <div class="total">
                    <img :src="one.src" alt="">
                    <div>
                        <p>{{one.texts}}</p>
                        <span>{{one.desc}}</span>
                    </div>
                </div>
            </van-grid-item>
        </van-grid>
        <van-grid :column-num="4">
            <van-grid-item v-for="(two,indey) in  images" :key="indey">
                <p>{{two.titles}}</p>
                <span>{{two.titles}}</span>
                <img :src="two.link" alt="">
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rows:[
                {src:require('assets/image/home/one.png'),texts:"男性用品",desc:"美臀 飞机杯 倒模"},
                {src:require('assets/image/home/two.png'),texts:"女性用品",desc:"跳蛋 男根 转珠棒"},
            ],
            images:[
                {link:require('assets/image/home/three.png'),titles:"情趣内衣",descs:"三点/制服/丝袜"},
                {link:require('assets/image/home/four.png'),titles:"SM调教",descs:"夫妻玩具\SM"},
                {link:require('assets/image/home/five.png'),titles:"润滑剂",descs:"让爱水多多"},
                {link:require('assets/image/home/six.png'),titles:"避孕套",descs:"三点/制服/丝袜"},
                {link:require('assets/image/home/seven.png'),titles:"丰胸缩阴",descs:"恢复少女紧致"},
                {link:require('assets/image/home/eight.png'),titles:"逼真男根",descs:"超真实体验"},
                {link:require('assets/image/home/nine.png'),titles:"飞机杯",descs:"女神陪你撸"}
            ]
        }
    },
}
</script>

<style scoped>
.good-info{
    padding: 2px 0;
    display: flex;
    align-items: center;
}
.good-title{
    flex: 1;
    align-items: center;
    padding: 10px 0;
    text-align: center;
}
.starts{
    display: inline-block;
    position: relative;
    width: 50px;
    border: 1px solid #cc3d1a;
}
.ends{
    display: inline-block;
    position: relative;
    width: 50px;
    border: 1px solid #cc3d1a;
}
.sexs{
    display: inline-block;
    padding: 0 15px;
    color: #cc3d1a;
    font-weight: bold;
    line-height: 20px;
}
.more{
    display: inline-block;
    padding: 2px 10px;
    background: red;
    color: white;
    font-size: 12px;
    border-radius: 10px;
}
.total{
    display: flex;
    align-items: center;
    font-size: 12px;
    color: gray;
}
.total>div{
    padding: 0 5px;
}
.total>div p{
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 15px;
    color: black;
}
.van-grid-item span{
    display: block;
    font-size: 12px;
    text-align: center;
    color: gray;
}
.van-grid-item p{
    padding: 5px 0;
    font-weight: bold;
    font-size: 15px;
    color: black;
}
.menus{
    box-shadow: 0 0 5px rgb(209, 209, 209);
}
</style>