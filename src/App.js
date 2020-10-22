import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles'

import Balance from '../src/components/Balance'
import Header from '../src/components/Header'
import IncomeExpense from '../src/components/IncomeExpense'
import TransactionForm from '../src/components/TransactionForm'
import TransactionList from '../src/components/TransactionList'

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: '#4527a0',
    width: '40%'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  form: {
    width: '40%',
    backgroundColor: '#9c27b0',
    borderRadius: '10px'
  },
  root: {
    backgroundColor: '#212121',
    height: '100vh',
    
  },

  // headComponent: {
  //   display: 'flex'
  // }
  
}))

function App() {
  const classes = useStyles()
  return (
   <Container className={classes.root} fixed>
     <div >
       <div>
        <Header />
       </div>
       <div className={classes.content}>

       <div className={classes.background}>
        <Balance  />
        <IncomeExpense />
        <TransactionList />
       </div>
       <div className={classes.form}>
        <TransactionForm />
       </div>
       </div>
     </div>
   </Container>
  );
}

export default App;
