import { atom, selector, selectorFamily } from 'recoil'
import axios from 'axios'

export const initialState = atom({
    key: 'initialState',
    default: []
})

export const getTransactions = selectorFamily({
    key: 'getTransactions',
    get: async () => {
        const response = await axios.get('/api/v1/transactions')

        return response.data.data
    }
})

// export const removeTransaction = selectorFamily({
//     key: 'removeTransaction',
//     get: data => async () => {
//         return await axios.delete(`/api/v1/transactions/${data._id}`)
//     }
// })

// export const removeTransaction = selector({
//     key: 'removeTransaction',
//     get: (_id) => async () => {
//         return await axios.delete(`/api/v1/transactions/${_id}`)
//     }
// })

// export const transactionState = selector({
//     key: 'transactionState',
//     get: ({ get }) => {
//         const transactions = get(getTransactions);
//         const amounts = transactions.map(list => list.amount)
//         const total = amounts.reduce(( acc, item ) => ( acc += item ), 0).toFixed(2)
//         const income = amounts
//         .filter(item => item > 0)
//         .reduce(( acc, item ) => ( acc += item ), 0)
//         .toFixed(2)
//         const expense = (amounts.filter(item => item < 0).reduce(( acc, item ) => (acc += item), 0) * -1).toFixed(2);
//     return {
//         transactions,
//         total,
//         amounts,
//         income,
//         expense
//     }
    
//     }

// })

