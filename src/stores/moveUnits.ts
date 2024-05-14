import { defineStore } from 'pinia'
import { reactive } from 'vue'
export const useMoveUnits = defineStore('moveSquads', () => {
  const selectedUnit = reactive({ name: '', id: '' })
  function changeSelectedUnit(unit: {
    name: { base: string; prom: string } | string
    id: string
    isMerc: boolean
  }) {
    selectedUnit.id = unit.id
    if (typeof unit.name === 'string') {
      selectedUnit.name = unit.name
    } else {
      selectedUnit.name = unit.name.base
    }
  }
  function unitIsSelected() {
    return selectedUnit.id != ''
  }
  return { selectedUnit, changeSelectedUnit, unitIsSelected }
})
