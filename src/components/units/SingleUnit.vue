<template>
  <div class="border border-2">
    <div class="m-2">
      <img class="object-scale-down size-50" :src="urlImagen" />
    </div>
    <div class="text-xl text-center">
      {{ unit.name }}
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps(['unit'])
const urlImagen = computed(() => {
  return 'src/assets/' + props.unit.id + '.jpg'
})
</script>
