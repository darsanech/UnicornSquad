import { unitsData, unitTemplate } from '../../assets/data/unitData'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
export const useUnitsStore = defineStore('unitsStore', () => {
  const units = reactive(unitsData)
  const unitsFiltered = ref(unitsData.sort(compare))
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

  function updateFilterList() {
    var filteredListUnits = unitsData
    if (rapportFilter.value.length > 0) {
      filteredListUnits = filteredListUnits.filter((unit) => rapportFilter.value.includes(unit.id))
    }
    if (classesFilter.value.length > 0) {
      filteredListUnits = filteredListUnits.filter((unit) =>
        classesFilter.value.includes(unit.class)
      )
    }
    unitsFiltered.value = filteredListUnits.sort(compare)
  }
  function compare(a: unitTemplate, b: unitTemplate) {
    let comparison = 0
    if (a.name > b.name) {
      comparison = 1
    } else if (a.name < b.name) {
      comparison = -1
    }
    return comparison
  }
  return {
    units,
    unitsFiltered,
    updateFilterList,
    setFilterRapport,
    setFilterClasses
  }
})
