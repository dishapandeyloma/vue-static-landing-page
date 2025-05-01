<script lang="ts" setup>
const items = [
  {
    icon: 'merchant',
    title: 'Merchant & Agent Management',
    description: `Grow Your Network with Ease Onboard and manage multiple merchants and agents with individual profit-sharing settings, permissions, and reports.`,
  },
  {
    icon: 'merchant',
    title: 'All-in-One Admin Portal',
    description: `Total Control at Your Fingertips Access a robust backend where you can manage games, users, transactions, commission settings, player balances, bet history`,
  },
  {
    icon: 'merchant',
    title: 'Smart Wallet & Instant Payments',
    description: `Fast, Safe, and Seamless Payments Automated settlements - reducing manual workload and ensuring smooth financial flow across your network.`,
  },
  {
    icon: 'merchant',
    title: 'Multi-Platform Deployment',
    description: `Reach Players Everywhere Our software supports Web App, H5 (mobile browser), Android, and iOS platforms - giving your players seamless access.`,
  },
]
</script>

<template>
  <div class="mt-40">
    <h2 class="text-18 lg:text-32 font-700 text-center mt-40">
      How Our Live Casino Products Help You Run Your Business
    </h2>
    <p class="text-14 lg:text-20 font-400 text-center mt-10 lg:mt-20 leading-32">
      How Our Live Casino Products Help You Run Your Business Running a successful online gaming
      business requires more than just good games - it takes the right platform.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-24 mt-40">
      <template v-for="(item, index) in items" :key="index">
        <div
          class="f-c-c flex-col gap-2 lg:gap-10 rounded-12 shadow-[0_0_21px_1px_#0000000F] bg-white px-40 py-20 space-y-2xl"
        >
          <SvgIcon :name="item.icon" size="24" class="p-10" />

          <h2 class="font-600 text-16 leading-24">{{ item.title }}</h2>
          <p class="text-12 lg:text-16 font-400 leading-24">{{ item.description }}</p>
        </div>
      </template>
    </div>
  </div>
</template>
