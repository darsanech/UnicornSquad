<template>
  <div class="filtros">
    <filter-list></filter-list>
  </div>
  <div class="grid grid-cols-5">
    <!-- HACER DEPENDIENDO DEL TAMAÑO DE LA PANTALLA -->
    <div class="col-span-3">
      <list-of-units></list-of-units>
    </div>
    <div class="col-span-2 relative">
      <grid-of-squads class="sticky top-36 object-none"></grid-of-squads>
    </div>
  </div>
</template>
<script setup lang="ts">
import ListOfUnits from './components/units/ListOfUnits.vue'
import FilterList from './components/filter/FilterList.vue'
import GridOfSquads from './components/squads/GridOfSquads.vue'
</script>
<style scoped>
.filtros {
  @apply sticky top-0 flex flex-col z-10;
}
</style>
