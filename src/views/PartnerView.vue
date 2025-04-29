<script lang="ts" setup>
import banner from '@/assets/imgs/partner/banner.png'
</script>

<template>
  <div class="h-270 lg:h-530 bg-#F5F8FF">
    <div class="main-container f-c-b wh-full">
      <div class="flex-col gap-10 items-start">
        <span class="text-14 lg:text-16 font-400 gradient-gold-text">CLIENTS & PROVIDERS</span>
        <h2 class="font-700 text-18 lg:text-32">Our Partners</h2>
        <p class="text-12 lg:text-16 font-400 leading-20">
          Unlock new opportunities with powerful partnerships designed to drive innovation and
          <br class="md:block sm:hidden" />
          maximize your competitive edge. Join a network committed to mutual growth and success..
        </p>

        <CButton class="mt-4 lg:mt-10"
          ><span class="text-14 lg:text-20 font-700 text-center">Get started</span></CButton
        >
      </div>
      <img class="w-150 h-150 lg:w-400 lg:h-400" :src="banner" alt="Banner" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
