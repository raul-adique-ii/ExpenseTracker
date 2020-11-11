import { atom } from 'recoil'
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