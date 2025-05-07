<script setup>
</script>

<template>
<div class="w-full h-full flex flex-col justify-between items-center">
    <h3 class="text-center font-bold mb-4">Top categories in which you have spent the most</h3>
    
    <div class="w-full h-3/4 flex flex-col justify-start items-center gap-4">
        <div v-for="n in 2" class="bg-slate-500 h-12 w-full rounded-full flex justify-start items-center px-4">Category {{ n }}</div>
    </div>
    
    <button class="button p-4 rounded-full shadow-lg bg-rose-500 hover:cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
    </button>
</div>
</template>

<style scoped>
:hover.button {
    transform: scale(1.05);
    opacity: 0.8;
    transition: all 0.7s ease-in-out;
}

.button {
    background: linear-gradient(135deg, rgba(20, 71, 230, 1) 0%, rgba(60, 67, 179, 1) 25%, rgba(159, 57, 54, 1) 75%, rgba(202, 53, 0, 1) 100%);
}
</style>