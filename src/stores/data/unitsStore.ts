import { unitsData } from '@/assets/data/unitData'
import { defineStore } from 'pinia'
import { reactive } from 'vue'
export const useUnitsStore = defineStore('unitsStore', () => {
  const units = reactive(unitsData)
  const unitsFiltered = reactive(unitsData)

  return { units, unitsFiltered }
})
