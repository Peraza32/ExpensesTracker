<script setup>
import InputText from 'primevue/inputtext';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';
import { Button } from 'primevue';
import categories from '../data/categories';
import { ref } from 'vue';

</script>

<template>
<form class="col-span-1 flex flex-col justify-start gap-4 p-4">
    <h1 class="text-center text-2xl text-dark-oxford-blue">Track your transactions</h1>

    <div class="w-full flex flex-col">
        <div class="border-l-4 border-indigo-300 pl-8 relative">
            <figure class="w-10 h-10 bg-indigo-300 rounded-full flex items-center justify-center absolute top-0 -left-6">
                <i class="text-2xl text-white">1</i>
            </figure>
            <label for="date" class="flex flex-col gap-1 text-dark-oxford-blue mb-4">
                Date
                <DatePicker name="date"/>
            </label>
        </div>
    
        <div class="border-l-4 border-indigo-300 pl-8 relative">
            <figure class="w-10 h-10 bg-indigo-300 rounded-full flex items-center justify-center absolute top-0 -left-6">
                <i class="text-2xl text-white">2</i>
            </figure>
            <label for="amount" class="flex flex-col gap-1 text-dark-oxford-blue mb-4">
                Amount
                <InputNumber name="amount" />
            </label>
        </div>

        <div class="border-l-4 border-indigo-300 pl-8 relative">
            <figure class="w-10 h-10 bg-indigo-300 rounded-full flex items-center justify-center absolute top-0 -left-6">
                <i class="text-2xl text-white">3</i>
            </figure>
            <label for="category" class="flex flex-col gap-1 text-dark-oxford-blue mb-4">
                Category
                <Select name="category" :options="categories">
                    <template #option="slotProps">
                        <div class="flex gap-2 items-center">
                            <i :class="slotProps.option.icon"></i>
                            <span>{{ slotProps.option.name }}</span>
                        </div>
                    </template>
                    <template #value="slotProps">
                        <div v-if="slotProps.value" class="flex gap-1 items-center">
                            <i :class="slotProps.value.icon"></i>
                            <span>{{ slotProps.value.name }}</span>
                        </div>
                    </template>
                </Select>
            </label>
        </div>

        <div class="border-l-4 border-white pl-8 relative">
            <figure class="w-10 h-10 bg-indigo-300 rounded-full flex items-center justify-center absolute top-0 -left-6">
                <i class="text-2xl text-white">4</i>
            </figure>
            <label for="note" class="flex flex-col gap-1 text-dark-oxford-blue">
                Notes
                <InputText name="note" type="text" />
            </label>
        </div>
    </div>

    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button label="Cancel" severity="secondary"/>
        <Button label="Save" />
    </div>
</form>
</template>
