import { unitsData } from '@/assets/data/unitData'
import { classesData } from '@/assets/data/classesData'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
export const useUnitsStore = defineStore('unitsStore', () => {
  const units = reactive(unitsData)
  const unitsFiltered = ref(unitsData)
  const classesFiltered = ref(classesData)
  const mercs = ref(false)
  const rapportFilter = ref<number[]>([])
  const classesFilter = ref<number[]>([])

  function setFilterRapport(rapport: [number]) {
    rapportFilter.value = rapport
    updateFilterList()
  }
  function setFilterClasses(classes: [number]) {
    classesFilter.value = classes
    updateFilterList()
  }

  function mercFilter(option: boolean) {
    mercs.value = option
    updateFilterList()
  }
  function updateFilterList() {
    if (mercs.value) {
      var filteredListClasses = classesData
      if (classesFilter.value.length > 0) {
        filteredListClasses = filteredListClasses.filter((unit) =>
          classesFilter.value.includes(unit.id)
        )
      }
      classesFiltered.value = filteredListClasses
    } else {
      var filteredListUnits = unitsData
      if (rapportFilter.value.length > 0) {
        filteredListUnits = filteredListUnits.filter((unit) =>
          rapportFilter.value.includes(unit.id)
        )
      }
      if (classesFilter.value.length > 0) {
        filteredListUnits = filteredListUnits.filter((unit) =>
          classesFilter.value.includes(unit.class)
        )
      }
      unitsFiltered.value = filteredListUnits
    }
  }
  return {
    units,
    unitsFiltered,
    mercs,
    classesFiltered,
    updateFilterList,
    mercFilter,
    setFilterRapport,
    setFilterClasses
  }
})
