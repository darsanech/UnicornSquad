<template>
  <div class="grid grid-cols-3 gap-2">
    <div v-for="(unit, index) in squad" @click="addToSquadOrSwap(index, unit)">
      <single-unit
        :unit="unit"
        :squad="true"
        :showName="showName"
        class="aspect-square"
        :selected="unit.id === moveUnits.selectedUnitIdF"
      ></single-unit>
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
  } else if (unit.id > 0 && moveUnits.selectedUnitIdF === -1) {
    moveUnits.changeSquadAndIndex(index, props.armyId)
    moveUnits.changeSelectedUnit({ id: unit.id, name: unit.name })
  } else {
    moveUnits.reset()
  }
}
</script>
<style scoped></style>
