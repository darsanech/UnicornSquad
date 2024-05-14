<template>
  <div class="border border-2">
    <div class="m-2">
      <img class="object-scale-down size-50" :src="urlImagen" />
    </div>
    <div v-if="showName" class="text-xl text-center">
      <p v-if="!merc">{{ unit.name }}</p>
      <p v-else>{{ unit.name.base }}</p>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps(['unit', 'showName', 'merc'])
const urlImagen = computed(() => {
  // return 'src/assets/' + props.unit.id + '.jpg'
  return 'src/assets/000.jpg'
})
</script>
