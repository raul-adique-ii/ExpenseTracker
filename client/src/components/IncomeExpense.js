import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

import { useRecoilValue } from 'recoil'
import { transactionState } from '../recoil/GlobalState'

const useStyles = makeStyles((theme) => ({
    container: {
        width: '50%',
        marginBottom: 30,
        alignSelf: 'center',
        padding: '10px'
    },
    root: {
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: 10
    },
    income: {
        color: '#1b5e20'
    },
    expense: {
        color: '#d50000'
    }
}))

const IncomeExpense = () => {
    const classes = useStyles()
    const { income, expense } = useRecoilValue(transactionState)

    return (
        <>
            <Paper className={classes.container} elevation={6}>
                <div className={classes.root}>
                    <div>
                        <Typography>Income</Typography>
                        <Typography variant='h5' className={classes.income}>{income}</Typography>
                </div>
                <Divider orientation='vertical' flexItem />
                <div>
                        <Typography>Expense</Typography>
                        <Typography className={classes.expense} variant='h5'>{expense}</Typography>
                    </div>
                </div>
            </Paper>
        </>
    )
}

export default IncomeExpense
