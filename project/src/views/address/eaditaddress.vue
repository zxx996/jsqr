<template>
    <div>
        <van-nav-bar title="添加收货地址" @click-left="onClickLeft">
            <template #left>
                <div>
                    <img src="~assets/image/cart/zuojiantou.png">
                </div>
            </template>
        </van-nav-bar>
        <van-address-edit
            :area-list="areaList"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
        />
    </div>
</template>

<script>
import { Toast } from 'vant'
export default {
    data() {
        return {
            areaList,
            searchResult: [],
            value: '',
        }
    },
    methods: {
         onClickLeft(){
            this.$router.go(-1)
        },
        onSave() {
            Toast('save');
        },
        onDelete() {
            Toast('delete');
        },
        onChangeDetail(val) {
            if (val) {
                this.searchResult = [
                {
                    name: '黄龙万科中心',
                    address: '杭州市西湖区',
                },
                ];
            } else {
                this.searchResult = [];
            }
        },
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