<script lang="ts" setup>
import dealer from '@/assets/imgs/products/live-casino/dealer.png'
import GameExperience from './GameExperience.vue'
import MerchantOnboarding from './MerchantOnboarding.vue'
import RunBusiness from './RunBusiness.vue'
import ChooseUs from './ChooseUs.vue'
</script>
<template>
  <div class="relative h-270 lg:h-530">
    <div class="absolute inset-0 bg-banner backdrop-filter blur-1.4 lg:blur-0"></div>

    <div class="main-container z-10 relative f-c-c space-x-8 wh-full text-#fff">
      <div class="block lg:flex-col lg:w-1/2 mt-40 text-center lg:text-left">
        <h1 class="text-24 lg:text-48 font-700 mt-10 lg:mt-20">
          Live Cassino The Ultimate Online Gaming Platform
        </h1>
        <p class="text-14 lg:text-20 font-400 mt-10 lg:mt-20 leading-24 lg:leading-36">
          Step into the booming online gaming industry with TG Baowang White Label Solution a
          complete, ready-to-go platform that lets you run your own branded casino without the
          hassle of developing software from scratch.
        </p>
      </div>
      <div class="hidden lg:block pl-20">
        <img :src="dealer" alt="Live Casino" class="max-w-500 max-h-300 h-full object-cover" />
      </div>
    </div>
  </div>
  <section class="main-container">
    <ChooseUs />
    <RunBusiness />
    <MerchantOnboarding />
    <GameExperience />
  </section>
</template>

<style lang="scss" scoped>
.bg-banner {
  background: url('@/assets/imgs/products/live-casino/live-casino.png') no-repeat;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  backdrop-filter: blur(14px);
}
</style>
