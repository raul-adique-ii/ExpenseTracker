import { createSlice, createAction } from '@reduxjs/toolkit'
import { apiCallBegan } from './api'


const slice = createSlice({
    name: 'transactions',
    initialState: {
        list: [],
        error: null,
        loading: false
    },
    reducers: {
        transactionRequested: (transactions, action) => {
            transactions.loading = true;
          },

        transactionRequestFailed: (transactions, action) => {
            transactions.loading = false;
          },

        transactionsReceived: (transactions, action) => {
            transactions.list = action.payload;
            transactions.loading = false;
          }, 

        addTransaction: (transactions, action) => {
            transactions.list.push(action.payload)
        },
        deleteTransaction: (transactions, action) => {  
            transactions.list = transactions.list.filter(transaction => transaction._id !== action.payload.data)
        },
    }
})

export const { 
    addTransaction, 
    deleteTransaction, 
    transactionRequested, 
    transactionRequestFailed,
    transactionsReceived
} = slice.actions


export default slice.reducer

// ACTION CREATORS

const url = '/api/v1/transactions'

export const loadTransactions = () => 
    apiCallBegan({
        url,
        onSuccess: transactionsReceived.type,
        onStart: transactionRequested.type,
        onError: transactionRequestFailed.type
    })

export const addItem = transaction => apiCallBegan({
    url,
    method: 'post',
    data: transaction,
    onSuccess: addTransaction.type
})

export const handleDelete = id => apiCallBegan({
    url: `${url}/${id}`,
    method: 'delete',
    data: id,
    onSuccess: deleteTransaction.type,
})

// export const handleDelete = createAction(deleteTransaction.type)
