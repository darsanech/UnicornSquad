<template>
  <div class="grid grid-cols-4 flex-wrap m-2" v-if="selectedSquad < 0">
    <single-squad
      aria-disabled="true"
      @click="selectedSquad = index"
      v-for="(squad, index) in squadsList.army"
      :armyId="-1"
      :squad="squad"
      class="m-4"
    ></single-squad>
  </div>

  <div v-else class="p-8">
    <div class="flex justify-between">
      <base-button @click="goToSquad(prevSquad)">Go to Squad {{ prevSquad }}</base-button>
      <p>Squad Number {{ selectedSquad }}</p>
      <base-button @click="goToSquad(nextSquad)">Go to Squad {{ nextSquad }}</base-button>
    </div>
    <single-squad :squad="squadsList.army[selectedSquad]" :armyId="selectedSquad"></single-squad>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import SingleSquad from './SingleSquad.vue'
import { useSquadsStore } from '../../stores/squads.ts'
const squadsList = useSquadsStore()
const selectedSquad = ref('-1')
const nextSquad = computed(() => {
  return selectedSquad.value == 11 ? 0 : selectedSquad.value + 1
})
const prevSquad = computed(() => {
  return selectedSquad.value == 0 ? 11 : selectedSquad.value
})
function goToSquad(squadId) {
  selectedSquad.value = squadId
}
</script>
