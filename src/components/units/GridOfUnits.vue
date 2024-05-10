<template>
  <div class="grid grid-cols-4 justify-around gap-2">
    <single-unit v-for="dummy in dummyList.filteredDummies" :unit="dummy"></single-unit>
  </div>
</template>
<script setup>
import { useDummyListStore } from '../../stores/dummyList.ts'

import SingleUnit from './SingleUnit.vue'
const dummyList = useDummyListStore()
</script>
