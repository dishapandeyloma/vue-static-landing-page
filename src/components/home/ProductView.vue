<script lang="ts" setup>
import whitelabel from '@/assets/imgs/whitelabel.png'
import tglive from '@/assets/imgs/tglive.png'
import telebet from '@/assets/imgs/telebet.png'

const cards = [
  {
    title: 'white label',
    description: 'This is a short description for the first card.',
    image: whitelabel,
  },
  {
    title: 'Live Game',
    description:
      'This is a short description for the second card. His is a short description for the second card. His is a short description for the second card. His is a short description for the second card.',
    image: tglive,
  },
  {
    title: 'Telebet',
    description:
      'This is a short description for the third card. This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.This is a short description for the third card.',
    image: telebet,
  },
  {
    title: 'Card Title 3',
    description: 'This is a short description for the third card.',
    image: telebet,
  },
  {
    title: 'Card Title 3',
    description: 'This is a short description for the third card.',
    image: whitelabel,
  },
]
</script>

<!-- <template>
  <div class="main-container mt-20">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24">
      <div v-for="(card, index) in cards" :key="index" class="relative">
        <div
          class="bg-#efefef h-250 w-full flex flex-col justify-center items-center p-10 rounded-10 z-2"
        >
          <img
            :src="card.image"
            alt="Card"
            class="aspect-ratio-square object-contain wh-full p-20"
          />
        </div>
        <div
          class="goldenGradient absolute h-50 w-full rounded-10 flex items-center justify-center"
        >
          <p class="text-16 font-700 text-white z-10">{{ card.title }}</p>
        </div>
        <div class="card-content">
          <p class="text-14 font-400 card-description">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  max-width: 100%;
  margin: 0 auto;
}

.card {
  background: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card-image {
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.card-content {
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-description {
  margin: 0;
  flex-grow: 1;
}
</style> -->

<!-- <template>
  <div class="cards-container main-container mt-20">
    <div v-for="(card, index) in cards" :key="index" class="card">
      <div class="card-image">
        <img :src="card.image" :alt="card.title" class="card-img" />
      </div>
      <div class="card-title">
        <span class="title-text">{{ card.title }}</span>
        <span class="arrow">›</span>
      </div>
      <div class="card-description">
        <p>{{ card.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards-container {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;
  width: 100%;
  padding: 1rem;
}

@media (min-width: 768px) {
  .cards-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .cards-container {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.card {
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 220px;
  overflow: hidden;
 
  position: relative;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.card-title {
  background-color: #8b6914;
  color: white;
  font-weight: bold;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-text {
  font-size: 14px;
  letter-spacing: 0.05em;
}

.arrow {
  font-size: 1.5rem;
}

.card-description {
  padding: 1rem;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  flex-grow: 1;
}
</style> -->

<template>
  <div class="main-container mt-20">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24">
      <div v-for="(card, index) in cards" :key="index" class="card">
        <div class="bg-gray rounded-10">
          <img :src="card.image" :alt="card.title" class="wh-full p-20" />
        </div>
        <div class="card-title">
          <span class="title-text">{{ card.title }}</span>
        </div>
        <div class="card-description">
          <p>{{ card.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
