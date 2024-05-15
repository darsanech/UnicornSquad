import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
export const useFiltersStore = defineStore('filtersStore', () => {
  const listRapportsFilter = ref([])
  const listClassesFilter = ref([])

  function filterList(option: string) {
    if (option === 'rapport') {
      return listRapportsFilter
    } else {
      return listClassesFilter
    }
  }
  function clearList(option: string) {
    if (option === 'rapport') {
      listRapportsFilter.value = []
    } else {
      listClassesFilter.value = []
    }
  }
  function listFilterSize(option: string) {
    if (option === 'rapport') {
      return listRapportsFilter.value.length
    } else {
      return listClassesFilter.value.length
    }
  }
  return { filterList, clearList, listFilterSize }
})
