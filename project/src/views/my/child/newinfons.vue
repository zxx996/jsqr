<template>
    <div>
        <div class="deals">新用户注册</div>
        <van-form validate-first @failed="onFailed">
            <!-- 通过 pattern 进行正则校验 -->
            <van-field
                v-model="value1"
                type="value1" 
                label="账号"
                name="pattern"
                placeholder="请输入会员名或手机号"
                :rules="[{ pattern, message: '请输入正确内容' }]"
            />
            <van-field
                v-model="value1"
                type="value2" 
                label="密码"
                name="pattern"
                placeholder="请输入密码"
                :rules="[{ pattern, message: '请输入正确内容' }]"
            />
            <div class="buttons">
                <van-button round block type="info" native-type="submit">
                立即登录
                </van-button>
            </div>
        </van-form>
        <div class="finds">我忘记了密码？<span>短信找回</span></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value1: '',
            pattern: /\d{6}/,
        }
    },
    methods: {
        onFailed(errorInfo) {
            console.log('failed', errorInfo);
    },
    },
}
</script>

<style scoped>
.deals{
    margin: 10px 0;
    text-align: right;
    font-size: 13px;
    color: gray;
}
.van-form{
    padding: 0 0 15px 0;
    border-bottom: 1px solid rgb(236, 233, 233);
}
.van-field{
    color: gray;
    box-shadow: 10px 5px 10px rgb(233, 228, 228);
}
.buttons{
    margin: 16px 0;
}
.van-button{
    /* margin: 0 5px; */
    height: 35px;
    border-radius: 5px;
    background: rgb(206, 23, 23);
    border: none;
}
.finds{
    margin: 10px 0;
    padding: 5px 0;
    font-size: 13px;
    color: gray;
    text-align: center;
}
.finds span{
    margin: 0 10px;
    color: blue;
}
</style>