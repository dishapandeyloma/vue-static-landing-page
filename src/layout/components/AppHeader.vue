<script lang="ts" setup></script>
<template>
  <header class="blueGradient h-90 text-white">
    <nav class="main-container flex justify-between items-center p-4">
      <div class="logo">
        <img src="" alt="Logo" class="h-8" />
      </div>
      <ul class="flex space-x-4">
        <li><RouterLink to="/" class="hover:text-gray-300">Home</RouterLink></li>
        <li><RouterLink to="/about" class="hover:text-gray-300">About</RouterLink></li>
        <li><RouterLink to="/services" class="hover:text-gray-300">Services</RouterLink></li>
        <li><RouterLink to="/contact" class="hover:text-gray-300">Contact</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
