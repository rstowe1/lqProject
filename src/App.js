import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import SimpleCard from './components/card';
import './App.css';
import NavBar from "./components/header";
import {Container} from "@material-ui/core";
import {Row, Col} from 'react-flexbox-grid';
import ResultsCard from "./components/results";

import populateDb1 from './upload';
import populateDb2 from './upload2';
import populateDb3 from './upload3';
import populateLqDb1 from './upload_LQ1';
import populateLqDb2 from './upload_LQ2';
import populateLqDb3 from './upload_LQ3';

// import Table from './components/table'


class App extends Component {

  constructor() {
    super();
    this.state = {showComponent: false}
  }

  _showComponent = (bool) => {
    this.setState({
      showComponent: bool
    });
  };


  render() {


    return (
      <div className='root'>
        <NavBar/>
        <Container>
          <Row>
            <Col xs={12}>
              <Row center="xs">
                <Button href='' onClick={this._showComponent.bind(null, true)} type='button' variant="contained"
                        color="primary"
                        className='submitButton' id='submitButton'>
                  Submit
                </Button>
              </Row>
            </Col>
          </Row>

          <Row center="xs">
            <Col xs={2}>
              <Button href='' onClick={() => console.log('working')} type='button' variant="contained"
                      color="primary"
                      className='runOne'
                      id='process'>
                Step 1
              </Button>
            </Col>
            <Col xs={2}>
              <Button href='' onClick={() => populateDb2} type='button' variant="contained"
                      color="primary"
                      className='runTow' id='process'>
                Step 2
              </Button>
            </Col>
            <Col xs={2}>
              <Button href='' onClick={() => populateDb3} type='button' variant="contained"
                      color="primary"
                      className='runThree' id='process'>
                Step 3
              </Button>
            </Col>
            <Col xs={2}>
              <Button href='' onClick={() => populateLqDb1} type='button' variant="contained"
                      color="primary"
                      className='runFour' id='process'>
                Step 4
              </Button>
            </Col>
            <Col xs={2}>
              <Button href='' onClick={() => populateLqDb2} type='button' variant="contained"
                      color="primary"
                      className='runFive' id='process'>
                Step 5
              </Button>
            </Col>
            <Col xs={2}>
              <Button href='' onClick={() => populateLqDb3} type='button' variant="contained"
                      color="primary"
                      className='runSix' id='process'>
                Step 6
              </Button>
            </Col>
          </Row>
        </Container>

        {/*CLIENT DATA*/}
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <h1>Client Data</h1>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <SimpleCard title='First Reconciled Month'/>
          </Col>
          <Col xs={4}>
            <SimpleCard title='Second Reconciled Month'/>
          </Col>
          <Col xs={4}>
            <SimpleCard title='Third Reconciled Month'/>
          </Col>
        </Row>

        {/*LEASEQUERY DATA*/}
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
            <SimpleCard title='First Reconciled Month'/>
          </Col>
          <Col xs={4}>
            <SimpleCard title='Second Reconciled Month'/>
          </Col>
          <Col xs={4}>
            <SimpleCard title='Third Reconciled Month'/>
          </Col>
        </Row>


        {/*RESULTS */}





        <Row>
          <Col xs={12}>
            <Row center="xs">
              {this.state.showComponent &&
              <h1>Reconciliation Results</h1>}
            </Row>
          </Col>
        </Row>

        <Row>
          <Col xs={4}>
            {this.state.showComponent &&
            (<ResultsCard title='first month results' href="../../files/scripts/query_results/month1.csv"/>)}
          </Col>
          <Col xs={4}>
            {this.state.showComponent &&
            (<ResultsCard title='second month results' href="../../files/scripts/query_results/month2.csv"/>)}
          </Col>
          <Col xs={4}>
            {this.state.showComponent &&
            (<ResultsCard title='third month results' href="../../files/scripts/query_results/month3.csv"/>)}
          </Col>
        </Row>

      </div>

    );
  }
}

export default App;
