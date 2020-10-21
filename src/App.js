import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles'

import Balance from '../src/components/Balance'
import Header from '../src/components/Header'
import IncomeExpense from '../src/components/IncomeExpense'
import TransactionList from '../src/components/TransactionList'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#e1bee7',
    height: '100vh'
  },
  // headComponent: {
  //   display: 'flex'
  // }
  
}))

function App() {
  const classes = useStyles()
  return (
   <Container className={classes.root} fixed>
     <div>
       <div>
        <Header />
       </div>
       <div>
        <Balance  />
        <IncomeExpense />
        <TransactionList />
       </div>
     </div>
   </Container>
  );
}

export default App;
