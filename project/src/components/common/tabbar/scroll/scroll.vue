<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props:{
        probeType:{
            type:Number,
            default:0
        }
    },
    data() {
        return {
            scroll:null
        }
    },
    mounted() {
        this.scroll=new BScroll(this.$refs.wrapper,{
            click:true,
            probeType:this.probeType,
        })
        
    }
}
</script>

<style>

</style>