import { unitsData } from '@/assets/data/unitData'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
export const useUnitsStore = defineStore('unitsStore', () => {
  const units = reactive(unitsData)
  const unitsFiltered = ref(unitsData)
  const mercs = ref(false)
  const rapportFilter = ref<number[]>([])
  const classesFilter = ref<number[]>([])

  function setFilterRapport(rapport: [number]) {
    rapportFilter.value = rapport
  }
  function setFilterClasses(classes: [number]) {
    classesFilter.value = classes
  }

  function mercFilter(option: boolean) {
    mercs.value = option
  }
  function updateFilterList() {
    /*
    la filter data sera en formato
        classes:[que clases quieres] todas las clases saldran,
        rapport:[que personajes] solo los que tengan todos los seleccionados,
        merc:bool solo merc o no
    */
    var filteredList = unitsData
    if (!mercs.value && rapportFilter.value.length > 0) {
      filteredList = filteredList.filter((unit) => rapportFilter.value.includes(unit.id))
    }
    if (classesFilter.value.length > 0) {
      filteredList = filteredList.filter((unit) => classesFilter.value.includes(unit.class))
    }
    unitsFiltered.value = filteredList
  }
  return {
    units,
    unitsFiltered,
    mercs,
    updateFilterList,
    mercFilter,
    setFilterRapport,
    setFilterClasses
  }
})
