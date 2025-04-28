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
    default: '#ffff',
  },
  size: {
    type: String,
    default: '24',
  },
  class: {
    type: [String, Object, Array],
    default: '',
  },
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <div class="goldenGradient w-40 lg-w-90 h-40 lg:h-90 rounded-10 f-c-c">
    <svg
      aria-hidden="true"
      class="svg-icon"
      :class="props.class"
      :width="props.size"
      :color="props.color"
      :height="props.size"
    >
      <use :xlink:href="symbolId" :fill="props.color" />
    </svg>
  </div>
</template>

<style lang="scss" scoped></style>
