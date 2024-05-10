<template>
  <div class="grid grid-cols-3">
    <div class="m-4">
      <base-button :mode="buttonIsSelected('rapport')">
        <div @click="selectDropDown('rapport')" class="selectButton">
          <p class="text-xl font-bold text-center">Rapport</p>
        </div>
      </base-button>
    </div>

    <div class="m-4">
      <base-button :mode="buttonIsSelected('class')">
        <div @click="selectDropDown('class')" class="selectButton">
          <p class="text-xl font-bold text-center">Classes</p>
        </div>
      </base-button>
    </div>

    <div class="m-4">
      <base-button :mode="buttonIsSelected('merc')">
        <div @click="selectMerc" class="selectedButton">
          <p class="text-xl font-bold text-center">Mercenaries</p>
        </div>
      </base-button>
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
import { ref, watch } from 'vue'
import BaseButton from '../ui/BaseButton.vue'
import { useDummyListStore } from '../../stores/dummyList.ts'
const dummyList = useDummyListStore()
const rapportFilter = ref([])
const classesFilter = ref([])
const showClassesFilter = ref('')
const mercFilter = ref(false)
function buttonIsSelected(option) {
  if (option === 'merc') {
    return mercFilter.value ? 'activated' : 'inactive'
  }
  return showClassesFilter.value === option ? 'activated' : 'inactive'
}
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

watch([rapportFilter, classesFilter], function () {
  applyFilter()
})
</script>
<style scoped>
.dropDown {
  @apply flex flex-row border-2 border-solid border-blue-100 bg-blue-50;
}
</style>
