import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
export const useGlobalStore = defineStore('globalStore', () => {
  const promClass = ref(false)
  const mercSelected = ref(false)
  function promote() {
    promClass.value = !promClass.value
  }
  function linkImage() {
    return promClass.value ? '-2' : '-1'
  }
  function toggleMerc() {
    mercSelected.value = !mercSelected.value
  }
  return { promClass, mercSelected, promote, linkImage, toggleMerc }
})
