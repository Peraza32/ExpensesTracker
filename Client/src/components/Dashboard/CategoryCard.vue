<script setup>
import { computed } from 'vue';
import { formatCurrencyUS } from '../../utils/formatter';
import ProgressBar from '../ProgressBar.vue';

const props = defineProps({
    name:    {type: String, default: ''},
    icon:    {type: String, default: ''},
    expense: {type: Number, default: 0},
    budget:  {type: Number, default: 0},
    expenseOnly: {type: Boolean, default: false},
})

const moneyLeft = computed(() => {
    return props.budget - props.expense;
});
</script>

<template>
<div 
    class="h-fit w-full px-4 py-3 text-sm flex flex-col items-center gap-2 
    bg-slate-900 rounded-md hover:cursor-pointer hover:bg-sky-900
    transition-all duration-800 ease-in-out"
>
    <!-- Category name and icon section -->
    <div class="w-full flex items-center justify-between">
        <div class="flex items-center gap-4">
            <i :class="icon" class="text-sky-500" style="font-weight: bold; font-size: medium;"></i>
            <span class="font-bold"> {{ name }} </span>
        </div>
        <div>
            <span class="text-xs">{{ !expenseOnly ? `${formatCurrencyUS(moneyLeft)} restantes` :`-${formatCurrencyUS(expense)}` }} </span>
        </div>
    </div>

    <!-- Budget progress bar section -->
    <div v-if="!expenseOnly && budget != 0 && expense != 0" class="w-full">
        <ProgressBar 
            :total="budget" 
            :progress="expense" 
        />
        <span class="text-xs">{{ `${formatCurrencyUS(expense)} de ${formatCurrencyUS(budget)}` }}</span>
    </div>
</div>
</template>