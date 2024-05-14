import { classesData } from '@/assets/data/classesData'
import { defineStore } from 'pinia'
import { reactive } from 'vue'
export const useClassesStore = defineStore('classesStore', () => {
  const classes = reactive(classesData)

  return { classes }
})
