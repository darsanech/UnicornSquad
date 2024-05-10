<template>
  <div class="grid grid-cols-3 gap-2">
    <div
      v-for="(unit, index) in squad"
      class="border-2 border-black aspect-square"
      @click="addToSquad(index)"
    >
      {{ unit }}
    </div>
  </div>
</template>
<script setup>
import { useSquadsStore } from '../../stores/squads.ts'
const squadsList = useSquadsStore()
const props = defineProps(['squad', 'armyId'])

function addToSquad(unitId) {
  if (props.armyId < 0) {
    //chapuza
    return
  }
  console.log(props.armyId)
  squadsList.addToSquad(props.armyId, unitId, unitId)
}
</script>
