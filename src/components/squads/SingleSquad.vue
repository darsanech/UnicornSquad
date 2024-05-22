<template>
  <div class="grid grid-cols-3 gap-2">
    <div v-for="(unit, index) in squad" @click="addToSquadOrSwap(index, unit)">
      <single-unit
        :unit="unit"
        :squad="true"
        :showName="showName"
        class="aspect-square content-center relative"
        :selected="moveUnits.unitIsSelected && unit.id === moveUnits.selectedUnitId"
      >
        <button class="removeButton" v-if="showName" @click.stop="removeFromSquad(index)">
          🗑️
        </button>
      </single-unit>
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

function addToSquadOrSwap(index, unit) {
  if (props.armyId < 0) {
    //chapuza
    return
  }
  if (moveUnits.unitIsSelected && moveUnits.selectedUnitId != unit.id) {
    squadsList.addToSquad(props.armyId, index, moveUnits.returnUnitToMove())
    moveUnits.reset()
  } else if (unit.id > 0 && moveUnits.selectedUnitId === 0) {
    moveUnits.changeSquadAndIndex(index, props.armyId)
    moveUnits.changeSelectedUnit(unit)
  } else {
    moveUnits.reset()
  }
}
function removeFromSquad(index) {
  squadsList.removeFromSquad(index, props.armyId)
}
</script>
<style scoped>
.removeButton {
  @apply left-full top-full -mt-8 -ml-8 absolute border-black text-center
  border border-solid aspect-square z-40;
}
.removeButton:hover {
  @apply bg-red-200 border-red-500;
}
</style>
