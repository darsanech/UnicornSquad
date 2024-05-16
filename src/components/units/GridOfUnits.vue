<template>
  <div class="grid grid-cols-8 flex-wrap gap-2">
    <single-unit
      v-for="unit in showList"
      :unit="unit"
      @click="selectUnitToMove(unit.id, unit.name, false)"
      :showName="true"
      :merc="unitsList.mercs"
      :class="{ selected: unit.id === moveUnits.selectedUnitIdF }"
      :selected="unit.id === moveUnits.selectedUnitIdF"
    ></single-unit>
  </div>
</template>
<script setup>
import { useUnitsStore } from '../../stores/data/unitsStore.ts'
import { useClassesStore } from '../../stores/data/classesStore.ts'
import { useMoveUnits } from '../../stores/moveUnits.ts'
import { computed, ref } from 'vue'

import SingleUnit from './SingleUnit.vue'
const unitsList = useUnitsStore()
const classesList = useClassesStore()
const moveUnits = useMoveUnits()
const selectedUnit = ref(moveUnits.selectedUnitId)
function selectUnitToMove(unitId, name) {
  if (moveUnits.selectedUnitIdF === unitId) {
    moveUnits.selectUnit(-1)
    moveUnits.changeSelectedUnit({ id: -1, name: '' })
  } else {
    moveUnits.selectUnit(unitId)
    moveUnits.changeSelectedUnit({ id: unitId, name: name })
  }
}
const showList = computed(() => {
  if (unitsList.mercs) {
    return unitsList.classesFiltered
  } else {
    return unitsList.unitsFiltered
  }
})
</script>
<style scoped>
.selected {
  @apply bg-green-400;
}
</style>
