<script lang="ts" setup>
import whitelabel from '@/assets/imgs/whitelabel.png'
import tglive from '@/assets/imgs/tglive.png'
import telebet from '@/assets/imgs/telebet.png'

const cards = [
  {
    title: 'White label',
    description:
      'White Label is a cost-effective, comprehensive solution aimed at launching your own casino in the shortest time possible, which inevitably saves time to the market and minimize the risk. ',
    image: whitelabel,
  },
  {
    title: 'Live Game',
    description: `TGBaowang provide Our eight-deck Live Baccarat game is powered by 
cutting-edge technology, delivering a seamless and immersive experience. With multiple side bets, 
Own customize your game play and find the perfect thrill. Our charming hosts and uniquely 
designed environment complete the picture, making every session unforgettable. Get ready to play 
Baccarat like never before.`,
    image: tglive,
  },
  {
    title: 'Telebet',
    description: `Telebet is a complete gaming software package for various fees. Merchants can choose between two models: Fly-order mode developing direct members only. Agent Profit Sharing mode creating one level of agents and recruiting through them.`,
    image: telebet,
  },
]
</script>

<template>
  <section class="main-container mt-30">
    <h2 class="text-32 text-center">{{ $t('products') }}</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 mt-30">
      <div v-for="(card, index) in cards" :key="index" class="relative">
        <div class="absolute top-250 goldenGradient h-65 rounded-10 w-full z-0">
          <div
            class="absolute top-70% left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
          >
            <p class="text-16 font-700 text-white">{{ card.title }}</p>
          </div>
        </div>

        <div class="bg-#efefef h-270 rounded-10 relative z-10 p-40">
          <img :src="card.image" :alt="card.title" class="wh-full" />
        </div>

        <div class="card-description mt-60">
          <p class="leading-24 text-14 font-400">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
