import { atom, selector } from 'recoil'

export const initialState = atom({
    key: 'initialState',
    default: {
        transactions: [
            {
                id: 1,
                text: 'Flower',
                amount: -20
            },
            {
                id: 2,
                text: 'Grocery',
                amount: -4000
            },
            {
                id: 3,
                text: 'salary',
                amount: +18000
            },
            {
                id: 4,
                text: 'Book',
                amount: -800
            },
        ]
    }
})

export const transactionState = selector({
    key: 'transactionState',
    get: ({ get }) => {
        const { transactions } = get(initialState);
        const amounts = transactions.map(list => list.amount)
        const total = amounts.reduce(( acc, item ) => ( acc += item ), 0).toFixed(2)
        const income = amounts
        .filter(item => item > 0)
        .reduce(( acc, item ) => ( acc += item ), 0)
        .toFixed(2)
        const expense = (amounts.filter(item => item < 0).reduce(( acc, item ) => (acc += item), 0) * -1).toFixed(2);
    
    return {
        transactions,
        total,
        amounts,
        income,
        expense
    }
    
    }

})