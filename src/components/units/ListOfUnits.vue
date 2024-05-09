<template>
  <div class="flex flex-col">
    <filter-list></filter-list>
    <ul v-for="dummy in dummyList.filteredDummies">
      <single-unit :unit="dummy"></single-unit>
    </ul>
  </div>
</template>
<script setup>
import { useDummyListStore } from '../../stores/dummyList.ts'
import SingleUnit from './SingleUnit.vue'
import FilterList from '../filter/FilterList.vue'
const dummyList = useDummyListStore()
</script>
