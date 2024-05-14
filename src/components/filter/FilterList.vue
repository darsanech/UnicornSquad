<template>
  <div class="grid grid-cols-3">
    <div class="m-4">
      <base-button
        :mode="buttonIsSelected('rapport')"
        :disabled="mercFilter"
        @click="selectDropDown('rapport')"
      >
        <p class="text-xl font-bold text-center">Rapport</p>
      </base-button>

      <base-button @click="clearRapports">
        <p class="text-xs font-bold text-center">Clear</p>
      </base-button>
    </div>

    <div class="m-4">
      <base-button :mode="buttonIsSelected('class')" @click="selectDropDown('class')">
        <p class="text-xl font-bold text-center">Classes</p>
      </base-button>
      <base-button @click="clearClasses">
        <p class="text-xs font-bold text-center">Clear</p>
      </base-button>
    </div>

    <div class="m-4">
      <base-button :mode="buttonIsSelected('merc')" @click="selectMerc">
        <p class="text-xl font-bold text-center">Mercenaries</p>
      </base-button>
    </div>
  </div>
  <div class="relative inline-block" v-if="showClassesFilter != 'none'">
    <div class="dropDown">
      <div v-for="filter in showList" :key="filter.id" class="capitalize">
        <div class="bg-blue-200 bg-opacity-100 rounded-xl p-1">
          <input
            checked
            type="checkbox"
            :id="filter.id"
            v-model="rapportFilter"
            :value="filter.id"
            class="mr-1"
          />
          <label v-if="showClassesFilter == 'rapport'" :for="filter.id">{{ filter.name }}</label>
          <label v-else :for="filter.id">{{ filter.name.base }}</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, computed } from 'vue'
import BaseButton from '../ui/BaseButton.vue'
import { useDummyListStore } from '../../stores/dummyList.ts'
import { useUnitsStore } from '../../stores/data/unitsStore.ts'
import { useClassesStore } from '../../stores/data/classesStore.ts'
import { useRapportsStore } from '../../stores/data/rapportsStore.ts'
import { useMoveUnits } from '../../stores/moveUnits.ts'

const unitsList = useUnitsStore()
const classesList = useClassesStore()
const rapportsList = useRapportsStore()
const moveUnits = useMoveUnits()

const dummyList = useDummyListStore()
const rapportFilter = ref([])
const classesFilter = ref([])
const showClassesFilter = ref('none')
const mercFilter = ref(false)
function buttonIsSelected(option) {
  if (option === 'merc') {
    classesList.filterMercs(classesFilter.value)
    return mercFilter.value ? 'activated' : 'inactive'
  }
  return showClassesFilter.value === option ? 'activated' : 'inactive'
}
const showList = computed(() => {
  console.log(showClassesFilter.value)
  if (showClassesFilter.value == 'rapport') {
    return unitsList.units
  } else if (showClassesFilter.value == 'class') {
    return classesList.classes
  }
})
const filterList = computed(() => {
  if (showClassesFilter.value == 'rapport') {
    return rapportFilter
  } else if (showClassesFilter.value == 'class') {
    return classesFilter
  }
})
function applyFilter() {
  if (mercFilter.value) {
    moveUnits.selectUnit(-1)
  } else {
    const rapported = rapportsList.getUnitsWithRapport(rapportFilter.value)
    unitsList.filterList(classesFilter.value, rapported, mercFilter.value)
  }
}
function selectMerc() {
  mercFilter.value = !mercFilter.value
  unitsList.mercFilter(mercFilter.value)
  if (mercFilter.value && showClassesFilter.value === 'rapport') {
    showClassesFilter.value = 'none'
  }
  applyFilter()
}
function selectDropDown(option) {
  showClassesFilter.value = showClassesFilter.value === option ? 'none' : option
  applyFilter()
}
function disableRapport(unitId) {
  return rapportFilter.value.length >= 5 && !rapportFilter.value.includes(unitId)
}
function clearRapports() {
  rapportFilter.value = []
}
function clearClasses() {
  classesFilter.value = []
}
watch([rapportFilter, classesFilter], function () {
  moveUnits.selectUnit(-1)
  applyFilter()
})
</script>
<style scoped>
.dropDown {
  @apply flex flex-wrap gap-4 p-2 justify-evenly justify-items-stretch
  border-2 border-solid border-blue-900 bg-blue-300  block absolute z-10  bg-opacity-90 rounded-xl mr-2 ml-2 mt-0;
}
</style>
