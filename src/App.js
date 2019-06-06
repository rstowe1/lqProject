import React from 'react';
// import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SimpleCard from './components/card';
import './App.css';
import NavBar from "./components/header";
import Table from './components/table'
import {Container} from "@material-ui/core";


function App() {
  return (
    <div className='App'>
      <Container className='monthOne'>
        <NavBar/>
        <h1>Month 1</h1>
        <SimpleCard/>
        <h1>Month 2</h1>
        <SimpleCard/>
        <h1>Month 3</h1>
        <SimpleCard/>
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
