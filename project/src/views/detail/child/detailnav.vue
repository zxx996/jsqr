<template>
    <div class="navbar">
       <van-nav-bar class="van-nav" @click-left="onClickLeft" @click-right="onClickRight">
            <template #left>
                <div>
                    <img src="~assets/image/category/leftico.png">
                </div>
            </template>
            <template #title>
                <div class="titles">
                    <div v-for="(iitem,index) in titles" :key="index" @click="indexclick(index)" :class="{active:currentindex==index}">
                        <span>{{iitem}}</span>
                    </div>
                </div>
            </template>
            <template #right>
                <div>
                    <img src="~assets/image/tabbar/fenlei.png">
                    <span>分类</span>
                </div>
            </template>
        </van-nav-bar>
    </div>
</template>

<script>
export default {
    data() {
        return {
        value: '',
        titles:['商品',"看图文","评论"],
        currentindex:0
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        onClickRight(){
            this.$router.push('category')
        },
        indexclick(index){
            this.currentindex=index
        }
    },
}
</script>

<style scoped>
.van-nav{
    line-height: 14px;
    background: rgb(182, 23, 23);
}
.van-nav-bar .icos{
    color: gray;
}
.van-nav img{
    width: 20px;
    height: 20px;
}
.van-nav div span{
    margin: 0;
    display: block;
    color: white;
    font-size: 12px;
}
.titles{
    display: flex;
    align-items: center;
    line-height: 20px;
}
.titles>div span{
    display: inline-block;
    padding: 2px 0;
    margin: 0 5px;
    color: white;
    font-size: 15px;
}
.active span{
    font-weight: bold;
    border-bottom: 2px solid rgb(230, 227, 227);
}
</style>