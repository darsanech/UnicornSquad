<template>
  <section>
    <h2>Rapport</h2>
    <div v-for="dummy in dummyList.dummies" :key="dummy.id">
      <input checked type="checkbox" :id="dummy.id" v-model="rapportFilter" :value="dummy.id" />
      <label :for="dummy.id">{{ dummy.name }}</label>
    </div>
  </section>
  <section>
    <h2>Classes</h2>
    <div v-for="sClass in dummyList.classes" :key="sClass">
      <input checked type="checkbox" :id="sClass" v-model="classesFilter" :value="sClass" />
      <label :for="sClass">{{ sClass }}</label>
    </div>
  </section>
  <section>
    <h2>Mercenaries</h2>
    <input type="checkbox" unchecked v-model="mercFilter" />
  </section>
  <section>
    <button @click="applyFilter">Filter</button>
  </section>
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
