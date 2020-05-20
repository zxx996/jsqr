<template>
    <div class="goodtitles">
        <div class="good-info">
            <div class="good-title">
                <span class="starts"></span>
                <span class="sexs">女性用品</span>
                <span class="ends"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
}
</script>

<style scoped>
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
</style>