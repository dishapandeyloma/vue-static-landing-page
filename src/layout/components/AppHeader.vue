<script lang="ts" setup>
import logo from '@/assets/imgs/logo.png'
const navLinks = [
  { name: 'Products & Services', path: '/' },
  { name: 'Partner', path: '/partners' },
  { name: 'Company', path: '/about-us' },
  { name: 'Contact Us', path: '/contact' },
]

const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <header class="sm:h-auto md:h-auto min-h-67 text-white blueGradient user-select-none">
    <nav class="main-container flex flex-wrap justify-between items-center py-4">
      <div class="p-2 sm:p-6">
        <img alt="Logo" class="h-50 w-auto sm:h-65" :src="logo" />
      </div>

      <SvgIcon name="menu" class="absolute top-20 right-10 cursor-pointer md:hidden" @click="toggleMobileMenu"
        size="24" />

      <!-- Desktop menu -->
      <ul class="hidden md:flex flex-1 items-center justify-end gap-4 md:gap-10 p-2 sm:p-6">


        <li v-for="link in navLinks" :key="link.name">
          <div class="flex gap-x-10 md:gap-x-20">
            <RouterLink :to="link.path" class="text-16 sm:text-16 font-500 text-#fff hover:text-primary ml-10"
              active-class="text-primary hover:text-primary font-semibold">{{ link.name }}
            </RouterLink>
            <div v-if="link.name !== navLinks[navLinks.length - 1].name" class="h-20 w-2 bg-#FFFFFF40"></div>
          </div>
        </li>
      </ul>

      <!-- Mobile menu -->

      <CLanguage />
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
