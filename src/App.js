import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import SimpleCard from './components/card';
import './App.css';
import NavBar from "./components/header";
import {Container} from "@material-ui/core";
import {Row, Col} from 'react-flexbox-grid';
import ResultsCard from "./components/results";


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
            <SimpleCard title='First Reconciled Month' server={`https://54.161.134.14/`}/>
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
              {this.state.showComponent && <h1>Reconciliation Results</h1>}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            {this.state.showComponent && (<ResultsCard title='first month results' href="../../files/lq_month_1.csv"/>)}
          </Col>
          <Col xs={4}>
            {this.state.showComponent && (
              <ResultsCard title='second month results' href="../../files/lq_month_1.csv"/>)}
          </Col>
          <Col xs={4}>
            {this.state.showComponent && (<ResultsCard title='third month results' href="../../files/lq_month_1.csv"/>)}
          </Col>
        </Row>

      </div>

    );
  }
}

export default App;
