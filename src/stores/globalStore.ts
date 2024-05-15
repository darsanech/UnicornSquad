import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
export const useGlobalStore = defineStore('globalStore', () => {
  const promClass = ref(false)
  function promote() {
    console.log('change')
    promClass.value = !promClass.value
    console.log(promClass.value)
  }
  const promClassC = computed(() => {
    return promClass.value
  })
  return { promClass, promote, promClassC }
})
