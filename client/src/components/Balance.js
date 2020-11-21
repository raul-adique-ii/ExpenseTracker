import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

import { useSelector } from 'react-redux'


const useStyles = makeStyles((theme) => ({
    balance: {
        color: '#1b5e20',
        // marginBottom: 30,
        alignSelf: 'center'
    },
    container: {
        padding: '10px',
        // paddingBottom: '5px',
        marginBottom: '20px',
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    title: {
        color: '#2F0C49',
        alignSelf: 'center'
    }
}))

const Balance = () => {
    const classes = useStyles()
    const transactions = useSelector(state => state.transactions.list)
    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <>
        <Paper className={classes.container} elevation={6}>
          <Typography className={classes.title} variant='h6'>Your Balance</Typography>
          <Typography className={classes.balance} variant='h4'>{total}</Typography>
        </Paper>
        </>
    )
}

export default Balance