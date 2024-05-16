import { defineStore } from 'pinia'
import { reactive, ref, computed } from 'vue'

/*
Las squads estan formados por 6 unidades, cada unidad tiene una id y su pocicion
0-1-2
3-4-5
Army esta formado de 12 squads
*/

export const useSquadsStore = defineStore('squads', () => {
  const army = ref([
    [
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' }
    ],
    [
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' }
    ],
    [
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' }
    ],
    [
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' }
    ],
    [
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' }
    ],
    [
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' }
    ],
    [
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' }
    ],
    [
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' }
    ],
    [
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' }
    ],
    [
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' }
    ],
    [
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' }
    ],
    [
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' },
      { id: 0, name: 'PH' }
    ]
  ])
  function addToSquad(
    armyId: number,
    posId: number,
    unit: { unitId: number; name: string; prevIndex: number; prevSquad: number }
  ) {
    if (unit.prevIndex >= 0) {
      //el antigo al anterior
      army.value[unit.prevSquad][unit.prevIndex] = army.value[armyId][posId]
      army.value[armyId][posId] = { id: unit.unitId, name: unit.name }
    } else {
      army.value[armyId][posId] = { id: unit.unitId, name: unit.name }
    }
  }
  return { army, addToSquad }
})
