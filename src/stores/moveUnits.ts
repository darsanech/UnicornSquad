import { defineStore } from 'pinia'
import { reactive, ref, computed } from 'vue'

export const useMoveUnits = defineStore('moveSquads', () => {
  const selectedUnitId = ref(-1)
  const selectedUnitName = ref('')
  const selectedSquad = ref(-1)
  const selectedIndex = ref(-1)

  function changeSquadAndIndex(index: number, squad: number) {
    selectedSquad.value = squad
    selectedIndex.value = index
  }
  function reset() {
    selectedIndex.value = -1
    selectedSquad.value = -1
    selectedUnitId.value = -1
  }
  function changeSelectedUnit(unit: { name: { base: string; prom: string } | string; id: number }) {
    selectedUnitId.value = unit.id
    if (typeof unit.name === 'string') {
      selectedUnitName.value = unit.name
    } else {
      selectedUnitName.value = unit.name.base
    }
  }
  const unitIsSelected = computed(() => {
    return selectedUnitId.value != -1
  })
  function selectUnit(unitId: number) {
    selectedUnitId.value = unitId
  }
  const selectedUnitIdF = computed(() => {
    return selectedUnitId.value
  })
  function returnUnitToMove() {
    return {
      unitId: selectedUnitId.value,
      name: selectedUnitName.value,
      prevSquad: selectedSquad.value,
      prevIndex: selectedIndex.value
    }
  }
  return {
    selectedUnitId,
    selectedUnitName,
    changeSelectedUnit,
    changeSquadAndIndex,
    unitIsSelected,
    selectedUnitIdF,
    selectUnit,
    returnUnitToMove,
    reset
  }
})
