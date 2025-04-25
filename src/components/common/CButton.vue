<script lang="ts" setup>
import { NButton } from 'naive-ui'
</script>
<template>
  <NButton
    class="w-200 h-56 goldenGradient"
    style="background: linear-gradient(180deg, #a87c25 0%, #553e12 100%)"
    :bordered="false"
    text-color="#fff"
  >
    <span class="text-16">
      <slot> </slot>
    </span>
  </NButton>
</template>
