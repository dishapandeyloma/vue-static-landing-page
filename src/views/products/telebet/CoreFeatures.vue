<script lang="ts" setup>
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
</script>

<template>
  <div class="mt-40">
    <h2 class="font-700 text-18 lg:text-32 text-center mt-40 leading-42">
      Core Features of Telebet
    </h2>
    <p class="text-14 lg:text-20 font-500 leading-32 mt-20 text-center">
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
  </div>
</template>

<style lang="scss" scoped>
.bg-wrap {
  background: url('@/assets/imgs/products/wrap.png') no-repeat;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
