import { reactive, ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { dummyData } from '@/assets/dummyListData'

export const useDummyListStore = defineStore('dummyList', () => {
  const dummies = ref(dummyData)
  function populateList() {
    dummies.value = dummyData
  }
  function filterList(classes: [String], rapport: [String], merc: boolean) {
    /*
    la filter data sera en formato
        classes:[que clases quieres] todas las clases saldran,
        rapport:[que personajes] solo los que tengan todos los seleccionados,
        merc:bool solo merc o no
    */
    console.log('aqui' + merc)

    var filteredList = dummyData
    if (merc) {
      console.log('MERC')
      filteredList = filteredList.filter((unit) => unit.merc === true)
    } else if (rapport != null) {
      filteredList = filteredList.filter((unit) => unit.rapport.every((r) => rapport.includes(r)))
    }
    if (classes != null) {
      filteredList = filteredList.filter((unit) => unit.class in classes)
    }
    console.log('filteredList:')

    console.log(filteredList)
    dummies.value = filteredList
  }
  return { dummies, populateList, filterList }
})
