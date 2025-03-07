<script setup>
import Header from '../components/Header.vue'
</script>

<template>
    <Header/>
    
    <main style="height: calc(100vh - 64px);">
        <slot/>
    </main>
</template>