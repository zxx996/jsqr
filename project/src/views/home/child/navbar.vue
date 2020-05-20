<template>
    <div class="navbar">
        <van-nav-bar @click-right="onClickRight" class="van-nav">
            <template #title>
                <div>
                    <input type="text" placeholder="搜索商品">
                    <van-icon name="search" class="icos"/> 
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
        }
    },
    methods: {
        onClickRight(){
            this.$router.push('category')
        }
    },
}
</script>

<style scoped>
.van-nav{
    line-height: 14px;
    background: black;
}
.van-nav .icos{
    color: rgb(61, 59, 59);
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
input{
    padding: 8px 15px;
    border: none;
    border-radius: 20px;
}
.van-icon{
    position: relative;
    top: 2px;
    left: -30px;
}
</style>