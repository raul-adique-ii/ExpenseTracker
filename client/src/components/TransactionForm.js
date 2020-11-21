import React, { useState } from 'react'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { purple } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'

import { useDispatch } from 'react-redux'
import { addItem } from '../store/transactions'


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(2),
    },
    formContainer: {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
    },
    headerContainer: {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        color: '#fff',
        alignSelf: 'center'
    },
 
}))
const theme = createMuiTheme({
    palette: {
      primary: purple,
    },
  });
const TransactionForm = () => {
    const classes = useStyles()
    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')
    const dispatch = useDispatch()

    const onAdd = () => {
        dispatch(addItem({
            text,
            amount: +amount
        }))
        setText('')
        setAmount('')
    }

    return (
        <>
            <div className={classes.headerContainer}>
                <Typography className={classes.title} variant='h4'>Add New Transaction</Typography>
                <Divider />
            </div>
            <div>
                
                <Paper className={classes.formContainer} elevation={6}>
                    <TextField label='Enter Transaction' fullWidth value={text} onChange={(e) => setText(e.target.value)} />
                    <TextField label='Enter Amount' fullWidth value={amount} onChange={(e) => setAmount(e.target.value)}  />
                    <Typography variant='h6'>(- for expense, + for income)</Typography>
                    <ThemeProvider theme={theme}>
                        <Button className={classes.button} onClick={onAdd} variant='contained' color='primary'>
                            Add Transaction
                        </Button>
                    </ThemeProvider>
                </Paper>
               
            </div>
        </>
    )
}

export default TransactionForm
