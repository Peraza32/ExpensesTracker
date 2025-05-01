<script>
</script>

<template>
<div class="bg-slate-50 w-screen">
    <!-- Header -->
    <header class="bg-slate-900 w-screen h-16 flex items-center justify-center font-medium text-2xl text-white">
        <p>Expenses Tracker</p>
    </header>

    <!-- Content -->
    <div class="bg-slate-800 w-screen relative" style="height: calc(100vh - 4rem);">
        <slot/>
    </div>
</div>
</template>