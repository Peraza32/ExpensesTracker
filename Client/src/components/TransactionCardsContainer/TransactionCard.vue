<script setup>
import { Button } from 'primevue';

const props = defineProps({
    transaction: {type: Object, required: true}
})

const formatDate = (date) => {
    return date.toLocaleDateString()
}
</script>

<template>
    <div class="grid grid-cols-5 w-full p-4 text-slate-700 border-b-2 border-slate-300">
        <p v-if="transaction.type === 'expense'" class="font-bold my-auto text-rose-500">${{ transaction.amount }}</p>
        <p v-if="transaction.type === 'income'"  class="font-bold my-auto text-emerald-500">${{ transaction.amount }}</p>

        <div class="flex gap-2 items-center">
            <i :class="transaction.category.icon"></i>
            <span>{{ transaction.category.name }}</span>
        </div>

        <p class="my-auto text-sm">{{ formatDate(transaction.date) }}</p>
        
        <p class="my-auto">{{ transaction.note }}</p>
        
        <div class="w-full flex justify-end">
            <Button icon="pi pi-pencil" class="p-button-rounded p-button-text p-button-sm"></Button>
            <Button icon="pi pi-trash" class="p-button-rounded p-button-text p-button-sm"></Button>
        </div>
    </div>
</template>