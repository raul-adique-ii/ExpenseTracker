import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

// import ListItemText from '@material-ui/core/ListItemText';
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
    list: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        alignSelf: 'center', 
        color: '#2F0C49',
    },
}))

const TransactionList = () => {
    const classes = useStyles()
    const { transactions } = useRecoilValue(initialState)
    console.log(transactions)
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography className={classes.title} variant='h5'>History</Typography>
                <Divider />
            </div>
            <div className={classes.container}>
                <List className={classes.list}>
                    {transactions.map((transaction) => (<TransactionItem key={transaction.id} transaction={transaction}/>))}
                </List>
            </div>
        </>
    )
}

export default TransactionList
