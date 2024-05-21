import { classesDataMerc, classesDataNoMerc } from '../../assets/data/classesData'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
export const useClassesStore = defineStore('classesStore', () => {
  const classes = reactive(classesDataMerc.concat(classesDataNoMerc))
  const mercsList = ref(classesDataMerc)
  function filterMercs(classes: [number]) {
    var mercsFiltered = classesDataMerc
    if (classes.length > 0) {
      mercsFiltered = mercsFiltered.filter((merc) => classes.includes(merc.id))
    }
    mercsList.value = mercsFiltered
  }

  return { classes, mercsList, filterMercs }
})
