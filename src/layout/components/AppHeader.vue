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
    <nav class="main-container f-c-b p-4 gap-x-6">
      <div class="p-6">
        <img alt="Logo" class="h-65 w-65" :src="logo" />
      </div>
      <ul class="flex-1 flex justify-end gap-10 p-6">
        <li v-for="link in navLinks" :key="link.name">
          <div class="flex gap-x-4">
            <RouterLink
              :to="link.path"
              class="text-16 font-500 text-#fff hover:text-primary"
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
      <div class="p-6">Change language</div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
