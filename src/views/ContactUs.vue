<script lang="ts" setup>
import contact1 from '@/assets/imgs/contact/contact-1.png'
import contact2 from '@/assets/imgs/contact/contact-2.png'
import contact3 from '@/assets/imgs/contact/contact-3.png'
const contacts = [
  {
    img: contact1,
    name: 'TGBaowang',
    role: 'Official Business Development',
    telegram: '@TGBaowangBD1',
    url: 'https://t.me/TGBaowangBD1',
  },
  {
    img: contact2,
    name: 'Nani',
    role: 'Affiliate Agent',
    telegram: '@TGBaowangBD2',
    url: 'https://t.me/TGbaowang888',
  },
  {
    img: contact3,
    name: 'Anna Lee',
    role: 'Official Channel',
    telegram: '@TGBaowangBD1',
    url: 'https://t.me/TGBaowangOfficial',
  },
]
</script>

<template>
  <section class="main-container">
    <h1 class="text-18 lg:text-32 text-center font-700 my-20 lg:my-40">Contact Us</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center">
      <template v-for="(items, index) in contacts" :key="index">
        <div
          class="f-c-c flex-col bg-[#0000000A] rounded-16 shadow-sm rounded-8 max-w-350 w-full p-20 mx-auto space-y-16"
        >
          <img :src="items.img" alt="QR Code" class="w-full max-w-150" />

          <h3 class="font-semibold text-16">{{ items.name }}</h3>
          <p class="text-16">{{ items.role }}</p>
          <CButton class="rounded-10 w-fit !lg:h-40">
            <template #icon>
              <SvgIcon name="telegram" size="20" />
            </template>
            <span class="text-14 lg:text-16 font-400 text-center">{{
              items.telegram
            }}</span></CButton
          >
        </div>
      </template>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
