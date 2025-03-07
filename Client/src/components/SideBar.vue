<script setup>
import { ref } from 'vue';
import Panel from './Panel.vue';

const items = ref([
    {
        label: 'Calendario',
        icon: 'pi pi-calendar',
        badge: 5,
        items: [
            {
                label: 'Compose',
                icon: 'pi pi-file-edit',
            },
            {
                label: 'Inbox',
                icon: 'pi pi-inbox',
                badge: 5
            },
            {
                label: 'Sent',
                icon: 'pi pi-send',
            },
            {
                label: 'Trash',
                icon: 'pi pi-trash',
            }
        ]
    },
    {
        label: 'Reportes',
        icon: 'pi pi-chart-bar',
        items: [
            {
                label: 'Ingresos',
                icon: 'pi pi-chart-line',
            },
            {
                label: 'Gastos',
                icon: 'pi pi-wallet',
            }
        ]
    },
    {
        label: 'Profile',
        icon: 'pi pi-user',
        shortcut: '⌘+W',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-cog',
                shortcut: '⌘+O'
            },
            {
                label: 'Privacy',
                icon: 'pi pi-shield',
                shortcut: '⌘+P'
            }
        ]
    }
]);
</script>

<template>
    <aside id="panel" 
        class="text-white flex gap-3 sm:flex-col sm:w-72 sm:h-screen sm:bg-delft-blue sm:fixed sm:py-8 sm:px-4 top-0 right-0 z-40 
                 md:w-auto md:h-16 md:bg-transparent md:flex-row p-0">

        <!-- User info -->
        <div class="flex flex-col items-center gap-2 md:hidden">
            <figure class="w-12 h-12 rounded-full bg-dark-oxford-blue flex items-center justify-center">
                <i class="pi pi-user"></i>
            </figure>
            <span class="text-xs">Mónica Cabañas</span>
        </div>

        <!-- Panel -->
        <Panel :items="items"/>
    </aside>
</template>
