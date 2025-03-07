<script setup>
import TransactionCardsContainer from '../components/TransactionCardsContainer/TransactionCardsContainer.vue';
import TransactionForm from '../components/TransactionForm.vue';
import transactions from '../data/transactions';

</script>

<template>
    <div class="w-screen h-full p-4 grid grid-cols-2 gap-4">
        <!-- <TransactionForm /> -->
        <TransactionCardsContainer :transactions="transactions"/>        
    </div>
</template>