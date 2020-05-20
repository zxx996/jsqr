<template>
    <div class="gooditem">
        <div class="main">
            <div class="imgs">
                <img src="~assets/image/home/2.jpg" alt="">
            </div>
            <div class="desc">
                <p>厂家直销电动AV震动棒 爱如潮水女多用频防水按摩器情趣用品磁吸充电设计VV058</p>
                <div class="prices">
                    <span class="newprice">￥155</span>
                    <span class="finds">查看详情</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        gooitem:{
            type:Number,
            default:0
        }
    }
}
</script>

<style scoped>
.main{
    padding: 5px 0;
    display: flex;
}
.imgs img{
    width:120px;
    height: 120px;
}
.desc{
    margin: 0 5px;
    border-bottom: 1px solid rgb(182, 179, 179);
}
.desc p{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.prices{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    top: 45px;
    color: red;
}
.newprice{
    font-weight: bold;
}
.finds{
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid red;
    border-radius: 20px;
}
</style>