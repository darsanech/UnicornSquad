<template>
  <button class="baseButton relative" :class="mode">
    <div v-if="addOn > 0" class="numberOfFilters">{{ addOn }}</div>
    <slot></slot>
  </button>
</template>
<script setup>
const props = defineProps(['mode', 'addOn'])
</script>
<style scoped>
.baseButton {
  @apply border-solid border-4 rounded-2xl cursor-pointer p-2;
}
button:hover {
  @apply border-indigo-700 bg-blue-300;
}
.activated {
  @apply border-indigo-800 bg-blue-400;
}
.inactive {
  @apply border-indigo-600 bg-blue-200;
}
button:disabled {
  @apply border-gray-300 bg-gray-200;
}
.small {
  @apply border-red-400 bg-red-100 text-xs font-bold text-center;
}
.small:hover,
.smallActive:hover {
  @apply border-red-500 bg-red-200 text-xs font-bold text-center;
}
.smallActive {
  @apply border-rose-600 bg-red-300 text-xs font-bold text-center;
}
.numberOfFilters {
  @apply left-0 top-0 absolute -mt-3 -ml-4 bg-green-100 border-green-500 
  border-2 border-solid rounded-full aspect-square z-10 w-8;
}
</style>
