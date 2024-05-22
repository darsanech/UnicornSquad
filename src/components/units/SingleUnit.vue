<template>
  <div
    class="border-2 border-gray-400 bg-white"
    :class="{ selectedBg: selected, 'cursor-pointer': !isPH() }"
  >
    <div class="m-2 text-center">
      <img
        class="object-fill h-auto w-full inline-block border border-gray-400"
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
    <slot></slot>
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
  if (isPH()) {
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
function isPH() {
  return props.unit.id === 0
}
</script>
<style scoped>
.selectedBg {
  @apply bg-green-400 border-green-700;
}
.selectedText {
  @apply text-blue-950 font-bold;
}
.selectedImg {
  animation-name: selectAnimation;
  animation-duration: 1.5s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @apply border-green-700 border;
}
@keyframes selectAnimation {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.9);
  }
}
.selectAnimation-leave-active {
  animation: selectAnimation 0.1s ease-in reverse;
}
</style>
