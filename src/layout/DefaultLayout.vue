<script lang="ts" setup></script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <div class="flex-1 box-border min-h-screen">
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </div>
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
