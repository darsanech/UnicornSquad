import { classesDataMerc, classesDataNoMerc, classTemplate } from '../../assets/data/classesData'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { useGlobalStore } from '../globalStore'

export const useClassesStore = defineStore('classesStore', () => {
  const globalStore = useGlobalStore()
  const classes = reactive(classesDataMerc.concat(classesDataNoMerc).sort(compare))
  const mercsList = ref(classesDataMerc.sort(compare))
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
    mercsList.value = filteredListClasses.sort(compare)
  }
  globalStore.$subscribe((promClass, state) => {
    mercsList.value.sort(compare)
    classes.sort(compare)
  })
  function compare(a: any, b: any) {
    let comparison = 0
    if (globalStore.promClass) {
      if (
        (a.name.prom !== undefined ? a.name.prom : a.name.base) >
        (b.name.prom !== undefined ? b.name.prom : b.name.base)
      ) {
        comparison = 1
      } else if (
        (a.name.prom !== undefined ? a.name.prom : a.name.base) <
        (b.name.prom !== undefined ? b.name.prom : b.name.base)
      ) {
        comparison = -1
      }
    } else {
      if (a.name.base > b.name.base) {
        comparison = 1
      } else if (a.name.base < b.name.base) {
        comparison = -1
      }
    }

    return comparison
  }
  return { classes, mercsList, filterMercs, setFilterClasses }
})
