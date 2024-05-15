<template>
  <div class="filtros">
    <filter-list></filter-list>
  </div>
  <div class="flex flex-row">
    <div class="basis-3/5">
      <list-of-units></list-of-units>
    </div>
    <div class="basis-2/5 relative">
      <grid-of-squads class="sticky top-36"></grid-of-squads>
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
