import React from 'react';
import Button from '@material-ui/core/Button';
import SimpleCard from './components/card';
import './App.css';
import NavBar from "./components/header";
import {Container} from "@material-ui/core";


function App() {
  const months = ['month 1', 'month 2', 'month 3'];

  return (
    <div className='App'>

      <NavBar/>
      <>
        {/*{months.map(month => <SimpleCard> {month}</SimpleCard>)}*/}
        {months.map(month => <SimpleCard title={month}/>)}
      </>
      <Container>
        <Button href='' variant="contained" color="primary" className='submitButton' id='submitButton'>
          Submit
        </Button>
      </Container>
    </div>

  );
}

export default App;
