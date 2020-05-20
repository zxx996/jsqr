<template>
    <div class="detailinfo">
        <div class="desc">
            <p>海战男用喷剂男性外用延时喷剂持久神油夫妻情趣成人用品【货号7131】直降100！！！</p>
            <div>
                <img src="~assets/image/home/collect.png">
                <span>收藏</span>
            </div>
        </div>
        <div class="info-list">
            <p>本店价<span class="tags">￥198</span><span class="prices">市场价￥498</span></p>
            <p><span>品牌</span><span class="brand">香港诺兰</span></p>
            <p><span>库存</span><span class="conut">999888</span></p>
        </div>
        <div class="counter">
            <van-collapse v-model="activeNames">
                <van-collapse-item name="1">
                    <template #title>
                        <div class="rules">选择商品规格</div>
                    </template>
                    <div class="selects">
                        <span>数量</span>
                        <div>
                            <button @click="sub">-</button>
                            <button>{{counter}}</button>
                            <button @click="add">+</button>
                        </div>
                    </div>
                </van-collapse-item>
            </van-collapse>
        </div>
        <div class="info-list">
            <p>商品总价:<span class="totals">￥198</span></p>
        </div>
        <div class="comment">
            <van-rate v-model="value" readonly color="#eee160" />
            <p><span>0</span>人评论<span>100%</span>好评</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeNames: ['1'],
            counter:0,
            value:5
        }
    },
    methods: {
        sub(){
            this.counter--
        },
        add(){
            this.counter++
        }
    },
}
</script>

<style scoped>
.desc{
    padding: 10px 5px;
    display: flex;
    align-items: center;
}
.desc p{
    font-size: 15px;
    font-weight: bold;
}
.desc>div{
    padding: 0 10px;
    text-align: center;
}
.desc img{
    width: 20px;
    height: 20px;
}
.desc span{
    display: inline-block;
    font-size: 12px;
    color: #333;
}
.info-list{
    padding: 0 5px;
    font-size: 14px;
    color: gray;
}
.info-list p{
    padding: 10px 0;
    border-top: 1px solid rgb(219, 218, 218);
}
.info-list p .tags{
    margin: 0 3px;
    color: rgb(226, 59, 59);
    font-weight: bold;
    font-size: 15px;
}
.prices{
    position: relative;
    top: -5px;
    margin: 0 5px;
    text-decoration: line-through;
    font-size: 12px;
}
.brand{
    display: inline-block;
    margin: 0 10px;
    padding: 2px;
    background: gray;
    color: white;
}
.counter{
    border-top: 1px solid rgb(219, 218, 218);
}
.conut{
    display: inline-block;
    margin: 0 10px;
    padding: 2px;
    color: #222;
}
.selects span{
    display:block;
    padding: 5px 0;
}
.selects button{
    padding: 10px 15px;
    outline: none;
    border: 1px solid rgb(170, 170, 170);
    background: white;
    font-size: 19px;
    font-weight: bold;
}
.rules{
    margin-left: -11px;
}
.totals{
    margin: 0 3px;
    color: rgb(226, 59, 59);
    font-weight: bold;
    font-size: 18px;
}
.comment{
    display: flex;
    align-items: center;
    padding: 10px 5px;
    border-top: 1px solid rgb(219, 218, 218);
}
.comment p{
    margin: 0 25px;
}
</style>