<script setup>
import { computed } from 'vue';

const props = defineProps({
    total:    {type: Number, default: 0},
    progress: {type: Number, default: 0},
})

const progressBarWidth = computed(() => {
    return `${(props.progress / props.total) * 100}%`;
});
</script>

<template>
<div v-if="total != 0 && progress != 0" class="w-full h-1 bg-slate-500 rounded-full">
    <div class="h-1 rounded-full gradient-component" :style="`width: ${progressBarWidth};`"></div>
</div>
</template>