<script setup>
defineProps({
    title: {type: String, default: ''},
    footer: {type: Boolean, default: false},
})

defineEmits(['footer-click'])

</script>

<template>
<div class="bg-slate-800 rounded-2xl p-4 text-white flex flex-col justify-start items-center gap-2 relative">
    <slot name="title">
        <h3 v-if="title != ''" class="text-center font-bold mb-4">{{ title }}</h3>
    </slot>
    
    <slot/>
    
    <slot name="footer">
        <button 
            v-if="footer" 
            class="gradient-component size-12 p-2 rounded-full bg-blue-700 hover:cursor-pointer absolute bottom-4 right-4 z-50"
            @click="$emit('footer-click')"
        >
            <i class="pi pi-arrow-right"></i>
        </button>
    </slot>
</div>
</template>