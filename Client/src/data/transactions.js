const transactions = [
    {
        id: 1,
        type: 'expense',
        date: new Date(),
        amount: 100,
        category: {
            name: 'Food',
            icon: 'pi pi-shopping-cart'
        },
        note: 'Lunch'
    },
    {
        id: 2,
        type: 'expense',
        date: new Date(),
        amount: 200,
        category: {
            name: 'Transport',
            icon: 'pi pi-car'
        },
        note: 'Bus'
    },
    {
        id: 3,
        type: 'income',
        date: new Date(),
        amount: 300,
        category: {
            name: 'Salary',
            icon: 'pi pi-money-bill'
        },
        note: 'Dinner'
    }
];

export default transactions;