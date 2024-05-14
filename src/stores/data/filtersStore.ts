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

  return { filterList }
})
