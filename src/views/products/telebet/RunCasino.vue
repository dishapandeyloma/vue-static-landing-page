<script lang="ts" setup>
import tglive from '@/assets/imgs/products/image-1.png'
import yourCasino from '@/assets/imgs/products/image-2.png'
import userFriendly from '@/assets/imgs/products/image-3.png'

const items = [
  {
    imgSrc: tglive,
    imgAlt: 'White label',
    title: 'No App. No Hassle',
    description: `Players use Telegram - no need to download anything. The games run directly inside the Telegram chat interface for maximum convenience.`,
    points: [
      'Works on Any Device',
      'Faster Onboarding',
      'Frictionless Experience',
      'Zero Downloads Required',
    ],
  },
  {
    imgSrc: yourCasino,
    imgAlt: 'White label',
    title: '24/7 Money-Making Machine',
    description:
      'Your  bot is always online. Players can bet anytime, recharge instantly, and see live results - even while you sleep.',
    points: ['Always Active', 'Instant Recharge', 'Live Results Anytime', 'Automated Transactions'],
  },
  {
    imgSrc: userFriendly,
    imgAlt: 'White label',
    title: 'Total Control from Your Admin Portal',
    description: `Take full command of your casino operations with Telebet’s powerful and intuitive backend system. Designed for business owners, operators, and agents`,
    points: [
      'Manage everything in one place',
      'Create & manage merchants and agents',
      'View transactions, bets, and balances',
      'Set limits, commissions, and game settings',
    ],
  },
]
</script>

<template>
  <div class="mt-30">
    <h2 class="text-18 lg:text-32 font-700 text-center">
      {{ $t('Launch & Run Your Own Casino on Telegram Fast, Easy, Profitable.') }}
    </h2>
    <p class="text-14 lg:text-20 font-400 text-center mt-10 lg:mt-20">
      Telebet empowers you to enter the online casino space with zero technical hassle and maximum
      business control.
    </p>
    <div class="grid grid-cols-1 gap-10">
      <template v-for="(item, index) in items" :key="index">
        <div
          :class="['flex flex-row items-center', index % 2 == 0 ? 'lg:flex-row-reverse' : '']"
          class="w-full mb-10"
        >
          <div class="flex justify-center items-center w-full lg:w-1/2">
            <img
              :src="item.imgSrc"
              :alt="item.imgAlt"
              class="w-120 h-120 lg:w-400 lg:h-400 object-contain"
            />
          </div>

          <div
            class="flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 py-4 lg:w-1/2"
          >
            <h2 class="text-16 lg:text-20 font-700">
              {{ $t(item.title) }}
            </h2>
            <p class="text-14 lg:text-16 leading-20 lg:leading-24 pt-10">
              {{ item.description }}
            </p>

            <ul class="list-none mt-10">
              <li
                v-for="point in item.points"
                :key="point"
                class="text-14 lg:text-16 leading-24 lg:leading-32 flex items-start space-x-2xl"
              >
                <SvgIcon name="bullet" class="mr-8 mt-8" />
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
