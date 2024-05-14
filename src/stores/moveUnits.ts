import { defineStore } from 'pinia'
import { reactive, ref, computed } from 'vue'
export const useMoveUnits = defineStore('moveSquads', () => {
  const selectedUnitId = ref(-1)
  const selectedUnitName = ref('')

  function changeSelectedUnit(unit: {
    name: { base: string; prom: string } | string
    id: number
    isMerc: boolean
  }) {
    console.log('changeSelectedUnit')

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
    console.log('selectUnit ' + unitId)

    selectedUnitId.value = unitId
  }
  const selectedUnitIdF = computed(() => {
    return selectedUnitId.value
  })
  return {
    selectedUnitId,
    selectedUnitName,
    changeSelectedUnit,
    unitIsSelected,
    selectedUnitIdF,
    selectUnit
  }
})
