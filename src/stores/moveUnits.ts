import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useMoveUnits = defineStore('moveSquads', () => {
  const selectedUnit = reactive({ name: '', id: '' })
  function changeSelectedUnit(unit: { name: string; id: string }) {
    selectedUnit.name = unit.name
    selectedUnit.id = unit.id
  }
  function unitIsSelected() {
    return selectedUnit.id != ''
  }
  return { selectedUnit, changeSelectedUnit, unitIsSelected }
})
