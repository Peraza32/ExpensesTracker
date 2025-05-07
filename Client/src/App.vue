<script setup>
import AppLayout from './layouts/AppLayout.vue'
import Card from './components/Card.vue';
import Dashboard from './components/Dashboard/Dashboard.vue';
</script>

<template>
<AppLayout>
  <!-- Dashboard -->
  <div class="w-full p-4 py-6" style="height: calc(100vh - 4rem);">
    <Dashboard/>
  </div>

  <!-- Sección de tarjetas de información -->
  <!-- <section class="w-full h-11/12 p-4 gap-4 flex flex-col">
    <div class="w-full flex flex-wrap items-center justify-center gap-4">
      <Card color="sky"/>
      <Card color="rose"/>
      <Card color="amber"/>
      <Card color="emerald"/>
    </div>
  </section> -->
</AppLayout>
</template>

<style scoped>
.test {
  background: #00A6F4;
  background: linear-gradient(90deg, rgba(0, 166, 244, 1) 0%, rgba(255, 32, 86, 1) 100%);
}
</style>
