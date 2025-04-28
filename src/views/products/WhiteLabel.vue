<script lang="ts" setup>
import tglive from '@/assets/imgs//home/tglive.png'
import operatorAccess from '@/assets/imgs/home/operator-access.png'
import service from '@/assets/imgs/home/service.png'
import webDev from '@/assets/imgs/home/web-dev.png'
import language from '@/assets/imgs/home/language.png'

const items = [
  {
    imgSrc: tglive,
    imgAlt: 'White label',
    title: 'Ready-To-Go-Live Platform',
    description: `A ready-made platform with a customizable back office and website template, complete with technical support.`,
  },
  {
    imgSrc: operatorAccess,
    imgAlt: 'White label',
    icon: 'operator-access',
    iconAlignment: '',
    title: 'Operator Access 24/7',
    description:
      "The integration of TGbaowang live stream product to the user end can be integrateed into customer's existing platform through API.",
  },
  {
    imgSrc: service,
    imgAlt: 'White label',
    icon: 'service',
    iconAlignment: 'justify-end',
    title: 'Business Service',
    description: `Provide customized game hall service according to customer requirement and tailor made unique game hall.`,
  },
  {
    imgSrc: webDev,
    imgAlt: 'White label',
    icon: 'webdev',
    iconAlignment: '',
    title: 'Website Development',
    description: `Uninterrupted Service, Always at Your Fingertips.
Our expert team ensures your website stays fully operational and optimized. No matter the time zone. TGBaowang committed to delivering fast, reliable service, keeping your business running smoothly.`,
  },

  {
    imgSrc: language,
    imgAlt: 'White label',
    icon: 'language',
    iconAlignment: 'justify-end',
    title: 'Multi Language',
    description: 'Global play, multi-language support.',
  },
]
</script>
<template>
  <div class="relative h-270 lg:h-530">
    <div class="absolute inset-0 bg-banner backdrop-filter blur-1.3 lg:blur-0"></div>

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
    <p class="text-14 lg:text-20 font-400 text-center mt-30">
      Ways dreamed of starting your own online casino but unsure about how to handle the day-to-day?
    </p>
    <p class="text-14 lg:text-20 font-400 text-center mt-20">We'll take it from here.</p>
    <div class="f-c-c">
      <CButton class="mt-20"
        ><span class="text-18 lg:text-20 font-700 text-center">How it works</span></CButton
      >
    </div>

    <!-- flex box -->
    <div class="flex gap-20">
      <div class="f-c-c flex-1 text-center w-140 h-140 lg:w-380 lg:h-317">
        <img :src="items[0].imgSrc" :alt="items[0].imgAlt" class="w-full h-full object-contain" />
      </div>
      <div class="flex-1 flex-col justify-center">
        <h2 class="text-16 lg:text-20 font-700 mt-10 lg:mt-0">
          {{ $t(items[0].title) }}
        </h2>
        <p class="text-14 lg:text-16 leading-20 lg:leading-24 pt-8">
          {{ items[0].description }}
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.bg-banner {
  background: url('@/assets/imgs/whitelabel/whitelabel-banner.png') no-repeat;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  backdrop-filter: blur(4px);
}
</style>
