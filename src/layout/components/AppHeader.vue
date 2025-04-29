<script lang="ts" setup>
import logo from '@/assets/imgs/home/logo.png'
import { NDrawer, NDrawerContent } from 'naive-ui'
import { useRouter } from 'vue-router'

const router = useRouter()

const navLinks = [
  {
    name: 'Products & Services',
    path: '/',
    children: [
      { name: 'White Label', path: '/products/whitelabel' },
      { name: 'TG Live', path: '/products/tglive' },
      { name: 'TG Sports', path: '/products/tgsports' },
    ],
  },
  { name: 'Partner', path: '/partners' },
  { name: 'Company', path: '/about-us' },
  { name: 'Contact Us', path: '/contact' },
]

const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
const showChildren = ref(false)
const toggleShowChildren = () => {
  showChildren.value = !showChildren.value
}
</script>

<template>
  <header class="sm:h-auto md:h-auto min-h-67 text-white blueGradient user-select-none">
    <nav class="main-container flex flex-wrap justify-between items-center py-4">
      <div class="p-2 sm:p-6">
        <img
          alt="Logo"
          class="h-50 w-auto sm:h-65 cursor-pointer"
          :src="logo"
          @click="router.push('/')"
        />
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
      <n-drawer v-model:show="mobileMenuOpen" placement="right">
        <n-drawer-content>
          <ul class="flex flex-col gap-4 p-2 sm:p-6">
            <li v-for="link in navLinks" :key="link.name">
              <RouterLink
                :to="link.path"
                class="text-16 sm:text-16 font-500 hover:text-primary ml-10"
                active-class="text-primary hover:text-primary font-semibold"
                @click="closeMobileMenu"
                >{{ link.name }}
              </RouterLink>
              <template v-if="link.name === 'Products & Services'">
                <li
                  v-for="(child, index) in link.children"
                  :key="index"
                  class="flex flex-col gap-4 p-2 sm:p-6"
                >
                  <div class="absolute top-20 right-10 cursor-pointer md:hidden">
                    <SvgIcon
                      name="arrow-down"
                      size="12"
                      class="transition-transform duration-300 group-hover:rotate-180"
                      :class="showChildren ? 'rotate-180' : ''"
                      color="black"
                      @click="toggleShowChildren"
                    />
                  </div>
                  <ul v-show="showChildren" class="pl-10">
                    <RouterLink
                      :to="child.path"
                      class="text-16 sm:text-16 font-500 hover:text-primary ml-10"
                      active-class="text-primary hover:text-primary font-semibold"
                      @click="closeMobileMenu"
                      >{{ child.name }}
                    </RouterLink>
                  </ul>
                </li>
              </template>
            </li>
          </ul>
        </n-drawer-content>
      </n-drawer>
      <CLanguage />
    </nav>
  </header>
</template>
