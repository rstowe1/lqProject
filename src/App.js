import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './App.css';
import NavBar from "./components/header";
import Table from './components/table'
import {Container} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


function App() {
  return (
    <div className='App'>
      <Container className='monthOne'>
        <NavBar/>
        <h1>Month 1</h1>
        <Table/>
        <h1>Month 2</h1>
        <Table/>
        <h1>Month 3</h1>
        <Table/>
      </Container>

      <Container>
        <Button variant="contained" color="primary" className='submitButton' id='submitButton'>
          Submit
        </Button>
      </Container>
    </div>

  );
}

export default App;
