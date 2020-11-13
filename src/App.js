import React from 'react';
import {
  RecoilRoot
} from 'recoil';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';

import Balance from '../src/components/Balance'
import Header from '../src/components/Header'
import IncomeExpense from '../src/components/IncomeExpense'
import TransactionForm from '../src/components/TransactionForm'
import TransactionList from '../src/components/TransactionList'

const useStyles = makeStyles((theme) => ({
  transaction: {
    backgroundColor: '#BC4899',
    width: '40%',
    // height: '100vh',
    // border: '2px solid blue',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundColor: '#DBADEC',
    // border: '5px solid red',
    padding: '30px'
  },
  form: {
    width: '40%',
    backgroundColor: '#E779B8',
    padding: '20px',
    // border: '2px solid yellow'
  },
  root: {
    backgroundColor: '#2F0C49',
    borderRadius: '8px',
    paddingTop: '0px',
    height: '100%vh'
  },
  title:{
    display: 'flex',
    justifyContent: 'center'
  }
  // headComponent: {
  //   display: 'flex'
  // }
  
}))

function App() {
  const classes = useStyles()
  return (
    <RecoilRoot>
    <Container className={classes.root} maxWidth={false}>
       <div className={classes.title}>
        <Header title={`My Expense Tracker`} />
       </div>
       <div className={classes.content}>

       <Paper className={classes.transaction} elevation={6}>
        <Balance />
        <IncomeExpense />
        <TransactionList />
       </Paper>
       <Paper className={classes.form} elevation={6}>
        <TransactionForm />
       </Paper>
       </div>
     
   </Container>
   </RecoilRoot>
  );
}

export default App;
