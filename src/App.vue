<template>
  <div class="filtros">
    <filter-list></filter-list>
  </div>
  <div class="flex flex-row">
    <div class="basis-2/3">
      <list-of-units></list-of-units>
    </div>
    <div class="basis-1/3">
      <grid-of-squads class="fixed"></grid-of-squads>
    </div>
  </div>
</template>
<script setup>
import ListOfUnits from './components/units/ListOfUnits.vue'
import FilterList from './components/filter/FilterList.vue'
import GridOfSquads from './components/squads/GridOfSquads.vue'
</script>
<style scoped>
.filtros {
  @apply sticky top-0 flex flex-col z-10;
}
</style>
