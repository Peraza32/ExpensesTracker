<script>
</script>

<template>
<div class="bg-slate-950 max-w-screen">
    <!-- Header -->
    <header class="bg-slate-900 w-full h-16 flex items-center justify-center font-medium text-2xl text-white">
        <p>Expenses Tracker</p>
    </header>

    <!-- Content -->
    <div class="w-full" style="min-height: calc(100vh - 4rem);">
        <slot/>
    </div>
</div>
</template>