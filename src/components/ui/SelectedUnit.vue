<template>
  <slot></slot>
</template>

<script setup>
const props = defineProps(['selected'])
</script>
<style scoped>
.selected {
  @apply bg-cyan-500;
}
</style>
