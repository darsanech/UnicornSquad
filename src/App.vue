<template>
  <div class="filtros">
    <filter-list></filter-list>
    <div v-if="!windowSize" class="grid grid-cols-5">
      <grid-of-squads class="col-span-3 col-start-2 mt-4"></grid-of-squads>
    </div>
  </div>
  <div v-if="windowSize" class="pc">
    <div class="col-span-3">
      <list-of-units></list-of-units>
    </div>
    <div class="col-span-2 relative">
      <grid-of-squads class="sticky top-36 object-none"></grid-of-squads>
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
const screenWidth = ref(0)
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
  @apply sticky top-0 flex flex-col z-10;
}
.pc {
  @apply grid grid-cols-5;
}
</style>
