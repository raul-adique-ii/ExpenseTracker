import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    item: {
       justifyContent: 'space-evenly'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px'
    },
    delete: {
        color: '#d50000',
        fontWeight: 'bold'
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
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography className={classes.title} variant='h5'>History</Typography>
                <Divider />
            </div>
            <div className={classes.container}>
                <List className={classes.list}>
                    <ListItem className={classes.item}>
                       <Typography>Cash</Typography>
                       <Typography>500</Typography>
                       <Typography className={classes.delete}>X</Typography>
                    </ListItem>
                </List>
            </div>
        </>
    )
}

export default TransactionList
