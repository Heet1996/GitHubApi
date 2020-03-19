import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Icon from '@material-ui/core/Icon';
import {StarBorderRounded,VisibilityRounded,Star,VisibilityOff} from '@material-ui/icons';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    fontSize:'2rem'
  },
  title: {
    fontSize:'4rem',
    marginBottom: 3
  },
  description:{
    fontSize:'2rem'
  },
  pos: {
    fontSize:'2rem',
    marginBottom: 12
  },
  count:{
    display:'inline-block',
    marginLeft:'0.5rem',
    marginRight:'1rem'
  },
  icon:{
   fontSize:'2rem'
  }
});

export default function OutlinedCard({repository,viewerHasStarred,viewerSubscription,starToogler,watchToggler,starCount,watchCount}) {
  const classes = useStyles();
  let StarComponent=viewerHasStarred ? Star  :StarBorderRounded
  let WatchComponent=viewerSubscription==='SUBSCRIBED' ? VisibilityOff  :VisibilityRounded
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} component="h2" gutterBottom>
          {repository.name}
        </Typography>
        <Typography component="p" color="textSecondary" className={classes.description}>
          {repository.description}
        </Typography>
        <Typography className={classes.pos} color="textSecondary" >
          Repo Link: <a target="_blank" rel="noopener noreferrer" href={repository.url}>{repository.url}</a>
        </Typography>
      </CardContent>
      <CardActions>
        
          <Icon component={StarComponent} onClick={starToogler} className={classes.icon}/>
          <span className={classes.count}>{starCount}</span>
        
        
        <Icon component={WatchComponent} onClick={watchToggler} className={classes.icon}/>
        <span className={classes.count}>{watchCount}</span>
        
        
      </CardActions>
    </Card>
  );
}