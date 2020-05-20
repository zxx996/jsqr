<template>
    <div>
        <!-- 头部导航 -->
        <cartnav></cartnav>
        <!-- 购物车无内容是的状态 -->
        <cartempty></cartempty>
        <!-- 底部结算 -->
        <carttabbar></carttabbar>
    </div>
</template>

<script>
import cartnav from 'views/cart/child/cartnav'
import cartempty from 'views/cart/child/cartempty'
import carttabbar from 'views/cart/child/carttabbar'
export default {
    components:{
        cartnav,
        cartempty,
        carttabbar
    }
}
</script>

<style scoped>

</style>