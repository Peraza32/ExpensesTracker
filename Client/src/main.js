import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router/index.js'
import PrimeVue from 'primevue/config';
import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50:  "#e6e9f2", 
            100: "#cdd3e5",
            200: "#9aa6cc",
            300: "#6678b2",
            400: "#334b99",
            500: "#001233", 
            600: "#00102d",
            700: "#000d26",
            800: "#000a1f",
            900: "#000819", 
        }, 
        info: {
            50: "#3d5a7d",
            100: "#334d6e",
            200: "#2a4060",
            300: "#22354e",
            400: "#1a2b3d",
            500: "#002855",
            600: "#001f42",
            700: "#001734",
            800: "#001227",
            900: "#000b1b"
        }
    }
});

createApp(App)
.use(router)
.use(PrimeVue, {
    theme: {
        preset: MyPreset,
        options: {
            darkModeSelector: false,
        }
    }
})
.mount('#app')
