<template>
  <div class="grid grid-cols-3">
    <div class="m-4">
      <p class="text-xl font-bold">Rapport</p>
      <div v-for="dummy in dummyList.dummies" :key="dummy.id" v-if="!mercFilter">
        <input checked type="checkbox" :id="dummy.id" v-model="rapportFilter" :value="dummy.id" />
        <label :for="dummy.id">{{ dummy.name }}</label>
      </div>
    </div>
    <div class="m-4">
      <p class="text-xl font-bold">Classes</p>

      <div v-for="sClass in dummyList.classes" :key="sClass">
        <input checked type="checkbox" :id="sClass" v-model="classesFilter" :value="sClass" />
        <label :for="sClass">{{ sClass }}</label>
      </div>
    </div>
    <div class="m-4">
      <p class="text-xl font-bold">Mercenaries</p>
      <input type="checkbox" unchecked v-model="mercFilter" />
    </div>
    <div class="m-4">
      <button class="bg-teal-200 border-teal-500 border-2" @click="applyFilter">Filter</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useDummyListStore } from '../../stores/dummyList.ts'
const dummyList = useDummyListStore()
const rapportFilter = ref([])
const classesFilter = ref([])
const mercFilter = ref(false)
function applyFilter() {
  console.log(classesFilter.value)
  dummyList.filterList(classesFilter.value, rapportFilter.value, mercFilter.value)
}
</script>
<style scoped></style>
