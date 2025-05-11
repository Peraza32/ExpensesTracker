<script setup>
import DashboardCard from './DashboardCard.vue';
import { expensesPerCategory } from '../../data/category-ranking';
import { budgetsPerCategory } from '../../data/budgets-category';
import CategoryCard from './CategoryCard.vue';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

const chartData = {
    labels: [ 'January', 'February', 'March'],
    datasets: [
        {
        label: 'Data One',
        backgroundColor: '#ffff',
        data: [40, 20, 12]
        }
    ]
}

const chartOptions = {
    indexAxis: 'y',
}

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
</script>

<template>
<div class="h-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
    <DashboardCard 
        class="md:row-span-2" 
        title="Presupuesto vs. gastos por categoría" 
        :footer="true"
    >
        <div class="w-full h-3/4 flex flex-col justify-start items-center gap-4">
            <template v-for="(category, i) in budgetsPerCategory">
                <CategoryCard v-if="i < 5" 
                    :name="category.name" 
                    :icon="category.icon" 
                    :expense="category.expense"
                    :budget="category.budget"
                />
            </template>
        </div>
    </DashboardCard>

    <!-- Category ranking -->
    <DashboardCard 
        class="md:row-span-2" 
        title="Categorías con más gastos" 
        :footer="true"
    >
        <div class="w-full h-3/4 flex flex-col justify-start items-center gap-4">
            <template v-for="(category, i) in expensesPerCategory">
                <CategoryCard v-if="i < 5" 
                    :name="category.name" 
                    :icon="category.icon" 
                    :expense="category.expense"
                    :expenseOnly="true"
                />
            </template>
        </div>
    </DashboardCard>
    
    <DashboardCard 
        class="md:row-span-1" 
        title="Progreso de pagos planificados" 
        :footer="true"
    >
    </DashboardCard>

    <DashboardCard 
        title="Progreso de ahorros" 
        :footer="true"
    >
    </DashboardCard>

    <DashboardCard 
        class="md:col-span-2" 
        title="Histórico de gastos por mes"
    >
    </DashboardCard>
</div>
</template>

<style scoped>
</style>