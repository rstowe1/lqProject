import React from 'react';
// import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SimpleCard from './components/card';
import './App.css';
import NavBar from "./components/header";
import Table from './components/table'
import {Container} from "@material-ui/core";


function App() {
  const months = ['month 1','month 2', 'month 3'];
  return (
    <div className='App'>

        <NavBar/>
      <>
        {months.map(month => <SimpleCard > {month} </SimpleCard>)}
      </>
      
      <Container>
        <Button variant="contained" color="primary" className='submitButton' id='submitButton'>
          Submit
        </Button>
      </Container>
    </div>

  );
}

export default App;
