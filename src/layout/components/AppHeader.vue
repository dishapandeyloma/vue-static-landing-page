<script lang="ts" setup>
import logo from '@/assets/imgs/logo.png'

const navLinks = [
  { name: 'Products & Services', path: '/' },
  { name: 'Partner', path: '/partners' },
  { name: 'Company', path: '/about-us' },
  { name: 'Contact Us', path: '/contact' },
]

const changeLanguage = (lang: string) => {
  // Implement your language change logic here
  console.log(`Language changed to: ${lang}`)
}
</script>
<template>
  <header class="blueGradient h-90 text-white">
    <nav class="main-container flex justify-between items-center p-4">
      <div class="p-6">
        <img alt="Logo" class="h-65 w-65" :src="logo" />
      </div>
      <ul class="flex space-x-4">
        <li v-for="link in navLinks" :key="link.name">
          <div>
            <RouterLink :to="link.path" class="text-16 font-500">{{ link.name }}</RouterLink>
            <div
              v-if="link.name !== navLinks[navLinks.length - 1].name"
              class="h-20 w-2 bg-#FFFFFF40 mx-2"
            ></div>
          </div>
        </li>
        <li class="flex items-center space-x-4">
          <span @click="changeLanguage('en')" class="cursor-pointer">EN</span>
          <span @click="changeLanguage('zh')" class="cursor-pointer">ZH</span>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
