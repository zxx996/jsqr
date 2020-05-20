<template>
    <div class="navbar">
        <van-nav-bar class="van-nav" @click-left="onClickLeft" @click-right="onClickRight">
            <template #left>
                <div>
                    <img src="~assets/image/category/leftico.png">
                </div>
            </template>
            <template #title>
                <div>
                    <input type="text" placeholder="搜索商品">
                    <van-icon name="search" class="icos" /> 
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
        onClickLeft(){
            this.$router.go(-1)
        },
        onClickRight(){
            this.$router.push('category')
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
input{
    padding: 8px 15px;
    border: none;
    border-radius: 20px;
    opacity: 0.8;
}
.van-icon{
    position: relative;
    top: 2px;
    left: -30px;
}
</style>