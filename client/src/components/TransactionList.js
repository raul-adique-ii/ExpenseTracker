import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import Spinner from './Spinner'
import TransactionItem from './TransactionItem'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { loadTransactions } from '../store/transactions'

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
    const transactions = useSelector(state => state.transactions.list)
    const isLoading = useSelector(state => state.transactions.loading)
    const dispatch = useDispatch()
    console.log(transactions)

    useEffect(() => {
        dispatch(loadTransactions())
    }, [])
  
    return (
        <>
            {isLoading ? <Spinner /> : <>
            <div className={classes.headerContainer}>
                <Typography className={classes.title} variant='h5'>History</Typography>
                    <Divider />
                </div>
            <Paper className={classes.container} elevation={6}>
                <List className={classes.list}>
                    {transactions.map((transaction) => (<TransactionItem key={transaction._id} transaction={transaction} 
                />))}
                </List>
            </Paper> 
            </> }
        </>
    )
}

export default TransactionList
