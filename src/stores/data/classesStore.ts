import { classesDataMerc, classesDataNoMerc } from '../../assets/data/classesData'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
export const useClassesStore = defineStore('classesStore', () => {
  const classes = reactive(classesDataMerc.concat(classesDataNoMerc))
  const mercsList = ref(classesDataMerc)
  const classesFilter = ref<number[]>([])
  function setFilterClasses(classes: [number]) {
    classesFilter.value = classes
    updateFilterList()
  }
  function filterMercs(classes: [number]) {
    var mercsFiltered = classesDataMerc
    if (classes.length > 0) {
      mercsFiltered = mercsFiltered.filter((merc) => classes.includes(merc.id))
    }
    mercsList.value = mercsFiltered
  }
  function updateFilterList() {
    var filteredListClasses = classesDataMerc
    if (classesFilter.value.length > 0) {
      filteredListClasses = filteredListClasses.filter((unit) =>
        classesFilter.value.includes(unit.id)
      )
    }
    mercsList.value = filteredListClasses
  }
  return { classes, mercsList, filterMercs, setFilterClasses }
})
