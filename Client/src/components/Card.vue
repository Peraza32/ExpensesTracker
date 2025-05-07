<script setup>
defineProps({
    color: {type: String, default: 'sky'}
})

const colors = {
    sky: 'bg-sky-200',
    amber: 'bg-amber-200',
    rose: 'bg-rose-200',
    emerald: 'bg-emerald-200',
    red: 'bg-red-200',
    blue: 'bg-blue-200',
}

</script>

<template>
    <div class="h-96 bg-white shadow-sm rounded-sm p-2 animated-box flex flex-col gap-2 items-end justify-around">
        <div 
            :class="`w-full h-3/4 rounded-sm ${colors[color]}`"
        ></div>
        <button class="text-black bg-slate-100 p-2 rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
        </button>
    </div>
</template>

<style scoped>
:hover.animated-box {
  flex-grow: 5;
  transition: all 1s cubic-bezier(.67,0,0,.83);
}

.animated-box {
  flex: 1 0 4rem
}
</style>