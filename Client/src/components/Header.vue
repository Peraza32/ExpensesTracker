<script setup>
</script>

<template>
    <header class="w-screen h-16 shadow-md p-4 top-0 left-0 z-50 bg-dark-oxford-blue text-white">
        <!-- Main body of the header -->
        <div class="w-full flex justify-between items-center">
            <h1>Money Manager</h1>
        </div>

    </header>
</template>

<style scoped lang="scss">
@use '../assets/scss/variables.scss' as c;

    .animated {
        transition: all 0.5s ease-in-out;
    }

    .menu-toggle-wrapper {
        top: 0.7rem;
        right: 0.8rem;
        cursor: pointer;
    }

    #menu-toggle {
        display: none;

        + label {
            cursor: pointer;
            position: absolute;
            top: 1.2rem;
            right: 0.5rem;
            background-color: c.$text-white;
            width: 1.5rem;
            height: 0.1rem;

            &::before, 
            &::after {
                content: '';
                position:absolute;
                display: block;
                background-color: c.$text-white;
                width: 1.5rem;
                height: 0.1rem;
                transition: all 0.4s c.$animation-curve;
            }

            &::before {
                top: 0.5rem;
            }

            &::after {
                top: -0.5rem;
            }
        }  
        
        &:checked + label {
            background-color: transparent;

            &::before {
                background-color: c.$text-white;
                transform: rotate(45deg);
                top: 0;
            }

            &::after {
                background-color: c.$text-white;
                transform: rotate(-45deg);
                top: 0;
            }
        }
    }
</style>