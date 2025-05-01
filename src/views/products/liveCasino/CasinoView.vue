<script lang="ts" setup>
import dealer from '@/assets/imgs/products/live-casino/dealer.png'
import GameExperience from './GameExperience.vue'
import MerchantOnboarding from './MerchantOnboarding.vue'
import RunBusiness from './RunBusiness.vue'
const items = [
  {
    icon: 'revenue',
    title: 'Complete Turnkey Solution',
    description: `Everything You Need, Ready to Launch  From games to wallet systems, user roles to admin control - our platform has all the tools you need to start and run your casino business right away.`,
  },
  {
    icon: 'monitor-1',
    title: 'Multi-Level Business Model Support',
    description: `Built for Merchants & Agents ​​​​​O​ur system allows you to manage complex business structures with ease -set custom commissions, view agent activities, and grow your network without limits.`,
  },
  {
    icon: 'monitor-1',
    title: 'Powerful Backend Management',
    description: `Full Control in Your Hands Access a comprehensive portal to manage players, agents, games, transactions, performance reports, and more - all from a single dashboard.`,
  },
  {
    icon: 'monitor-1',
    title: 'Real-Time Data & Analytics',
    description: `Make Informed Decisions Stay ahead with accurate, real-time insights on user behaviour, revenue, game popularity, and conversion performance.`,
  },
  {
    icon: 'monitor-1',
    title: 'Cross-Platform Compatibility',
    description: `Reach Players on Any Device Offer your players a seamless experience across Web, H5 (mobile browser), Android, and iOS platforms - maximizing reach and engagement.`,
  },
  {
    icon: 'monitor-1',
    title: 'Secure Wallet & Instant Transactions',
    description: `Fast, Reliable Payment Flow Players can deposit, withdraw, and settle balances instantly. Automated transaction flows reduce manual work and improve trust.`,
  },
  {
    icon: 'monitor-1',
    title: 'High-Level Security & Compliance',
    description: `Deliver a seamless gaming experience with real-time Baccarat and Dragon Tiger directly inside Telegram - no downloads, no delays`,
  },
  {
    icon: 'monitor-1',
    title: 'Flexible Customization Options',
    description: `Safe for You, Safe for Your Users Built with enterprise-grade security, encryption protocols, and activity monitoring to ensure your platform stays protected 24/7.`,
  },
  {
    icon: 'monitor-1',
    title: 'Dedicated Support & Partnership Approach',
    description: `You're Not AloneOur experienced support team works closely with you - from onboarding to scaling - ensuring your journey with Live Cassino is smooth, profitable, and sustainable.`,
  },
]
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
  <section class="main-container mt-30">
    <h2 class="text-18 lg:text-32 font-700 text-center">
      {{ $t('Why Choose Us for Your Business') }}
    </h2>
    <p class="text-14 lg:text-20 font-400 text-center mt-10 lg:mt-20 leading-32">
      Your Success is Our Mission - Scalable, Secure, and Built for Real Profit With Live Cassino,
      you get more than just powerful software - you get a trusted technology partner who
      understands what it takes to grow and scale in the fast-moving iGaming world.
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 mt-40">
      <template v-for="(item, index) in items" :key="index">
        <div
          class="f-c-c flex-col gap-2 lg:gap-10 rounded-12 shadow-[0_0_21px_1px_#0000000F] bg-white px-40 py-20 space-y-2xl"
        >
          <div class="w-60 h-60 f-c-c rounded-8 shadow-[0_0_21px_1px_#0000000F]">
            <SvgIcon :name="item.icon" size="24" />
          </div>
          <h2 class="font-600 text-16">{{ item.title }}</h2>
          <p class="text-12 lg:text-16 font-400 leading-24">{{ item.description }}</p>
        </div>
      </template>
    </div>
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
