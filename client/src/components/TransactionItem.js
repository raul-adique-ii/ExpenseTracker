import React from 'react'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import { useDispatch } from 'react-redux'
import { handleDelete } from '../store/transactions';

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
    const dispatch = useDispatch()
    const { _id, text, amount } = transaction
    
    const sign = transaction.amount < 0 ? '-' : '+'
    
    return (
        <>
        
        <ListItem className={amount < 0 ? classes.expense : classes.income}>
            <Typography>{text}</Typography>
            <Typography variant='h6'>{sign}₱{Math.abs(amount)}</Typography>
            <Button className={classes.delete} onClick={() => dispatch(handleDelete(_id))}>X</Button>
        </ListItem>
        <Divider />
        </>
    )
}

export default TransactionItem
