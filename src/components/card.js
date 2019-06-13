import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import Table from './table'
import Upload from "./upload";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px 10px 5px',
    padding: '0 5px 5px 0',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} variant="h1" component="h2">
          <h1>{props.title}</h1>
        </Typography>
        <Typography variant="body2" component="p">
          <Upload/>
        </Typography>
      </CardContent>
    </Card>
  );
}