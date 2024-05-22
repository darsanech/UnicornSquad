<template>
  <div v-if="visible" class="warning-box" :class="{ wBottom: bottom }">
    <button @click="exitButton" class="exit-button">X</button>
    <slot></slot>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps(['bottom'])
const visible = ref(true)
function exitButton() {
  visible.value = false
}
</script>
<style scoped>
.warning-box {
  @apply border border-4 bg-red-500 border-red-600 text-white font-bold text-center p-4 z-50 m-4;
}
.exit-button {
  @apply left-full top-0 absolute -mt-3 -ml-4 bg-red-500 border-red-800 
  border-4 border-solid rounded-full aspect-square z-10 w-8 text-black;
}
.wBottom {
  @apply w-2/4 fixed bottom-0 left-1/4;
}
</style>
