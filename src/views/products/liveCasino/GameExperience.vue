<script lang="ts" setup>
import { getAssetsFile } from '@/utils/common'

const items = [
  {
    title: 'The only live casino platform in the industry',
    description:
      'We provide a unique real-person online gaming experience. Players no longer need to waste time on various tedious steps and have an unprecedented gaming experience.',
  },
  {
    title: 'Start quick reading with one click',
    description:
      'With just one click, you can instantly enter the exciting game world without worrying about long waiting times.',
  },
  {
    title: 'Platform instant betting switching',
    description:
      'We provide instant betting switching function, you can switch the betting amount at any time and change the betting strategy without interrupting the game',
  },
  {
    title: 'Title integrated game platform',
    description:
      'With our unique solution, you can easily place your logo into the game for seamless brand integration',
  },
]
</script>

<template>
  <div class="mt-40">
    <h2 class="text-18 lg:text-32 font-700 text-center mt-40">
      Leading a new realm of gaming immersion experience
    </h2>
    <p class="text-14 lg:text-20 font-400 text-center mt-10 lg:mt-20 leading-32">
      Explore an unprecedented game world and experience endless excitement and fun
    </p>
    <div class="block lg:flex mt-40">
      <div class="w-1/3">
        <img
          :src="getAssetsFile(`imgs/products/live-casino/app.png`)"
          alt=""
          class="w-326 max-h-620"
        />
      </div>
      <div
        class="flex-1 flex-col items-center lg:items-start text-center lg:text-left px-6 py-4 gap-24"
      >
        <template v-for="(item, index) in items" :key="index">
          <div class="bg-#F7F7F7 rounded-10 p-20 mt-4 w-full">
            <div class="flex-col gap-y-16">
              <h2 class="font-600 text-16">{{ item.title }}</h2>
              <p class="text-12 lg:text-16 font-400 leading-24">
                {{ item.description }}
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
