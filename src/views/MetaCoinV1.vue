<template>
  <div class="metacoin-v1 flex flex-col items-center justify-center">
    <Header></Header>
    <div  class=" w-full  h-fit mt-[100PX] flex items-center mb-[100PX] sm:mb-0 sm:h-screen flex-col">
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
        <div  v-for="item of whitePaperV1" class="mt-[24PX] md:odd:mr-[24PX]">
          <a :href="item.url" target="_blank" class="cursor-pointer flex items-center justify-center w-[280PX] px-[20PX] md:px-0 md:w-[300PX] py-[21PX] rounded-lg bg-[#3182F9] text-white">
            <img class="mr-[11PX]" :src="Download" alt="">
            <span>{{ item.value }}</span>
          </a>
        </div>
      </div>
    
      </div>

    </div>
  </div>
</template>
<script setup >
 import Header from '@/components/Header.vue'
 import MC from '@/assets/image/mc.png?url'
import Download from '@/assets/image/icon_download@1x.png?url'


const whitePaperV1=[
  {
    value:`MetaCoin Whitepaper (English)`,
    url:`/wp/v1/metacoin_wp_en.pdf`
  },
  {
    value:`MetaCoin 白皮书 (中文)`,
    url:`/wp/v1/metacoin_wp_cn.pdf`
  },

]
</script>
<style lang='scss' scoped>
.metacoin-v1{
  
  background: linear-gradient(180deg, rgba(249, 254, 255, 0) 0%, #F9FEFF 50%)
}
</style>