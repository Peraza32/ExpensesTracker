<script setup>
import DashboardCard from './DashboardCard.vue';
import CategoryRanking from './CategoryRanking.vue';
</script>

<template>
<div class="h-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
    <DashboardCard class="md:row-span-2">
    Gráfico de barras de presupuesto vs gastos
    EJEMPLO:
    Presupuesto: 2000
    Gastos: 1500
    Ahorro: 500 
    </DashboardCard>
    <DashboardCard class="md:row-span-2">
        <CategoryRanking/>
    </DashboardCard>
    <DashboardCard class="md:row-span-1">
    Cantidad de gastos planificados que se han pagado en el mes
    EJEMPLO: 5/10
    </DashboardCard>
    <DashboardCard>
    Total de gastos e ingresos del mes
    EJEMPLO: 
    Gastos: 1000
    Ingresos: 2000
    Ahorro: 1000
    Gastos planificados: 500
    </DashboardCard>
    <DashboardCard class="md:col-span-2">
    Gráfico de líneas del histórico de gastos por año
    </DashboardCard>
</div>
</template>

<style scoped>
</style>