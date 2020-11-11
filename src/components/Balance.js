import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    balance: {
        color: '#1b5e20',
        marginBottom: 30,
        alignSelf: 'center'
    },
    title: {
        color: '#fff',
        alignSelf: 'center'
    }
}))

const Balance = () => {
    const classes = useStyles()
    return (
        <>
          <Typography className={classes.title} variant='h4'>Your Balance</Typography>
          <Typography className={classes.balance} variant='h3'>1000</Typography>
        </>
    )
}

export default Balance