<template>
  <div>
    <div class="grid grid-cols-3 flex-wrap m-2" v-if="selectedSquad < 0">
      <single-squad
        aria-disabled="true"
        @click="selectedSquad = index"
        v-for="(squad, index) in squadsList.army"
        :armyId="-1"
        :squad="squad"
        class="m-4 cursor-pointer"
        :showName="false"
      ></single-squad>
    </div>
    <div v-else class="mr-2">
      <div class="flex flex-row justify-around mb-4">
        <base-button @click="goToSquad(prevSquad)" :mode="'small'"
          >Go to Squad {{ prevSquad }}</base-button
        >
        <base-button @click="goToSquad(-1)" :mode="'inactive'"
          ><p class="text-xl font-bold text-center">All Squads</p></base-button
        >
        <base-button @click="goToSquad(nextSquad)" :mode="'small'"
          >Go to Squad {{ nextSquad }}</base-button
        >
      </div>
      <single-squad
        :squad="squadsList.army[selectedSquad]"
        :armyId="selectedSquad"
        :showName="true"
      ></single-squad>
      <div class="text-center mt-2">
        <p class="squad-name">Squad number {{ selectedSquad }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import BaseButton from '../ui/BaseButton.vue'
import { ref, computed } from 'vue'
import SingleSquad from './SingleSquad.vue'
import { useSquadsStore } from '../../stores/squads.ts'
const squadsList = useSquadsStore()
const selectedSquad = ref('-1')
const nextSquad = computed(() => {
  return selectedSquad.value == 11 ? 0 : selectedSquad.value + 1
})
const prevSquad = computed(() => {
  return selectedSquad.value == 0 ? 11 : selectedSquad.value - 1
})
function goToSquad(squadId) {
  selectedSquad.value = squadId
}
</script>
<style scoped>
.squad-name {
  @apply inline-block font-bold  border border-indigo-300 bg-indigo-50 rounded-lg p-2;
}
</style>
