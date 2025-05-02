<script lang="ts" setup>
import quick from '@/assets/imgs/products/quick.png'
import scalable from '@/assets/imgs/products/scalable.png'
import secure from '@/assets/imgs/products/secure.png'
import custom from '@/assets/imgs/products/custom.png'

const advantages = [
  {
    imgSrc: quick,
    title: 'Quick Setup & Easy Integration',
    description: `Deliver a seamless gaming experience with real-time Baccarat and Dragon Tiger directly inside Telegram - no downloads, no delays`,
  },
  {
    imgSrc: scalable,
    title: 'Scalable & Profitable',
    description: `Telebet is built to scale, allowing you to add more games, agents, and merchants as your business expands. Customize commission rates and game limits to maximize your profit.`,
  },
  {
    imgSrc: secure,
    title: 'Fully Secure & Reliable',
    description: `Ensure secure transactions and player data protection. Cloud-based architecture ensures high availability, so your bot is always online, even during peak hours.`,
  },
  {
    imgSrc: custom,
    title: 'Complete Control & Customization',
    description: `Manage agents, merchants, and players with a fully-featured admin portal. Customize game settings, commissions, and reporting to suit your specific business needs.`,
  },
]
</script>

<template>
  <div class="mt-30">
    <h2 class="font-700 text-18 lg:text-32 text-center mt-40 leading-42">
      Advantages of Telebet Casino Platform
    </h2>
    <p class="text-14 lg:text-20 font-500 leading-32 text-center mt-20">
      Powerful and flexible platform for running your own online casino directly through Telegram.
      With its unique set of features, Telebet allows you to effortlessly launch, manage, and scale
      your casino business with minimal overhead
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mt-40">
      <template v-for="(item, index) in advantages" :key="index">
        <div class="f-c-c gap-2 lg:gap-12 rounded-10 bg-#f7f7f7 p-20">
          <div class="flex-col space-y-xl">
            <h2 class="font-600 text-16">{{ item.title }}</h2>
            <p class="text-12 lg:text-16 font-400 leading-24">{{ item.description }}</p>
          </div>
          <div class="flex-1">
            <img
              :src="item.imgSrc"
              :alt="item.imgSrc"
              class="max-w-67 max-h-67 lg:max-w-140 lg:max-h-140 aspect-ratio-1/1 object-contain"
            />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
