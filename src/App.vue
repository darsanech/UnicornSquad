<template>
  <div class="flex flex-row">
    <list-of-units class="basis-1/2"></list-of-units>
    <grid-of-squads class="basis-1/2"></grid-of-squads>
  </div>
</template>
<script setup>
import ListOfUnits from './components/units/ListOfUnits.vue'
import GridOfSquads from './components/squads/GridOfSquads.vue'
</script>
<style scoped></style>
