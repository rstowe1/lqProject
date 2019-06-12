import React from 'react';
import Button from '@material-ui/core/Button';
import SimpleCard from './components/card';
import './App.css';
import NavBar from "./components/header";
import {Container} from "@material-ui/core";


function App() {
  const months = ['Month 1', 'Month 2', 'Month 3'];

  // TODO add on click event
  // handleClick = (event) => {
  //
  // }

  return (
    <div className='root'>

      <NavBar/>
      <>
        {months.map(month => <SimpleCard title={month}/>)}
      </>
      <Container>
        <Button href='' type='button' variant="contained" color="primary"
                className='submitButton' id='submitButton'>
          Submit
        </Button>
      </Container>
    </div>

  );
}

export default App;
