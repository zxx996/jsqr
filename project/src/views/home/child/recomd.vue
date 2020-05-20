<template>
    <div class="recomd">
        <div class="recomd-hot">
            <span class="hots">限时抢购</span>
            <span>限时限量 精选爆款</span>
            <img src="~assets/image/home/seven.png" alt="">
        </div>
        <div class="recomd-new">
            <span class="news">新品上架</span>
            <span>新品抢先体验</span>
            <img src="~assets/image/home/seven.png" alt="">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.recomd{
    display: flex;
    align-items: center;
    text-align: center;
}
.recomd-hot,.recomd-new{
    box-shadow: 1px 0 0 rgb(247, 245, 245);
    padding: 5px 10px;
}
.recomd span{
    padding: 5px;
    display: block;
    font-size: 12px;
    color: gray;
}
.recomd-hot .hots{
    color: red;
    font-size: 15px;
    font-weight: bold;
}
.recomd-new .news{
    color: rgb(74, 171, 209);
    font-size: 15px;
    font-weight: bold;
}
</style>