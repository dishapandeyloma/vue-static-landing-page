<script lang="ts" setup>
import banner from '@/assets/imgs/partner/banner.png'
import merchant from '@/assets/imgs/partner/merchant.png'
import agent from '@/assets/imgs/partner/agent.png'
import affialtion from '@/assets/imgs/partner/affialtion.png'
import { getAssetsFile } from '@/utils/common'
const modes = [
  {
    icon: merchant,
    title: 'Merchants',
    description: `Launch and operate your own gaming network with full control.`,
  },
  {
    icon: agent,
    title: 'Agents  ',
    description: 'Build your down line, earn commissions, and grow your brand.',
  },
  {
    icon: affialtion,
    title: 'Affiliates/Promoters',
    description: `Drive traffic and get rewarded with real-time payouts.`,
  },
]
const items = [
  {
    icon: 'revenue',
    title: 'Scalable Business Model',
    description: `From individuals to enterprise-level merchants - our system supports flexible structures to grow your network without limits.`,
  },
  {
    icon: 'monitor-1',
    title: 'Advanced Back Office Tools  ',
    description:
      'Manage members, monitor transactions, and generate reports with an intuitive admin dashboard that works on any device.',
  },
  {
    icon: 'card',
    title: 'Full-Featured Game Platform',
    description: `Offer popular games like Baccarat, Dragon Tiger, slots, and more — all hosted and updated by us. Just plug in and earn.`,
  },
  {
    icon: 'comission',
    title: 'Transparent Commission System',
    description: `Customizable commission structures ensure fair revenue sharing and accurate settlement for every role in your network.`,
  },
  {
    icon: 'data-transfer',
    title: 'Multi-Platform Access',
    description: `Support for Web App, H5, Android, and iOS — give your users the freedom to play anytime, anywhere.`,
  },
  {
    icon: 'monitor-2',
    title: 'White Label & Branding Options',
    description: `Create your own identity with branded themes, domains, and customized UI to reflect your business vision.`,
  },
]
</script>

<template>
  <div class="relative h-270 lg:h-530 bg-#F5F8FF">
    <div class="main-container h-full f-c-b">
      <div class="flex-col gap-2 lg:gap-10">
        <span class="text-14 lg:text-16 font-400 gradient-gold-text">CLIENTS & PROVIDERS</span>
        <h2 class="font-700 text-18 lg:text-32">Our Partners</h2>
        <p class="text-12 lg:text-16 font-400 leading-20 lg:leading-24 lg:max-w-500 mx-auto">
          Unlock new opportunities with powerful partnerships designed to drive innovation and
          maximize your competitive edge. Join a network committed to mutual growth and success.
        </p>

        <CButton class="mt-4 lg:mt-10"
          ><span class="text-14 lg:text-20 font-700 text-center">Get started</span></CButton
        >
      </div>
      <img class="w-160 h-160 lg:w-480 lg:h-500 md:w-240 md:h-240" :src="banner" alt="Banner" />
    </div>
  </div>
  <div class="main-container">
    <section class="flex flex-col gap-2 lg:gap-10 mt-40 space-y-20">
      <h2 class="font-700 text-18 lg:text-32 text-center mt-40">Partner with TG Baowang</h2>
      <p class="text-12 lg:text-16 font-400 leading-24 text-center">
        Join a Thriving Network of Trusted Gaming Professionals At TG Baowang, we’re more than just
        a gaming platform - we’re a rapidly growing ecosystem built for opportunity, scalability,
        and shared success.
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 mt-40">
        <template v-for="(item, index) in modes" :key="index">
          <div
            class="f-c-c flex-col gap-2 lg:gap-10 rounded-12 shadow-[0_0_21px_1px_#0000000F] bg-white px-40 py-20 space-y-2xl"
          >
            <img :src="item.icon" alt="" class="w-40 h-40 lg:w-50 lg:h-50" />
            <h2 class="font-600 text-16">{{ item.title }}</h2>
            <p class="text-12 lg:text-16 font-400 leading-24">{{ item.description }}</p>
          </div>
        </template>
      </div>
    </section>
    <section class="flex flex-col gap-2 lg:gap-10 mt-40 space-y-20">
      <h2 class="font-700 text-18 lg:text-32 text-center mt-40 leading-42">
        Why Partner with TG Baowang?
      </h2>
      <p class="text-14 lg:text-20 font-500 leading-32 text-center">
        TG Baowang empowers partners with a powerful, ready-to-scale gaming platform, offering high
        earning potential, full system control, and 24/7 support.
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
    </section>
    <section class="main-container flex flex-col gap-2 mt-40">
      <h2 class="font-700 text-18 lg:text-32 text-center mt-40 leading-42">Game Providers</h2>
      <div class="grid grid-cols-3 lg:grid-cols-4 gap-16 lg:gap-20 mt-40">
        <template v-for="(_, index) in 10" :key="index">
          <div
            class="rounded-12 f-c-c shadow-[0_0_21px_1px_#0000000F] w-full bg-#E4E4E4 h-45 md:h-80 lg:h-100"
          >
            <img
              :src="getAssetsFile(`imgs/partner/partner-${index + 1}.png`)"
              loading="lazy"
              class="max-w-full max-h-full object-contain p-4"
              alt=""
            />
          </div>
        </template>
      </div>
    </section>
    <ContactUsBanner class="mt-40" />
  </div>
</template>

<style lang="scss" scoped></style>
