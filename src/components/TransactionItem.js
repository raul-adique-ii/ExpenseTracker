import React from 'react'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import { useRecoilState } from 'recoil'
import { initialState } from '../recoil/GlobalState';

const useStyles = makeStyles((theme) => ({
    expense: {
        color: 'red',
        justifyContent: 'space-between',
    },
    income: {
        color: 'green',
        justifyContent: 'space-between',
    },
    delete: {
        color: '#d50000',
        fontWeight: 'bold'
    },
}))

const TransactionItem = ({ transaction }) => {
    const classes = useStyles()
    const [transactionList, setTransactionList] = useRecoilState(initialState)
    const index = transactionList.findIndex((item) => item === transaction)
    const sign = transaction.amount < 0 ? '-' : '+'

    const removeItem = () => {
        const newList = removeItemAtIndex(transactionList, index)

        setTransactionList(newList)
    }

    return (
        <>
        
        <ListItem className={transaction.amount < 0 ? classes.expense : classes.income}>
            <Typography>{transaction.text}</Typography>
            <Typography>{sign}${Math.abs(transaction.amount)}</Typography>
            <Button className={classes.delete} onClick={removeItem}>X</Button>
        </ListItem>
        <Divider />
        </>
    )
}

function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }


export default TransactionItem
