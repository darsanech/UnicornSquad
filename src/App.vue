<template>
  <div class="flex flex-col">
    <grid-of-squads></grid-of-squads>
    <list-of-units></list-of-units>
  </div>
</template>
<script setup>
import ListOfUnits from './components/units/ListOfUnits.vue'
import GridOfSquads from './components/squads/GridOfSquads.vue'
</script>
<style scoped></style>
