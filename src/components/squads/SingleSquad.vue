<template>
  <div class="grid grid-cols-3">
    <div
      v-for="(units, index) in squadsList.army[0]"
      class="border-2 border-black"
      @click="addToSquad(index)"
    >
      {{ units }}
    </div>
  </div>
</template>
<script setup>
import { useSquadsStore } from '../../stores/squads.ts'
const squadsList = useSquadsStore()
function addToSquad(unitId) {
  console.log(unitId)
  squadsList.addToSquad(0, unitId, unitId)
}
</script>
