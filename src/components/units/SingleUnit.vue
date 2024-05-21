<template>
  <div class="border border-2 border-gray-400 bg-white" :class="{ selectedBg: selected }">
    <div class="m-2 text-center">
      <img
        class="object-scale-down inline-block"
        :src="urlImagen"
        :class="{ selectedImg: selected }"
      />
    </div>
    <div
      v-if="showName"
      class="text-base text-center capitalize p-1"
      :class="{ selectedText: selected }"
    >
      <p v-if="unit.id < 99">{{ unit.name }}</p>
      <p v-else-if="!globalParam.promClass || unit.name.prom === undefined">
        {{ unit.name.base }}
      </p>
      <p v-else>{{ unit.name.prom }}</p>
    </div>
    <slot class=""></slot>
  </div>
</template>
<script setup>
import { useGlobalStore } from '../../stores/globalStore.ts'
import { watch, ref, onMounted } from 'vue'
const globalParam = useGlobalStore()
const props = defineProps(['unit', 'showName', 'merc', 'selected', 'squad'])
const urlImagen = ref('')
onMounted(() => {
  changeImage()
})
watch(
  () => props.unit,
  () => {
    changeImage()
  }
)
globalParam.$subscribe((promClass, state) => {
  changeImage()
})
function getImageLink() {
  if (props.unit.id === 0) {
    return ''
  }
  if (props.unit.unique || (props.unit.id > 99 && props.unit.name.prom === undefined)) {
    return '-1'
  } else {
    return globalParam.linkImage()
  }
}
function changeImage() {
  urlImagen.value = '/UnicornSquad/portraits/' + props.unit.id + getImageLink() + '.jpg'
}
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
