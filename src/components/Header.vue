<template>
 <div  class="header w-full sm:w-11/12  px-2  flex  items-center justify-center">
   
    <div class="  w-full flex items-center justify-between">
        <div class="flex items-center w-[147PX] h-[42PX] sm:w-[164PX] sm:h-[42PX]">
          <img @click="toTarge('/')" class="w-full h-full" :src="logo" alt="">
        </div>
        <div class="flex items-center">
          <div v-if="!isMetaCoinV1Page">
            <a href="#MetaCoin" class="mr-3 sm:mr-[32PX] ">MetaCoin</a>
            <a href="#About" >About</a>
          </div>
          <div v-else>
            <a @click="back" >Home</a>
          </div>
        </div>
    </div>
  </div>
</template>
<script setup >
import logo from '@/assets/image/logo_omf@2x.png?url'
import { computed } from 'vue';
import { useRoute,useRouter } from 'vue-router';


const route=useRoute()
const router=useRouter()
console.log("route",route)
const isMetaCoinV1Page=computed(()=>{
  return route.name == 'metacoin'
})

function back(){
  router.push({ path: '/' })
}

function toTarge(url){
  router.push(url)
}

</script>
<style lang='scss' scoped>

.header{
  height: 102px;
  width: 95vw !important;

}


</style>