import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

// import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { useRecoilValue } from 'recoil'
import { initialState } from '../recoil/GlobalState'

import TransactionItem from './TransactionItem'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px'
    },
    headerContainer: {
        display: 'flex', 
        flexDirection: 'column'
    },
    list: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        alignSelf: 'center', 
        color: '#fff',
    },
}))

const TransactionList = () => {
    const classes = useStyles()
    const transactions = useRecoilValue(initialState)

    return (
        <>
            <div className={classes.headerContainer}>
                <Typography className={classes.title} variant='h5'>History</Typography>
                <Divider />
            </div>
            <Paper className={classes.container} elevation={6}>
                <List className={classes.list}>
                    {transactions.map((transaction) => (<TransactionItem key={transaction.id} transaction={transaction}/>))}
                </List>
            </Paper>
        </>
    )
}

export default TransactionList
