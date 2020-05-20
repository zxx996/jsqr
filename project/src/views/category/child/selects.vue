<template>
    <div>
        <van-tree-select class="d1" height="100%" :items="items" :main-active-index.sync="active" @click-nav="itemclick">
          <template  #content>
                <girconent></girconent>
                <boyconent></boyconent>
                <doubleconent></doubleconent>
                <brandconent></brandconent>
                <helpconent></helpconent>
                <safeconent></safeconent>
                <smcoment></smcoment>
                <fangconent></fangconent>
                <exiconent></exiconent>
          </template>
</van-tree-select>
    </div>
</template>

<script>
import girconent from 'views/category/child/girconent'
import boyconent from 'views/category/child/boyconent'
import doubleconent from 'views/category/child/doubleconent'
import brandconent from 'views/category/child/brandconent'
import helpconent from 'views/category/child/helpconent'
import safeconent from 'views/category/child/safeconent'
import smcoment from 'views/category/child/smcoment'
import fangconent from 'views/category/child/fangconent'
import exiconent from 'views/category/child/exiconent'
import $ from "jquery"
export default {
     data() {
    return {
      active: 0,
      items: [
              {text:"女性用品"},
              {text:"男性用品"},
              {text:"双人情趣"},
              {text:"品牌专区"},
              {text:"助情保健"},
              {text:"安全套区"},
              {text:"SM产品"},
              {text:"仿真阳具"},
              {text:"情趣服饰"}
            ],
    }
  },
  components:{
        girconent,
        boyconent,
        doubleconent,
        brandconent,
        helpconent,
        safeconent,
        smcoment,
        fangconent,
        exiconent
  },
  methods: {
    itemclick(index){
      console.log('---')
    },
  },
  mounted(){
      $(".van-tree-select__content").on("scroll",function(){
        var len = $(this).scrollTop()
        if(len < 410){
          $(".van-sidebar>a:nth-child(1)").addClass("van-sidebar-item--select").siblings(".van-sidebar>a").removeClass("van-sidebar-item--select")
        }
        if(len >= 410){
          $(".van-sidebar>a:nth-child(2)").addClass("van-sidebar-item--select").siblings(".van-sidebar>a").removeClass("van-sidebar-item--select")
        }
        if(len >= 870){
          $(".van-sidebar>a:nth-child(3)").addClass("van-sidebar-item--select").siblings(".van-sidebar>a").removeClass("van-sidebar-item--select")
        }
        if(len >= 1200){
          $(".van-sidebar>a:nth-child(4)").addClass("van-sidebar-item--select").siblings(".van-sidebar>a").removeClass("van-sidebar-item--select")
        }
        if(len >= 1650){
          $(".van-sidebar>a:nth-child(5)").addClass("van-sidebar-item--select").siblings(".van-sidebar>a").removeClass("van-sidebar-item--select")
        }
        if(len >= 2100){
          $(".van-sidebar>a:nth-child(6)").addClass("van-sidebar-item--select").siblings(".van-sidebar>a").removeClass("van-sidebar-item--select")
        }
        if(len >= 2550){
          $(".van-sidebar>a:nth-child(7)").addClass("van-sidebar-item--select").siblings(".van-sidebar>a").removeClass("van-sidebar-item--select")
        }
        if(len >= 3000){
          $(".van-sidebar>a:nth-child(8)").addClass("van-sidebar-item--select").siblings(".van-sidebar>a").removeClass("van-sidebar-item--select")
        }
        if(len >= 3200){
          $(".van-sidebar>a:nth-child(9)").addClass("van-sidebar-item--select").siblings(".van-sidebar>a").removeClass("van-sidebar-item--select")
        }
      })

      var num = $(".van-sidebar>a");
      var qwe = ["one","two","three","four","five","six","seven","eight","nine"]
      for(var i=0;i<num.length;i++){
        num.eq(i).attr("href",`#${qwe[i]}`)
      }
      var dv = $(".van-tree-select__content>div");
      for(var j=0;j<dv.length;j++){
        dv.eq(j).attr("id",qwe[j])
      }

  }
}
</script>

<style scoped>
.van-sidebar{
  flex: 0.6;
}
.d1{
  position:fixed;
}
</style>