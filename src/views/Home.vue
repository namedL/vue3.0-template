<template>
   <div class="home">
   <Header></Header>
    
    
    <dmap platform="cesium" :center="[110.7, 28.00]" :zoom="5" provider="GoogleMap.Normal"/>
    <div class="child-comp">
    <ul>
      
    </ul>
  </div>
  </div>
</template>

<script> 
import dmap from "@istrong/dmap";
import Header from "../components/Header";
//import { getApi } from "../api";
export default {
  name: 'Home',
  components:{ dmap },
  data(){
    return {
     
    }
  },
  components:{
    dmap,
    Header
   // main,
  },
  mounted(){
    //getApi(res=>{console.log(res)})
  },
  methods:{
  }
}
</script>
<style scoped>
</style>
