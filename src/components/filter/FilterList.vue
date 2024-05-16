<template>
  <div class="filtro flex flex-row gap-2 justify-between">
    <div class="m-4">
      <base-button
        :mode="buttonIsSelected('rapport')"
        :disabled="mercFilter"
        :addOn="getListFilterSize('rapport')"
        @click="selectDropDown('rapport')"
      >
        <p class="text-xl font-bold text-center">Rapport</p>
      </base-button>
      <base-button @click="clearListButton('rapport')" :mode="'small'">
        <p>Clear</p>
      </base-button>
    </div>
    <div class="m-4">
      <base-button
        :mode="buttonIsSelected('class')"
        @click="selectDropDown('class')"
        :addOn="getListFilterSize('class')"
      >
        <p class="text-xl font-bold text-center">Classes</p>
      </base-button>
      <base-button @click="clearListButton('class')" :mode="'small'">
        <p>Clear</p>
      </base-button>
    </div>

    <div class="m-4">
      <base-button :mode="buttonIsSelected('merc')" @click="selectMerc">
        <p class="text-xl font-bold text-center">Mercenaries</p>
      </base-button>
      <base-button :mode="isPromoted()" @click="promote()">
        <p>Promote</p>
      </base-button>
    </div>
  </div>
  <filter-component
    class="dropdown"
    @mouseover="hoveringDropDown"
    @mouseleave="leavingDropDown"
    v-if="showClassesFilter != 'none'"
    :list="showList"
    :filterMode="showClassesFilter"
  ></filter-component>
</template>
<script setup>
import { ref, watch, computed } from 'vue'
import BaseButton from '../ui/BaseButton.vue'
import { useGlobalStore } from '../../stores/globalStore.ts'
import { useUnitsStore } from '../../stores/data/unitsStore.ts'
import { useClassesStore } from '../../stores/data/classesStore.ts'
import { useFiltersStore } from '../../stores/data/filtersStore.ts'

import FilterComponent from './FilterComponent.vue'

const unitsList = useUnitsStore()
const classesList = useClassesStore()
const filtersList = useFiltersStore()
const globalParam = useGlobalStore()

const rapportFilter = ref([])
const showClassesFilter = ref('none')
const mercFilter = ref(false)
var hoverDropDrown = false
function buttonIsSelected(option) {
  if (option === 'merc') {
    return mercFilter.value ? 'activated' : 'inactive'
  }
  return showClassesFilter.value === option ? 'activated' : 'inactive'
}
function isPromoted() {
  return globalParam.promClass ? 'smallActive' : 'small'
}
function promote() {
  return globalParam.promote()
}
function selectMerc() {
  mercFilter.value = !mercFilter.value
  unitsList.mercFilter(mercFilter.value)
  if (mercFilter.value && showClassesFilter.value === 'rapport') {
    showClassesFilter.value = 'none'
  }
}
const showList = computed(() => {
  if (showClassesFilter.value === 'rapport') {
    return unitsList.units
  } else {
    return classesList.classes
  }
})
function selectDropDown(option) {
  showClassesFilter.value = showClassesFilter.value === option ? 'none' : option
}
function hoveringDropDown() {
  hoverDropDrown = true
}
function leavingDropDown() {
  hoverDropDrown = false
  setTimeout(() => {
    if (!hoverDropDrown) {
      showClassesFilter.value = 'none'
    }
  }, 500)
}
function clearListButton(option) {
  filtersList.clearList(option)
  if (option === 'rapport') {
    unitsList.setFilterRapport([])
  } else {
    unitsList.setFilterClasses([])
  }
}
function getListFilterSize(option) {
  return filtersList.listFilterSize(option)
}
</script>
<style scoped>
.filtro {
  @apply border border-indigo-100 border-2 mb-2 bg-indigo-50;
}
.dropdown {
  @apply bg-red-600;
}
</style>
