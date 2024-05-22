import { defineStore } from 'pinia'
import { reactive, ref, computed } from 'vue'
import { unitTemplate } from '../assets/data/unitData'

/*
Las squads estan formados por 6 unidades, cada unidad tiene una id y su pocicion
0-1-2
3-4-5
Army esta formado de 12 squads
*/

export const useSquadsStore = defineStore('squads', () => {
  const army = ref<unitTemplate[][]>(Array.from({ length: 8 }, () => []))
  function addToSquad(
    armyId: number,
    posId: number,
    unit: { unit: unitTemplate; prevIndex: number; prevSquad: number }
  ) {
    if (unit.prevIndex >= 0) {
      //el antigo al anterior
      army.value[unit.prevSquad][unit.prevIndex] = army.value[armyId][posId]
      army.value[armyId][posId] = unit.unit
    } else {
      army.value[armyId][posId] = unit.unit
    }
    localSave(armyId)
  }
  function removeFromSquad(index: number, squad: number) {
    army.value[squad][index] = new unitTemplate()
    localSave(squad)
  }
  function localSave(squad: number) {
    localStorage.setItem('squad' + squad, JSON.stringify(army.value[squad]))
  }
  function checkSavedArmy() {
    for (let i = 0; i < 12; i++) {
      const squad = localStorage.getItem('squad' + i)
      if (squad) {
        army.value[i] = JSON.parse(squad)
      } else {
        army.value[i] = [
          new unitTemplate(),
          new unitTemplate(),
          new unitTemplate(),
          new unitTemplate(),
          new unitTemplate(),
          new unitTemplate()
        ]
      }
    }
  }
  return { army, addToSquad, checkSavedArmy, removeFromSquad }
})
