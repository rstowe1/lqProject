import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './App.css';
import NavBar from "./components/header";
import Table from './components/table'


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
    <React.Fragment>
      <NavBar/>
      <h1>Month 1</h1>
      <Table/>
      <h1>Month 2</h1>
      <Table/>
      <h1>Month 3</h1>
      <Table/>

      <Button variant="contained" color="primary" className='classes.button'>
        Primary
      </Button>

    </React.Fragment>

  );
}

export default App;
