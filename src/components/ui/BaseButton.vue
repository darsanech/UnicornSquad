<template>
  <button class="baseButton" :class="mode">
    <slot></slot>
  </button>
</template>
<script setup>
const props = defineProps(['mode'])
</script>
<style scoped>
.baseButton {
  @apply border-solid border-4 rounded-2xl cursor-pointer p-2;
}
button:active,
button:hover {
  @apply border-blue-500 bg-cyan-400;
}
.activated {
  @apply border-blue-700 bg-cyan-300;
}
.inactive {
  @apply border-cyan-200 bg-cyan-100;
}
button:disabled {
  @apply border-gray-300 bg-gray-200;
}
</style>
