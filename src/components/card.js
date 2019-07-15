import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
// import "filepond/dist/filepond.min.css";
// import {makeStyles} from '@material-ui/core/styles';
// import Table from './table'
// import Upload from './upload';
// import {FilePond} from "react-filepond";


// STYLES
// const useStyles = makeStyles({
//   card: {
//     borderRadius: '20px',
//     paddingLeft: '5px',
//     padding: '20px',
//     marginLeft: '24px',
//     marginRight: '24px',
//     marginBottom: '10px'
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '2px 2px 10px 5px',
//     padding: '2px 5px 5px 0',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });
//
// export default function SimpleCard(props) {
//   const classes = useStyles();
//   return (
//     <Card className={classes.card}>
//       <CardContent>
//         <Typography className={classes.title} variant="h1">
//           <h1>{props.title}</h1>
//         </Typography>
//         <Typography variant="body2" component="p">
//           <h5>Monthly Payments</h5>
//         </Typography>
//         <FilePond server='http://localhost:8000/upload'
//                   process='post'/>
//         {/*<Table/>*/}
//       </CardContent>
//     </Card>
//   );
// }


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
    console.log(data);
    data.append('file', this.state.selectedFile);
    axios.post(`http://localhost:8000/upload`, data, {
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