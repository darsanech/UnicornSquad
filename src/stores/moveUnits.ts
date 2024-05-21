import { defineStore } from 'pinia'
import { reactive, ref, computed } from 'vue'
import { unitTemplate } from '../assets/data/unitData'

export const useMoveUnits = defineStore('moveSquads', () => {
  const selectedSquad = ref(-1)
  const selectedIndex = ref(-1)
  const unitIsSelected = ref(false)
  const selectedUnit = ref(new unitTemplate())

  function changeSquadAndIndex(index: number, squad: number) {
    selectedSquad.value = squad
    selectedIndex.value = index
  }
  function reset() {
    UnselectUnit()
    selectedIndex.value = -1
    selectedSquad.value = -1
  }
  function changeSelectedUnit(unit: unitTemplate) {
    unitIsSelected.value = true
    selectedUnit.value = unit
  }
  function UnselectUnit() {
    unitIsSelected.value = false
    selectedUnit.value = new unitTemplate()
  }
  const selectedUnitId = computed(() => {
    return selectedUnit.value.id
  })
  function returnUnitToMove() {
    return {
      unit: selectedUnit.value,
      prevSquad: selectedSquad.value,
      prevIndex: selectedIndex.value
    }
  }
  return {
    selectedUnit,
    selectedUnitId,
    changeSelectedUnit,
    changeSquadAndIndex,
    unitIsSelected,
    returnUnitToMove,
    reset
  }
})
