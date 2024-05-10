import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useMoveUnits = defineStore('moveSquads', () => {
  const selectedUnit = reactive({ name: '', id: '' })
  function changeSelectedUnit(unit: { name: string; id: string }) {
    console.log(unit)
    selectedUnit.name = unit.name
    selectedUnit.id = unit.id
  }
  function unitIsSelected() {
    console.log('unit es selected')
    return selectedUnit.id != ''
  }
  return { selectedUnit, changeSelectedUnit, unitIsSelected }
})
