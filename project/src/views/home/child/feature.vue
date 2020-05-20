<template>
    <div class="feature">
        <div class="titles">
            <h4>情趣用品精选专区</h4>
            <span>更多</span>
        </div>
        <div class="feature-item">
            <div class="item">
                <span class="item-titles">如何选阳具</span>
                <span>趣网来帮你</span>
                <img src="~assets/image/home/seven.png" alt="">
            </div>
            <div class="item">
                <span class="item-titles">男用自慰</span>
                <span>秋冬特卖</span>
                <img src="~assets/image/home/seven.png" alt="">
            </div>
            <div class="item">
                <span class="item-titles">助勃增大</span>
                <span>JJ勃起增大</span>
                <img src="~assets/image/home/seven.png" alt="">
            </div>
            <div class="item">
                <span class="item-titles">延时情欲提升</span>
                <span>最新排行榜</span>
                <img src="~assets/image/home/seven.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.titles{
    position: relative;
}
.titles h4{
    color: white;
    background: rgb(247, 14, 72);
    line-height: 40px;
    text-align: center;
}
.titles span{
    position: absolute;
    top: 11px;
    right: 10px;
    display: block;
    color: white;
    border-radius: 20px;
}
.feature-item{
    display: flex;
}
.item{
    flex: 1;
    padding: 20px 2px;
    background: salmon;
    text-align: center;
}
.item span{
    display: block;
    color: white;
    line-height: 22px;
    font-size: 12px;
}
.item-titles{
    font-weight: bold;
    font-size: 14px!important;
}
</style>