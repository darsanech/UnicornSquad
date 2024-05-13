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
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' }
    ],
    [
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' }
    ],
    [
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' }
    ],
    [
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' }
    ],
    [
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' }
    ],
    [
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' }
    ],
    [
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' }
    ],
    [
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' }
    ],
    [
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' }
    ],
    [
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' }
    ],
    [
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' }
    ],
    [
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' },
      { id: '000', name: 'PH' }
    ]
  ])
  function addToSquad(armyId: number, unitId: string, unitName: string, posId: number) {
    army.value[armyId][posId] = { id: unitId, name: unitName }
  }
  return { army, addToSquad }
})
