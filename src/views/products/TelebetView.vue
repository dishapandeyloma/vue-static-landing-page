<script lang="ts" setup>
import tglive from '@/assets/imgs//home/tglive.png'
import yourCasino from '@/assets/imgs/products/your-casino.png'
import userFriendly from '@/assets/imgs/products/user-friendly.png'
import payment from '@/assets/imgs/products/payment.png'

const features = [
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

const items = [
  {
    imgSrc: tglive,
    imgAlt: 'White label',
    title: 'Ready-To-Go-Live Platform',
    description: `A ready-made platform with a customizable back office and website template, complete with technical support.`,
  },
  {
    imgSrc: yourCasino,
    imgAlt: 'White label',
    title: 'Your casino. Your way.',
    description:
      "The integration of TGbaowang live stream product to the user end can be integrateed into customer's existing platform through API.",
  },
  {
    imgSrc: userFriendly,
    imgAlt: 'White label',
    title: 'Work Smarter, Not Harder with our User Friendly Backend',
    description: `Provide customized game hall service according to customer requirement and tailor made unique game hall.`,
  },
  {
    imgSrc: payment,
    imgAlt: 'White label',
    title: 'Secure Payment System',
    description: `Uninterrupted Service, Always at Your Fingertips.
Our expert team ensures your website stays fully operational and optimized. No matter the time zone. TGBaowang committed to delivering fast, reliable service, keeping your business running smoothly.`,
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
          :class="[
            'flex flex-col lg:flex-row items-center',
            index % 2 !== 0 ? 'lg:flex-row-reverse' : '',
          ]"
          class="w-full mb-10"
        >
          <div class="flex justify-center items-center w-full lg:w-1/2">
            <img
              :src="item.imgSrc"
              :alt="item.imgAlt"
              class="w-240 h-240 lg:w-400 lg:h-400 object-contain"
            />
          </div>

          <div
            class="flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 py-4 w-full lg:w-1/2"
          >
            <h2 class="text-16 lg:text-20 font-700">
              {{ $t(item.title) }}
            </h2>
            <p class="text-14 lg:text-16 leading-20 lg:leading-24 pt-4">
              {{ item.description }}
            </p>
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

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 mt-40">
      <template v-for="(item, index) in features" :key="index">
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
</style>
