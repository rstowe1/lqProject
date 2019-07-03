import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


// STYLES
const useStyles = makeStyles({
  card: {
    borderRadius: '20px',
    paddingLeft: '5px',
    padding: '20px',
    marginLeft: '24px',
    marginRight: '24px',
    marginBottom: '15px'
  },
  bullet: {
    display: 'inline-block',
    margin: '2px 2px 10px 5px',
    padding: '2px 5px 5px 0',
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
        <Typography className={classes.title} variant="h1">
          <h1>{props.title}</h1>
        </Typography>
        <a href={props.href} className="far fa-file-excel" target='_blank' download>Download</a>
      </CardContent>
    </Card>
  );
}