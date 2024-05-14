import { unitsData } from '@/assets/data/unitData'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
export const useUnitsStore = defineStore('unitsStore', () => {
  const units = reactive(unitsData)
  const unitsFiltered = ref(unitsData)

  function filterList(classes: [number], rapport: [string], merc: boolean) {
    /*
    la filter data sera en formato
        classes:[que clases quieres] todas las clases saldran,
        rapport:[que personajes] solo los que tengan todos los seleccionados,
        merc:bool solo merc o no
    */
    var filteredList = unitsData
    if (rapport.length > 0) {
      console.log('Rapport')
    }
    if (classes.length > 0) {
      filteredList = filteredList.filter((unit) => classes.includes(unit.class))
    }
    console.log(filteredList)
    unitsFiltered.value = filteredList
  }

  return { units, unitsFiltered, filterList }
})
