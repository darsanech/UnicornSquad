<template>
  <div class="relative inline-block">
    <div class="dropDown">
      <div v-for="filter in list" :key="filter.id" class="capitalize">
        <div class="bg-blue-200 bg-opacity-100 rounded-xl p-1">
          <input
            checked
            type="checkbox"
            :id="filter.id"
            v-model="listFilter"
            :value="filter.id"
            class="mr-1"
          />
          <label v-if="isRapport" :for="filter.id">{{ filter.name }}</label>
          <label v-else :for="filter.id">{{ filter.name.base }}</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, watch } from 'vue'
import { useUnitsStore } from '../../stores/data/unitsStore.ts'
import { useRapportsStore } from '../../stores/data/rapportsStore.ts'
import { useFiltersStore } from '../../stores/data/filtersStore.ts'

const props = defineProps(['list', 'filterMode'])
const unitsList = useUnitsStore()
const rapportsList = useRapportsStore()
const filtersList = useFiltersStore()

const listFilter = ref(filtersList.filterList(props.filterMode))

const isRapport = computed(() => {
  return props.filterMode === 'rapport'
})
function applyFilter() {
  if (props.filterMode === 'rapport') {
    const rapported = rapportsList.getUnitsWithRapport(listFilter.value)
    unitsList.setFilterRapport(rapported)
  } else {
    unitsList.setFilterClasses(listFilter.value)
  }
}
function disableRapport(unitId) {
  return isRapport && listFilter.value.length >= 5 && !listFilter.value.includes(unitId)
}
watch([listFilter], function () {
  applyFilter()
  unitsList.updateFilterList()
})
</script>
<style scoped>
.dropDown {
  @apply flex flex-wrap gap-4 p-2 justify-evenly justify-items-stretch
  border-2 border-solid border-blue-900 bg-blue-300  block absolute z-10  bg-opacity-90 rounded-xl mr-2 ml-2 mt-0;
}
</style>
