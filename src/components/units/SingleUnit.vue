<template>
  <div>
    {{ unit.id }}
  </div>

  <div>
    {{ unit.name }}
  </div>
  <div>
    {{ unit.class }}
  </div>
</template>
<script setup>
const props = defineProps(['unit'])
</script>
