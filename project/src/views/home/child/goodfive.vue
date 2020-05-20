<template>
    <div class="good">
        <div class="good-info">
            <div class="good-title">
                <span class="starts"></span>
                <span class="sexs">热卖商品</span>
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
    align-items: center;
    padding: 10px 0;
    text-align: center;
}
.starts{
    display: inline-block;
    position: relative;
    width: 50px;
    border: 1px solid #cc3d1a;
}
.ends{
    display: inline-block;
    position: relative;
    width: 50px;
    border: 1px solid #cc3d1a;
}
.sexs{
    display: inline-block;
    padding: 0 15px;
    color: #cc3d1a;
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