<template>
  <div class="filtro flex flex-row gap-2 justify-evenly h-20">
    <div class="m-4">
      <base-button
        class="mr-2"
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
        class="mr-2"
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
      <base-button :mode="buttonIsSelected('merc')" @click="selectMerc" class="mr-2">
        <p class="text-xl font-bold text-center">Mercenaries</p>
      </base-button>
      <base-button :mode="isPromoted()" @click="promote()">
        <p>Promote</p>
      </base-button>
    </div>
  </div>
  <transition name="slideDown">
    <filter-component
      class="dropdown"
      @mouseover="hoveringDropDown"
      @mouseleave="leavingDropDown"
      v-if="showClassesFilter != 'none'"
      :list="showList"
      :filterMode="showClassesFilter"
    ></filter-component>
  </transition>
</template>
<script setup>
import { ref, computed } from 'vue'
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
  globalParam.promote()
}
function selectMerc() {
  globalParam.toggleMerc()
  mercFilter.value = !mercFilter.value
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
async function selectDropDown(option) {
  if (showClassesFilter.value === 'none') {
    showClassesFilter.value = showClassesFilter.value === option ? 'none' : option
  } else {
    showClassesFilter.value = 'none'
    await delay(100)
    showClassesFilter.value = showClassesFilter.value === option ? 'none' : option
  }
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
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
    classesList.setFilterClasses([])
  }
}
function getListFilterSize(option) {
  return filtersList.listFilterSize(option)
}
</script>
<style scoped>
.filtro {
  @apply border-b-2 border-indigo-300 bg-indigo-200 z-40;
}
.dropdown {
  @apply bg-red-600 z-10;
}
@keyframes slideDown {
  from {
    top: -200px;
  }
  to {
    top: 0px;
  }
}
.slideDown-enter-active {
  animation: slideDown 0.3s ease-out forwards;
}
.slideDown-leave-active {
  animation: slideDown 0.1s ease-in reverse;
}
</style>
