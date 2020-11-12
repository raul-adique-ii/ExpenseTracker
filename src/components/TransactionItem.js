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
    const sign = transaction.amount < 0 ? '-' : '+'


    return (
        <>
        
        <ListItem className={transaction.amount < 0 ? classes.expense : classes.income}>
            <Typography>{transaction.text}</Typography>
            <Typography>{sign}${Math.abs(transaction.amount)}</Typography>
            <Button className={classes.delete}>X</Button>
        </ListItem>
        <Divider />
        </>
    )
}



export default TransactionItem
