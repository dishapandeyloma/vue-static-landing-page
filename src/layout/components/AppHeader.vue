<script lang="ts" setup>
import logo from '@/assets/imgs/logo.png'
import en from '@/assets/icons/en.svg'
import zh from '@/assets/icons/zh.svg'
import { NPopover, NCheckbox } from 'naive-ui'
import i18n from '@/i18n'

const showPopover = ref(false)

const languages = [
  { name: 'English', code: 'en', icon: en },
  { name: 'Chinese ', code: 'zh', icon: zh },
]

const navLinks = [
  { name: 'Products & Services', path: '/' },
  { name: 'Partner', path: '/partners' },
  { name: 'Company', path: '/about-us' },
  { name: 'Contact Us', path: '/contact' },
]

const currentLang = ref(localStorage.getItem('app-lang') || 'en')

const changeLanguage = (lang: string) => {
  localStorage.setItem('app-lang', lang)
  i18n.global.setLocaleMessage(lang, i18n.global.getLocaleMessage(lang))
  currentLang.value = lang
  showPopover.value = false
}

const languageIcon = computed(() => {
  const selectedLanguage = languages.find((lang) => lang.code === currentLang.value)
  return selectedLanguage ? selectedLanguage.icon : ''
})

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

      <SvgIcon
        name="menu"
        class="absolute top-20 right-10 cursor-pointer md:hidden"
        @click="toggleMobileMenu"
        size="24"
      />

      <!-- Desktop menu -->
      <ul class="hidden md:flex flex-1 items-center justify-end gap-4 md:gap-10 p-2 sm:p-6">
        <li v-for="link in navLinks" :key="link.name">
          <div class="flex gap-x-10 md:gap-x-20">
            <RouterLink
              :to="link.path"
              class="text-16 sm:text-16 font-500 text-#fff hover:text-primary ml-10"
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
 

      <div class="flex items-center gap-10 p-6 mr-40 md:mr-0">
        <img :src="languageIcon" :alt="currentLang" class="w-32 h-32 ml-10" />
        <span class="cursor-pointer text-16 font-500">{{
          languages.find((lang) => lang.code === currentLang)?.name
        }}</span>
        <n-popover trigger="hover" placement="bottom-end" class="cursor-pointer">
          <template #trigger>
            <div class="group">
              <SvgIcon
                name="arrow-down"
                size="12"
                class="transition-transform duration-300 group-hover:rotate-180"
                color="#ffff"
              />
            </div>
          </template>
          <div class="flex flex-col gap-16 p-4">
            <div
              v-for="lang in languages"
              :key="lang.code"
              class="flex items-center gap-10 cursor-pointer"
            >
              <img :src="lang.icon" :alt="lang.name" class="w-24 h-24" />
              <span class="text-16 font-500">{{ lang.name }}</span>
              <n-checkbox
                :value="currentLang"
                :checked="currentLang === lang.code"
                class="ml-auto cursor-pointer"
                @update:checked="changeLanguage(lang.code)"
              ></n-checkbox>
            </div>
          </div>
        </n-popover>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
