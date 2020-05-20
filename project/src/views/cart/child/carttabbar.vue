<template>
    <div class="bootombar">
        <div class="counter">
            <span class="count">购物金额小计<i>￥0.00</i></span>
            <van-button type="primary" color="#ee0a24" to="address">去结算</van-button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bootombar{
    position: fixed;
    bottom: 50px;
    left: 0;
    right: 0;
    padding: 10px 0;
    box-shadow: 10px 0px 10px rgb(217, 224, 217);
}
.counter{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
}
.count{
    font-size: 13px;
    color: red;
}
.count i{
    font-style: normal;
    font-weight: bold;
}
.van-button{
    width: 90px;
    height: 35px;
}
</style>