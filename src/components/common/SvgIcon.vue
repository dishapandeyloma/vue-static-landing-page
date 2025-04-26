<script lang="ts" setup>
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#333',
  },
  size: {
    type: String,
    default: '16',
  },
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <svg
    aria-hidden="true"
    class="svg-icon"
    :width="props.size"
    :color="props.color"
    :height="props.size"
  >
    <use :xlink:href="symbolId" :fill="props.color" />
  </svg>
</template>

<style lang="scss" scoped></style>
