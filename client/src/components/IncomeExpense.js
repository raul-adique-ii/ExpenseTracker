import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

import { useSelector } from 'react-redux'


const useStyles = makeStyles((theme) => ({
    container: {
        // width: '50%',
        marginBottom: 30,
        alignSelf: 'center',
        padding: '10px'
    },
    content: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    incomeContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    income: {
        color: '#1b5e20',
        padding: '5px'
    },
    expense: {
        color: '#d50000',
        padding: '5px'
    },
    expenseContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}))

const IncomeExpense = () => {
    const classes = useStyles()
    const transactions = useSelector(state => state.transactions.list)
    const amounts = transactions.map(transaction => transaction.amount)
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)
    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2)
    return (
        <>
            <Paper className={classes.container} elevation={6}>
                <div className={classes.content}>
                    <div className={classes.incomeContainer}>
                        <Typography>Income</Typography>
                        <Typography variant='h5' className={classes.income}>₱{income}</Typography>
                </div>
                <Divider orientation='vertical' flexItem />
                <div className={classes.expenseContainer}>
                        <Typography>Expense</Typography>
                        <Typography className={classes.expense} variant='h5'>₱{expense}</Typography>
                    </div>
                </div>
            </Paper>
        </>
    )
}

export default IncomeExpense
