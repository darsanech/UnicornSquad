<template>
  <div class="grid grid-cols-3">
    <div class="m-4">
      <div @click="selectDropDown('rapport')" class="selectButton">
        <p class="text-xl font-bold text-center">Rapport</p>
      </div>
    </div>

    <div class="m-4">
      <div @click="selectDropDown('class')" class="selectButton">
        <p class="text-xl font-bold text-center">Classes</p>
      </div>
    </div>

    <div class="m-4">
      <div @click="selectMerc" class="selectedButton">
        <p class="text-xl font-bold text-center">Mercenaries</p>
      </div>
    </div>
  </div>
  <div class="dropDown" v-if="showClassesFilter == 'class'">
    <div v-for="sClass in dummyList.classes" :key="sClass">
      <div>
        <input checked type="checkbox" :id="sClass" v-model="classesFilter" :value="sClass" />
        <label :for="sClass">{{ sClass }}</label>
      </div>
    </div>
  </div>
  <div class="dropDown" v-if="showClassesFilter == 'rapport'">
    <div v-for="dummy in dummyList.dummies" :key="dummy.id">
      <div>
        <input checked type="checkbox" :id="dummy.id" v-model="rapportFilter" :value="dummy.id" />
        <label :for="dummy.id">{{ dummy.name }}</label>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useDummyListStore } from '../../stores/dummyList.ts'
const dummyList = useDummyListStore()
const rapportFilter = ref([])
const classesFilter = ref([])
const showClassesFilter = ref('')
const mercFilter = ref(false)
function applyFilter() {
  console.log(classesFilter.value)
  dummyList.filterList(classesFilter.value, rapportFilter.value, mercFilter.value)
}
function selectMerc() {
  mercFilter.value = !mercFilter.value
  applyFilter()
}
function selectDropDown(option) {
  showClassesFilter.value = showClassesFilter.value === option ? 'none' : option
  applyFilter()
}
</script>
<style scoped>
.selectButton {
  @apply border-solid border-blue-300 border-2 rounded bg-cyan-200 cursor-pointer;
}
.selectedButton {
  @apply border-solid border-blue-500 border-2 rounded bg-cyan-400 cursor-pointer;
}
.dropDown {
  @apply flex flex-row border-2 border-solid border-blue-100 bg-blue-50;
}
</style>
