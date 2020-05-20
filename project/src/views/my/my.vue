<template>
    <div>
        <!-- 头部导航 -->
        <mynav></mynav>
        <!-- 新用户注册 -->
        <newinfons></newinfons>
    </div>
</template>

<script>
import mynav from 'views/my/child/mynav'
import newinfons from 'views/my/child/newinfons'
export default {
    components:{
        mynav,
        newinfons
    }
}
</script>

<style scoped>

</style>