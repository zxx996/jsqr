<template>
  <div class="goodlist">
      <gooditem v-for="(item,index) in number" :key="index" :gooitem="item"></gooditem>
  </div>
</template>

<script>
import gooditem from 'components/content/mintabbar/gooditem'
export default {
    data() {
        return {
            number:5
        }
    },
    components:{
        gooditem
    }
}
</script>

<style scoped>
.goodlist{
    margin-top: 15px;
    padding: 10px 0;
    box-shadow: 0 0 5px rgb(111,111,111);
}
</style>