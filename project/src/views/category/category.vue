<template>
    <div class="category">
        <!-- 头部导航 -->
        <navbar></navbar>
        <!-- 侧边导航与内容 -->
        <selects></selects>
        
    </div>
</template>

<script>
import navbar from 'views/category/child/navbar'
import selects from '../category/child/selects'
export default {
    components:{
        navbar,
        selects
    },
    
}
</script>

<style scoped>
.category{
    padding-bottom: 50px;
}
</style>