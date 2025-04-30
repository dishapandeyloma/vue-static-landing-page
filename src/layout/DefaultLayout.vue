<script lang="ts" setup>
import { NBackTop } from 'naive-ui'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <div class="flex-1 box-border">
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </div>
    <n-back-top
      :right="20"
      :bottom="50"
      :style="{
        transition: 'all .3s cubic-bezier(.4, 0, .2, 1)',
      }"
    >
      <div class="rounded-full goldenGradient w-60 h-60 f-c-c p-4">
        <SvgIcon name="backtop" class="w-24 h-24" />
      </div>
    </n-back-top>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
