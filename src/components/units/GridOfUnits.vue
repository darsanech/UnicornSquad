<template>
  <div class="grid grid-cols-4 justify-around gap-2">
    <single-unit
      v-for="unit in unitsList.unitsFiltered"
      :unit="unit"
      @click="selectUnitToMove(unit.id, unit.name)"
      :showName="true"
    ></single-unit>
  </div>
</template>
<script setup>
import { useUnitsStore } from '../../stores/data/unitsStore.ts'
import { useMoveUnits } from '../../stores/moveUnits.ts'

import SingleUnit from './SingleUnit.vue'
const unitsList = useUnitsStore()
const moveUnits = useMoveUnits()
function selectUnitToMove(unitId, name) {
  moveUnits.changeSelectedUnit({ id: unitId, name: name })
}
</script>
