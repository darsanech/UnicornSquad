import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
export const useGlobalStore = defineStore('globalStore', () => {
  const promClass = ref(false)
  function promote() {
    promClass.value = !promClass.value
  }
  const promClassC = computed(() => {
    return promClass.value
  })
  return { promClass, promote, promClassC }
})
