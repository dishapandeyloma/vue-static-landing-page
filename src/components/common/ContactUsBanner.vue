<script lang="ts" setup>
import coin1 from '@/assets/imgs/contact/coin-1.png'
import coin2 from '@/assets/imgs/contact/coin-2.png'
</script>
<template>
  <div class="bg-#EFEFEF mb-20 h-200 lg:h-400 relative">
    <div class="wh-full flex-col pt-20 lg:pt-60 absolute left-1/2 -translate-x-1/2">
      <h2 class="text-center p-10 text-18 lg:text-32 font-700">Interested? Let’s talk.</h2>
      <div
        class="text-#8399AE text-center lg:p-10 text-12 lg:text-20 font-400 leading-20 letter-spacing-0"
      >
        Schedule a free consultation <br class="block sm:hidden" />
        with our experts.
      </div>
      <div class="f-c-c">
        <CButton class="mt-10 lg:mt-20"
          ><span class="text-18 lg:text-20 font-700 text-center">How it works</span></CButton
        >
      </div>
      <img :src="coin1" class="absolute bottom-0 w-120 h-150 lg:w-300 lg:h-300" alt="coin1" />
      <img :src="coin2" class="absolute top-0 right-0 w-120 h-120 lg:w-300 lg:h-300" alt="coin2" />
    </div>
  </div>
</template>
