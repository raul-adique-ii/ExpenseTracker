import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '50%',
        marginBottom: 30
    },
    root: {
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: 10
    },
    income: {
        color: '#1b5e20'
    }
}))

const IncomeExpense = () => {
    const classes = useStyles()
    return (
        <>
            <Paper className={classes.container} elevation={3}>
                <div className={classes.root}>
                    <div>
                        <Typography>Income</Typography>
                        <Typography variant='h5' className={classes.income}>500</Typography>
                </div>
                <div>
                        <Typography>Expense</Typography>
                        <Typography variant='h5'>300</Typography>
                    </div>
                </div>
            </Paper>
        </>
    )
}

export default IncomeExpense
