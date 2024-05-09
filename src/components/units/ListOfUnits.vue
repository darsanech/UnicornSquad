<template>
  <filter-list></filter-list>
  <ul v-for="dummy in dummyList.dummies">
    <single-unit :unit="dummy"></single-unit>
  </ul>
</template>
<script setup>
import { useDummyListStore } from '../../stores/dummyList.ts'
import SingleUnit from './SingleUnit.vue'
import FilterList from '../filter/FilterList.vue'
const dummyList = useDummyListStore()
</script>
