import { rapportsData } from '@/assets/data/rapportsData'
import { defineStore } from 'pinia'
import { reactive } from 'vue'
export const useRapportsStore = defineStore('rapportsStore', () => {
  const rapports = reactive(rapportsData)

  return { rapports }
})
