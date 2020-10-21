import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#1b5e20',
        marginBottom: 30
    }
}))

const Balance = () => {
    const classes = useStyles()
    return (
        <>
          <Typography variant='h4'>Your Balance</Typography>
          <Typography className={classes.root} variant='h3'>1000</Typography>
        </>
    )
}

export default Balance