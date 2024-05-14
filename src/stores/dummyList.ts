import { reactive, ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { dummyData, classesData, mercData } from '@/assets/dummyListData'

export const useDummyListStore = defineStore('dummyList', () => {
  const dummies = ref(dummyData)
  const mercs = ref(mercData)
  const classes = ref(classesData)
  const filteredDummies = ref(dummyData)
  function populateList() {
    dummies.value = dummyData
  }
  function filterList(classes: [string], rapport: [string], merc: boolean) {
    /*
    la filter data sera en formato
        classes:[que clases quieres] todas las clases saldran,
        rapport:[que personajes] solo los que tengan todos los seleccionados,
        merc:bool solo merc o no
    */
    var filteredList = dummyData
    if (merc) {
      filteredList = mercData
      filteredList = filteredList.filter((unit) => unit.merc === true)
    } else if (rapport.length > 0) {
      filteredList = filteredList.filter((unit) => rapport.every((r) => unit.rapport.includes(r)))
    }
    if (classes.length > 0) {
      filteredList = filteredList.filter((unit) => classes.includes(unit.class))
    }
    filteredDummies.value = filteredList
  }
  return { dummies, mercs, filteredDummies, classes, populateList, filterList }
})
