<script setup>
import { ref } from 'vue';
import Select from 'primevue/select';
import DatePicker from 'primevue/datepicker';
import TransactionCard from './TransactionCard.vue';
import { IconField, InputIcon, InputText } from 'primevue';

const props = defineProps({
    transactions: {type: Array, required: true}
})

const periodOptions = ref([
    {label: 'Day', value: 'day'},
    {label: 'Week', value: 'week'},
    {label: 'Month', value: 'month'},
    {label: 'Year', value: 'year'}
])

</script>

<template>
<div class="flex flex-col items-center gap-2 p-2">
    <div class="w-full grid sm:grid-cols-1 md:grid-cols-3 gap-2">
        <Select :options="periodOptions" optionLabel="label" placeholder="Select a period" size="small"/>
        <DatePicker placeholder="Select a date" size="small"/>
        <IconField>
            <InputIcon class="pi pi-search" />
            <InputText v-model="value1" placeholder="Search" size="small" class="w-full"/>
        </IconField>
    </div>
   
    <div class="w-full grid sm:grid-cols-1 md:grid-cols-3 items-center justify-between gap-2 p-4 rounded-md border border-slate-300 ">
        <span class="font-bold text-center text-emerald-500">Income: $100</span>
        <span class="font-bold text-center text-rose-500   ">Expenses: $200</span>
        <span class="font-bold text-center text-oxford-blue">Total: - $100</span>
    </div>

    <TransactionCard v-for="transaction in transactions" :transaction="transaction"/>
</div>
</template>