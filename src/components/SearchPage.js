/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

function SearchPage(props) {
  const classes = useStyles();

  const handleClose = () => {
    props.onBoolChange(!props.bool);
    props.onClearInput('');
  };

  console.log(props.eventList);
  return (
    <React.Fragment className=".OverTop">
      <CssBaseline />
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          Search result
          <IconButton onClick={handleClose} className="searchClose">
            <CloseIcon />
          </IconButton>
        </Typography>
        <List className={classes.list}>
          {props.eventList.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={item.images[0].url} />
                </ListItemAvatar>
                <ListItemText primary={item.name} secondary={item._embedded.venues[0].name.substring(0, 25)} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </React.Fragment>
  );
}

export default SearchPage;
