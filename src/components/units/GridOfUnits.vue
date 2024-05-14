<template>
  <div class="grid grid-cols-10 justify-around gap-2">
    <single-unit
      v-for="unit in showList"
      :unit="unit"
      @click="selectUnitToMove(unit.id, unit.name, false)"
      :showName="true"
      :merc="unitsList.mercs"
    ></single-unit>
  </div>
</template>
<script setup>
import { useUnitsStore } from '../../stores/data/unitsStore.ts'
import { useClassesStore } from '../../stores/data/classesStore.ts'
import { useMoveUnits } from '../../stores/moveUnits.ts'
import { computed } from 'vue'

import SingleUnit from './SingleUnit.vue'
const unitsList = useUnitsStore()
const classesList = useClassesStore()
const moveUnits = useMoveUnits()
function selectUnitToMove(unitId, name) {
  moveUnits.changeSelectedUnit({ id: unitId, name: name })
}
const showList = computed(() => {
  if (unitsList.mercs) {
    return classesList.mercsList
  } else {
    return unitsList.unitsFiltered
  }
})
</script>
