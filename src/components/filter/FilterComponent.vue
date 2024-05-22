<template>
  <div class="relative inline-block">
    <div class="dropDown">
      <div v-for="filter in list" :key="filter.id" class="capitalize">
        <div class="bg-blue-100 bg-opacity-100 rounded-xl p-1 border border-indigo-300">
          <input
            checked
            type="checkbox"
            :id="filter.id"
            v-model="listFilter"
            :value="filter.id"
            class="mr-1"
          />
          <label v-if="isRapport" :for="filter.id">{{ filter.name }}</label>
          <label
            v-else-if="!globalParam.promClass || filter.name.prom === undefined"
            :for="filter.id"
            >{{ filter.name.base }}</label
          >
          <label v-else :for="filter.id">{{ filter.name.prom }}</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, watch } from 'vue'
import { useUnitsStore } from '../../stores/data/unitsStore.ts'
import { useClassesStore } from '../../stores/data/classesStore.ts'
import { useRapportsStore } from '../../stores/data/rapportsStore.ts'
import { useFiltersStore } from '../../stores/data/filtersStore.ts'
import { useGlobalStore } from '../../stores/globalStore.ts'

const props = defineProps(['list', 'filterMode'])
const unitsList = useUnitsStore()
const classesList = useClassesStore()
const rapportsList = useRapportsStore()
const filtersList = useFiltersStore()
const globalParam = useGlobalStore()

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
    classesList.setFilterClasses(listFilter.value)
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
  @apply flex flex-wrap gap-4 p-2 
  border-2 border-t-0 border-solid border-indigo-300 bg-indigo-200  absolute bg-opacity-90 rounded-xl rounded-t-none mx-6 mt-0;
}
</style>
