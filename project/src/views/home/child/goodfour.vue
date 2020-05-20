<template>
    <div class="good">
        <div class="good-info">
            <div class="good-title">
                <span class="starts"></span>
                <span class="sexs">品牌专区</span>
                <span class="ends"></span>
            </div>
            <span class="more">更多</span>
        </div>
        <goodlist></goodlist>
    </div>
</template>

<script>
import goodlist from 'components/content/mintabbar/goodlist'
export default {
    data() {
        return {
        }
    },
    components:{
        goodlist
    }
}
</script>

<style scoped>
.good-info{
    padding: 2px 0;
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
    border: 1px solid #c50f9e;
}
.ends{
    display: inline-block;
    position: relative;
    width: 50px;
    border: 1px solid #c50f9e;
}
.sexs{
    display: inline-block;
    padding: 0 15px;
    color: #c50f9e;
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
</style>