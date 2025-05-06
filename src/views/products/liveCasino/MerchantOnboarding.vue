<script lang="ts" setup>
import app from '@/assets/imgs/products/live-casino/app-2.png'
const themes = [
  {
    name: 'Light Theme Clean, Bright, Professional',
    features: [
      {
        id: 1,
        point: 'Elegant UI with bright tones',
      },
      {
        id: 2,
        point: 'Ideal for web and mobile daylight usage',
      },
      {
        id: 3,
        point: 'Professional and business-friendly layouts',
      },
    ],
  },
  {
    name: 'Dark Theme - Sleek, Stylish, Immersive',
    features: [
      {
        id: 1,
        point: 'Eye-friendly for low-light environments',
      },
      {
        id: 2,
        point: 'Luxurious and immersive atmosphere',
      },
      {
        id: 3,
        point: 'Great for player engagement and visual appeal',
      },
    ],
  },
]
</script>

<template>
  <div class="mt-40">
    <h2 class="text-18 lg:text-32 font-700 text-center mt-40">
      Quick Merchant Onboarding Made Simple
    </h2>
    <p class="text-14 lg:text-20 font-400 text-center mt-10 lg:mt-20 leading-32">
      Fast, Easy & Scalable - Start Earning in Minutes
    </p>

    <div class="bg-black w-full h-700 lg:h-442 rounded-16 flex gap-x-20 mt-100">
      <div class="w-1/2 relative">
        <img :src="app" class="absolute -top-100 left-0 h-130%" />
      </div>

      <div class="flex-1 bg-img py-10">
        <div class="flex-col text-#ffff space-y-8 mt-10">
          <h2 class="text-16 lg:text-20 font-600">Choose Your Style: Light or Dark Theme</h2>
          <p class="text-14 font-400 mt-10 lg:mt-20 leading-22">
            Personalize Your Live Casino Experience With Live Cassino, appearance matters as much as
            performance. That’s why we offer two beautifully designed themes - Light and Dark so you
            and your players can choose the look that feels just right.
          </p>
          <div v-for="i in themes" :key="i.name" class="p-10">
            <h2 class="text-14 lg:text-16 font-600">Light Theme Clean, Bright, Professional</h2>
            <div class="px-10">
              <ul class="list-none mt-10">
                <li
                  v-for="item in i.features"
                  :key="item.id"
                  class="text-14 lg:text-16 leading-24 lg:leading-32 flex items-start space-x-2xl"
                >
                  <SvgIcon name="bullet" class="mr-8 mt-8" />
                  {{ item.point }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg-img {
  background: url('@/assets/imgs/products/live-casino/banner.png') no-repeat;
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
