import { classesData } from '../../assets/data/classesData'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
export const useClassesStore = defineStore('classesStore', () => {
  const classes = reactive(classesData)
  const mercsList = ref(classesData)
  function filterMercs(classes: [number]) {
    var mercsFiltered = classesData
    if (classes.length > 0) {
      mercsFiltered = mercsFiltered.filter((merc) => classes.includes(merc.id))
    }
    mercsList.value = mercsFiltered
  }

  return { classes, mercsList, filterMercs }
})
