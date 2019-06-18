import React from 'react';
import Button from '@material-ui/core/Button';
import SimpleCard from './components/card';
import './App.css';
import NavBar from "./components/header";
import {Container} from "@material-ui/core";
import {Grid, Row, Col} from 'react-flexbox-grid';

// import Table from './components/table'


function App() {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December", "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const d = new Date();


  return (
    <div className='root'>

      <NavBar/>
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <h1>Client Data</h1>
          </Row>
        </Col>
      </Row>
      <Row>
        {/*{months.map(month => <SimpleCard title={month}/>)}*/}
        <Col xs={4}>
          <SimpleCard title={monthNames[d.getMonth() - 1]}/>
        </Col>
        <Col xs={4}>
          <SimpleCard title={monthNames[d.getMonth() - 3]}/>
        </Col>
        <Col xs={4}>
          <SimpleCard title={monthNames[d.getMonth() - 5]}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <h1>LeaseQuery Data</h1>
          </Row>
        </Col>
      </Row>
      <Row>
        {/*{months.map(month => <SimpleCard title={month}/>)}*/}
        <Col xs={4}>
          <SimpleCard title={monthNames[d.getMonth() - 1]}/>
        </Col>
        <Col xs={4}>
          <SimpleCard title={monthNames[d.getMonth() - 3]}/>
        </Col>
        <Col xs={4}>
          <SimpleCard title={monthNames[d.getMonth() - 5]}/>
        </Col>
      </Row>
      <Container>

      </Container>

      <Row>
        <Col xs={12}>
          <Row center="xs">
            <Button href='' type='button' variant="contained" color="primary"
                    className='submitButton' id='submitButton'>
              Submit
            </Button>
          </Row>
        </Col>
      </Row>
    </div>

  );
}

export default App;
