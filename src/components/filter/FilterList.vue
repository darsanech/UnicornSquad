<template>
  <section>
    <input type="checkbox" />
    <label>Rapport</label>
  </section>
  <section>
    <input type="checkbox" />
    <label>Classes</label>
  </section>
  <section>
    <input type="checkbox" unchecked v-model="mercFilter" />
    <label>Merc</label>
  </section>
  <section>
    <button @click="applyFilter">Filter</button>
  </section>
</template>
<script setup>
import { ref } from 'vue'

import { useDummyListStore } from '../../stores/dummyList.ts'
const dummyList = useDummyListStore()
const rapportFilter = null
const classesFilter = null
const mercFilter = ref(false)
function applyFilter() {
  console.log('mercFilter')
  dummyList.filterList(null, null, mercFilter.value)
}
</script>
