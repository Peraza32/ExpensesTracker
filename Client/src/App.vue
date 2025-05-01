<script setup>
import AppLayout from './layouts/AppLayout.vue'
</script>

<template>
<AppLayout>
  <div class="bg-white w-11/12 h-fit rounded-sm p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2">
    <div class="flex flex-wrap gap-2">
      <div v-for="n in 4" class="h-64 bg-amber-500 rounded-sm grow animated-box hover:bg-amber-700"></div>
    </div>
    <div class="flex flex-wrap gap-2">
      <div v-for="n in 3" class="h-64 bg-amber-500 rounded-sm grow animated-box hover:bg-amber-700"></div>
    </div>
  </div>
</AppLayout>
</template>

<style scoped>
:hover.animated-box {
  flex-grow: 5;
  transition: all 0.5s ease-in-out;
}

.animated-box {
  flex: 1 0 4rem
}
</style>
