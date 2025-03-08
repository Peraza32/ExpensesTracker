<script setup>
import TransactionCardsContainer from '../components/TransactionCardsContainer/TransactionCardsContainer.vue';
import TransactionForm from '../components/TransactionForm.vue';
import transactions from '../data/transactions';

</script>

<template>
    <div class="w-screen h-full p-4 flex flex-col justify-center items-center gap-4 bg-isabelline">
        <!-- <TransactionForm /> -->
        <TransactionCardsContainer :transactions="transactions"/>        
    </div>
</template>