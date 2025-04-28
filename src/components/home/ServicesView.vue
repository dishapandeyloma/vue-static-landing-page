<script lang="ts" setup>
import accessApi from '@/assets/imgs/access-api.png'
import operatorAccess from '@/assets/imgs/operator-access.png'
import service from '@/assets/imgs/service.png'
import webDev from '@/assets/imgs/web-dev.png'
import language from '@/assets/imgs/language.png'

const items = [
  {
    imgSrc: accessApi,
    imgAlt: 'White label',
    icon: 'api',
    iconAlignment: 'justify-end',
    title: 'Access API 24/7',
    description: `24/7 access guarantees the stable operation of the operator throughout the year.  `,
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
  <section class="main-container mt-100">
    <h2 class="text-18 lg:text-32 font-700 text-center">{{ $t('services') }}</h2>
    <p class="text-14 lg:text-20 font-400 text-center mt-30">
      {{ $t('TGBaowang Gaming is bringing online gaming technology and') }}
    </p>
    <p class="text-14 lg:text-20 font-400 text-center mt-10">
      {{ $t('solutions to meet every aspect of your business.') }}
    </p>
    <p class="text-14 lg:text-20 font-400 text-center mt-20 leading-20">
      {{ $t(`We are not only support your company's success, we focus on value.`) }}
    </p>

    <div class="grid grid-cols-2 gap-4 lg:gap-24 p-4 pt-20 lg:pt-0 lg:p-40">
      <template v-for="(item, index) in items" :key="index">
        <template v-if="index % 2 === 0">
          <img :src="item.imgSrc" :alt="item.imgAlt" class="w-140 lg:w-300 h-140 lg:h-300" />
          <div class="flex-col lg:flex-row lg:items-center">
            <div class="flex" :class="item.iconAlignment">
              <CIcon :name="item.icon" class="p-4 lg:p-0" size="60" />
            </div>
            <div class="flex-1">
              <div class="flex flex-col px-4 lg:px-10">
                <h2 class="text-16 lg:text-20 font-700 mt-10 lg:mt-0">{{ $t(item.title) }}</h2>
                <p class="text-14 lg:text-16 leading-20 lg:leading-24 pt-8">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="flex-col lg:flex-row lg:items-center">
            <div class="flex" :class="item.iconAlignment">
              <CIcon :name="item.icon" class="p-4 lg:p-0" size="60" />
            </div>
            <div class="flex-1">
              <div class="flex flex-col px-4 lg:px-10">
                <h2 class="text-16 lg:text-20 font-700 mt-10 lg:mt-0">{{ $t(item.title) }}</h2>
                <p class="text-14 lg:text-16 leading-20 lg:leading-24 pt-8">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
          <img :src="item.imgSrc" :alt="item.imgAlt" class="w-140 lg:w-300 h-140 lg:h-300" />
        </template>
      </template>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
