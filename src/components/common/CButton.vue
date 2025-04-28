<script lang="ts" setup>
import { NButton } from 'naive-ui'
</script>
<template>
  <NButton
    class="w-fit h-40 lg:h-56 goldenGradient box-border"
    style="background: linear-gradient(180deg, #a87c25 0%, #553e12 100%)"
    :bordered="false"
    text-color="#fff"
  >
    <slot> </slot>
  </NButton>
</template>
