<template>
  <div class="grid grid-cols-3 gap-2">
    <div
      v-for="(unit, index) in squad"
      class="border-2 border-black aspect-square"
      @click="addToSquad(index)"
    >
      <single-unit :unit="unit" :showName="showName"></single-unit>
    </div>
  </div>
</template>
<script setup>
import { useSquadsStore } from '../../stores/squads.ts'
import { useMoveUnits } from '../../stores/moveUnits.ts'
import SingleUnit from '../units/SingleUnit.vue'

const squadsList = useSquadsStore()
const moveUnits = useMoveUnits()
const props = defineProps(['squad', 'armyId', 'showName'])

function addToSquad(index) {
  if (props.armyId < 0) {
    //chapuza
    return
  }
  if (moveUnits.unitIsSelected) {
    squadsList.addToSquad(
      props.armyId,
      moveUnits.selectedUnit.id,
      moveUnits.selectedUnit.name,
      index
    )
  }
}
</script>
