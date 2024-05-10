import { defineStore } from 'pinia'
import { reactive, ref, computed } from 'vue'

/*
Las squads estan formados por 6 unidades, cada unidad tiene una id y su pocicion
0-1-2
3-4-5
Army esta formado de 12 squads
*/

export const useSquadsStore = defineStore('squads', () => {
  //const army = ref(new Array(12).fill(new Array(6).fill('')))
  const army = ref([
    ['0', '0', '0', '0', '0', '0'],
    ['1', '1', '1', '1', '1', '1'],
    ['2', '2', '2', '2', '2', '2'],
    ['2', '2', '2', '2', '2', '2'],
    ['2', '2', '2', '2', '2', '2'],
    ['2', '2', '2', '2', '2', '2'],
    ['2', '2', '2', '2', '2', '2'],
    ['2', '2', '2', '2', '2', '2'],
    ['2', '2', '2', '2', '2', '2'],
    ['2', '2', '2', '2', '2', '2'],
    ['2', '2', '2', '2', '2', '2'],
    ['3', '3', '3', '3', '3', '3']
  ])
  function addToSquad(armyId: number, unitId: string, posId: number) {
    console.log()
    army.value[armyId][posId] = unitId
  }
  return { army, addToSquad }
})
