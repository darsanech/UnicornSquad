<template>
  <div class="grid grid-cols-4 flex-wrap m-2">
    <single-squad
      v-for="(squad, index) in squadsList.army"
      :armyId="index"
      :squad="squad"
      class="m-4"
    ></single-squad>
  </div>
</template>
<script setup>
import SingleSquad from './SingleSquad.vue'
import { useSquadsStore } from '../../stores/squads.ts'
const squadsList = useSquadsStore()
</script>
