<template>
    <div class="navbar">
        <van-nav-bar title="登录" @click-left="onClickLeft">
            <template #left>
                <div>
                    <img src="~assets/image/cart/zuojiantou.png">
                </div>
            </template>>
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
            this.$router.go(-3)
        }
    },
}
</script>

<style scoped>
.navbar{
    background: rgb(236, 237, 240);
    box-shadow: 0 -3px 1px rgba(160, 155, 155, 0.5);
}
.van-nav-bar .van-icon{
    color: rgb(29, 28, 28);
}
.van-nav-bar img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
}
</style>