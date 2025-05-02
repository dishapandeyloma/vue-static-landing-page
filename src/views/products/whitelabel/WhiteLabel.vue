<script lang="ts" setup>
import tglive from '@/assets/imgs//home/tglive.png'
import yourCasino from '@/assets/imgs/products/your-casino.png'
import userFriendly from '@/assets/imgs/products/user-friendly.png'
import payment from '@/assets/imgs/products/payment.png'

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
    description: `Uninterrupted Service, Always at Your Fingertips.Our expert team ensures your website stays fully operational and optimized. No matter the time zone. TGBaowang committed to delivering fast, reliable service, keeping your business running smoothly.`,
  },
]
</script>
<template>
  <div class="relative h-270 lg:h-530">
    <div class="absolute inset-0 bg-banner backdrop-filter blur-1.4 lg:blur-0"></div>

    <div class="main-container z-10 relative flex w-full text-#fff">
      <div class="block lg:flex-col lg:w-1/2 mt-40 text-center lg:text-left">
        <h1 class="text-24 lg:text-48 font-700 mt-10 lg:mt-20">
          Launch Your Own Brand with TG Baowang White Label Solution
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
      {{ $t('Build your Own brand, Be your own boss') }}
    </h2>
    <p class="text-14 lg:text-20 font-400 text-center mt-10 lg:mt-20">
      Ways dreamed of starting your own online casino but unsure about how to handle the day-to-day?
    </p>
    <p class="text-14 lg:text-20 font-400 text-center mt-10">We'll take it from here.</p>
    <div class="f-c-c">
      <CButton class="mt-20"
        ><span class="text-18 lg:text-20 font-700 text-center">How it works</span></CButton
      >
    </div>

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

    <ContactUsBanner />
  </section>
</template>

<style lang="scss" scoped>
.bg-banner {
  background: url('@/assets/imgs/products/whitelabel-banner.png') no-repeat;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  backdrop-filter: blur(14px);
}
</style>
