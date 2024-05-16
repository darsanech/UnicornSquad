<template>
  <div class="grid grid-cols-3 gap-2">
    <div v-for="(unit, index) in squad" @click="addToSquad(index)">
      <single-unit
        :unit="unit"
        :squad="true"
        :showName="showName"
        class="aspect-square"
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

function addToSquad(index) {
  if (props.armyId < 0) {
    //chapuza
    return
  }
  if (moveUnits.unitIsSelected) {
    squadsList.addToSquad(props.armyId, moveUnits.selectedUnitId, moveUnits.selectedUnitName, index)
    moveUnits.selectUnit(-1)
  }
}
</script>
<style scoped></style>
