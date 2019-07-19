<template>
  <div class="head">
   <slot name="left"></slot>
   <img src="images/top.png" class="position-absolute bbg">
   <img  src="images/name.png"  class="position-absolute"/>
   <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    
  }
}
</script>
<style>
.head{
text-align:center;height:60px;width:100%;position:absolute;top:0;z-index:9999999;background:rgba(0,0,0,1)
}
.bbg{
    width: 100%;
    height: 60px;
    top: 18px;
}
</style>


