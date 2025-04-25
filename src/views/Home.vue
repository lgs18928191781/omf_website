<template>
  <div class="main flex flex-col items-center justify-center">

    <div id="slogan" class="flex flex-col items-center justify-between">
      <div>
        <Header></Header>
      </div>
      <div class="content w-4/5 font-bold mb-[102PX] mt-[50PX] sm:mt-0 text-4xl  md:text-[54px]  flex items-center justify-center">
        <span class="leading-[60PX] md:leading-[80PX]">MetaID is the foundational protocol for Web3, and we are committed to boosting the adoption of the MetaID protocol.</span>
      </div>
    </div>

    <div id="MetaCoin" class="w-full  h-fit mt-[200PX] flex items-center justify-center  sm:mt-0 sm:h-screen flex-col">
      <div class="w-4/5 flex items-center justify-center flex-col">
        <div class=" flex items-center justify-center flex-col">
        <div class="flex items-center justify-center flex-col">
          <div class="w-[102PX] h-[102PX]">
            <img :src="MC" alt="">
          </div>
          <div class="mt-[13PX] text-4xl font-bold">
            <span>MetaCoin</span>
          </div>
        </div>
        <div class="leading-10 mt-[30PX] text-xl">
          MetaCoin is the token issued by the Open MetaID Foundation, designed to
incentivize users to engage with MetaID applications and foster the growth of
the MetaID ecosystem
        </div>
      </div>
      <div class="flex flex-col md:flex-row mt-[30PX]  items-center justify-between">
        <div  v-for="item of whitePaperV2" class="mt-[24PX] md:odd:mr-[24PX]">
          <a :href="item.url" target="_blank" class="cursor-pointer flex items-center justify-center w-[280PX] px-[20PX] md:px-0 md:w-[300PX] py-[21PX] rounded-lg bg-[#3182F9] text-white">
            <img class="mr-[11PX]" :src="Download" alt="">
            <span>{{ item.value }}</span>
          </a>
        </div>
      </div>
      <div class="text-lg mt-[50PX]">
        <a @click="toTarge('/v1/metacoin')" class="text-[#3182F9]">
          You can get v1 version whitepaper here →
        </a>
      </div>
      </div>

    </div>

    <div id="About" class="w-full h-fit sm:h-screen flex items-center justify-center flex-col mt-[250PX] mb-[200PX] sm:mb-0 sm:mt-0">
      <div class="w-4/5">
        <div class="leading-10 font-bold text-[54px]">About</div>
      <div class="leading-10 text-xl mt-[60PX]">
        Open MetaID Foundation (OMF) is a non-profit organization dedicated to supporting MetaID and related technologies.
OMF is not a company or even a traditional non-profit organization. We are an organization that supports the opening and development of MetaID. We are part of the larger ecosystem that supports MetaID. Our mission is to do our best for the openness and success of MetaID.

Our goal is to provide support and help for projects in need, to become a valuable voice in the MetaID state system, and to transmit the value of MetaID to the outside world.
      </div>
      </div>

    </div>

    
  </div>
</template>
<script setup >
import Header from '@/components/Header.vue'
import MC from '@/assets/image/mc.png?url'
import Download from '@/assets/image/icon_download@1x.png?url'
import { useRouter } from 'vue-router'

const router=useRouter()

const whitePaperV2=[
  {
    value:`MetaCoin Whitepaper (English)`,
    url:`/v2/metacoin_wp_v2_en.pdf`
  },
  {
    value:`MetaCoin 白皮书 (中文)`,
    url:`/v2/metacoin_wp_v2_cn.pdf`
  },

]

function toTarge(url){
  router.push(url)
}


</script>
<style lang='scss' scoped>

.main{
 
}


#slogan{
  height: 100vh;
  background-image: url('@/assets/image/bg@1x.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  .content{
    height: calc(100vh - 102px);
  }
 

  
}

#MetaCoin{
  
  background: linear-gradient(180deg, rgba(249, 254, 255, 0) 0%, #F9FEFF 50%)
}

#About{
  background: linear-gradient(180deg, rgba(249, 254, 255, 0) 0%, #F9FEFF 50%)
}

</style>