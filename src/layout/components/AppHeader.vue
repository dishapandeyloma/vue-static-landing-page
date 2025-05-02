<script lang="ts" setup>
import logo from '@/assets/imgs/home/logo.png'
import { NDrawer, NDrawerContent, NDropdown, NCollapse, NCollapseItem } from 'naive-ui'
import { useRouter, useRoute } from 'vue-router'
import { h } from 'vue'

const router = useRouter()
const route = useRoute()

const navLinks = [
  {
    key: 'products',
    name: 'Products & Services',
    path: '/products',
    children: [
      { name: 'White Label', path: '/products/whitelabel' },
      { name: 'Live Casino', path: '/products/live-casino' },
      { name: 'Telebet', path: '/products/telebet' },
    ],
  },
  { key: 'partner', name: 'Partner', path: '/partners' },
  { key: 'aboutus', name: 'Company', path: '/about-us' },
  { key: 'contactus', name: 'Contact Us', path: '/contact' },
]

const productLink = navLinks.find((link) => link.key === 'products')

const options = (productLink?.children || []).map((child) => ({
  label: child.name,
  key: child.path,
  render: () =>
    renderDropdownLabel({
      label: child.name,
      key: child.path,
    }),
}))

const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const expandedNames = computed(() => {
  if (isProductChild.value) {
    return ['products']
  }
  return []
})

const isProductChild = computed(() => {
  const currentPath = route.path
  const productChildren = navLinks.find((link) => link.key === 'products')?.children || []
  return productChildren.some((child) => currentPath.startsWith(child.path))
})

// Check if menu item is active
const isMenuItemActive = (link: (typeof navLinks)[number]) => {
  if (link.children) {
    return isProductChild.value
  }
  return route.path === link.path
}

const handleSelect = (key: string) => {
  router.push(key)
}

const renderDropdownLabel = (option: Record<string, string>) => {
  if (route.path.startsWith(option.key)) {
    return h(
      'span',
      {
        class: 'text-primary font-semibold',
      },
      { default: () => option.label },
    )
  }
  return option.label
}

const navigateMobile = (path: string) => {
  router.push(path)
  closeMobileMenu()
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
        <li v-for="link in navLinks" :key="link.key">
          <div class="flex gap-x-10 md:gap-x-20">
            <!-- Products dropdown for desktop -->
            <template v-if="link.key === 'products'">
              <n-dropdown
                trigger="hover"
                :options="options"
                @select="handleSelect"
                placement="bottom-start"
              >
                <div
                  class="px-8 text-16 sm:text-16 font-500 hover:text-primary ml-10 cursor-pointer"
                  :class="{ 'text-primary font-semibold': isMenuItemActive(link) }"
                >
                  {{ link.name }}
                  <SvgIcon
                    name="arrow-down"
                    size="12"
                    class="ml-6 transition-transform duration-300 group-hover:rotate-180"
                    color="#ffff"
                  />
                </div>
              </n-dropdown>
            </template>
            <!-- Regular menu items -->
            <RouterLink
              v-else
              :to="link.path"
              class="text-16 sm:text-16 font-500 text-#fff hover:text-primary ml-10"
              active-class="text-primary hover:text-primary font-semibold"
            >
              {{ link.name }}
            </RouterLink>
            <div
              v-if="link.name !== navLinks[navLinks.length - 1].name"
              class="h-20 w-2 bg-#FFFFFF40"
            ></div>
          </div>
        </li>
      </ul>

      <!-- Mobile menu -->
      <n-drawer v-model:show="mobileMenuOpen" placement="right" class="!w-100%">
        <n-drawer-content>
          <SvgIcon name="cross" color="#000" class="float-end" @click="closeMobileMenu" />
          <ul class="flex flex-col gap-4 p-10 mt-10">
            <li v-for="link in navLinks" :key="link.key">
              <template v-if="link.key === 'products'">
                <n-collapse :default-expanded-names="expandedNames" arrow-placement="right">
                  <n-collapse-item name="products">
                    <template #header>
                      <div
                        class="text-16 sm:text-16 font-500 text-#000"
                        :class="{ 'text-primary font-semibold': isMenuItemActive(link) }"
                      >
                        {{ link.name }}
                      </div>
                    </template>
                    <ul class="flex flex-col gap-4 p-2 ml-4">
                      <li v-for="(child, index) in link.children" :key="index">
                        <div
                          class="text-16 sm:text-16 font-500 text-#000 cursor-pointer"
                          :class="{ 'text-primary font-semibold': route.path === child.path }"
                          @click="navigateMobile(child.path)"
                        >
                          {{ child.name }}
                        </div>
                      </li>
                    </ul>
                  </n-collapse-item>
                </n-collapse>
              </template>

              <div
                v-else
                class="text-16 sm:text-16 font-500 text-#000 hover:text-primary cursor-pointer"
                :class="{ 'text-primary font-semibold': route.path === link.path }"
                @click="navigateMobile(link.path)"
              >
                {{ link.name }}
              </div>
            </li>
          </ul>
        </n-drawer-content>
      </n-drawer>
      <CLanguage />
    </nav>
  </header>
</template>

<style lang="scss" scoped>
:deep(
  .n-collapse .n-collapse-item .n-collapse-item__content-wrapper .n-collapse-item__content-inner
) {
  padding-top: 0 !important;
}
</style>
