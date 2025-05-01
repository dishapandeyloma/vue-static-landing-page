<script lang="ts" setup>
import tglive from '@/assets/imgs/products/image-1.png'
import yourCasino from '@/assets/imgs/products/image-2.png'
import userFriendly from '@/assets/imgs/products/image-3.png'
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

const features = [
  {
    icon: 'revenue',
    title: 'Live Casino Games in Telegram',
    description: `Deliver a seamless gaming experience with real-time Baccarat and Dragon Tiger
directly inside Telegram - no downloads, no delays`,
  },
  {
    icon: 'monitor-1',
    title: 'Instant Recharge & Wallet System',
    description:
      'Built-in support for online top-up and withdrawal - players can recharge their wallet instantly and keep betting without interruption',
  },
  {
    icon: 'card',
    title: 'Multi-Level Agent & Merchant Management',
    description: `Create and manage merchants, agents, and players with customized commissions, roles, and detailed performance tracking.`,
  },
  {
    icon: 'comission',
    title: 'Real-Time Betting & Result Publishing',
    description: `Players receive instant game results and can view history anytime. Admins can monitor all activity live through the dashboard`,
  },
  {
    icon: 'Powerful Backend Portal',
    title: 'Powerful Backend Portal',
    description: `Control every aspect of your operation - manage users, configure games, track earnings, set limits, and run your casino business with ease`,
  },
  {
    icon: 'monitor-2',
    title: 'Secure, Scalable, and Always On',
    description: `Encrypted transactions, cloud-based architecture, and 24/7 uptime ensure your platform is reliable, fast, and built for growth.`,
  },
]

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
  <div class="relative h-270 lg:h-530">
    <div class="absolute inset-0 bg-banner backdrop-filter blur-1.4 lg:blur-0"></div>

    <div class="main-container z-10 relative flex w-full text-#fff">
      <div class="block lg:flex-col lg:w-1/2 mt-40 text-center lg:text-left">
        <h1 class="text-24 lg:text-48 font-700 mt-10 lg:mt-20">
          Telebet Your Smart Telegram Casino Business Platform
        </h1>
        <p class="text-14 lg:text-20 font-400 mt-10 lg:mt-20 leading-24 lg:leading-36">
          Step into the booming online gaming industry with TG Baowang White Label Solution a
          complete, ready-to-go platform that lets you run your own branded casino without the
          hassle of developing software from scratch.
        </p>
      </div>
    </div>
  </div>
  <section class="main-container mt-30">
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

    <h2 class="font-700 text-18 lg:text-32 text-center mt-40 leading-42">
      Core Features of Telebet
    </h2>
    <p class="text-14 lg:text-20 font-500 leading-32 text-center">
      Your All-in-One Telegram Casino Platform Fast Setup, Full Control, Real Profits
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-36 mt-40">
      <template v-for="(item, index) in features" :key="index">
        <div
          class="f-c-c flex-col gap-2 lg:gap-10 rounded-12 shadow-[0_0_21px_1px_#0000000F] bg-white px-40 py-20 relative h-270 mt-20"
        >
          <div
            class="absolute top-10 inset-0 mx-auto -translate-y-1/2 w-100 h-100 f-c-c bg-wrap w-140 h-110"
          >
            <SvgIcon :name="item.icon" size="24" class="-mt-15" />
          </div>
          <h2 class="font-600 text-16">{{ item.title }}</h2>
          <p class="text-12 lg:text-16 font-400 leading-24">{{ item.description }}</p>
        </div>
      </template>
    </div>
    <h2 class="font-700 text-18 lg:text-32 text-center mt-40 leading-42">
      Advantages of Telebet Casino Platform
    </h2>
    <p class="text-14 lg:text-20 font-500 leading-32 text-center">
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

    <ContactUsBanner class="my-40" />
  </section>
</template>

<style lang="scss" scoped>
.bg-banner {
  background: url('@/assets/imgs/products/telebet.png') no-repeat;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  backdrop-filter: blur(14px);
}

.bg-wrap {
  background: url('@/assets/imgs/products/wrap.png') no-repeat;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
