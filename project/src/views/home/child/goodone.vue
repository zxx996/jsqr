<template>
    <div class="good">
        <goodtitles></goodtitles>
        <div class="good-desc">
            <div class="images">
                <img src="~assets/image/home/1.jpg" alt="">
            </div>
            <div class="desc">
                <span class="tags">G点刺激</span>
                <span>转珠棒</span>
                <span class="tags">仿真阳具</span>
                <span>跳蛋</span>
                <span class="tags">性爱炮击</span>
                <span>私处挑逗</span>
                <span class="tags">按摩棒</span>
                <span>更多></span>
            </div>
        </div>
        <goodlist></goodlist>
    </div>
</template>

<script>
import goodtitles from '../../../components/content/mintabbar/goodtitles'
import goodlist from 'components/content/mintabbar/goodlist'
export default {
    components:{
        goodtitles,
        goodlist
    }
}
</script>

<style scoped>
.good{
    padding: 5px 0;
}
.good-info{
    padding: 10px 0;
    display: flex;
    align-items: center;
}
.good-title{
    flex: 1;
    padding: 10px 0;
    text-align: center;
}
.starts{
    display: inline-block;
    position: relative;
    width: 50px;
    border: 1px solid #d224e2;
}
.ends{
    display: inline-block;
    position: relative;
    width: 50px;
    border: 1px solid #d224e2;
}
.sexs{
    display: inline-block;
    padding: 0 15px;
    color: purple;
    font-weight: bold;
    line-height: 20px;
}
.more{
    display: inline-block;
    padding: 2px 10px;
    background: red;
    color: white;
    font-size: 12px;
    border-radius: 10px;
}
.good-desc{
    box-shadow: 0 0 5px rgb(111,111,111);
}
.images{
    width: 375px;
    height: 150px;
}
.images img{
    width: 100%;
    height: 100%;
}
.desc span{
    margin:  6px 5px;
    padding: 5px 0px;
    display: inline-block;
    width: 83px;
    border: 1px solid gray;
    border-radius: 5px;
    text-align: center;
}
.tags{
    color: red;
    font-weight: bold;
}
</style>