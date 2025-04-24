<script lang="ts" setup></script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <main class="flex-1 p-4">
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </main>
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
