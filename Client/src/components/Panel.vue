<script setup>
import { ref } from 'vue';

const open = ref(false);

const props = defineProps({
    items: {type: Array, required: true},
})
</script>

<template>
    <div v-for="item in items" class="flex sm:flex-col gap-3 cursor-pointer">
        <!-- Parent item -->
        <slot name="item" :item="item">
            <div class="flex flex-col gap-2 sm:border md:border-none border-white border-1 rounded p-2 group">
                <div class="flex items-center gap-2 hover:bg-light-oxford-blue rounded p-2" @click="open = !open">
                    <i :class="item.icon"></i>
                    <span>{{ item.label }}</span>
                </div>

                <!-- Child items -->
                <div v-if="open" v-for="child in item.items" class="flex flex-col gap-2 pl-4">
                    <slot name="child" :item="child">
                        <div class="flex items-center gap-2 hover:bg-light-oxford-blue rounded p-2">
                            <i :class="child.icon"></i>
                            <span>{{ child.label }}</span>
                        </div>
                    </slot>
                </div>
            </div>
        </slot>
    </div>
</template>