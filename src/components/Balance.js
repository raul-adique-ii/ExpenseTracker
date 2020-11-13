import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

import { useRecoilValue } from 'recoil'
import { transactionState } from '../recoil/GlobalState'

const useStyles = makeStyles((theme) => ({
    balance: {
        color: '#1b5e20',
        marginBottom: 30,
        alignSelf: 'center'
    },
    container: {
        width: '60%',
        padding: '5px',
        marginBottom: '10px',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        color: '#2F0C49',
        alignSelf: 'center'
    }
}))

const Balance = () => {
    const classes = useStyles()
    const { total } = useRecoilValue(transactionState)

    return (
        <>
        <Paper className={classes.container} elevation={6}>
          <Typography className={classes.title} variant='h4'>Your Balance</Typography>
          <Typography className={classes.balance} variant='h3'>${total}</Typography>
        </Paper>
        </>
    )
}

export default Balance