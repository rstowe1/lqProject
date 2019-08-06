import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';


// TUTORIAL
// https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/


class SimpleCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    }

  }

  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  };

  onClickHandler = () => {
    const data = new FormData();
    const URL = "https://ryan-test.com/upload";
    // const HOST = "192.168.0.125";
    // const PORT = '8000';


    data.append('file', this.state.selectedFile);
    axios.post(URL, data, {
       // receive two    parameter endpoint url ,form data
   }).then(res => { // then print response status
    console.log(res.statusText)
 })
};

  render() {
    return (
      <Card>
        <CardContent>
          {/*<Typography variant="h1">*/}
          {/*  <h1>{props.title}</h1>*/}
          {/*</Typography>*/}
          <Typography variant="body2" component="p">
            <h5>Monthly Payments</h5>
          </Typography>
          <div className="form-group files">
            {/*<label>Upload</label>*/}
            <input type="file" name="file" onChange={this.onChangeHandler}/>
            <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default SimpleCard;