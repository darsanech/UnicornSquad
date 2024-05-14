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
  <div class="dropDown" v-if="showClassesFilter == 'class'">
    <div v-for="sClass in classesList.classes" :key="sClass.id">
      <div>
        <input
          checked
          type="checkbox"
          :id="sClass.id"
          v-model="classesFilter"
          :value="sClass.id"
          class="mr-1"
        />
        <label :for="sClass.id">{{ sClass.name.base }}</label>
      </div>
    </div>
  </div>
  <div class="dropDown" v-if="showClassesFilter == 'rapport'">
    <div v-for="unit in unitsList.units" :key="unit.id">
      <div>
        <input
          type="checkbox"
          :id="unit.id"
          v-model="rapportFilter"
          :value="unit.id"
          class="mr-1"
          :disabled="disableRapport(unit.id)"
        />
        <label :for="unit.id">{{ unit.name }}</label>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
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
const showClassesFilter = ref('')
const mercFilter = ref(false)
function buttonIsSelected(option) {
  if (option === 'merc') {
    classesList.filterMercs(classesFilter.value)
    return mercFilter.value ? 'activated' : 'inactive'
  }
  return showClassesFilter.value === option ? 'activated' : 'inactive'
}
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
  border-2 border-solid border-blue-100 bg-blue-50;
}
</style>
