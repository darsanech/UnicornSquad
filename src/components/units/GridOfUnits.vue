<template>
  <div class="grid grid-cols-4 justify-around gap-2">
    <single-unit
      v-for="dummy in dummyList.filteredDummies"
      :unit="dummy"
      @click="selectUnitToMove(dummy.id, dummy.name)"
    ></single-unit>
  </div>
</template>
<script setup>
import { useDummyListStore } from '../../stores/dummyList.ts'
import { useMoveUnits } from '../../stores/moveUnits.ts'

import SingleUnit from './SingleUnit.vue'
const dummyList = useDummyListStore()
const moveUnits = useMoveUnits()
function selectUnitToMove(unitId, name) {
  moveUnits.changeSelectedUnit({ id: unitId, name: name })
}
</script>
