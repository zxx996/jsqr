<template>
  <div id="app">
    <router-view/>
    <maintabbar></maintabbar>
  </div>
</template>

<script>
import maintabbar from '../src/components/content/mintabbar/maintabbar'
export default {
    components:{
      maintabbar
    }
}
</script>
<style scoped>
@import 'assets/css/base.css';
</style>
