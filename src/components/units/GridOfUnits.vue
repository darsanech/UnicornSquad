<template>
  <div class="grid grid-cols-8 flex-wrap gap-2">
    <single-unit
      v-for="unit in showList"
      :unit="unit"
      :key="unit.id"
      @click="selectUnitToMove(unit)"
      :showName="true"
      :merc="unitsList.mercs"
      :class="{ selected: moveUnits.unitIsSelected && unit.id === moveUnits.selectedUnitId }"
      :selected="moveUnits.unitIsSelected && unit.id === moveUnits.selectedUnitId"
    ></single-unit>
  </div>
</template>
<script setup>
import { useUnitsStore } from '../../stores/data/unitsStore.ts'
import { useClassesStore } from '../../stores/data/classesStore.ts'
import { useMoveUnits } from '../../stores/moveUnits.ts'
import { computed } from 'vue'
import { useGlobalStore } from '../../stores/globalStore.ts'

import SingleUnit from './SingleUnit.vue'
const unitsList = useUnitsStore()
const classesList = useClassesStore()
const moveUnits = useMoveUnits()
const globalParam = useGlobalStore()
function selectUnitToMove(unit) {
  if (moveUnits.selectedUnitId === unit.id) {
    moveUnits.reset()
  } else {
    moveUnits.changeSelectedUnit(unit)
  }
}
const showList = computed(() => {
  if (globalParam.mercSelected) {
    return classesList.mercsList
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
