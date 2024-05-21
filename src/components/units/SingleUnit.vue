<template>
  <div class="border border-2 border-gray-400 bg-white" :class="{ selectedBg: selected }">
    <div class="m-2 text-center">
      <img
        class="object-scale-down inline-block w-20"
        :src="urlImagen2"
        :class="{ selectedImg: selected, 'w-36': squad }"
      />
    </div>
    <div
      v-if="showName"
      class="text-base text-center capitalize p-1"
      :class="{ selectedText: selected }"
    >
      <p v-if="!merc">{{ unit.name }}</p>
      <p v-else-if="globalParam.promClass">{{ unit.name.base }}</p>
      <p v-else>{{ unit.name.prom }}</p>
    </div>
    <slot class=""></slot>
  </div>
</template>
<script setup>
import { useGlobalStore } from '../../stores/globalStore.ts'
import { watch, ref } from 'vue'
const globalParam = useGlobalStore()
const props = defineProps(['unit', 'showName', 'merc', 'selected', 'squad'])
const urlImagen2 = ref(
  'src/assets/portraits/' + props.unit.id + '-' + globalParam.linkImage() + '.jpg'
)
globalParam.$subscribe((promClass, state) => {
  urlImagen2.value =
    'src/assets/portraits/' + props.unit.id + '-' + globalParam.linkImage() + '.jpg'
})
</script>
<style scoped>
.selectedBg {
  @apply bg-green-400 border-green-700;
}
.selectedText {
  @apply text-blue-950 font-extrabold;
}
.selectedImg {
  @apply animate-bounce border-green-700 border;
}
</style>
