<!-- <script lang="ts" setup>
import logo from '@/assets/imgs/logo.png'

const navLinks = [
  { name: 'Products & Services', path: '/' },
  { name: 'Partner', path: '/partners' },
  { name: 'Company', path: '/about-us' },
  { name: 'Contact Us', path: '/contact' },
]

const changeLanguage = (lang: string) => {
  console.log(`Language changed to: ${lang}`)
}
</script>
<template>
  <header class="blueGradient h-90 text-white">
    <nav class="main-container f-c-b p-4 gap-x-6">
      <div class="p-6">
        <img alt="Logo" class="h-65 w-65" :src="logo" />
      </div>
      <ul class="flex-1 flex justify-end items-center gap-16 p-6">
        <template v-for="(link, index) in navLinks" :key="link.name">
          <li>
            <RouterLink
              :to="link.path"
              class="text-16 font-700 text-#fff hover:text-primary"
              active-class="text-primary hover:text-primary font-semibold"
            >
              {{ link.name }}
            </RouterLink>
          </li>
          <div v-if="index < navLinks.length - 1" class="h-20 w-2 bg-#FFFFFF40"></div>
        </template>
      </ul>
      <div class="p-6">Change language</div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style> -->

<script lang="ts" setup>
import logo from '@/assets/imgs/logo.png'
import { ref } from 'vue'

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

// Add mobile menu state
const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <header class="blueGradient h-auto min-h-90 text-white">
    <nav class="main-container flex flex-wrap justify-between items-center py-4">
      <div class="p-2 sm:p-6">
        <img alt="Logo" class="h-50 w-auto sm:h-65" :src="logo" />
      </div>

      <!-- Mobile menu button -->
      <button @click="toggleMobileMenu" class="block md:hidden p-2">
        <div class="w-6 h-0.5 bg-white mb-1.5"></div>
        <div class="w-6 h-0.5 bg-white mb-1.5"></div>
        <div class="w-6 h-0.5 bg-white"></div>
      </button>

      <!-- Desktop menu -->
      <ul class="hidden md:flex flex-1 justify-end gap-4 lg:gap-10 p-2 sm:p-6">
        <li v-for="link in navLinks" :key="link.name">
          <div class="flex gap-x-2 lg:gap-x-4">
            <RouterLink
              :to="link.path"
              class="text-14 sm:text-16 font-500 text-#fff hover:text-primary"
              active-class="text-primary hover:text-primary font-semibold"
              >{{ link.name }}
            </RouterLink>
            <div
              v-if="link.name !== navLinks[navLinks.length - 1].name"
              class="h-20 w-2 bg-#FFFFFF40"
            ></div>
          </div>
        </li>
      </ul>

      <!-- Mobile menu -->
      <div v-show="mobileMenuOpen" class="w-full md:hidden mt-4 bg-#00000080 rounded-md">
        <ul class="flex flex-col p-4">
          <li
            v-for="link in navLinks"
            :key="link.name"
            class="py-2 border-b border-#ffffff30 last:border-0"
          >
            <RouterLink
              :to="link.path"
              class="block text-16 font-500 text-#fff hover:text-primary"
              active-class="text-primary hover:text-primary font-semibold"
              >{{ link.name }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="hidden md:block p-2 sm:p-6">Change language</div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
