<template>
  <div class="filtros">
    <filter-list></filter-list>
    <div v-if="!windowSize" class="indigo-squads-mobile">
      <grid-of-squads class="col-span-3 col-start-2"></grid-of-squads>
    </div>
  </div>
  <div v-if="windowSize" class="pc">
    <div class="col-span-3 border-indigo-300 border-r-2 pt-4">
      <list-of-units></list-of-units>
    </div>
    <div class="col-span-2 relative p-4 bg-indigo-100">
      <grid-of-squads class="sticky top-28"></grid-of-squads>
    </div>
  </div>
  <div v-else>
    <div>
      <list-of-units></list-of-units>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import ListOfUnits from './components/units/ListOfUnits.vue'
import FilterList from './components/filter/FilterList.vue'
import GridOfSquads from './components/squads/GridOfSquads.vue'
const screenWidth = ref(window.innerWidth)
const windowSize = computed(() => {
  return screenWidth.value > 1280
})
function updateScreenWidth() {
  screenWidth.value = window.innerWidth
}
onMounted(() => {
  window.addEventListener('resize', updateScreenWidth)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenWidth)
})
</script>
<style scoped>
.filtros {
  @apply sticky top-0 flex flex-col z-10 h-20;
}
.pc {
  @apply grid grid-cols-5;
}
.indigo-squads-mobile {
  @apply grid grid-cols-5 py-2 border-b-4 border-indigo-300 bg-indigo-100;
}
</style>
