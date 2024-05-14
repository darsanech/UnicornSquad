<template>
  <div class="grid grid-cols-10 justify-around gap-2" v-if="!unitsList.mercs">
    <single-unit
      v-for="unit in unitsList.unitsFiltered"
      :unit="unit"
      @click="selectUnitToMove(unit.id, unit.name, false)"
      :showName="true"
      :merc="false"
    ></single-unit>
  </div>
  <div class="grid grid-cols-10 justify-around gap-2" v-else>
    <single-unit
      v-for="sClass in classesList.mercsList"
      :unit="sClass"
      @click="selectUnitToMove(sClass.id, sClass.name, true)"
      :showName="true"
      :merc="true"
    ></single-unit>
  </div>
</template>
<script setup>
import { useUnitsStore } from '../../stores/data/unitsStore.ts'
import { useClassesStore } from '../../stores/data/classesStore.ts'
import { useMoveUnits } from '../../stores/moveUnits.ts'

import SingleUnit from './SingleUnit.vue'
const unitsList = useUnitsStore()
const classesList = useClassesStore()
const moveUnits = useMoveUnits()
function selectUnitToMove(unitId, name) {
  moveUnits.changeSelectedUnit({ id: unitId, name: name })
}
</script>
