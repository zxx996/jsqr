<template>
    <div>
        <van-nav-bar title="选择收货人地址" @click-left="onClickLeft">
            <template #left>
                <div>
                    <img src="~assets/image/cart/zuojiantou.png">
                </div>
            </template>
        </van-nav-bar>
        <van-address-list
            v-model="chosenAddressId"
            :list="list"
            disabled-text="以下地址超出配送范围"
            default-tag-text="默认"
            @add="onAdd"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            chosenAddressId: '1',
            list: [
                    {
                    id: '1',
                    name: '张三',
                    tel: '13000000000',
                    address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
                    isDefault: true,
                    },
            ]
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
        onAdd() {
            this.$router.push('eaditaddress')
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